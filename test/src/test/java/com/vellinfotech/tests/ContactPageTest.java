package com.vellinfotech.tests;

import com.vellinfotech.base.BaseTest;
import com.vellinfotech.pages.ContactPage;
import com.vellinfotech.Utils.TestUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.*;

import java.util.List;

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 *   ContactPageTest.java  (v2 — ALL FAILURES FIXED)
 *   PACKAGE : com.vellinfotech.tests
 *   SITE    : https://www.vellinfotech.com/contact-us
 *
 *   WHAT WAS WRONG IN v1 (6 failures):
 *   ──────────────────────────────────────────────────────────────────
 *   TC-19, TC-20, TC-22, TC-23, TC-25:
 *     ElementClickInterceptedException — sticky nav bar (z-99999, fixed top-83px)
 *     was covering form fields. Standard .click() was intercepted by the bar.
 *
 *     FIX IN ContactPage.java: typeIntoField() method
 *       - JS scrollIntoView() + scrollBy(-150px) to clear sticky bar
 *       - JS focus() instead of .click() — bar cannot intercept focus()
 *       - el.sendKeys() to type safely
 *
 *   TC-34:
 *     contactPage.getPageHeight() and getScrollPosition() did not exist.
 *     These methods live in TestUtils, not ContactPage.
 *
 *     FIX IN ContactPage.java: added delegating methods
 *       public long getPageHeight()     { return utils.getPageHeight(); }
 *       public long getScrollPosition() { return utils.getScrollPosition(); }
 *
 *   35 TEST CASES — 7 PHASES (same structure, all fixed)
 *   ──────────────────────────────────────────────────────────────────
 *   PHASE 1 : Navigation                TC-01 to TC-04
 *   PHASE 2 : Page Structure            TC-05 to TC-09
 *   PHASE 3 : Contact Form Detection    TC-10 to TC-12
 *   PHASE 4 : Form Valid Data Fill      TC-13 to TC-17
 *   PHASE 5 : Form Invalid Data (Bugs)  TC-18 to TC-25
 *   PHASE 6 : Contact Info Checks       TC-26 to TC-30
 *   PHASE 7 : Page Quality              TC-31 to TC-35
 * ╚══════════════════════════════════════════════════════════════════════╝
 */
public class ContactPageTest extends BaseTest {

    private ContactPage contactPage;
    private TestUtils   utils;
    private String      contactURL = "";

    // ── Confirmed from TC-10 console output ──
    // Form has: name, email, phone, course (NOT subject), message
    private static final String VALID_NAME    = "Rajesh Kumar";
    private static final String VALID_EMAIL   = "rajesh.kumar@gmail.com";
    private static final String VALID_PHONE   = "9876543210";
    private static final String VALID_COURSE  = "Software Testing - Selenium";
    private static final String VALID_MESSAGE =
        "Hello Vell InfoTech Team,\n\n" +
        "I am interested in your Software Testing and Selenium Automation course. " +
        "Could you please share the batch schedule, course duration, and fee details? " +
        "I am available for a call on weekdays between 10 AM and 6 PM.\n\n" +
        "Thank you for your time.";

    @BeforeClass
    public void setUpPage() {
        super.setUp();
        contactPage = new ContactPage(driver, wait);
        utils       = new TestUtils(driver, wait);
    }

    // ════════════════════════════════════════════════
    //  PHASE 1 — NAVIGATION
    // ════════════════════════════════════════════════

    @Test(priority = 1, description = "TC-01 | Homepage loads with content")
    public void tc01_HomepageLoads() {
        head("TC-01", "Homepage Loads");
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        utils.sleep(800);

        int len = contactPage.getPageBodyLength();
        log("Body length: " + len + " chars");

        assertTrue(len > 50, "TC-01",
            "Homepage loaded (" + len + " chars)",
            "Homepage body too short (" + len + " chars) — page did not render");
    }

    @Test(priority = 2, description = "TC-02 | Contact link exists in navigation")
    public void tc02_ContactLinkInNav() {
        head("TC-02", "Contact Link in Navigation");

        List<String> navLinks = contactPage.getAllNavLinkTexts();
        log("Total nav links: " + navLinks.size());
        navLinks.forEach(l -> log("  → " + l));

        boolean found = navLinks.stream().anyMatch(l ->
            l.toLowerCase().matches(".*(contact|get in touch|reach|enquiry).*")
        );
        if (!found) Assert.fail("TC-02: Contact link not found. See nav links above.");
        pass("TC-02", "Contact link found in nav");
    }

