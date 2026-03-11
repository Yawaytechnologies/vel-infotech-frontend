package com.vellinfotech.pages;

import com.vellinfotech.Utils.TestUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

/**
 * ╔══════════════════════════════════════════════════════════╗
 *   CareersPage.java  — PAGE OBJECT MODEL
 *
 *   PURPOSE : Contains ALL element locators and actions
 *             for the Careers page ONLY.
 *             Tests NEVER locate elements directly.
 *             Tests call methods from this class.
 *
 *   ✅ WHY THIS IS BETTER:
 *   - If the website changes a button text or ID,
 *     you fix it HERE in ONE place — not in 10 test files
 *   - Tests read like plain English:
 *       careersPage.fillName("John")
 *       careersPage.clickSubmit()
 *       careersPage.isSuccessMessageVisible()
 * ╚══════════════════════════════════════════════════════════╝
 */
public class CareersPage {

    private WebDriver     driver;
    private WebDriverWait wait;
    private TestUtils     utils;

    // ── CONSTRUCTOR ──────────────────────────────────────
    public CareersPage(WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait   = wait;
        this.utils  = new TestUtils(driver, wait);
    }

    // ════════════════════════════════════════════════════
    //  ELEMENT LOCATORS  (all in one place)
    // ════════════════════════════════════════════════════

    // Navigation
    private By careersNavLink = By.xpath(
        "//a[contains(translate(text(),'CAREERS JOBS','careers jobs'),'career') or " +
        "contains(translate(text(),'CAREERS JOBS','careers jobs'),'job') or " +
        "contains(translate(text(),'JOIN US','join us'),'join') or " +
        "contains(@href,'career') or contains(@href,'job')]"
    );

    // Page structure
    private By pageH1       = By.tagName("h1");
    private By pageH2       = By.tagName("h2");
    private By bannerSection = By.cssSelector(
        ".banner,.hero,.hero-section,.page-banner,.inner-banner,[class*='banner'],[class*='hero'],section:first-of-type"
    );
    private By navBar       = By.cssSelector("nav, header nav, .navbar, .nav");
    private By footerEl     = By.cssSelector("footer, .footer, #footer, [class*='footer']");

    // Form fields — multiple selectors for robustness
    private By nameField    = By.cssSelector(
        "input[name*='name' i], input[id*='name' i], input[placeholder*='name' i], " +
        "input[name*='full' i], input[id*='full' i]"
    );
    private By emailField   = By.cssSelector(
        "input[type='email'], input[name*='email' i], input[id*='email' i], input[placeholder*='email' i]"
    );
    private By phoneField   = By.cssSelector(
        "input[name*='phone' i], input[id*='phone' i], input[placeholder*='phone' i], " +
        "input[name*='mobile' i], input[type='tel']"
    );
    private By messageField = By.cssSelector(
        "textarea, input[name*='message' i], input[id*='message' i], " +
        "textarea[name*='message' i], textarea[placeholder*='message' i]"
    );
    private By positionField = By.cssSelector(
        "input[name*='position' i], input[id*='position' i], input[placeholder*='position' i], " +
        "input[name*='role' i], input[name*='subject' i]"
    );
    private By fileUpload   = By.cssSelector("input[type='file']");
    private By submitButton = By.cssSelector(
        "input[type='submit'], button[type='submit'], " +
        "button, a.btn, .btn, .button"
    );

    // Validation & feedback
    private By errorMessages  = By.cssSelector(
        ".error, .error-message, .invalid-feedback, [class*='error'], " +
        "[class*='invalid'], .alert-danger, .help-block, span.error, p.error"
    );
    private By successMessage = By.cssSelector(
        ".success, .alert-success, [class*='success'], .thank-you, [class*='thank']"
    );

    // ════════════════════════════════════════════════════
    //  NAVIGATION ACTIONS
    // ════════════════════════════════════════════════════

