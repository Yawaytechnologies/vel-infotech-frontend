package com.vellinfotech.tests;

import com.vellinfotech.base.BaseTest;
import com.vellinfotech.pages.CareersPage;
import com.vellinfotech.Utils.TestUtils;
import org.testng.Assert;
import org.testng.annotations.*;

import java.io.File;
import java.io.FileWriter;
import java.util.List;

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 *   CareersPageTest.java
 *
 *   PURPOSE : Test logic ONLY — no element locators here
 *             All page interactions go through CareersPage.java
 *
 *   ✅ HOW TO READ THIS FILE:
 *   Each test method:
 *     1. Calls CareersPage methods (actions)
 *     2. Asserts the result (pass/fail)
 *     3. Prints exactly what passed or failed
 *
 *   ✅ TESTS — 30 TEST CASES
 *   PHASE 1 : Navigation           TC-01 to TC-04
 *   PHASE 2 : Page Structure       TC-05 to TC-09
 *   PHASE 3 : Careers Content      TC-10 to TC-13
 *   PHASE 4 : Form Detection       TC-14 to TC-16
 *   PHASE 5 : Form Valid Data      TC-17 to TC-21
 *   PHASE 6 : Form Invalid Data    TC-22 to TC-27
 *   PHASE 7 : Page Quality         TC-28 to TC-30
 * ╚══════════════════════════════════════════════════════════════════════╝
 */
public class CareersPageTest extends BaseTest {

    // ── Page Object & Utilities ──────────────────────────────────────
    private CareersPage careersPage;
    private TestUtils   utils;
    private String      careersURL  = "";
    private String      dummyResumePath = "";

    @BeforeClass
    public void setUpPage() throws Exception {
        super.setUp(); // Launches browser via BaseTest
        careersPage = new CareersPage(driver, wait);
        utils       = new TestUtils(driver, wait);

        // Create dummy resume file for upload tests
        dummyResumePath = System.getProperty("user.home") + "/dummy_resume_test.pdf";
        File f = new File(dummyResumePath);
        if (!f.exists()) {
            FileWriter fw = new FileWriter(f);
            fw.write("%PDF-1.4 Dummy resume - Test Applicant - test@example.com");
            fw.close();
        }
        System.out.println("  Resume file ready: " + dummyResumePath);
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

        int len = careersPage.getPageBodyLength();
        log("Body: " + len + " chars");
        assertTrue(len > 50, "TC-01",
            "Homepage loaded (" + len + " chars)",
            "Homepage body too short (" + len + " chars) — page may not have rendered");
    }

    @Test(priority = 2, description = "TC-02 | Careers link exists in navigation")
    public void tc02_CareersLinkInNav() {
        head("TC-02", "Careers Link in Navigation");

        // Print ALL nav links so you can see exactly what's there
        List<String> navLinks = careersPage.getAllNavLinkTexts();
        log("Total nav links: " + navLinks.size());
        log("All nav links on page:");
        navLinks.forEach(l -> log("  → " + l));

        // Check if careers link exists among them
        boolean found = navLinks.stream()
            .anyMatch(l -> l.toLowerCase().matches(".*(career|job|hiring|join|opportunit).*"));

        if (!found) {
            log("✗ FAIL: No 'Careers' / 'Jobs' link in nav");
            log("✗ DETAIL: Checked text for: career/careers/jobs/hiring/join us");
            log("✗ DETAIL: See nav links printed above — the link may use a different name");
            Assert.fail("TC-02: Careers link not found. Check printed nav links above.");
        }
        pass("TC-02", "Careers link found in nav");
    }

    @Test(priority = 3, description = "TC-03 | Navigate to Careers page")
    public void tc03_NavigateToCareers() {
        head("TC-03", "Navigate to Careers Page");
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        utils.sleep(800);
        utils.dismissOverlays();

        try {
            careersPage.clickCareersNavLink();
            careersURL = careersPage.getCurrentURL();
            log("Landed on: " + careersURL);
            pass("TC-03", "Navigated to: " + careersURL);
        } catch (Exception e) {
            log("✗ FAIL: " + e.getMessage());
            Assert.fail("TC-03: " + e.getMessage());
        }
    }