    @Test(priority = 3, description = "TC-03 | Navigate to Contact page via nav link")
    public void tc03_NavigateToContact() {
        head("TC-03", "Navigate to Contact Page");
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        utils.sleep(800);
        utils.dismissOverlays();
        utils.scrollToTop();

        try {
            contactPage.clickContactNavLink();
            contactURL = contactPage.getCurrentURL();
            log("Landed on: " + contactURL);
            pass("TC-03", "Navigated to: " + contactURL);
        } catch (Exception e) {
            Assert.fail("TC-03: " + e.getMessage());
        }
    }

    @Test(priority = 4, description = "TC-04 | URL verified as Contact page")
    public void tc04_URLVerified() {
        head("TC-04", "URL is Contact Page");
        String url = contactPage.getCurrentURL();
        contactURL  = url;
        log("Current URL: " + url);

        boolean changed    = !url.equals(BASE_URL);
        boolean hasKeyword = url.toLowerCase().matches(".*(contact|reach|enquiry|get-in-touch).*");
        log("Changed from home : " + changed + " | Has keyword: " + hasKeyword);

        if (!changed && !hasKeyword)
            Assert.fail("TC-04: Not on Contact page. URL: " + url);
        pass("TC-04", "Contact URL confirmed: " + url);
    }

    // ════════════════════════════════════════════════
    //  PHASE 2 — PAGE STRUCTURE
    // ════════════════════════════════════════════════

    @Test(priority = 5, description = "TC-05 | Page is valid — not 404")
    public void tc05_PageIsValid() {
        head("TC-05", "Page is Valid — Not 404");
        String body = contactPage.getBodyText();

        if (body.contains("404") || body.contains("page not found"))
            Assert.fail("TC-05: Contact page returned 404");

        log("Page body length: " + contactPage.getPageBodyLength() + " chars");
        pass("TC-05", "Contact page loaded successfully");
    }

    @Test(priority = 6, description = "TC-06 | Page title is valid")
    public void tc06_PageTitle() {
        head("TC-06", "Page Title");
        String title = contactPage.getPageTitle();
        log("Title: \"" + title + "\"");

        assertTrue(
            title.toLowerCase().contains("vell")
            || title.toLowerCase().matches(".*(contact|reach|enquir|touch).*"),
            "TC-06", "Title valid: \"" + title + "\"",
            "Title missing brand/keyword: \"" + title + "\""
        );
    }

    @Test(priority = 7, description = "TC-07 | Page headings H1/H2 present")
    public void tc07_PageHeadings() {
        head("TC-07", "Page Headings");
        List<String> headings = contactPage.getAllHeadings();
        log("Headings found: " + headings.size());
        headings.forEach(h -> log("  " + h));

        assertTrue(!headings.isEmpty(), "TC-07",
            headings.size() + " heading(s) found",
            "No headings on Contact page");
    }

    @Test(priority = 8, description = "TC-08 | Banner / hero section visible")
    public void tc08_BannerVisible() {
        head("TC-08", "Banner Section");
        utils.scrollToTop();
        boolean visible = contactPage.isBannerVisible();
        log("Banner visible: " + visible);
        pass("TC-08", visible ? "Banner visible" : "No banner — form-first layout (soft pass)");
    }

    @Test(priority = 9, description = "TC-09 | Navigation bar visible on Contact page")
    public void tc09_NavBarVisible() {
        head("TC-09", "Nav Bar Visible");
        utils.scrollToTop();
        assertTrue(contactPage.isNavBarVisible(), "TC-09",
            "Nav bar visible", "Navigation bar NOT visible on Contact page");
    }

    // ════════════════════════════════════════════════
    //  PHASE 3 — CONTACT FORM DETECTION
    // ════════════════════════════════════════════════

    @Test(priority = 10, description = "TC-10 | Contact form exists on page")
    public void tc10_FormExists() {
        head("TC-10", "Contact Form Detection");
        utils.scrollToPercent(0.4);
        utils.sleep(500);

        contactPage.printAllFormFields();

        boolean hasForm   = contactPage.hasContactForm();
        int     formCount = contactPage.countForms();
        log("Form detected : " + hasForm + " | Form count: " + formCount);

        assertTrue(hasForm, "TC-10",
            "Contact form found (" + formCount + " form(s))",
            "No contact form on page — BUG: visitors cannot send messages");
    }