    /** Click the Careers link in the navigation menu */
    public void clickCareersNavLink() {
        List<WebElement> links = driver.findElements(By.cssSelector(
            "nav a, header a, .navbar a, header ul li a, .menu a"));

        // Find by text first
        for (WebElement link : links) {
            String text = link.getText().trim().toLowerCase();
            if (text.contains("career") || text.contains("job") || text.contains("join")) {
                utils.log("Clicking nav link: \"" + link.getText().trim() + "\"");
                utils.safeClick(link);
                utils.waitForPageLoad();
                utils.sleep(1200);
                return;
            }
        }
        // Find by href
        for (WebElement link : links) {
            String href = utils.safeAttr(link, "href").toLowerCase();
            if (href.contains("career") || href.contains("job") || href.contains("join")) {
                utils.log("Clicking nav link by href: " + href);
                utils.safeClick(link);
                utils.waitForPageLoad();
                utils.sleep(1200);
                return;
            }
        }
        throw new NoSuchElementException("Careers link NOT found in navigation.\n" +
            "Check nav link names — the link may use a different label.");
    }

    /** Get all navigation link texts — useful for debugging */
    public List<String> getAllNavLinkTexts() {
        List<WebElement> links = driver.findElements(By.cssSelector(
            "nav a, header a, .navbar a, header ul li a"));
        List<String> texts = new ArrayList<>();
        for (WebElement l : links) {
            String t = l.getText().trim();
            if (!t.isEmpty()) texts.add(t + " → " + utils.safeAttr(l, "href"));
        }
        return texts;
    }

    // ════════════════════════════════════════════════════
    //  PAGE INFO
    // ════════════════════════════════════════════════════

    public String getPageTitle()   { return driver.getTitle().trim(); }
    public String getCurrentURL()  { return driver.getCurrentUrl(); }

    public String getH1Text() {
        List<WebElement> els = driver.findElements(pageH1);
        for (WebElement e : els) if (e.isDisplayed() && !e.getText().trim().isEmpty())
            return e.getText().trim();
        return "";
    }

    public List<String> getAllHeadings() {
        List<String> headings = new ArrayList<>();
        for (WebElement h : driver.findElements(pageH1)) headings.add("H1: " + h.getText().trim());
        for (WebElement h : driver.findElements(pageH2)) headings.add("H2: " + h.getText().trim());
        return headings;
    }