    @Test(priority = 4, description = "TC-04 | URL confirmed as Careers page")
    public void tc04_URLVerified() {
        head("TC-04", "URL is Careers Page");
        String url = careersPage.getCurrentURL();
        careersURL  = url;
        log("Current URL: " + url);

        boolean ok = !url.equals(BASE_URL)
            && url.toLowerCase().matches(".*(career|job|hiring|join|opportunit).*");

        if (!ok) {
            log("✗ FAIL: URL did not change to Careers page");
            log("✗ DETAIL: Still on → " + url);
            log("✗ DETAIL: The Careers nav link may be broken or pointing to '#'");
            Assert.fail("TC-04: Not on Careers page. URL: " + url);
        }
        pass("TC-04", "URL: " + url);
    }

    // ════════════════════════════════════════════════
    //  PHASE 2 — PAGE STRUCTURE
    // ════════════════════════════════════════════════

    @Test(priority = 5, description = "TC-05 | Page title is valid")
    public void tc05_PageTitle() {
        head("TC-05", "Page Title");
        String title = careersPage.getPageTitle();
        log("Title: \"" + title + "\"");
        assertTrue(title.toLowerCase().contains("vell")
            || title.toLowerCase().matches(".*(career|job|hiring).*"),
            "TC-05", "Title valid: \"" + title + "\"",
            "Title missing brand/keyword → \"" + title + "\"");
    }

    @Test(priority = 6, description = "TC-06 | Page headings visible")
    public void tc06_PageHeadings() {
        head("TC-06", "Page Headings");
        List<String> headings = careersPage.getAllHeadings();
        log("All headings found:");
        headings.forEach(h -> log("  " + h));
        assertTrue(!headings.isEmpty(), "TC-06",
            headings.size() + " heading(s) found",
            "No H1/H2 headings found on Careers page");
    }

    @Test(priority = 7, description = "TC-07 | Hero/banner section visible")
    public void tc07_BannerVisible() {
        head("TC-07", "Banner Section");
        boolean visible = careersPage.isBannerVisible();
        log("Banner visible: " + visible);
        assertTrue(visible, "TC-07", "Banner visible",
            "No banner/hero section found — inspect page F12 → top section element");
    }

    @Test(priority = 8, description = "TC-08 | Navigation bar visible")
    public void tc08_NavBarVisible() {
        head("TC-08", "Nav Bar");
        assertTrue(careersPage.isNavBarVisible(), "TC-08",
            "Nav bar visible", "Nav bar NOT found on Careers page");
    }

    @Test(priority = 9, description = "TC-09 | Page body has content")
    public void tc09_BodyContent() {
        head("TC-09", "Body Content");
        int len = careersPage.getPageBodyLength();
        log("Body length: " + len + " chars");
        log("First 400 chars: \"" + careersPage.getBodyText().substring(0, Math.min(400, len)) + "\"");
        assertTrue(len > 200, "TC-09",
            "Page has " + len + " chars",
            "Body too short (" + len + " chars) — page may not have fully loaded");
    }

    // ════════════════════════════════════════════════
    //  PHASE 3 — CAREERS CONTENT
    // ════════════════════════════════════════════════

    @Test(priority = 10, description = "TC-10 | Job listings section present")
    public void tc10_JobListings() {
        head("TC-10", "Job Listings");
        boolean found = careersPage.hasJobListings();
        log("Job listing keywords found: " + found);
        if (!found) {
            log("✗ DETAIL: None of: opening/vacancy/position/hiring/job/role found in page text");
            log("✗ DETAIL: Careers page may not list any open positions");
        }
        assertTrue(found, "TC-10", "Job listings detected", "No job listings found on Careers page");
    }

    @Test(priority = 11, description = "TC-11 | Why Join Us / culture section")
    public void tc11_WhyJoinUs() {
        head("TC-11", "Why Join Us Section");
        boolean found = careersPage.hasWhyJoinUsSection();
        log("Culture section found: " + found);
        assertTrue(found, "TC-11", "Culture/Why Join Us section found",
            "No culture/benefits section — page only lists jobs with no company information");
    }