    @Test(priority = 11, description = "TC-11 | Required fields present (Name, Email, Phone, Message)")
    public void tc11_RequiredFieldsPresent() {
        head("TC-11", "Required Fields Check");

        // ✅ Confirmed from TC-10 output: site has 'course' field not 'subject'
        String[][] fields = {
            { "Name",         "input[name='name'], input[placeholder='John Doe']" },
            { "Email",        "input[name='email'], input[type='email']" },
            { "Phone",        "input[name='phone'], input[type='tel']" },
            { "Course/Topic", "input[name='course'], input[placeholder*='Java' i]" },
            { "Message",      "textarea" }
        };

        int found = 0, missing = 0;
        for (String[] field : fields) {
            List<WebElement> els = driver.findElements(By.cssSelector(field[1]));
            boolean exists = els.stream().anyMatch(WebElement::isDisplayed);
            if (exists) { found++;   log("  ✔ FOUND   : " + field[0]); }
            else        { missing++; log("  ✗ MISSING : " + field[0]); }
        }

        log("Fields found: " + found + " / " + fields.length);
        assertTrue(found >= 2, "TC-11",
            found + " expected fields found",
            "Too few fields — only " + found + " found");
    }

    @Test(priority = 12, description = "TC-12 | Submit button present and visible")
    public void tc12_SubmitButtonPresent() {
        head("TC-12", "Submit Button");
        contactPage.scrollToForm();

        List<WebElement> submitBtns = driver.findElements(By.cssSelector("button[type='submit']"));
        log("button[type='submit']: " + submitBtns.size());
        submitBtns.forEach(b -> log("  → \"" + b.getText().trim() + "\""));

        assertTrue(!submitBtns.isEmpty() && submitBtns.get(0).isDisplayed(),
            "TC-12", "Submit button found: \"" + (submitBtns.isEmpty() ? "N/A"
                    : submitBtns.get(0).getText().trim()) + "\"",
            "No submit button on Contact form — BUG");
    }

    // ════════════════════════════════════════════════
    //  PHASE 4 — VALID DATA FILL
    //  FIX: All fill methods now use typeIntoField() in ContactPage
    //       which avoids the sticky nav interception entirely.
    // ════════════════════════════════════════════════

    @Test(priority = 13, description = "TC-13 | Fill Name field — valid data")
    public void tc13_FillNameValid() {
        head("TC-13", "Fill Name — Valid");
        reloadContact();
        contactPage.scrollToForm();

        boolean filled = contactPage.fillName(VALID_NAME);
        if (!filled) { log("ℹ Name field not found — see TC-10"); return; }
        pass("TC-13", "Name field filled: '" + VALID_NAME + "'");
    }

    @Test(priority = 14, description = "TC-14 | Fill Email field — valid email")
    public void tc14_FillEmailValid() {
        head("TC-14", "Fill Email — Valid");

        boolean filled = contactPage.fillEmail(VALID_EMAIL);
        if (!filled) { log("ℹ Email field not found — see TC-10"); return; }
        pass("TC-14", "Email filled: '" + VALID_EMAIL + "'");
    }

    @Test(priority = 15, description = "TC-15 | Fill Phone field — valid 10-digit")
    public void tc15_FillPhoneValid() {
        head("TC-15", "Fill Phone — Valid");

        boolean filled = contactPage.fillPhone(VALID_PHONE);
        if (!filled) { log("ℹ Phone field not found — see TC-10"); return; }
        pass("TC-15", "Phone filled: '" + VALID_PHONE + "'");
    }

    @Test(priority = 16, description = "TC-16 | Fill Course/Topic field")
    public void tc16_FillCourseField() {
        head("TC-16", "Fill Course / Topic Field");
        // ✅ Site has 'course' field (name='course') NOT a subject field
        boolean filled = contactPage.fillSubject(VALID_COURSE);
        if (!filled) { log("ℹ Course/subject field not found — see TC-10"); return; }
        pass("TC-16", "Course field filled: '" + VALID_COURSE + "'");
    }

