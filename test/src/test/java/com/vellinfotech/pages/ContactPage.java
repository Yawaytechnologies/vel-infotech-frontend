package com.vellinfotech.pages;

import com.vellinfotech.Utils.TestUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

/**
 * ╔══════════════════════════════════════════════════════════════╗
 *   ContactPage.java
 *   PACKAGE : com.vellinfotech.pages
 *   PURPOSE : Page Object — ALL locators and page actions
 *             for https://www.vellinfotech.com/contact-us
 *
 *   KEY FIX (v2):
 *   ─────────────────────────────────────────────────────────────
 *   The site has a FIXED sticky nav bar at top: z-[99999] fixed top-[83px]
 *   This bar intercepts all standard .click() calls on form fields.
 *
 *   SOLUTION: typeIntoField() — uses JS to:
 *     1. scrollIntoView() the element
 *     2. Scroll up by STICKY_HEADER_OFFSET (140px) to clear the bar
 *     3. Focus the element via JS (no .click())
 *     4. Clear and sendKeys() safely
 *
 *   All fill methods and set*Value methods now use typeIntoField().
 *   clickSubmit() uses scrollWithOffset() before clicking.
 *   scrollToForm() also applies the offset.
 * ╚══════════════════════════════════════════════════════════════╝
 */
public class ContactPage {

    private WebDriver       driver;
    private WebDriverWait   wait;
    private TestUtils       utils;
    private JavascriptExecutor js;

    // ── CONFIRMED from console output ──
    // Site has a secondary sticky bar at top-[83px] with z-[99999]
    // This offset clears both the primary nav and secondary bar
    private static final int STICKY_HEADER_OFFSET = 150;

    public ContactPage(WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait   = wait;
        this.utils  = new TestUtils(driver, wait);
        this.js     = (JavascriptExecutor) driver;
    }

    // ════════════════════════════════════════════════════════════
    //  LOCATORS — confirmed from TC-10 console output
    //  INPUT type='text'  name='name'    placeholder='John Doe'
    //  INPUT type='email' name='email'   placeholder='you@example.com'
    //  INPUT type='tel'   name='phone'   placeholder='10-digit mobile number'
    //  INPUT type='text'  name='course'  placeholder='Java, Python, Testing...'
    //  TEXTAREA           name='message' placeholder='Tell us how we can help...'
    // ════════════════════════════════════════════════════════════

    // Page structure
    private By navBar        = By.cssSelector("nav, header nav, .navbar, .nav, header");
    private By footerEl      = By.cssSelector("footer, .footer, #footer, [class*='footer']");
    private By bannerSection = By.cssSelector(
        ".banner, .hero, .page-banner, .inner-banner, " +
        "[class*='banner'], [class*='hero'], section:first-of-type"
    );

    // Form fields — confirmed names from TC-10 output
    private By nameField    = By.cssSelector("input[name='name'], input[placeholder='John Doe']");
    private By emailField   = By.cssSelector("input[name='email'], input[type='email']");
    private By phoneField   = By.cssSelector("input[name='phone'], input[type='tel']");
    // Site has 'course' field instead of 'subject'
    private By subjectField = By.cssSelector(
        "input[name='course'], input[name='subject'], " +
        "input[placeholder*='Java' i], input[placeholder*='course' i], " +
        "input[placeholder*='subject' i]"
    );
    private By messageField = By.cssSelector("textarea[name='message'], textarea");

    // Validation / success
    private By errorMessages  = By.cssSelector(
        ".error, .error-message, .invalid-feedback, [class*='error'], " +
        "[aria-invalid='true'] + span, p.text-red, span.text-red, " +
        "[class*='invalid'], .alert-danger, .help-block"
    );
    private By successMessage = By.cssSelector(
        ".success, .alert-success, [class*='success'], " +
        ".thank-you, [class*='thank'], .confirmation"
    );

    // Contact info
    private By addressEl     = By.cssSelector(
        "address, [class*='address'], [class*='location'], " +
        "p:contains('Chennai'), .contact-info, [class*='contact-info']"
    );
    private By mapIframe     = By.cssSelector(
        "iframe[src*='google.com/maps'], iframe[src*='maps.google'], iframe[title*='map' i]"
    );
    private By socialLinks   = By.cssSelector(
        "a[href*='facebook'], a[href*='twitter'], a[href*='linkedin'], " +
        "a[href*='instagram'], a[href*='youtube'], a[href*='x.com'], " +
        "[class*='social'] a, [class*='social-link']"
    );