    public boolean isBannerVisible() {
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

    public int getPageBodyLength() {
        return driver.findElement(By.tagName("body")).getText().trim().length();
    }

    public String getBodyText() {
        return driver.findElement(By.tagName("body")).getText().toLowerCase();
    }

    // ════════════════════════════════════════════════════
    //  FORM ACTIONS
    // ════════════════════════════════════════════════════

    /** Scroll to the form */
    public void scrollToForm() {
        List<WebElement> forms = driver.findElements(By.tagName("form"));
        if (!forms.isEmpty()) {
            utils.scrollTo(forms.get(0));
        } else {
            utils.scrollToPercent(0.5);
        }
        utils.sleep(500);
    }

    /** Fill the Name field */
    public boolean fillName(String value) {
        WebElement el = findFirstVisible(nameField);
        if (el == null) { utils.log("⚠ Name field NOT found"); return false; }
        utils.clearAndType(el, value);
        utils.log("Name filled: '" + value + "' → value: '" + el.getAttribute("value") + "'");
        return true;
    }

    /** Fill the Email field */
    public boolean fillEmail(String value) {
        WebElement el = findFirstVisible(emailField);
        if (el == null) { utils.log("⚠ Email field NOT found"); return false; }
        utils.clearAndType(el, value);
        utils.log("Email filled: '" + value + "' → value: '" + el.getAttribute("value") + "'");
        return true;
    }

    /** Fill the Phone field */
    public boolean fillPhone(String value) {
        WebElement el = findFirstVisible(phoneField);
        if (el == null) { utils.log("⚠ Phone field NOT found"); return false; }
        utils.clearAndType(el, value);
        utils.log("Phone filled: '" + value + "' → value: '" + el.getAttribute("value") + "'");
        return true;
    }

    /** Fill the Message / Cover Letter field */
    public boolean fillMessage(String value) {
        WebElement el = findFirstVisible(messageField);
        if (el == null) { utils.log("⚠ Message/Textarea field NOT found"); return false; }
        utils.clearAndType(el, value);
        utils.log("Message filled: " + value.length() + " chars → field has: "
            + el.getAttribute("value").length() + " chars");
        return true;
    }

    /** Fill Position / Subject field */
    public boolean fillPosition(String value) {
        WebElement el = findFirstVisible(positionField);
        if (el == null) { utils.log("⚠ Position field NOT found"); return false; }
        utils.clearAndType(el, value);
        return true;
    }

    /** Upload a resume file */
    public boolean uploadResume(String filePath) {
        List<WebElement> inputs = driver.findElements(fileUpload);
        if (inputs.isEmpty()) { utils.log("⚠ File upload field NOT found"); return false; }
        try {
            inputs.get(0).sendKeys(filePath);
            utils.sleep(800);
            String val = inputs.get(0).getAttribute("value");
            utils.log("Resume uploaded → field value: '" + val + "'");
            return !val.isEmpty();
        } catch (Exception e) {
            utils.log("✗ Upload failed: " + e.getMessage().split("\n")[0]);
            return false;
        }
    }

    /** Fill ALL form fields at once with valid data */
    public int fillAllFields(String name, String email, String phone, String message) {
        scrollToForm();
        int filled = 0;
        if (fillName(name))     filled++;
        if (fillEmail(email))   filled++;
        if (fillPhone(phone))   filled++;
        if (fillPosition("Software Testing Engineer")) filled++;
        if (fillMessage(message)) filled++;
        return filled;
    }

    /** Click the Submit button */
    public void clickSubmit() {
        WebElement btn = findSubmitButton();
        if (btn == null) throw new NoSuchElementException(
            "Submit button NOT found.\nSearched: input[type='submit'], button[type='submit'], " +
            "buttons with text: submit/send/apply\n" +
            "HINT: The Careers page may not have a submit button — check TC-13 output");
        utils.log("Clicking submit: \"" + btn.getText().trim() + "\"");
        utils.scrollTo(btn);
        utils.safeClick(btn);
        utils.sleep(1500);
    }

    /** Clear a specific field */
    public void clearField(By locator) {
        WebElement el = findFirstVisible(locator);
        if (el != null) el.clear();
    }

    /** Type into email field (for invalid email tests) */
    public void setEmailValue(String value) {
        WebElement el = findFirstVisible(emailField);
        if (el != null) utils.clearAndType(el, value);
    }

    /** Type into phone field (for invalid phone tests) */
    public void setPhoneValue(String value) {
        WebElement el = findFirstVisible(phoneField);
        if (el != null) utils.clearAndType(el, value);
    }

    /** Type into name field (for XSS / long text tests) */
    public void setNameValue(String value) {
        WebElement el = findFirstVisible(nameField);
        if (el == null) {
            List<WebElement> textInputs = driver.findElements(By.cssSelector("input[type='text'], input:not([type])"));
            if (!textInputs.isEmpty()) el = textInputs.get(0);
        }
        if (el != null) utils.clearAndType(el, value);
    }

    // ════════════════════════════════════════════════════
    //  VALIDATION CHECKS
    // ════════════════════════════════════════════════════

    /** Collect all visible error messages after form action */
    public List<String> getValidationErrors() {
        List<String> errors = new ArrayList<>();
        List<WebElement> els = driver.findElements(errorMessages);
        for (WebElement el : els) {
            String txt = el.getText().trim();
            if (!txt.isEmpty() && el.isDisplayed()) errors.add(txt);
        }
        return errors;
    }

    /** Check if success message is visible */
    public boolean isSuccessMessageVisible() {
        // Check dedicated success elements
        List<WebElement> els = driver.findElements(successMessage);
        for (WebElement el : els) {
            if (el.isDisplayed() && !el.getText().trim().isEmpty()) return true;
        }
        // Check page text for success keywords
        String pageText = getBodyText();
        return pageText.contains("thank you")   || pageText.contains("successfully")
            || pageText.contains("submitted")   || pageText.contains("received your")
            || pageText.contains("we will contact") || pageText.contains("application sent");
    }

    /** Check HTML5 browser-level validation errors */
    public boolean hasHTML5ValidationError() {
        return utils.hasHTML5ValidationError();
    }

    /** Check if XSS alert was triggered */
    public boolean wasAlertTriggered() {
        try {
            driver.switchTo().alert().dismiss();
            return true;
        } catch (NoAlertPresentException e) {
            return false;
        }
    }

    /** Get maxlength of name field */
    public int getNameFieldMaxLength() {
        WebElement el = findFirstVisible(nameField);
        if (el == null) return -1;
        try { return Integer.parseInt(utils.safeAttr(el, "maxlength")); }
        catch (NumberFormatException e) { return -1; }
    }

    /** Get name field value length after typing */
    public int getNameFieldValueLength() {
        WebElement el = findFirstVisible(nameField);
        return el == null ? 0 : el.getAttribute("value").length();
    }

    // ════════════════════════════════════════════════════
    //  CONTENT CHECKS
    // ════════════════════════════════════════════════════

    public boolean hasJobListings() {
        String[] keywords = { "opening","vacancy","position","hiring","job","role","apply now","we are looking" };
        String text = getBodyText();
        for (String kw : keywords) if (text.contains(kw)) return true;
        return false;
    }

    public boolean hasWhyJoinUsSection() {
        String[] keywords = { "why join","our culture","benefits","perks","work with us",
                              "life at","work environment","what we offer","employee","team" };
        String text = getBodyText();
        for (String kw : keywords) if (text.contains(kw)) return true;
        return false;
    }

    public boolean hasContactInfo() {
        List<WebElement> emails = driver.findElements(By.cssSelector("a[href^='mailto:']"));
        List<WebElement> phones = driver.findElements(By.cssSelector("a[href^='tel:']"));
        String text = getBodyText();
        return !emails.isEmpty() || !phones.isEmpty() || text.contains("@") || text.contains("contact");
    }

    public boolean hasApplyCTA() {
        String[] keywords = { "apply","apply now","submit","send resume","upload","register" };
        List<WebElement> all = driver.findElements(By.cssSelector("a, button"));
        for (WebElement el : all) {
            String txt = el.getText().trim().toLowerCase();
            for (String kw : keywords) if (txt.contains(kw) && el.isDisplayed()) return true;
        }
        return false;
    }

    public boolean hasApplicationForm() {
        List<WebElement> forms  = driver.findElements(By.tagName("form"));
        List<WebElement> inputs = driver.findElements(By.tagName("input"));
        return !forms.isEmpty() || inputs.size() >= 2;
    }

    public boolean hasFileUploadField() {
        return !driver.findElements(fileUpload).isEmpty();
    }

    public int countImages() {
        return driver.findElements(By.tagName("img")).size();
    }

    public int countBrokenImages() {
        int broken = 0;
        for (WebElement img : driver.findElements(By.tagName("img"))) {
            String src = img.getAttribute("src");
            if (src == null || src.trim().isEmpty()) broken++;
        }
        return broken;
    }

    public int countValidLinks() {
        int valid = 0;
        for (WebElement link : driver.findElements(By.tagName("a"))) {
            String href = link.getAttribute("href");
            if (href != null && !href.trim().isEmpty() && !href.trim().equals("#")) valid++;
        }
        return valid;
    }

    public void printAllFormFields() {
        utils.log("── All input fields on page ──");
        List<WebElement> inputs   = driver.findElements(By.tagName("input"));
        List<WebElement> textAreas = driver.findElements(By.tagName("textarea"));
        for (WebElement inp : inputs) {
            utils.log("  INPUT  type='" + utils.safeAttr(inp, "type")
                + "'  name='" + utils.safeAttr(inp, "name")
                + "'  id='" + utils.safeAttr(inp, "id")
                + "'  placeholder='" + utils.safeAttr(inp, "placeholder") + "'");
        }
        for (WebElement ta : textAreas) {
            utils.log("  TEXTAREA  name='" + utils.safeAttr(ta, "name")
                + "'  placeholder='" + utils.safeAttr(ta, "placeholder") + "'");
        }
    }

    // ════════════════════════════════════════════════════
    //  PRIVATE HELPERS
    // ════════════════════════════════════════════════════

    private WebElement findFirstVisible(By locator) {
        List<WebElement> els = driver.findElements(locator);
        for (WebElement el : els) {
            if (el.isDisplayed() && el.isEnabled()) return el;
        }
        return null;
    }

    private WebElement findSubmitButton() {
        // input[type=submit]
        for (WebElement el : driver.findElements(By.cssSelector("input[type='submit']")))
            if (el.isDisplayed()) return el;
        // button[type=submit]
        for (WebElement el : driver.findElements(By.cssSelector("button[type='submit']")))
            if (el.isDisplayed()) return el;
        // Any button/link with submit keywords
        for (WebElement el : driver.findElements(By.cssSelector("button, a.btn, .btn, input[type='button']"))) {
            String txt = el.getText().trim().toLowerCase();
            if ((txt.contains("submit") || txt.contains("send") || txt.contains("apply"))
                && el.isDisplayed()) return el;
        }
        return null;
    }
}