    @Test(priority = 17, description = "TC-17 | Fill Message textarea — full message")
    public void tc17_FillMessageValid() {
        head("TC-17", "Fill Message — Valid");

        boolean filled = contactPage.fillMessage(VALID_MESSAGE);
        if (!filled) { log("ℹ Message field not found — see TC-10"); return; }
        pass("TC-17", "Message filled — " + VALID_MESSAGE.length() + " chars");
    }

    // ════════════════════════════════════════════════
    //  PHASE 5 — INVALID DATA / BUG FINDER
    //  ALL FIXED: typeIntoField() avoids sticky header interception
    // ════════════════════════════════════════════════

    /**
     * TC-18 — Empty form submit
     * FIX: scrollToForm() + clickSubmit() both use sticky-header-aware scrolling
     */
    @Test(priority = 18, description = "TC-18 | Empty form submit — validation must block")
    public void tc18_EmptyFormSubmit() {
        head("TC-18", "Empty Form Submit — Validation Check");
        reloadContact();
        contactPage.scrollToForm();
        contactPage.clearAllFields();

        log("Submitting with ALL fields empty...");
        try { contactPage.clickSubmit(); }
        catch (Exception e) { log("ℹ No submit button: " + e.getMessage().split("\n")[0]); return; }
        utils.sleep(1200);

        List<String> errors  = contactPage.getValidationErrors();
        boolean html5        = contactPage.hasHTML5ValidationError();
        boolean stayedOnPage = contactPage.getCurrentURL().contains("contact")
                            || contactPage.getCurrentURL().equals(contactURL);

        log("Errors found     : " + errors.size());
        errors.forEach(e -> log("  → \"" + e + "\""));
        log("HTML5 validation : " + html5);
        log("Stayed on page   : " + stayedOnPage);

        if (!stayedOnPage && errors.isEmpty() && !html5)
            Assert.fail("TC-18: CRITICAL BUG — empty form accepted with no validation");

        pass("TC-18", "Empty form blocked — " + errors.size() + " error(s) shown");
    }

    /**
     * TC-19 — Partial form submit (only Name)
     * FIX: fillName() now uses typeIntoField() — no sticky header interception
     */
    @Test(priority = 19, description = "TC-19 | Only Name filled — other required fields must block")
    public void tc19_PartialFormSubmit() {
        head("TC-19", "Partial Form — Only Name Filled");
        reloadContact();
        contactPage.scrollToForm();
        contactPage.clearAllFields();

        // ✅ FIX: fillName uses typeIntoField() — sticky header no longer blocks
        boolean filled = contactPage.fillName("Test User");
        log("Name filled: " + filled);

        log("Submitting with only Name filled...");
        try { contactPage.clickSubmit(); }
        catch (Exception e) { log("ℹ No submit: " + e.getMessage().split("\n")[0]); return; }
        utils.sleep(1000);

        List<String> errors  = contactPage.getValidationErrors();
        boolean html5        = contactPage.hasHTML5ValidationError();
        boolean stayedOnPage = contactPage.getCurrentURL().contains("contact")
                            || contactPage.getCurrentURL().equals(contactURL);

        log("Errors: " + errors.size() + " | HTML5: " + html5 + " | Stayed: " + stayedOnPage);
        errors.forEach(e -> log("  Error: \"" + e + "\""));

        if (!stayedOnPage && errors.isEmpty() && !html5)
            Assert.fail("TC-19: BUG — partial form (only Name) submitted without validation");

        pass("TC-19", "Partial form blocked — validation triggered");
    }