    // All page elements
    private By allImages = By.tagName("img");
    private By allLinks  = By.tagName("a");

    // ════════════════════════════════════════════════════════════
    //  CORE FIX: STICKY-HEADER-AWARE FIELD INTERACTION
    // ════════════════════════════════════════════════════════════

    /**
     * THE KEY FIX.
     *
     * Standard click() fails because the site's sticky nav bar (z-99999,
     * fixed top-83px) intercepts the click before it reaches the field.
     *
     * This method:
     *   1. Scrolls element into view using JS scrollIntoView
     *   2. Scrolls UP by STICKY_HEADER_OFFSET to move element below sticky bar
     *   3. Uses JS focus() — no .click() call at all
     *   4. Clears via JS and types via sendKeys()
     */
    private void typeIntoField(WebElement el, String value) {
        // Step 1: Scroll element into view
        js.executeScript("arguments[0].scrollIntoView(true);", el);
        utils.sleep(200);

        // Step 2: Scroll back UP to clear sticky header
        js.executeScript(
            "window.scrollBy(0, -" + STICKY_HEADER_OFFSET + ");", el
        );
        utils.sleep(200);

        // Step 3: Focus without clicking — avoids interception entirely
        js.executeScript("arguments[0].focus();", el);
        utils.sleep(150);

        // Step 4: Clear field and type value
        el.clear();
        utils.sleep(100);
        el.sendKeys(value);
        utils.sleep(100);

        utils.log("  Typed into [" + getFieldName(el) + "]: '" +
            (value.length() > 40 ? value.substring(0, 40) + "..." : value) + "'");
    }

    /**
     * Overwrite field value using JS setValue — for setEmailValue, setPhoneValue etc.
     * Used when we want to change a single field without clearing others.
     */
    private void setFieldValue(WebElement el, String value) {
        js.executeScript("arguments[0].scrollIntoView(true);", el);
        utils.sleep(150);
        js.executeScript("window.scrollBy(0, -" + STICKY_HEADER_OFFSET + ");");
        utils.sleep(150);
        js.executeScript("arguments[0].focus();", el);
        utils.sleep(100);
        // Use JS to set value directly — most reliable for overwrite
        js.executeScript("arguments[0].value = '';", el);
        el.clear();
        el.sendKeys(value);
        utils.sleep(100);
    }

    /**
     * Scroll the submit button into view with sticky header offset,
     * then click using JS to avoid interception.
     */
    private void scrollAndClickElement(WebElement el) {
        js.executeScript("arguments[0].scrollIntoView(true);", el);
        utils.sleep(200);
        js.executeScript("window.scrollBy(0, -" + STICKY_HEADER_OFFSET + ");");
        utils.sleep(300);
        js.executeScript("arguments[0].click();", el);
        utils.sleep(200);
    }

    private String getFieldName(WebElement el) {
        String name = el.getAttribute("name");
        if (name != null && !name.isEmpty()) return name;
        String placeholder = el.getAttribute("placeholder");
        if (placeholder != null && !placeholder.isEmpty()) return placeholder;
        return el.getTagName();
    }

    // ════════════════════════════════════════════════════════════
    //  NAVIGATION
    // ════════════════════════════════════════════════════════════

    public void clickContactNavLink() {
        String[] keywords = { "contact", "contact us", "get in touch", "reach", "enquiry" };
        List<WebElement> links = driver.findElements(
            By.cssSelector("nav a, header a, .navbar a, header ul li a, .menu a, .nav-link")
        );
        for (WebElement link : links) {
            String text = link.getText().trim().toLowerCase();
            for (String kw : keywords) {
                if (text.contains(kw)) {
                    utils.log("Clicking nav: \"" + link.getText().trim() + "\"");
                    utils.safeClick(link);
                    utils.waitForPageLoad();
                    utils.sleep(1200);
                    return;
                }
            }
        }
        for (WebElement link : links) {
            String href = utils.safeAttr(link, "href").toLowerCase();
            if (href.contains("contact") || href.contains("reach") || href.contains("enquiry")) {
                utils.safeClick(link);
                utils.waitForPageLoad();
                utils.sleep(1200);
                return;
            }
        }
        throw new NoSuchElementException(
            "Contact link NOT found in navigation.\n" +
            "Searched: contact / contact us / get in touch / reach / enquiry"
        );
    }