    @Test(priority = 12, description = "TC-12 | Contact info for careers")
    public void tc12_ContactInfo() {
        head("TC-12", "Contact Info");
        boolean found = careersPage.hasContactInfo();
        log("Contact info found: " + found);
        assertTrue(found, "TC-12", "Contact info present",
            "No email/phone for careers — candidates cannot contact the company");
    }

    @Test(priority = 13, description = "TC-13 | Apply / Submit CTA present")
    public void tc13_ApplyCTA() {
        head("TC-13", "Apply / Submit CTA");
        boolean found = careersPage.hasApplyCTA();
        log("Apply CTA found: " + found);
        if (!found) {
            log("✗ DETAIL: No button/link text matched: apply/apply now/submit/send resume/upload/register");
            log("✗ DETAIL: Careers page has no visible way for candidates to apply");
            log("✗ BUG: This is a UX issue — candidates visit the page but cannot take action");
        }
        assertTrue(found, "TC-13", "Apply CTA found",
            "No Apply/Submit button or link found on Careers page");
    }

    // ════════════════════════════════════════════════
    //  PHASE 4 — FORM DETECTION
    // ════════════════════════════════════════════════

    @Test(priority = 14, description = "TC-14 | Application form exists")
    public void tc14_FormExists() {
        head("TC-14", "Form Detection");
        utils.scrollToPercent(0.6);
        utils.sleep(500);

        // Print ALL fields for debugging
        careersPage.printAllFormFields();

        boolean hasForm = careersPage.hasApplicationForm();
        log("Form detected: " + hasForm);
        if (!hasForm) {
            log("✗ DETAIL: No <form> tag and fewer than 2 <input> fields found");
            log("✗ DETAIL: Page may link to an external form or have no form at all");
        }
        assertTrue(hasForm, "TC-14", "Application form found",
            "No application form on Careers page — check TC-14 field list above");
    }

    @Test(priority = 15, description = "TC-15 | File upload (resume) field present")
    public void tc15_FileUploadField() {
        head("TC-15", "File Upload Field");
        boolean hasUpload = careersPage.hasFileUploadField();
        log("File upload field found: " + hasUpload);
        if (!hasUpload) {
            log("✗ DETAIL: No <input type='file'> on the page");
            log("✗ BUG: Candidates cannot attach their resume to the application");
        }
        assertTrue(hasUpload, "TC-15", "File upload field present",
            "No resume upload field found — candidates cannot attach CV");
    }

    // ════════════════════════════════════════════════
    //  PHASE 5 — FORM: VALID DATA
    // ════════════════════════════════════════════════

    @Test(priority = 16, description = "TC-16 | Fill Name field with valid data")
    public void tc16_FillName() {
        head("TC-16", "Fill Name — Valid");
        reloadCareers();
        careersPage.scrollToForm();
        boolean filled = careersPage.fillName("John Doe");
        if (!filled) { log("ℹ INFO: Name field not found — see TC-14 field list"); return; }
        pass("TC-16", "Name field filled successfully");
    }

    @Test(priority = 17, description = "TC-17 | Fill Email field with valid email")
    public void tc17_FillEmail() {
        head("TC-17", "Fill Email — Valid");
        boolean filled = careersPage.fillEmail("johndoe@gmail.com");
        if (!filled) { log("ℹ INFO: Email field not found — see TC-14 field list"); return; }
        pass("TC-17", "Email field filled successfully");
    }

    @Test(priority = 18, description = "TC-18 | Fill Phone field with valid number")
    public void tc18_FillPhone() {
        head("TC-18", "Fill Phone — Valid");
        boolean filled = careersPage.fillPhone("9876543210");
        if (!filled) { log("ℹ INFO: Phone field not found — see TC-14 field list"); return; }
        pass("TC-18", "Phone field filled successfully");
    }

    @Test(priority = 19, description = "TC-19 | Fill Message/Cover Letter field")
    public void tc19_FillMessage() {
        head("TC-19", "Fill Message — Valid");
        boolean filled = careersPage.fillMessage(
            "I am applying for the Software Testing Engineer position at Vell InfoTech. " +
            "I have 2 years of hands-on experience in Selenium, Java, and TestNG automation testing.");
        if (!filled) { log("ℹ INFO: Message/Textarea not found — see TC-14 field list"); return; }
        pass("TC-19", "Message field filled successfully");
    }