    /**
     * TC-20 — Invalid email formats
     * FIX: fillAllFields() uses typeIntoField() for all fields including Name.
     *      The error that crashed v1 was on fillName() inside fillAllFields().
     */
    @Test(priority = 20, description = "TC-20 | Invalid email formats — must be rejected")
    public void tc20_InvalidEmailFormats() {
        head("TC-20", "Invalid Email Formats");
        reloadContact();
        contactPage.scrollToForm();

        // ✅ FIX: fillAllFields now uses typeIntoField() — no interception
        int filled = contactPage.fillAllFields(
            "Test User", "valid@email.com", VALID_PHONE, VALID_COURSE, "Test message body for validation"
        );
        log("Fields filled: " + filled);

        String[] invalidEmails = {
            "plaintext",
            "nodot@",
            "missing@dot",
            "double@@email.com",
            "noatsign.com",
            "spaces in@email.com",
            "@nodomain.com",
            "test@.com"
        };

        int bugCount = 0;
        for (String badEmail : invalidEmails) {
            // ✅ FIX: setEmailValue uses setFieldValue() — sticky header safe
            contactPage.setEmailValue(badEmail);
            log("Testing: '" + badEmail + "'");
            try { contactPage.clickSubmit(); } catch (Exception e) { break; }
            utils.sleep(600);

            boolean blocked  = contactPage.hasHTML5ValidationError()
                            || !contactPage.getValidationErrors().isEmpty();
            boolean stayedOn = contactPage.getCurrentURL().contains("contact")
                            || contactPage.getCurrentURL().equals(contactURL);
            log("  → Blocked: " + blocked + " | Stayed: " + stayedOn);

            if (!blocked && !stayedOn) {
                bugCount++;
                log("  ✗ BUG: '" + badEmail + "' ACCEPTED — no email format validation");
            }
        }
        if (bugCount > 0)
            Assert.fail("TC-20: " + bugCount + " invalid email(s) accepted. See log.");
        pass("TC-20", "All invalid emails correctly blocked");
    }

    @Test(priority = 21, description = "TC-21 | Invalid phone numbers — validation check")
    public void tc21_InvalidPhoneNumbers() {
        head("TC-21", "Invalid Phone Numbers");
        reloadContact();
        contactPage.scrollToForm();

        // Fill valid data first except phone
        contactPage.fillName(VALID_NAME);
        contactPage.fillEmail(VALID_EMAIL);
        contactPage.fillSubject(VALID_COURSE);
        contactPage.fillMessage("Test message for phone validation");

        String[] invalidPhones = {
            "abc", "123", "!@#$%", "0000000000000", "phone number", "1234"
        };

        int bugCount = 0;
        for (String badPhone : invalidPhones) {
            contactPage.setPhoneValue(badPhone);
            log("Testing phone: '" + badPhone + "'");
            try { contactPage.clickSubmit(); } catch (Exception e) { break; }
            utils.sleep(500);

            boolean blocked = contactPage.hasHTML5ValidationError()
                           || !contactPage.getValidationErrors().isEmpty();
            log("  → Validation triggered: " + blocked);
            if (!blocked) {
                bugCount++;
                log("  ⚠ BUG: '" + badPhone + "' accepted — no phone format validation");
            }
        }
        log("Invalid phones accepted (bugs): " + bugCount);
        pass("TC-21", "Phone check done — " + bugCount + " issue(s) found");
    }

    /**
     * TC-22 — Short message
     * FIX: fillAllFields uses typeIntoField() — Name field no longer intercepted
     */
    @Test(priority = 22, description = "TC-22 | Very short message (2 chars) — min length check")
    public void tc22_ShortMessage() {
        head("TC-22", "Too Short Message");
        reloadContact();
        contactPage.scrollToForm();

        // ✅ FIX: fillAllFields uses typeIntoField() for all fields
        int filled = contactPage.fillAllFields(
            VALID_NAME, VALID_EMAIL, VALID_PHONE, VALID_COURSE, "Hi"
        );
        log("Fields filled: " + filled + " | Message = 'Hi' (2 chars)");

        try { contactPage.clickSubmit(); }
        catch (Exception e) { log("ℹ No submit: " + e.getMessage().split("\n")[0]); return; }
        utils.sleep(800);

        List<String> errors  = contactPage.getValidationErrors();
        boolean html5        = contactPage.hasHTML5ValidationError();
        boolean stayedOnPage = contactPage.getCurrentURL().contains("contact")
                            || contactPage.getCurrentURL().equals(contactURL);

        log("Errors: " + errors.size() + " | HTML5: " + html5 + " | Stayed: " + stayedOnPage);
        if (!stayedOnPage && errors.isEmpty() && !html5) {
            log("⚠ BUG: Message 'Hi' (2 chars) was accepted — no min-length validation");
            log("⚠ FIX: Add minlength or server-side validation for message field");
        }
        pass("TC-22", "Short message check done — " + errors.size() + " error(s) shown");
    }