    public List<String> getAllNavLinkTexts() {
        List<WebElement> links = driver.findElements(
            By.cssSelector("nav a, header a, .navbar a, header ul li a")
        );
        List<String> texts = new ArrayList<>();
        for (WebElement l : links) {
            String t = l.getText().trim();
            if (!t.isEmpty())
                texts.add("\"" + t + "\"  →  " + utils.safeAttr(l, "href"));
        }
        return texts;
    }

    // ════════════════════════════════════════════════════════════
    //  PAGE INFO
    // ════════════════════════════════════════════════════════════

    public String getPageTitle()      { return driver.getTitle().trim(); }
    public String getCurrentURL()     { return driver.getCurrentUrl(); }
    public int    getPageBodyLength() {
        return driver.findElement(By.tagName("body")).getText().trim().length();
    }
    public String getBodyText() {
        return driver.findElement(By.tagName("body")).getText().toLowerCase();
    }

    /** Delegates to TestUtils — fixes TC-34 "0px" issue */
    public long getPageHeight()    { return utils.getPageHeight(); }

    /** Delegates to TestUtils — fixes TC-34 "0px" issue */
    public long getScrollPosition() { return utils.getScrollPosition(); }

    public List<String> getAllHeadings() {
        List<String> list = new ArrayList<>();
        for (String tag : new String[]{"h1","h2","h3"}) {
            for (WebElement h : driver.findElements(By.tagName(tag))) {
                String t = h.getText().trim();
                if (!t.isEmpty()) list.add(tag.toUpperCase() + ": " + t);
            }
        }
        return list;
    }

    public boolean isBannerVisible() {
        utils.scrollToTop();
        List<WebElement> els = driver.findElements(bannerSection);
        return !els.isEmpty() && els.get(0).isDisplayed();
    }

    public boolean isNavBarVisible() {
        List<WebElement> els = driver.findElements(navBar);
        return !els.isEmpty() && els.get(0).isDisplayed();
    }

    public boolean isFooterVisible() {
        utils.scrollToBottom();
        List<WebElement> els = driver.findElements(footerEl);
        return !els.isEmpty() && !els.get(0).getText().trim().isEmpty();
    }

    public String getFooterText() {
        List<WebElement> els = driver.findElements(footerEl);
        return els.isEmpty() ? "" : els.get(0).getText().trim();
    }

    public boolean isValidPage() {
        String body  = getBodyText();
        String title = getPageTitle().toLowerCase();
        return !body.contains("404") && !body.contains("page not found")
            && !title.contains("404") && getPageBodyLength() > 100;
    }

    // ════════════════════════════════════════════════════════════
    //  FORM DETECTION
    // ════════════════════════════════════════════════════════════

    public boolean hasContactForm() {
        List<WebElement> forms  = driver.findElements(By.tagName("form"));
        List<WebElement> inputs = driver.findElements(By.tagName("input"));
        return !forms.isEmpty() || inputs.size() >= 2;
    }

    public int countForms() {
        return driver.findElements(By.tagName("form")).size();
    }

    public void printAllFormFields() {
        utils.log("── All Fields on Contact Page ──");
        List<WebElement> inputs    = driver.findElements(By.tagName("input"));
        List<WebElement> textAreas = driver.findElements(By.tagName("textarea"));
        List<WebElement> selects   = driver.findElements(By.tagName("select"));
        for (WebElement inp : inputs) {
            utils.log("  INPUT    type='"        + utils.safeAttr(inp,"type")
                    + "'  name='"        + utils.safeAttr(inp,"name")
                    + "'  id='"          + utils.safeAttr(inp,"id")
                    + "'  placeholder='" + utils.safeAttr(inp,"placeholder")
                    + "'  required='"    + utils.safeAttr(inp,"required") + "'");
        }
        for (WebElement ta : textAreas) {
            utils.log("  TEXTAREA  name='"        + utils.safeAttr(ta,"name")
                    + "'  placeholder='" + utils.safeAttr(ta,"placeholder")
                    + "'  required='"    + utils.safeAttr(ta,"required") + "'");
        }
        for (WebElement sel : selects) {
            utils.log("  SELECT   name='" + utils.safeAttr(sel,"name") + "'");
        }
        utils.log("  Totals — inputs: " + inputs.size()
                + " | textareas: " + textAreas.size()
                + " | selects: "   + selects.size());
    }