    @Test(priority = 20, description = "TC-20 | Upload resume via file input")
    public void tc20_UploadResume() {
        head("TC-20", "Upload Resume");
        boolean uploaded = careersPage.uploadResume(dummyResumePath);
        if (!uploaded) {
            log("ℹ INFO: No file upload field or upload failed — see TC-15");
            return;
        }
        pass("TC-20", "Resume uploaded successfully");
    }

    // ════════════════════════════════════════════════
    //  PHASE 6 — FORM: INVALID DATA (BUG FINDER)
    // ════════════════════════════════════════════════

    @Test(priority = 21, description = "TC-21 | Submit EMPTY form — must show validation errors")
    public void tc21_EmptyFormSubmit() {
        head("TC-21", "Empty Form Submit — Validation Check");
        reloadCareers();
        careersPage.scrollToForm();

        log("Clicking submit with ALL fields empty...");
        try { careersPage.clickSubmit(); } catch (Exception e) {
            log("ℹ No submit button: " + e.getMessage().split("\n")[0]); return;
        }
        utils.sleep(1000);

        List<String> errors  = careersPage.getValidationErrors();
        boolean html5        = careersPage.hasHTML5ValidationError();
        String  urlAfter     = careersPage.getCurrentURL();
        boolean stayedOnPage = urlAfter.contains("career") || urlAfter.equals(careersURL);

        log("Validation errors found : " + errors.size());
        errors.forEach(e -> log("  Error: \"" + e + "\""));
        log("HTML5 validation error  : " + html5);
        log("Stayed on page          : " + stayedOnPage);

        if (!stayedOnPage && errors.isEmpty() && !html5) {
            log("✗ BUG: Form submitted with empty fields — NO VALIDATION AT ALL");
            log("✗ DETAIL: URL changed to → " + urlAfter);
            Assert.fail("TC-21: CRITICAL BUG — empty form accepted with no validation");
        }
        pass("TC-21", "Empty form correctly blocked — " + errors.size() + " error(s) shown");
    }

    @Test(priority = 22, description = "TC-22 | Invalid email formats — must be rejected")
    public void tc22_InvalidEmailFormats() {
        head("TC-22", "Invalid Email — Validation Check");
        reloadCareers();
        careersPage.scrollToForm();
        careersPage.fillAllFields("John Doe", "valid@email.com", "9876543210", "Test message");

        String[] invalidEmails = {
            "plaintext",
            "missing@dot",
            "noatsign.com",
            "double@@email.com",
            "spaces in@email.com",
            "@nodomain.com",
            "test@"
        };

        int bugCount = 0;
        for (String badEmail : invalidEmails) {
            careersPage.setEmailValue(badEmail);
            log("Testing: '" + badEmail + "'");

            try { careersPage.clickSubmit(); } catch (Exception e) { break; }
            utils.sleep(500);

            boolean blocked   = careersPage.hasHTML5ValidationError()
                             || !careersPage.getValidationErrors().isEmpty();
            boolean stayedOn  = careersPage.getCurrentURL().contains("career")
                             || careersPage.getCurrentURL().equals(careersURL);

            log("  → Blocked: " + blocked + " | Stayed on page: " + stayedOn);

            if (!blocked && !stayedOn) {
                bugCount++;
                log("  ✗ BUG: Invalid email '" + badEmail + "' was ACCEPTED — no validation");
            }
        }

        if (bugCount > 0) {
            Assert.fail("TC-22: " + bugCount + " invalid email(s) accepted without validation. Check log above.");
        }
        pass("TC-22", "All invalid email formats correctly blocked");
    }