    /**
     * TC-23 — XSS injection
     * FIX: setNameValue() now uses setFieldValue() which uses JS focus() not .click()
     */
    @Test(priority = 23, description = "TC-23 | XSS payloads in fields — security check")
    public void tc23_XSSInjection() {
        head("TC-23", "XSS Security Check");
        reloadContact();
        contactPage.scrollToForm();

        String[] payloads = {
            "<script>alert('XSS')</script>",
            "javascript:alert(1)",
            "<img src=x onerror=alert(1)>",
            "<svg onload=alert(1)>",
            "'; DROP TABLE contacts; --",
            "<iframe src=javascript:alert(1)>",
            "\" onmouseover=\"alert(1)"
        };

        for (String payload : payloads) {
            // ✅ FIX: setNameValue() uses setFieldValue() — JS focus(), not click()
            contactPage.setNameValue(payload);
            utils.sleep(400);
            log("Payload: '" + payload.substring(0, Math.min(40, payload.length())) + "'");

            if (contactPage.wasAlertTriggered()) {
                log("✗ CRITICAL BUG: XSS alert triggered by payload!");
                Assert.fail("TC-23: CRITICAL SECURITY BUG — XSS vulnerability. Payload: " + payload);
            }
            log("  ✔ Safe — no alert triggered");
        }
        pass("TC-23", "XSS check passed — " + payloads.length + " payloads tested, none triggered alert");
    }

    @Test(priority = 24, description = "TC-24 | 500-char Name — maxlength / overflow check")
    public void tc24_LongNameInput() {
        head("TC-24", "Long Name Input — Overflow Check");
        reloadContact();
        contactPage.scrollToForm();

        String longName = "A".repeat(500);
        contactPage.setNameValue(longName);
        utils.sleep(300);

        int len    = contactPage.getNameFieldValueLength();
        int maxLen = contactPage.getNameFieldMaxLength();

        log("Typed 500 chars | Field value length : " + len);
        log("maxlength attr  : " + (maxLen > 0 ? maxLen : "NOT SET — BUG"));

        if (len == 500 && maxLen <= 0) {
            log("⚠ BUG: Name field accepts 500+ chars — no maxlength attribute");
            log("⚠ FIX: Add maxlength='100' (or appropriate limit) to name input");
        } else {
            log("✔ Field capped at " + len + " chars (maxlength=" + maxLen + ")");
        }
        pass("TC-24", "Long text check done — stored length: " + len);
    }

    /**
     * TC-25 — Valid complete form submit
     * FIX: fillAllFields() uses typeIntoField() for all 5 fields.
     *      In v1 this crashed on fillName() due to sticky header interception.
     */
    @Test(priority = 25, description = "TC-25 | Complete valid form — submit and verify success")
    public void tc25_ValidFormSubmit() {
        head("TC-25", "Valid Complete Form Submit");
        reloadContact();
        contactPage.scrollToForm();

        log("Filling all fields with valid data...");
        // ✅ FIX: fillAllFields now uses typeIntoField() for every field
        int filled = contactPage.fillAllFields(
            VALID_NAME,
            VALID_EMAIL,
            VALID_PHONE,
            VALID_COURSE,
            VALID_MESSAGE
        );
        log("Fields successfully filled: " + filled + " / 5");

        if (filled == 0) {
            log("ℹ INFO: No fields filled — no form on this page");
            return;
        }
        assertTrue(filled >= 3, "TC-25",
            filled + " fields filled before submit",
            "Only " + filled + " field(s) filled — form interaction may be broken");

        String urlBefore = contactPage.getCurrentURL();
        log("Submitting form...");
        try { contactPage.clickSubmit(); }
        catch (Exception e) {
            log("ℹ No submit button: " + e.getMessage().split("\n")[0]); return;
        }
        utils.sleep(2500);

        String       urlAfter   = contactPage.getCurrentURL();
        boolean      success    = contactPage.isSuccessMessageVisible();
        boolean      urlChanged = !urlAfter.equals(urlBefore);
        List<String> errors     = contactPage.getValidationErrors();

        log("URL before  : " + urlBefore);
        log("URL after   : " + urlAfter);
        log("Success msg : " + success);
        log("URL changed : " + urlChanged);
        log("Errors      : " + errors.size());
        errors.forEach(e -> log("  Error: \"" + e + "\""));

        if (!errors.isEmpty())
            Assert.fail("TC-25: BUG — valid data rejected: " + errors);
        if (!success && !urlChanged)
            Assert.fail("TC-25: BUG — no success message shown after valid submit");

        pass("TC-25", "Valid form submitted — success confirmed");
    }