    // ════════════════════════════════════════════════════════════
    //  SCROLL TO FORM — sticky-header aware
    // ════════════════════════════════════════════════════════════

    public void scrollToForm() {
        List<WebElement> forms = driver.findElements(By.tagName("form"));
        if (!forms.isEmpty()) {
            js.executeScript("arguments[0].scrollIntoView(true);", forms.get(0));
            utils.sleep(200);
            js.executeScript("window.scrollBy(0, -" + STICKY_HEADER_OFFSET + ");");
        } else {
            utils.scrollToPercent(0.4);
        }
        utils.sleep(600);
    }

    // ════════════════════════════════════════════════════════════
    //  FORM FILL — ALL METHODS USE typeIntoField() for sticky-header fix
    // ════════════════════════════════════════════════════════════

    public boolean fillName(String value) {
        WebElement el = findFirstVisible(nameField);
        if (el == null) { utils.log("⚠ Name field NOT found"); return false; }
        typeIntoField(el, value);
        String actual = el.getAttribute("value");
        utils.log("Name → '" + value + "' | actual: '" + actual + "'");
        return true;
    }

    public boolean fillEmail(String value) {
        WebElement el = findFirstVisible(emailField);
        if (el == null) { utils.log("⚠ Email field NOT found"); return false; }
        typeIntoField(el, value);
        String actual = el.getAttribute("value");
        utils.log("Email → '" + value + "' | actual: '" + actual + "'");
        return true;
    }

    public boolean fillPhone(String value) {
        WebElement el = findFirstVisible(phoneField);
        if (el == null) { utils.log("⚠ Phone field NOT found"); return false; }
        typeIntoField(el, value);
        String actual = el.getAttribute("value");
        utils.log("Phone → '" + value + "' | actual: '" + actual + "'");
        return true;
    }

    public boolean fillSubject(String value) {
        WebElement el = findFirstVisible(subjectField);
        if (el == null) { utils.log("⚠ Subject/Course field NOT found"); return false; }
        typeIntoField(el, value);
        utils.log("Subject/Course → '" + value + "'");
        return true;
    }

    public boolean fillMessage(String value) {
        WebElement el = findFirstVisible(messageField);
        if (el == null) { utils.log("⚠ Message/Textarea NOT found"); return false; }
        typeIntoField(el, value);
        utils.log("Message → " + value.length() + " chars typed");
        return true;
    }

    public int fillAllFields(String name, String email, String phone,
                              String subject, String message) {
        scrollToForm();
        int count = 0;
        if (fillName(name))       count++;
        if (fillEmail(email))     count++;
        if (fillPhone(phone))     count++;
        if (fillSubject(subject)) count++;
        if (fillMessage(message)) count++;
        return count;
    }

    public void clearAllFields() {
        for (WebElement inp : driver.findElements(By.tagName("input"))) {
            String type = utils.safeAttr(inp,"type").toLowerCase();
            if (!type.equals("hidden") && !type.equals("submit") && !type.equals("button")) {
                try {
                    js.executeScript("arguments[0].value = '';", inp);
                    inp.clear();
                } catch (Exception ignored) {}
            }
        }
        for (WebElement ta : driver.findElements(By.tagName("textarea"))) {
            try {
                js.executeScript("arguments[0].value = '';", ta);
                ta.clear();
            } catch (Exception ignored) {}
        }
        utils.log("All fields cleared");
    }

    // ── Set individual field values (used in validation loop tests) ──

    public void setEmailValue(String value) {
        WebElement el = findFirstVisible(emailField);
        if (el != null) setFieldValue(el, value);
        else utils.log("⚠ Email field not found for setEmailValue");
    }

    public void setPhoneValue(String value) {
        WebElement el = findFirstVisible(phoneField);
        if (el != null) setFieldValue(el, value);
        else utils.log("⚠ Phone field not found for setPhoneValue");
    }