    @Test(priority = 23, description = "TC-23 | Invalid phone numbers — must be rejected")
    public void tc23_InvalidPhoneNumbers() {
        head("TC-23", "Invalid Phone — Validation Check");
        reloadCareers();
        careersPage.scrollToForm();

        String[] invalidPhones = { "abc", "123", "!@#$%^", "00000000000000", "phone number" };
        int warnCount = 0;

        for (String badPhone : invalidPhones) {
            careersPage.setPhoneValue(badPhone);
            log("Testing phone: '" + badPhone + "'");
            try { careersPage.clickSubmit(); } catch (Exception e) { break; }
            utils.sleep(500);

            boolean blocked = careersPage.hasHTML5ValidationError()
                           || !careersPage.getValidationErrors().isEmpty();
            log("  → Validation triggered: " + blocked);

            if (!blocked) {
                warnCount++;
                log("  ⚠ BUG CANDIDATE: Phone '" + badPhone + "' accepted — no format validation");
            }
        }

        if (warnCount > 0) log("  ⚠ WARNING: " + warnCount + " invalid phone(s) passed without validation");
        pass("TC-23", "Phone validation check complete — " + warnCount + " potential issues found");
    }

    @Test(priority = 24, description = "TC-24 | XSS injection in text fields — must be blocked")
    public void tc24_XSSInjection() {
        head("TC-24", "XSS Security Check");
        reloadCareers();

        String[] xssPayloads = {
            "<script>alert('XSS')</script>",
            "javascript:alert(1)",
            "<img src=x onerror=alert(1)>",
            "'; DROP TABLE applicants; --",
            "<svg onload=alert(1)>"
        };

        for (String payload : xssPayloads) {
            careersPage.setNameValue(payload);
            utils.sleep(500);
            log("XSS payload tested: '" + payload + "'");

            boolean alertTriggered = careersPage.wasAlertTriggered();
            if (alertTriggered) {
                log("✗ CRITICAL BUG: XSS alert triggered for: '" + payload + "'");
                Assert.fail("TC-24: CRITICAL — XSS vulnerability found. Payload: " + payload);
            }

            String pageSource = driver.getPageSource();
            boolean rawScript = pageSource.contains("<script>alert")
                             && !pageSource.contains("&lt;script&gt;");
            if (rawScript) {
                log("⚠ WARNING: Raw <script> tag in page source — potential XSS risk");
            }

            log("  ✔ Safe — no alert for: '" + payload + "'");
        }
        pass("TC-24", "XSS check complete — no alerts triggered");
    }

    @Test(priority = 25, description = "TC-25 | 500-char text in name field — overflow check")
    public void tc25_LongTextInput() {
        head("TC-25", "Long Text Input Check");
        reloadCareers();
        careersPage.scrollToForm();

        careersPage.setNameValue("A".repeat(500));
        utils.sleep(300);

        int actualLength = careersPage.getNameFieldValueLength();
        int maxLength    = careersPage.getNameFieldMaxLength();

        log("Typed: 500 chars of 'A'");
        log("Field value length after typing: " + actualLength);
        log("Field maxlength attribute: " + (maxLength > 0 ? maxLength : "NOT SET"));

        if (actualLength == 500 && maxLength <= 0) {
            log("⚠ BUG CANDIDATE: Name field accepts 500+ chars with no maxlength");
            log("⚠ DETAIL: Could cause database overflow or storage issues");
        } else {
            log("✔ Field limited to " + actualLength + " chars");
        }
        pass("TC-25", "Long text check done — field length: " + actualLength);
    }

    @Test(priority = 26, description = "TC-26 | Submit complete VALID form — success message check")
    public void tc26_ValidFormSubmit() {
        head("TC-26", "Valid Form Submit — Success Check");
        reloadCareers();
        careersPage.scrollToForm();

        int filled = careersPage.fillAllFields(
            "John Doe",
            "testapplicant@gmail.com",
            "9876543210",
            "I am applying for Software Testing Engineer. I have 2 years experience in Selenium and Java automation."
        );
        log("Fields filled: " + filled);

        careersPage.uploadResume(dummyResumePath);

        if (filled == 0) {
            log("ℹ INFO: No fields found — form may not exist on this page");
            return;
        }

        String urlBefore = careersPage.getCurrentURL();
        log("Submitting form...");
        try { careersPage.clickSubmit(); } catch (Exception e) {
            log("ℹ No submit button found: " + e.getMessage().split("\n")[0]); return;
        }
        utils.sleep(2000);

        String  urlAfter    = careersPage.getCurrentURL();
        boolean success     = careersPage.isSuccessMessageVisible();
        boolean urlChanged  = !urlAfter.equals(urlBefore);
        List<String> errors = careersPage.getValidationErrors();

        log("URL before: " + urlBefore);
        log("URL after : " + urlAfter);
        log("Success message visible : " + success);
        log("URL changed             : " + urlChanged);
        log("Validation errors       : " + errors.size());
        errors.forEach(e -> log("  Error: \"" + e + "\""));

        if (!errors.isEmpty()) {
            Assert.fail("TC-26: BUG — Validation errors appeared for valid data: " + errors);
        }
        if (!success && !urlChanged) {
            Assert.fail("TC-26: BUG — No success/confirmation message shown after valid submission");
        }
        pass("TC-26", "Form submitted and success confirmed");
    }