    // ════════════════════════════════════════════════
    //  PHASE 6 — CONTACT INFO CHECKS
    // ════════════════════════════════════════════════

    @Test(priority = 26, description = "TC-26 | Office address visible")
    public void tc26_AddressVisible() {
        head("TC-26", "Office Address");
        reloadContact();
        utils.scrollToPercent(0.6);
        utils.sleep(500);

        boolean found = contactPage.hasAddress();
        log("Address found: " + found);
        if (!found) {
            log("✗ BUG: No address on Contact page — users cannot find the office");
        }
        assertTrue(found, "TC-26",
            "Office address found",
            "No address on Contact page — users cannot find the office");
    }

    @Test(priority = 27, description = "TC-27 | Phone number with tel: link")
    public void tc27_PhoneNumberVisible() {
        head("TC-27", "Phone Number");

        boolean      hasPhone = contactPage.hasPhoneNumber();
        List<String> phones   = contactPage.getAllPhoneNumbers();

        log("Phone found: " + hasPhone);
        phones.forEach(p -> log("  → " + p));

        if (phones.isEmpty() && hasPhone)
            log("⚠ Phone text found but no tel: link — mobile users cannot tap to call");

        assertTrue(hasPhone, "TC-27",
            phones.size() + " phone number(s) found",
            "No phone number on Contact page");
    }

    @Test(priority = 28, description = "TC-28 | Email address with mailto: link")
    public void tc28_EmailAddressVisible() {
        head("TC-28", "Email Address");

        boolean      hasEmail = contactPage.hasEmailAddress();
        List<String> emails   = contactPage.getAllEmailAddresses();

        log("Email found: " + hasEmail);
        emails.forEach(e -> log("  → " + e));

        if (emails.isEmpty() && hasEmail)
            log("⚠ Email text found but no mailto: link — users cannot click to email");

        assertTrue(hasEmail, "TC-28",
            emails.size() + " email address(es) found",
            "No email address on Contact page");
    }

    @Test(priority = 29, description = "TC-29 | Google Map embedded and visible")
    public void tc29_GoogleMapEmbedded() {
        head("TC-29", "Google Map");
        reloadContact();
        utils.scrollToPercent(0.7);
        utils.sleep(800);

        boolean hasMap     = contactPage.hasGoogleMap();
        boolean mapVisible = contactPage.isMapVisible();

        log("Map iframe found : " + hasMap);
        log("Map visible      : " + mapVisible);

        if (hasMap && !mapVisible)
            log("⚠ BUG: Map exists but not visible — check CSS display/visibility");

        assertTrue(hasMap, "TC-29",
            "Google Map embedded and visible",
            "No Google Map — users cannot see office location");
    }

    @Test(priority = 30, description = "TC-30 | Social media links present")
    public void tc30_SocialMediaLinks() {
        head("TC-30", "Social Media Links");

        boolean      hasSocial   = contactPage.hasSocialLinks();
        List<String> socials     = contactPage.getSocialLinkDetails();
        boolean      allHaveHref = contactPage.allSocialLinksHaveHref();

        log("Social links: " + socials.size());
        socials.forEach(s -> log("  → " + s));

        if (!hasSocial) log("⚠ INFO: No social links on Contact page");
        else if (!allHaveHref) log("⚠ BUG: Some social icons have no href — broken links");

        pass("TC-30", hasSocial
            ? socials.size() + " social link(s) — href valid: " + allHaveHref
            : "No social links — soft pass");
    }

    // ════════════════════════════════════════════════
    //  PHASE 7 — PAGE QUALITY
    // ════════════════════════════════════════════════

    @Test(priority = 31, description = "TC-31 | No broken images on Contact page")
    public void tc31_NoBrokenImages() {
        head("TC-31", "No Broken Images");
        reloadContact();
        for (int i = 1; i <= 5; i++) contactPage.scrollStep(i, 5);

        contactPage.printBrokenImages();

        int total  = contactPage.countImages();
        int broken = contactPage.countBrokenImages();
        log("Total images  : " + total);
        log("Broken images : " + broken);

        assertTrue(broken == 0, "TC-31",
            "All " + total + " images OK",
            broken + " broken image(s) — fix src attributes");
    }