    public void setNameValue(String value) {
        WebElement el = findFirstVisible(nameField);
        if (el == null) {
            // Fallback: first text input on the page
            List<WebElement> inputs = driver.findElements(
                By.cssSelector("input[type='text'], input:not([type])")
            );
            if (!inputs.isEmpty()) el = inputs.get(0);
        }
        if (el != null) setFieldValue(el, value);
        else utils.log("⚠ Name field not found for setNameValue");
    }

    public void setMessageValue(String value) {
        WebElement el = findFirstVisible(messageField);
        if (el != null) setFieldValue(el, value);
        else utils.log("⚠ Message field not found for setMessageValue");
    }

    // ════════════════════════════════════════════════════════════
    //  SUBMIT — sticky-header aware
    // ════════════════════════════════════════════════════════════

    public void clickSubmit() {
        WebElement btn = findSubmitButton();
        if (btn == null) throw new NoSuchElementException(
            "Submit button NOT found.\n" +
            "Searched: input[type='submit'], button[type='submit'], " +
            "buttons with text: send/submit/contact/message"
        );
        utils.log("Clicking submit: \"" + btn.getText().trim() + "\"");

        // Use scrollAndClickElement — avoids sticky header interception
        scrollAndClickElement(btn);
        utils.sleep(1500);
    }

    // ════════════════════════════════════════════════════════════
    //  VALIDATION
    // ════════════════════════════════════════════════════════════

    public List<String> getValidationErrors() {
        List<String> errors = new ArrayList<>();
        for (WebElement el : driver.findElements(errorMessages)) {
            String txt = el.getText().trim();
            if (!txt.isEmpty() && el.isDisplayed()) errors.add(txt);
        }
        // Also check aria-invalid fields
        List<WebElement> invalid = driver.findElements(
            By.cssSelector("[aria-invalid='true']")
        );
        for (WebElement el : invalid) {
            String name = utils.safeAttr(el, "name");
            if (!name.isEmpty()) errors.add("[aria-invalid] on field: " + name);
        }
        return errors;
    }

    public boolean isSuccessMessageVisible() {
        for (WebElement el : driver.findElements(successMessage))
            if (el.isDisplayed() && !el.getText().trim().isEmpty()) return true;
        String body = getBodyText();
        return body.contains("thank you") || body.contains("successfully")
            || body.contains("submitted")  || body.contains("we will contact")
            || body.contains("get back to you") || body.contains("message sent");
    }

    public boolean hasHTML5ValidationError() {
        return utils.hasHTML5ValidationError();
    }

    public boolean wasAlertTriggered() {
        try { driver.switchTo().alert().dismiss(); return true; }
        catch (NoAlertPresentException e) { return false; }
    }

    public int getNameFieldMaxLength() {
        WebElement el = findFirstVisible(nameField);
        if (el == null) return -1;
        try { return Integer.parseInt(utils.safeAttr(el, "maxlength")); }
        catch (NumberFormatException e) { return -1; }
    }

    public int getNameFieldValueLength() {
        WebElement el = findFirstVisible(nameField);
        if (el == null) return 0;
        String val = el.getAttribute("value");
        return val == null ? 0 : val.length();
    }

    // ════════════════════════════════════════════════════════════
    //  CONTACT INFO
    // ════════════════════════════════════════════════════════════

    public boolean hasAddress() {
        String body = getBodyText();
        return body.contains("address") || body.contains("street") || body.contains("road")
            || body.contains("nagar")   || body.contains("chennai") || body.contains("tamil")
            || body.contains("pincode") || body.contains("landmark") || body.contains("floor");
    }

    public boolean hasPhoneNumber() {
        // Check tel: links first — confirmed from TC-27 output
        List<WebElement> telLinks = driver.findElements(By.cssSelector("a[href^='tel:']"));
        if (!telLinks.isEmpty()) {
            for (WebElement l : telLinks)
                utils.log("  Phone: " + utils.safeAttr(l,"href"));
            return true;
        }
        // Fallback: phone number pattern in body text
        String body = getBodyText();
        return body.matches(".*\\+?\\d[\\d\\s\\-]{8,}\\d.*");
    }

    public List<String> getAllPhoneNumbers() {
        List<String> numbers = new ArrayList<>();
        for (WebElement link : driver.findElements(By.cssSelector("a[href^='tel:']"))) {
            String href = link.getAttribute("href");
            if (href != null) numbers.add(href.replace("tel:", "").trim());
        }
        return numbers;
    }