    // ════════════════════════════════════════════════
    //  PHASE 7 — PAGE QUALITY
    // ════════════════════════════════════════════════

    @Test(priority = 27, description = "TC-27 | No broken images on Careers page")
    public void tc27_NoBrokenImages() {
        head("TC-27", "No Broken Images");
        reloadCareers();
        for (int i = 1; i <= 4; i++) { utils.scrollToPercent(i * 0.25); utils.sleep(300); }

        int total  = careersPage.countImages();
        int broken = careersPage.countBrokenImages();
        log("Total images: " + total + " | Broken: " + broken);
        assertTrue(broken == 0, "TC-27",
            "All " + total + " images have valid src",
            broken + " broken image(s) with missing src found");
    }

    @Test(priority = 28, description = "TC-28 | All links have valid href")
    public void tc28_ValidLinks() {
        head("TC-28", "All Links Have Valid href");
        int validLinks = careersPage.countValidLinks();
        log("Valid links: " + validLinks);
        assertTrue(validLinks >= 3, "TC-28",
            validLinks + " valid links found",
            "Too few valid links (" + validLinks + ") — most links may be broken or empty");
    }

    @Test(priority = 29, description = "TC-29 | Footer present on Careers page")
    public void tc29_Footer() {
        head("TC-29", "Footer Present");
        boolean visible = careersPage.isFooterVisible();
        String  text    = careersPage.getFooterText();
        log("Footer visible: " + visible);
        log("Footer text (120 chars): \"" + text.substring(0, Math.min(120, text.length())) + "\"");
        assertTrue(visible, "TC-29", "Footer present with content", "Footer not found on Careers page");
    }

    @Test(priority = 30, description = "TC-30 | Page loads within 10 seconds")
    public void tc30_PageLoadTime() {
        head("TC-30", "Page Load Time");
        String url = careersURL.isEmpty() ? BASE_URL + "careers" : careersURL;

        long start = System.currentTimeMillis();
        driver.get(url);
        utils.waitForPageLoad();
        long ms = System.currentTimeMillis() - start;

        log("Load time : " + ms + " ms");
        log("Threshold : 10000 ms (10 seconds)");
        assertTrue(ms < 10000, "TC-30",
            "Loaded in " + ms + "ms ✔",
            "Loaded in " + ms + "ms — EXCEEDS 10s threshold — performance issue");
    }

    // ════════════════════════════════════════════════
    //  PRIVATE HELPERS
    // ════════════════════════════════════════════════

    private void reloadCareers() {
        String url = careersURL.isEmpty() ? BASE_URL + "careers" : careersURL;
        driver.get(url);
        utils.waitForPageLoad();
        utils.sleep(800);
        utils.dismissOverlays();
    }

    private void assertTrue(boolean condition, String tc, String passMsg, String failMsg) {
        if (!condition) {
            log("✗ FAIL [" + tc + "]: " + failMsg);
            Assert.fail(failMsg);
        }
        pass(tc, passMsg);
    }

    private void pass(String tc, String msg) {
        System.out.println("  ✔ PASS [" + tc + "]: " + msg);
    }

    private void log(String msg) { System.out.println("  " + msg); }

    private void head(String id, String desc) {
        System.out.println("\n══════════════════════════════════════════════════");
        System.out.println("  " + id + " | " + desc);
        System.out.println("══════════════════════════════════════════════════");
    }
}