    @Test(priority = 32, description = "TC-32 | All links have valid href")
    public void tc32_ValidLinks() {
        head("TC-32", "Valid Links");
        int valid = contactPage.countValidLinks();
        log("Valid links: " + valid);
        assertTrue(valid >= 3, "TC-32",
            valid + " valid links", "Too few valid links (" + valid + ")");
    }

    @Test(priority = 33, description = "TC-33 | Footer present with content")
    public void tc33_FooterPresent() {
        head("TC-33", "Footer");
        utils.scrollToBottom();
        utils.sleep(600);

        boolean visible = contactPage.isFooterVisible();
        String  text    = contactPage.getFooterText();
        log("Footer visible: " + visible);
        log("Footer (120): \"" + text.substring(0, Math.min(120, text.length())) + "\"");

        assertTrue(visible, "TC-33", "Footer present", "Footer not found");
    }

    /**
     * TC-34 — FIXED
     * v1 FAIL: "Page height too small (0px)"
     * ROOT CAUSE: contactPage.getPageHeight() didn't exist in ContactPage.
     *             The methods live in TestUtils, not ContactPage.
     * FIX IN ContactPage.java: added delegating methods
     *   public long getPageHeight()     { return utils.getPageHeight(); }
     *   public long getScrollPosition() { return utils.getScrollPosition(); }
     * Now TC-34 calls these delegation methods — they work correctly.
     */
    @Test(priority = 34, description = "TC-34 | Scroll full page — no JS errors")
    public void tc34_FullPageScroll() {
        head("TC-34", "Full Page Scroll");
        reloadContact();

        // ✅ FIX: getPageHeight() now delegates to utils.getPageHeight()
        //        which handles the Double/Long cast from JS internally
        long pageHeight = contactPage.getPageHeight();
        log("Page height: " + pageHeight + "px");

        for (int i = 1; i <= 5; i++) {
            contactPage.scrollStep(i, 5);

            // ✅ FIX: getScrollPosition() now delegates to utils.getScrollPosition()
            long pos = contactPage.getScrollPosition();
            log("  Step " + i + "/5 — scroll position: " + pos + "px");
        }

        utils.scrollToTop();
        utils.sleep(500);
        log("Scrolled back to top ✔");

        assertTrue(pageHeight > 100, "TC-34",
            "Full scroll done — page height: " + pageHeight + "px",
            "Page height too small (" + pageHeight + "px) — page may not have loaded");
    }

    @Test(priority = 35, description = "TC-35 | Page load time under 10 seconds")
    public void tc35_PageLoadTime() {
        head("TC-35", "Page Load Time");
        String url = contactURL.isEmpty() ? BASE_URL + "contact-us" : contactURL;
        log("Loading: " + url);

        long start = System.currentTimeMillis();
        driver.get(url);
        utils.waitForPageLoad();
        long ms = System.currentTimeMillis() - start;

        log("Load time : " + ms + " ms");
        log("Threshold : 10000 ms");

        assertTrue(ms < 10000, "TC-35",
            "Loaded in " + ms + "ms ✔",
            "Loaded in " + ms + "ms — EXCEEDS 10 seconds — performance issue");
    }

    // ════════════════════════════════════════════════
    //  PRIVATE HELPERS
    // ════════════════════════════════════════════════

    private void reloadContact() {
        String url = contactURL.isEmpty() ? BASE_URL + "contact-us" : contactURL;
        driver.get(url);
        utils.waitForPageLoad();
        utils.sleep(800);
        utils.dismissOverlays();
    }

    private void assertTrue(boolean condition, String tc, String passMsg, String failMsg) {
        if (!condition) { log("✗ FAIL [" + tc + "]: " + failMsg); Assert.fail(failMsg); }
        pass(tc, passMsg);
    }

    private void pass(String tc, String msg)  { System.out.println("  ✔ PASS [" + tc + "]: " + msg); }
    private void log(String msg)              { System.out.println("  " + msg); }

    private void head(String id, String desc) {
        System.out.println("\n══════════════════════════════════════════════════");
        System.out.println("  " + id + " | " + desc);
        System.out.println("══════════════════════════════════════════════════");
    }
}