    public boolean hasEmailAddress() {
        List<WebElement> mailLinks = driver.findElements(By.cssSelector("a[href^='mailto:']"));
        if (!mailLinks.isEmpty()) {
            for (WebElement l : mailLinks)
                utils.log("  Email: " + utils.safeAttr(l,"href"));
            return true;
        }
        return getBodyText().contains("@") && getBodyText().contains(".com");
    }

    public List<String> getAllEmailAddresses() {
        List<String> emails = new ArrayList<>();
        for (WebElement link : driver.findElements(By.cssSelector("a[href^='mailto:']"))) {
            String href = link.getAttribute("href");
            if (href != null) emails.add(href.replace("mailto:", "").trim());
        }
        return emails;
    }

    public boolean hasGoogleMap() {
        List<WebElement> iframes = driver.findElements(mapIframe);
        utils.log("  Map iframes found: " + iframes.size());
        return !iframes.isEmpty();
    }

    public boolean isMapVisible() {
        List<WebElement> iframes = driver.findElements(mapIframe);
        return !iframes.isEmpty() && iframes.get(0).isDisplayed();
    }

    public boolean hasSocialLinks() {
        return !driver.findElements(socialLinks).isEmpty();
    }

    public List<String> getSocialLinkDetails() {
        List<String> details = new ArrayList<>();
        for (WebElement link : driver.findElements(socialLinks)) {
            String href = utils.safeAttr(link, "href");
            String text = link.getText().trim();
            if (!href.isEmpty() || !text.isEmpty())
                details.add("\"" + text + "\" → " + href);
        }
        return details;
    }

    public boolean allSocialLinksHaveHref() {
        List<WebElement> links = driver.findElements(socialLinks);
        for (WebElement link : links) {
            String href = utils.safeAttr(link, "href");
            if (href.isEmpty() || href.equals("#")) return false;
        }
        return true;
    }

    // ════════════════════════════════════════════════════════════
    //  PAGE QUALITY
    // ════════════════════════════════════════════════════════════

    public int countImages() { return driver.findElements(allImages).size(); }

    public int countBrokenImages() {
        int broken = 0;
        for (WebElement img : driver.findElements(allImages)) {
            String src = img.getAttribute("src");
            if (src == null || src.trim().isEmpty()) broken++;
        }
        return broken;
    }

    public int countValidLinks() {
        int valid = 0;
        for (WebElement link : driver.findElements(allLinks)) {
            String href = link.getAttribute("href");
            if (href != null && !href.trim().isEmpty() && !href.trim().equals("#")) valid++;
        }
        return valid;
    }

    public void printBrokenImages() {
        utils.log("── Image Audit ──");
        for (WebElement img : driver.findElements(allImages)) {
            String src = img.getAttribute("src");
            String alt = img.getAttribute("alt");
            if (src == null || src.trim().isEmpty())
                utils.log("  ✗ BROKEN  | alt='" + alt + "' | src=NULL");
            else
                utils.log("  ✔ OK      | alt='" + alt + "' | "
                    + src.substring(0, Math.min(60, src.length())));
        }
    }

    public void scrollStep(int step, int total) {
        utils.scrollToPercent((double) step / total);
        utils.sleep(400);
    }

    // ════════════════════════════════════════════════════════════
    //  PRIVATE HELPERS
    // ════════════════════════════════════════════════════════════

    private WebElement findFirstVisible(By locator) {
        List<WebElement> els = driver.findElements(locator);
        for (WebElement el : els)
            if (el.isDisplayed() && el.isEnabled()) return el;
        return null;
    }

    private WebElement findSubmitButton() {
        // Confirmed from TC-12: button[type='submit'] with text "Submit Message"
        for (WebElement el : driver.findElements(By.cssSelector("button[type='submit']")))
            if (el.isDisplayed()) return el;
        for (WebElement el : driver.findElements(By.cssSelector("input[type='submit']")))
            if (el.isDisplayed()) return el;
        // Fallback: button with submit-like text
        for (WebElement el : driver.findElements(By.cssSelector("button, a.btn, .btn"))) {
            String txt = el.getText().trim().toLowerCase();
            if ((txt.contains("send") || txt.contains("submit") || txt.contains("message")
              || txt.contains("contact") || txt.contains("get in touch"))
                && el.isDisplayed()) return el;
        }
        return null;
    }
}