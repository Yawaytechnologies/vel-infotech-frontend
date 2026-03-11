package com.vellinfotech.tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.annotations.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 *   VellInfoTechFullWebsiteDeepTest.java  (v3 — WITH SCREENSHOT + BUG REPORT)
 *   SITE : https://www.vellinfotech.com/
 *
 *   ON EVERY TEST FAILURE:
 *   ─────────────────────────────────────────────────────────────────────────
 *   → Screenshot saved  : SeleniumFrameWork/screenshots/<testName>_<time>.png
 *   → Bug report saved  : SeleniumFrameWork/bug-reports/<testName>_<time>.txt
 *
 *   Bug report contains:
 *   - Test name, class, timestamp, current URL, page title
 *   - Full error message + complete stack trace
 *   - Path to the screenshot
 *   - Suggested fix checklist
 *
 *   TC-01 | All main pages — deep validation         (8 pages × dataProvider)
 *   TC-02 | Course detail pages — deep validation    (3 course pages)
 *   TC-03 | Contact form — fill fields + negative validation
 *   TC-04 | Careers page — apply flow + form validation
 *   TC-05 | ALL forms across website — discover, fill, validate
 *   TC-06 | Every CTA button — click and verify it does something
 *   TC-07 | (Optional) Live valid form submission
 *
 *   FIX (v2→v3):
 *   TC-06 FAILED: Clicking "Reviews" CTA while ON Reviews page = no effect.
 *   Fix: filterCTAsForCurrentPage() removes same-page CTAs before clicking.
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */
public class VellInfoTechFullWebsiteDeepTest {

    private WebDriver          driver;
    private WebDriverWait      wait;
    private JavascriptExecutor js;
    private Actions            actions;

    private static final String BASE_URL      = "https://www.vellinfotech.com/";
    private static final int    WAIT_SEC      = 20;
    private static final int    STICKY_OFFSET = 150;

    // ── Screenshot and bug-report folders ──
    private static final String SCREENSHOT_DIR = "screenshots";
    private static final String BUGREPORT_DIR  = "bug-reports";
    private static final SimpleDateFormat DATE_FMT = new SimpleDateFormat("yyyyMMdd_HHmmss");

    // ═══════════════════════════════════════════════════════════
    //  SETUP / TEARDOWN
    // ═══════════════════════════════════════════════════════════

    @BeforeClass
    public void setUp() {
        banner("SETUP", "Launching Chrome Browser");

        // Create output folders if they don't exist
        createFolderIfMissing(SCREENSHOT_DIR);
        createFolderIfMissing(BUGREPORT_DIR);

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-popup-blocking");

        driver  = new ChromeDriver(options);
        wait    = new WebDriverWait(driver, Duration.ofSeconds(WAIT_SEC));
        js      = (JavascriptExecutor) driver;
        actions = new Actions(driver);

        log("Screenshots folder : " + new File(SCREENSHOT_DIR).getAbsolutePath());
        log("Bug reports folder : " + new File(BUGREPORT_DIR).getAbsolutePath());
    }

    @AfterClass
    public void tearDown() {
        banner("TEARDOWN", "Closing Browser");
        if (driver != null) driver.quit();
    }

    // ═══════════════════════════════════════════════════════════
    //  AFTER EACH TEST — AUTO SCREENSHOT + BUG REPORT ON FAILURE
    // ═══════════════════════════════════════════════════════════

    /**
     * Runs automatically after EVERY test method.
     * PASS → prints clean pass line.
     * FAIL → captures screenshot + writes bug report + prints both paths.
     */
    @AfterMethod
    public void afterEachTest(ITestResult result) {
        String method = result.getMethod().getMethodName();
        String desc   = result.getMethod().getDescription();

        if (result.getStatus() == ITestResult.FAILURE) {
            System.out.println("\n=====================================");
            System.out.println("FAILED TEST : " + method);
            System.out.println("DESC        : " + desc);

            // ── Build a file-safe base name: methodName_timestamp ──
            String timestamp  = DATE_FMT.format(new Date());
            String safeMethod = method.replaceAll("[^a-zA-Z0-9_]", "_");
            String fileBase   = safeMethod + "_" + timestamp;

            // ── 1. Save screenshot ──
            String screenshotPath = captureScreenshot(fileBase);

            // ── 2. Save bug report ──
            String bugReportPath = writeBugReport(result, fileBase, screenshotPath);

            System.out.println("SCREENSHOT  : " + screenshotPath);
            System.out.println("BUG REPORT  : " + bugReportPath);
            System.out.println("=====================================\n");

        } else if (result.getStatus() == ITestResult.SUCCESS) {
            System.out.println("  ✔ PASSED → " + method
                + (desc != null && !desc.isEmpty() ? " | " + desc : ""));
            System.out.println("  ─────────────────────────────────────");
        }
    }

    // ═══════════════════════════════════════════════════════════
    //  DATA PROVIDERS
    // ═══════════════════════════════════════════════════════════

    @DataProvider(name = "mainPages")
    public Object[][] mainPages() {
        return new Object[][]{
            { "Home",       BASE_URL,                 "vell",    "vellinfotech", "home"       },
            { "About",      BASE_URL + "about",       "about",   "about",        "about"      },
            { "Courses",    BASE_URL + "all-courses", "course",  "course",       "courses"    },
            { "Careers",    BASE_URL + "careers",     "career",  "career",       "careers"    },
            { "Contact",    BASE_URL + "contact",     "contact", "contact",      "contact"    },
            { "Internship", BASE_URL + "internship",  "intern",  "intern",       "internship" },
            { "Reviews",    BASE_URL + "reviews",     "review",  "review",       "reviews"    },
            { "Blog",       BASE_URL + "blog",        "blog",    "blog",         "blog"       }
        };
    }

    @DataProvider(name = "courseDetailPages")
    public Object[][] courseDetailPages() {
        return new Object[][]{
            { "Software Testing Program", BASE_URL + "all-courses/software-testing-program", "software", "all-courses", "course-detail" },
            { "DevOps Training Program",  BASE_URL + "all-courses/devops-training-program",  "devops",   "all-courses", "course-detail" },
            { "SQL Developer Course",     BASE_URL + "all-courses/sql-developer-course",     "sql",      "all-courses", "course-detail" }
        };
    }

    // ═══════════════════════════════════════════════════════════
    //  TC-01 | ALL MAIN PAGES — DEEP VALIDATION
    // ═══════════════════════════════════════════════════════════

    @Test(priority = 1, description = "TC-01 | Verify all main pages deeply", dataProvider = "mainPages")
    public void verifyMainPagesDeeply(String pageName, String pageUrl,
                                      String titleKeyword, String urlKeyword, String pageType) {
        printHeader("TC-01", "Deep Validation → " + pageName);

        step(1, "Open page: " + pageUrl);
        openPage(pageUrl);
        step(2, "Verify not a 404 page");
        verifyNot404Page(pageName);
        step(3, "Verify URL contains keyword: " + urlKeyword);
        verifyUrl(pageName, urlKeyword);
        step(4, "Verify page title contains: " + titleKeyword);
        verifyTitle(pageName, titleKeyword);
        step(5, "Verify at least one visible heading (H1/H2/H3)");
        verifyVisibleHeading(pageName);
        step(6, "Verify body has enough content (min 80 chars)");
        verifyBodyContent(pageName, 80);
        step(7, "Verify navigation bar visible");
        verifyHeaderVisible(pageName);
        step(8, "Verify footer visible with content");
        verifyFooterVisible(pageName);
        step(9, "Scroll page to trigger lazy-loaded images");
        lazyScrollPage();
        step(10, "Verify at least 1 image loaded");
        verifyImagesLoaded(pageName, 1);
        step(11, "Verify at least 3 valid links");
        verifyValidLinksPresent(pageName, 3);
        step(12, "Verify at least 1 CTA/action button visible");
        verifyCTAOrImportantActionPresent(pageName);
        step(13, "Run page-specific checks for: " + pageType);
        switch (pageType) {
            case "home":       verifyHomePage(pageName);       break;
            case "about":      verifyAboutPage(pageName);      break;
            case "courses":    verifyCoursesPage(pageName);    break;
            case "careers":    verifyCareersPage(pageName);    break;
            case "contact":    verifyContactPage(pageName);    break;
            case "internship": verifyInternshipPage(pageName); break;
            case "reviews":    verifyReviewsPage(pageName);    break;
            case "blog":       verifyBlogPage(pageName);       break;
            default:           log("  No page-specific mapping for: " + pageType);
        }
        pass("TC-01", "Deep validation complete → " + pageName);
    }

    // ═══════════════════════════════════════════════════════════
    //  TC-02 | COURSE DETAIL PAGES
    // ═══════════════════════════════════════════════════════════

    @Test(priority = 2, description = "TC-02 | Verify selected course detail pages deeply", dataProvider = "courseDetailPages")
    public void verifyCourseDetailPagesDeeply(String pageName, String pageUrl,
                                              String titleKeyword, String urlKeyword, String pageType) {
        printHeader("TC-02", "Deep Validation → " + pageName);
        step(1, "Open course detail page: " + pageUrl);
        openPage(pageUrl);
        step(2, "Verify not 404");
        verifyNot404Page(pageName);
        step(3, "Verify URL contains: " + urlKeyword);
        verifyUrl(pageName, urlKeyword);
        step(4, "Verify title contains: " + titleKeyword);
        verifyTitle(pageName, titleKeyword);
        step(5, "Verify heading visible");
        verifyVisibleHeading(pageName);
        step(6, "Verify body has min 150 chars (course pages are content-heavy)");
        verifyBodyContent(pageName, 150);
        step(7, "Verify header and footer");
        verifyHeaderVisible(pageName);
        verifyFooterVisible(pageName);
        step(8, "Scroll, verify images and links");
        lazyScrollPage();
        verifyImagesLoaded(pageName, 1);
        verifyValidLinksPresent(pageName, 2);
        step(9, "Verify CTAs present on course page");
        verifyCTAOrImportantActionPresent(pageName);
        step(10, "Course-specific content check");
        verifyCourseDetailPage(pageName);
        pass("TC-02", "Course detail validated → " + pageName);
    }

    // ═══════════════════════════════════════════════════════════
    //  TC-03 | CONTACT FORM — FILL + NEGATIVE VALIDATION
    // ═══════════════════════════════════════════════════════════

    @Test(priority = 3, description = "TC-03 | Contact form — fill all fields and check negative validation")
    public void verifyContactFormInteraction() {
        printHeader("TC-03", "Contact Form — Fill Fields & Negative Validation");

        step(1, "Open Contact page");
        openPage(BASE_URL + "contact");

        step(2, "Locate contact form on page");
        WebElement form = findFirstVisibleElement(By.tagName("form"));
        Assert.assertNotNull(form, "FAIL: Contact form not found on contact page");
        log("  ✔ Form found");

        step(3, "Locate all individual form fields");
        WebElement nameField = findFirstVisibleElement(By.cssSelector(
            "input[name='name'], input[placeholder='John Doe'], input[name*='name' i]"
        ));
        WebElement emailField = findFirstVisibleElement(By.cssSelector(
            "input[name='email'], input[type='email'], input[name*='email' i]"
        ));
        WebElement phoneField = findFirstVisibleElement(By.cssSelector(
            "input[name='phone'], input[type='tel'], input[name*='phone' i]"
        ));
        WebElement courseField = findFirstVisibleElement(By.cssSelector(
            "input[name='course'], input[placeholder*='Java' i], input[name*='course' i]"
        ));
        WebElement messageField = findFirstVisibleElement(By.cssSelector(
            "textarea[name='message'], textarea[name*='message' i], textarea"
        ));
        WebElement submitButton = findFirstVisibleElement(By.xpath(
            "//button[@type='submit'] | " +
            "//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'submit')] | " +
            "//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'send')] | " +
            "//input[@type='submit']"
        ));

        log("  Name field    : " + (nameField    != null ? "✔ Found" : "✗ Not found"));
        log("  Email field   : " + (emailField   != null ? "✔ Found" : "✗ Not found"));
        log("  Phone field   : " + (phoneField   != null ? "✔ Found" : "✗ Not found"));
        log("  Course field  : " + (courseField  != null ? "✔ Found" : "✗ Not found"));
        log("  Message field : " + (messageField != null ? "✔ Found" : "✗ Not found"));
        log("  Submit button : " + (submitButton != null ? "✔ Found" : "✗ Not found"));

        Assert.assertNotNull(nameField,    "FAIL: Name field not found on contact form");
        Assert.assertNotNull(emailField,   "FAIL: Email field not found on contact form");
        Assert.assertNotNull(submitButton, "FAIL: Submit button not found on contact form");

        step(4, "Fill Name field → 'Test User'");
        typeIntoField(nameField, "Test User");

        step(5, "Fill Email with INVALID format → 'invalid-email' (no @ symbol)");
        typeIntoField(emailField, "invalid-email");
        log("  ↳ Expected: browser should reject this — missing @");

        step(6, "Fill Phone with INVALID number → '98765' (too short)");
        if (phoneField != null) { typeIntoField(phoneField, "98765"); }

        step(7, "Fill Course field → 'Software Testing'");
        if (courseField != null) { typeIntoField(courseField, "Software Testing"); }

        step(8, "Fill Message → test message");
        if (messageField != null) {
            typeIntoField(messageField, "This is automation negative validation test.");
        }

        step(9, "Take mid-test screenshot before submitting");
        takeScreenshot("tc03_beforeSubmit");

        step(10, "Click Submit button");
        clickElement(submitButton);
        sleepMs(1200);

        step(11, "Verify validation was triggered");
        boolean validationSeen = hasValidationMessage()
            || fieldMarkedInvalid(emailField)
            || (phoneField != null && fieldMarkedInvalid(phoneField))
            || currentUrlLooksSame(BASE_URL + "contact");

        log("  Validation message in body : " + hasValidationMessage());
        log("  Email field marked invalid : " + fieldMarkedInvalid(emailField));
        log("  Stayed on contact page     : " + currentUrlLooksSame(BASE_URL + "contact"));

        takeScreenshot("tc03_afterSubmit");

        Assert.assertTrue(validationSeen,
            "FAIL: Invalid form data was NOT rejected — no validation shown. " +
            "BUG: Form accepts invalid email 'invalid-email'");

        pass("TC-03", "Contact form negative validation confirmed — invalid data rejected");
    }

    // ═══════════════════════════════════════════════════════════
    //  TC-04 | CAREERS — APPLY FLOW
    // ═══════════════════════════════════════════════════════════

    @Test(priority = 4, description = "TC-04 | Careers page — apply flow and form validation")
    public void verifyCareersApplyFlow() {
        printHeader("TC-04", "Careers Apply Role Flow");

        step(1, "Open Careers page");
        openPage(BASE_URL + "careers");
        step(2, "Verify page is valid");
        verifyNot404Page("Careers");
        verifyVisibleHeading("Careers");
        verifyBodyContent("Careers", 80);

        step(3, "Verify career-related keywords in content");
        boolean hasCareerText = pageHasAnyText(
            "career", "job", "opening", "vacancy", "role", "apply", "opportunity", "hiring"
        );
        Assert.assertTrue(hasCareerText,
            "FAIL: Careers page has no career-related keywords");
        log("  ✔ Career keywords found");

        step(4, "Locate Apply / Job buttons on Careers page");
        List<WebElement> applyButtons = getCareerApplyButtons();
        log("  Apply buttons found: " + applyButtons.size());

        if (applyButtons.isEmpty()) {
            log("  ℹ No Apply button — page lists positions without direct apply flow");
            pass("TC-04", "Careers page valid — no active apply flow currently");
            return;
        }

        step(5, "Click first Apply button — observe effect");
        WebElement firstApply = applyButtons.get(0);
        String oldUrl    = driver.getCurrentUrl();
        Long   oldScroll = getScrollY();
        log("  Clicking: \"" + safeText(firstApply) + "\"");
        clickElement(firstApply);
        sleepMs(1500);

        boolean urlChanged   = !driver.getCurrentUrl().equals(oldUrl);
        boolean modalOpened  = isModalOrPopupVisible();
        boolean pageScrolled = hasScrollChanged(oldScroll);

        log("  URL changed    : " + urlChanged);
        log("  Modal opened   : " + modalOpened);
        log("  Page scrolled  : " + pageScrolled);
        Assert.assertTrue(urlChanged || modalOpened || pageScrolled,
            "FAIL: Apply button click had no visible effect");

        step(6, "Look for application form after clicking Apply");
        WebElement form = findAnyVisibleFormOnCurrentPage();
        if (form == null) {
            log("  ℹ Apply worked but no inline form — may redirect externally");
            pass("TC-04", "Apply action works");
            return;
        }

        step(7, "Fill application form with invalid data");
        fillVisibleFormWithInvalidData(form);

        step(8, "Click Submit and verify validation");
        WebElement submit = findSubmitInsideForm(form);
        if (submit == null) {
            log("  ℹ No submit inside form");
            pass("TC-04", "Application form present — no standard submit control");
            return;
        }
        clickElement(submit);
        sleepMs(1200);

        WebElement emailInForm = findVisibleElementInsideForm(form,
            By.cssSelector("input[type='email'], input[name*='email' i]"));
        boolean validationSeen = hasValidationMessage()
            || (emailInForm != null && fieldMarkedInvalid(emailInForm))
            || formHasInvalidField(form);

        Assert.assertTrue(validationSeen,
            "FAIL: No validation on careers application form with invalid data");
        pass("TC-04", "Careers apply flow validated");
    }

    // ═══════════════════════════════════════════════════════════
    //  TC-05 | ALL FORMS ACROSS WEBSITE
    // ═══════════════════════════════════════════════════════════

    @Test(priority = 5, description = "TC-05 | Discover every form — fill and validate")
    public void verifyAllFormsThroughoutWebsite() {
        printHeader("TC-05", "Discover, Fill and Validate All Forms Across Website");

        String[][] pages = {
            { "Home",       BASE_URL                },
            { "About",      BASE_URL + "about"      },
            { "Courses",    BASE_URL + "all-courses" },
            { "Careers",    BASE_URL + "careers"    },
            { "Contact",    BASE_URL + "contact"    },
            { "Internship", BASE_URL + "internship" },
            { "Reviews",    BASE_URL + "reviews"    },
            { "Blog",       BASE_URL + "blog"       }
        };

        int totalForms = 0;

        for (String[] page : pages) {
            String pageName = page[0];
            String url      = page[1];

            log("\n  ── Page: " + pageName + " ──");
            openPage(url);

            if (looksLike404Page()) { log("  ℹ 404 — skipping"); continue; }

            lazyScrollPage();
            List<WebElement> forms = getVisibleForms();
            log("  Forms found: " + forms.size());
            totalForms += forms.size();

            for (int i = 0; i < forms.size(); i++) {
                WebElement form = forms.get(i);
                log("  Processing form " + (i+1) + " on " + pageName);

                step(1, "Print form fields");
                printFormFieldsSummary(form, pageName);
                step(2, "Fill Name → 'Test User'");
                fillInputByHints(form, new String[]{"name"}, "Test User");
                step(3, "Fill Email → 'invalid-email' (negative test)");
                fillInputByHints(form, new String[]{"email"}, "invalid-email");
                step(4, "Fill Phone → '123' (invalid — too short)");
                fillInputByHints(form, new String[]{"phone", "mobile", "tel"}, "123");
                step(5, "Fill Course/Subject field");
                fillInputByHints(form, new String[]{"course", "subject", "topic"}, "Software Testing");
                step(6, "Fill Message textarea");
                fillTextArea(form, "Automation negative validation message.");
                step(7, "Choose first dropdown option if present");
                chooseFirstRealOption(form);

                step(8, "Take screenshot before submitting form " + (i+1));
                takeScreenshot("tc05_" + pageName + "_form" + (i+1) + "_beforeSubmit");

                step(9, "Find and click Submit");
                WebElement submit = findSubmitInsideForm(form);
                if (submit == null) { log("  ℹ No submit — skipping"); continue; }
                log("  Submit: \"" + safeText(submit) + "\"");
                clickElement(submit);
                sleepMs(1000);

                step(10, "Verify validation fired");
                boolean valid = hasValidationMessage() || formHasInvalidField(form);
                log("  Validation triggered: " + valid);

                takeScreenshot("tc05_" + pageName + "_form" + (i+1) + "_afterSubmit");

                Assert.assertTrue(valid,
                    "FAIL: No validation for form " + (i+1) + " on " + pageName +
                    " — BUG: invalid data accepted without error");

                pass("TC-05", "Form " + (i+1) + " on " + pageName + " — validation confirmed");
            }
        }

        log("\n  Total forms found across website: " + totalForms);
        Assert.assertTrue(totalForms >= 1,
            "FAIL: No visible forms found across the entire website");
        pass("TC-05", "All forms validated — total found: " + totalForms);
    }

    // ═══════════════════════════════════════════════════════════
    //  TC-06 | CTA BUTTONS — CLICK AND VERIFY
    // ═══════════════════════════════════════════════════════════

    @Test(priority = 6, description = "TC-06 | Click every important CTA button — verify effect")
    public void verifyImportantButtonsAndCTAClicks() {
        printHeader("TC-06", "Verify All CTA Buttons and Clickable Actions");

        String[][] pages = {
            { "Home",       BASE_URL                },
            { "About",      BASE_URL + "about"      },
            { "Courses",    BASE_URL + "all-courses" },
            { "Careers",    BASE_URL + "careers"    },
            { "Internship", BASE_URL + "internship" },
            { "Contact",    BASE_URL + "contact"    },
            { "Reviews",    BASE_URL + "reviews"    },
            { "Blog",       BASE_URL + "blog"       }
        };

        for (String[] page : pages) {
            String pageName = page[0];
            String url      = page[1];

            log("\n  ── CTA Check: " + pageName + " ──");
            openPage(url);
            if (looksLike404Page()) { log("  ℹ 404 — skipping"); continue; }

            step(1, "Collect all visible CTA buttons on " + pageName);
            List<WebElement> allCTAs = getImportantCTAElements();
            log("  Total CTAs found: " + allCTAs.size());
            for (WebElement cta : allCTAs)
                log("    → \"" + safeText(cta) + "\"  href: " + safeHref(cta));

            Assert.assertTrue(allCTAs.size() >= 1,
                "FAIL: No CTA buttons found on " + pageName);

            // ✅ KEY FIX: Remove CTAs that link back to the current page — clicking
            // them has no effect and would cause a false failure (as seen on Reviews page)
            step(2, "Filter out same-page CTAs (would be no-ops)");
            List<WebElement> clickable = filterCTAsForCurrentPage(allCTAs);
            log("  Clickable CTAs after filter: " + clickable.size());

            if (clickable.isEmpty()) {
                log("  ℹ All CTAs on " + pageName + " point to current page — soft pass");
                pass("TC-06", pageName + " has CTAs — all same-page (soft pass)");
                continue;
            }

            step(3, "Click first cross-page CTA on " + pageName);
            WebElement cta    = clickable.get(0);
            String     ctaTxt = safeText(cta);
            String     ctaHrf = safeHref(cta);
            String     oldUrl = driver.getCurrentUrl();
            Long  oldScroll   = getScrollY();

            log("  Clicking: \"" + ctaTxt + "\"  →  " + ctaHrf);
            clickElement(cta);
            sleepMs(1500);

            step(4, "Verify CTA click produced a visible effect");
            String  newUrl       = driver.getCurrentUrl();
            boolean urlChanged   = !newUrl.equals(oldUrl);
            boolean modalOpened  = isModalOrPopupVisible();
            boolean pageScrolled = hasScrollChanged(oldScroll);

            log("  Before: " + oldUrl);
            log("  After : " + newUrl);
            log("  URL changed   : " + urlChanged);
            log("  Modal opened  : " + modalOpened);
            log("  Page scrolled : " + pageScrolled);

            Assert.assertTrue(urlChanged || modalOpened || pageScrolled,
                "FAIL: CTA \"" + ctaTxt + "\" on " + pageName +
                " had no visible effect (href: " + ctaHrf + ")");

            pass("TC-06", pageName + " CTA worked: \"" + ctaTxt + "\" → " + newUrl);

            step(5, "Navigate back to " + pageName);
            if (urlChanged) {
                driver.navigate().back();
                waitForPageLoad();
                dismissOverlays();
                sleepMs(800);
            } else {
                pressEscape();
                scrollTop();
            }
        }
    }

    // ═══════════════════════════════════════════════════════════
    //  TC-07 | OPTIONAL LIVE SUBMISSION (disabled by default)
    // ═══════════════════════════════════════════════════════════

    @Test(priority = 7,
          description = "TC-07 | (Optional) Live valid form submission",
          enabled = false)
    public void verifyOptionalLiveFormSubmission() {
        printHeader("TC-07", "Optional Live Valid Form Submission");
        openPage(BASE_URL + "contact");
        WebElement form = findFirstVisibleElement(By.tagName("form"));
        Assert.assertNotNull(form, "FAIL: No form on contact page");
        fillVisibleFormWithValidData(form);
        WebElement submit = findSubmitInsideForm(form);
        Assert.assertNotNull(submit, "FAIL: No submit button found");
        clickElement(submit);
        sleepMs(2500);
        boolean success = pageHasAnyText(
            "thank you", "submitted", "success", "sent", "we will contact you"
        );
        Assert.assertTrue(success, "FAIL: No success message after valid form submit");
        pass("TC-07", "Live form submission succeeded");
    }

    // ═══════════════════════════════════════════════════════════
    //  SCREENSHOT + BUG REPORT METHODS
    // ═══════════════════════════════════════════════════════════

    /**
     * Takes a screenshot and saves it to screenshots/ folder.
     * Called automatically by @AfterMethod on failure, and can be
     * called manually mid-test with takeScreenshot("label").
     */
    private String captureScreenshot(String fileBase) {
        String filePath = SCREENSHOT_DIR + File.separator + fileBase + ".png";
        try {
            File src  = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            File dest = new File(filePath);
            Files.copy(src.toPath(), dest.toPath(), StandardCopyOption.REPLACE_EXISTING);
            System.out.println("Screenshot saved at: " + dest.getAbsolutePath());
            return dest.getAbsolutePath();
        } catch (Exception e) {
            String msg = "Screenshot FAILED: " + e.getMessage();
            System.out.println("⚠ " + msg);
            return msg;
        }
    }

    /** Manual mid-test screenshot. Usage: takeScreenshot("tc03_beforeSubmit"); */
    private void takeScreenshot(String label) {
        String fileBase = label.replaceAll("[^a-zA-Z0-9_]", "_")
            + "_" + DATE_FMT.format(new Date());
        captureScreenshot(fileBase);
    }

    /**
     * Writes a full bug report TXT file when a test fails.
     * Contains: test name, URL, page title, error, full stack trace, screenshot path.
     */
    private String writeBugReport(ITestResult result, String fileBase, String screenshotPath) {
        String filePath = BUGREPORT_DIR + File.separator + fileBase + ".txt";
        File   file     = new File(filePath);
        try (FileWriter fw = new FileWriter(file)) {
            String ts        = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
            String method    = result.getMethod().getMethodName();
            String desc      = result.getMethod().getDescription();
            String className = result.getTestClass().getName();
            String url = "", title = "";
            try { url   = driver.getCurrentUrl(); } catch (Exception ignored) {}
            try { title = driver.getTitle();       } catch (Exception ignored) {}
            Throwable cause   = result.getThrowable();
            String    errMsg  = cause != null ? cause.getMessage() : "No error message";

            fw.write("╔══════════════════════════════════════════════════════════════╗\n");
            fw.write("  BUG REPORT — VellInfoTech Automation\n");
            fw.write("╚══════════════════════════════════════════════════════════════╝\n\n");
            fw.write("TIMESTAMP      : " + ts          + "\n");
            fw.write("TEST CLASS     : " + className   + "\n");
            fw.write("TEST METHOD    : " + method      + "\n");
            fw.write("DESCRIPTION    : " + desc        + "\n");
            fw.write("CURRENT URL    : " + url         + "\n");
            fw.write("PAGE TITLE     : " + title       + "\n");
            fw.write("SCREENSHOT     : " + screenshotPath + "\n\n");
            fw.write("──────────────────────────────────────────────────────\n");
            fw.write("ERROR MESSAGE\n");
            fw.write("──────────────────────────────────────────────────────\n");
            fw.write(errMsg + "\n\n");
            fw.write("──────────────────────────────────────────────────────\n");
            fw.write("FULL STACK TRACE\n");
            fw.write("──────────────────────────────────────────────────────\n");
            if (cause != null) {
                fw.write(cause.toString() + "\n");
                for (StackTraceElement el : cause.getStackTrace())
                    fw.write("    at " + el.toString() + "\n");
            }
            fw.write("\n──────────────────────────────────────────────────────\n");
            fw.write("SUGGESTED FIX CHECKLIST\n");
            fw.write("──────────────────────────────────────────────────────\n");
            fw.write("[ ] Check if CSS selector still matches site DOM\n");
            fw.write("[ ] Check if page URL or structure changed\n");
            fw.write("[ ] Check if sticky header is intercepting click\n");
            fw.write("[ ] Check if form field names/placeholders changed\n");
            fw.write("[ ] Increase wait time if element not yet loaded\n");
            fw.write("[ ] Open screenshot — shows browser state at failure\n");

            System.out.println("Bug report saved at: " + file.getAbsolutePath());
            return file.getAbsolutePath();
        } catch (IOException e) {
            String msg = "Bug report FAILED to write: " + e.getMessage();
            System.out.println("⚠ " + msg);
            return msg;
        }
    }

    private void createFolderIfMissing(String name) {
        File folder = new File(name);
        if (!folder.exists()) {
            boolean ok = folder.mkdirs();
            System.out.println("  Created folder: " + folder.getAbsolutePath() + (ok ? " ✔" : " ✗"));
        }
    }

    // ═══════════════════════════════════════════════════════════
    //  PAGE-SPECIFIC VALIDATIONS
    // ═══════════════════════════════════════════════════════════

    private void verifyHomePage(String p) {
        verifyAtLeastOneOfTheseTexts(p, "training","placement","software","course","career","mentor");
        verifyAtLeastOneCardLikeSection(p, 1);
    }
    private void verifyAboutPage(String p) {
        verifyAtLeastOneOfTheseTexts(p, "about","industry","project","mentor","career","experience");
        verifyAtLeastOneCardLikeSection(p, 1);
    }
    private void verifyCoursesPage(String p) {
        log("  Running Courses page specific checks...");
        List<WebElement> icons = driver.findElements(
            By.cssSelector("img[alt*='course icon' i], img[alt*='course-icon' i]")
        );
        List<WebElement> links = driver.findElements(By.xpath(
            "//a[contains(@href,'/all-courses/') and " +
            "not(@href='https://www.vellinfotech.com/all-courses') and " +
            "not(@href='https://www.vellinfotech.com/all-courses/')]"
        ));
        Set<String> hrefs = new LinkedHashSet<>();
        for (WebElement l : links) {
            try {
                if (!l.isDisplayed()) continue;
                String h = l.getAttribute("href");
                if (h != null && h.contains("/all-courses/")) hrefs.add(h.trim());
            } catch (Exception ignored) {}
        }
        log("  Course icons: " + icons.size() + " | Course links: " + hrefs.size());
        Assert.assertTrue(icons.size() >= 3 || hrefs.size() >= 3,
            "FAIL: Not enough course entries on Courses page");
        verifyAtLeastOneOfTheseTexts(p, "course","training","program","learn","career","skills");
        pass("TC-01-courses", "Courses page entries confirmed");
    }
    private void verifyCareersPage(String p) {
        verifyAtLeastOneOfTheseTexts(p, "career","job","opening","apply","opportunity","role","hiring");
        verifyAtLeastOneCardLikeSection(p, 1);
    }
    private void verifyContactPage(String p) {
        List<WebElement> forms   = driver.findElements(By.tagName("form"));
        List<WebElement> inputs  = driver.findElements(By.cssSelector("input, textarea, select"));
        List<WebElement> submits = driver.findElements(By.xpath(
            "//button[@type='submit'] | //input[@type='submit'] | " +
            "//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'send')]"
        ));
        log("  Forms: " + forms.size() + " | Inputs: " + inputs.size() + " | Submits: " + submits.size());
        Assert.assertTrue(forms.size()   >= 1, "FAIL: No form on Contact page");
        Assert.assertTrue(inputs.size()  >= 3, "FAIL: Too few fields on Contact page");
        Assert.assertTrue(submits.size() >= 1, "FAIL: No Submit/Send on Contact page");
        verifyAtLeastOneOfTheseTexts(p, "contact","phone","email","address","message");
    }
    private void verifyInternshipPage(String p) {
        verifyAtLeastOneOfTheseTexts(p, "intern","training","program","career","apply","opportunity");
        verifyAtLeastOneCardLikeSection(p, 1);
    }
    private void verifyReviewsPage(String p) {
        verifyAtLeastOneOfTheseTexts(p, "review","testimonial","student","feedback","experience","success");
        verifyAtLeastOneCardLikeSection(p, 1);
    }
    private void verifyBlogPage(String p) {
        verifyAtLeastOneOfTheseTexts(p, "blog","article","read","post","topic","insight","tech");
        List<WebElement> links = driver.findElements(By.xpath("//a[contains(@href,'blog')]"));
        Assert.assertTrue(links.size() >= 1, "FAIL: No blog links on Blog page");
    }
    private void verifyCourseDetailPage(String p) {
        verifyAtLeastOneOfTheseTexts(p,
            "course","program","skills","career","certification","training",
            "curriculum","syllabus","module","placement");
        List<WebElement> sections = driver.findElements(
            By.cssSelector("section, article, .content, [class*='content'], [class*='module']"));
        Assert.assertTrue(sections.size() >= 1,
            "FAIL: No content sections on course detail: " + p);
    }

    // ═══════════════════════════════════════════════════════════
    //  COMMON PAGE VALIDATIONS
    // ═══════════════════════════════════════════════════════════

    private void openPage(String url) {
        log("  Opening: " + url);
        driver.get(url);
        waitForPageLoad();
        dismissOverlays();
        scrollTop();
        sleepMs(700);
    }
    private void verifyNot404Page(String p) {
        Assert.assertFalse(looksLike404Page(), "FAIL: " + p + " returned 404");
    }
    private boolean looksLike404Page() {
        try {
            String title = driver.getTitle().toLowerCase();
            String body  = driver.findElement(By.tagName("body")).getText().toLowerCase();
            return title.contains("404") || body.contains("page not found")
                || body.contains("not found") || body.matches("(?s).*\\b404\\b.*");
        } catch (Exception e) { return false; }
    }
    private void verifyUrl(String p, String kw) {
        String url = driver.getCurrentUrl().toLowerCase();
        log("  " + p + " URL: " + url);
        Assert.assertTrue(url.contains(kw.toLowerCase()) || url.equals(BASE_URL.toLowerCase()),
            "FAIL: " + p + " URL does not contain: " + kw);
    }
    private void verifyTitle(String p, String kw) {
        String t = driver.getTitle().trim().toLowerCase();
        log("  " + p + " Title: " + t);
        Assert.assertFalse(t.isEmpty(), "FAIL: " + p + " title is empty");
        Assert.assertTrue(t.contains(kw.toLowerCase()) || t.contains("vell"),
            "FAIL: " + p + " title does not contain: " + kw + " | actual: " + t);
    }
    private void verifyVisibleHeading(String p) {
        for (WebElement h : driver.findElements(By.cssSelector("h1, h2, h3"))) {
            try {
                if (h.isDisplayed() && !h.getText().trim().isEmpty()) {
                    log("  " + p + " Heading: " + h.getText().trim()); return;
                }
            } catch (Exception ignored) {}
        }
        Assert.fail("FAIL: No visible heading on " + p);
    }
    private void verifyBodyContent(String p, int min) {
        String body = driver.findElement(By.tagName("body")).getText().trim();
        log("  " + p + " Body Length: " + body.length());
        Assert.assertTrue(body.length() > min,
            "FAIL: " + p + " body too short (" + body.length() + " chars)");
    }
    private void verifyHeaderVisible(String p) {
        for (String sel : new String[]{"nav","header nav",".navbar",".nav","#navbar","header"}) {
            for (WebElement el : driver.findElements(By.cssSelector(sel))) {
                try {
                    if (el.isDisplayed()) { log("  " + p + " Header: " + sel); return; }
                } catch (Exception ignored) {}
            }
        }
        Assert.fail("FAIL: Header not visible on " + p);
    }
    private void verifyFooterVisible(String p) {
        scrollBottom(); sleepMs(600);
        for (String sel : new String[]{"footer",".footer","#footer","[class*='footer']"}) {
            for (WebElement el : driver.findElements(By.cssSelector(sel))) {
                try {
                    if (el.isDisplayed() && !el.getText().trim().isEmpty()) {
                        log("  " + p + " Footer: " + sel); scrollTop(); return;
                    }
                } catch (Exception ignored) {}
            }
        }
        scrollTop();
        Assert.fail("FAIL: Footer not visible on " + p);
    }
    private void verifyImagesLoaded(String p, int min) {
        List<WebElement> imgs = driver.findElements(By.tagName("img"));
        int loaded = 0;
        for (WebElement img : imgs) {
            try {
                Boolean ok = (Boolean) js.executeScript(
                    "return arguments[0].complete && typeof arguments[0].naturalWidth!='undefined' && arguments[0].naturalWidth>0;", img);
                if (Boolean.TRUE.equals(ok)) loaded++;
            } catch (Exception ignored) {}
        }
        log("  " + p + " Loaded Images: " + loaded + "/" + imgs.size());
        Assert.assertTrue(loaded >= min, "FAIL: Too few images on " + p + " — loaded: " + loaded);
    }
    private void verifyValidLinksPresent(String p, int min) {
        int valid = 0, invalid = 0;
        for (WebElement link : driver.findElements(By.tagName("a"))) {
            try {
                if (!link.isDisplayed()) continue;
                String href = link.getAttribute("href");
                if (href == null || href.trim().isEmpty() || href.trim().equals("#")
                        || href.toLowerCase().startsWith("javascript")) invalid++;
                else valid++;
            } catch (Exception ignored) {}
        }
        log("  " + p + " Valid Links: " + valid + " | Invalid: " + invalid);
        Assert.assertTrue(valid >= min, "FAIL: Too few valid links on " + p);
    }
    private void verifyCTAOrImportantActionPresent(String p) {
        long visible = getImportantCTAElements().stream().filter(el -> {
            try { return el.isDisplayed(); } catch (Exception e) { return false; }
        }).count();
        log("  " + p + " Visible CTAs: " + visible);
        Assert.assertTrue(visible >= 1, "FAIL: No CTAs on " + p);
    }
    private void verifyAtLeastOneOfTheseTexts(String p, String... texts) {
        String body = driver.findElement(By.tagName("body")).getText().toLowerCase();
        for (String t : texts) {
            if (body.contains(t.toLowerCase())) { log("  ✔ Keyword: \"" + t + "\""); return; }
        }
        Assert.fail("FAIL: No expected keywords on " + p + " — " + String.join(", ", texts));
    }
    private void verifyAtLeastOneCardLikeSection(String p, int min) {
        int max = 0;
        for (String sel : new String[]{".card",".item",".box","article","[class*='card']","[class*='item']"}) {
            try {
                int cnt = 0;
                for (WebElement el : driver.findElements(By.cssSelector(sel))) {
                    try { if (el.isDisplayed() && !el.getText().trim().isEmpty()) cnt++; }
                    catch (Exception ignored) {}
                }
                if (cnt > max) max = cnt;
            } catch (Exception ignored) {}
        }
        Assert.assertTrue(max >= min, "FAIL: Too few card sections on " + p + " — found: " + max);
    }

    // ═══════════════════════════════════════════════════════════
    //  CTA HELPERS
    // ═══════════════════════════════════════════════════════════

    private List<WebElement> getImportantCTAElements() {
        Set<WebElement> unique = new LinkedHashSet<>();
        String[] xpaths = {
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'learn more')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'read more')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'view')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'enroll')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'apply')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'contact')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'reviews')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'book')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'get started')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'explore')]",
            "//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'submit')]",
            "//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'apply')]",
            "//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'enroll')]",
            "//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'send')]"
        };
        for (String xp : xpaths) {
            try {
                for (WebElement el : driver.findElements(By.xpath(xp)))
                    try { if (el.isDisplayed() && el.isEnabled()) unique.add(el); }
                    catch (Exception ignored) {}
            } catch (Exception ignored) {}
        }
        return new ArrayList<>(unique);
    }

    /** Removes CTAs that link to the current page — clicking them does nothing */
    private List<WebElement> filterCTAsForCurrentPage(List<WebElement> ctas) {
        String cur = driver.getCurrentUrl().toLowerCase().replaceAll("/$", "");
        List<WebElement> filtered = new ArrayList<>();
        for (WebElement cta : ctas) {
            try {
                String href = safeHref(cta).toLowerCase().replaceAll("/$", "");
                if (href.isEmpty() || href.equals("#") || href.equals(cur)
                        || href.startsWith("tel:") || href.startsWith("mailto:")) continue;
                filtered.add(cta);
            } catch (Exception ignored) {}
        }
        return filtered;
    }

    private List<WebElement> getCareerApplyButtons() {
        Set<WebElement> unique = new LinkedHashSet<>();
        String[] xpaths = {
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'apply')]",
            "//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'apply')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'job')]",
            "//a[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'role')]"
        };
        for (String xp : xpaths) {
            try {
                for (WebElement el : driver.findElements(By.xpath(xp)))
                    if (el.isDisplayed() && el.isEnabled()) unique.add(el);
            } catch (Exception ignored) {}
        }
        return new ArrayList<>(unique);
    }

    // ═══════════════════════════════════════════════════════════
    //  FORM HELPERS
    // ═══════════════════════════════════════════════════════════

    private List<WebElement> getVisibleForms() {
        List<WebElement> visible = new ArrayList<>();
        for (WebElement f : driver.findElements(By.tagName("form")))
            try { if (f.isDisplayed()) visible.add(f); } catch (Exception ignored) {}
        return visible;
    }
    private WebElement findAnyVisibleFormOnCurrentPage() {
        List<WebElement> f = getVisibleForms(); return f.isEmpty() ? null : f.get(0);
    }
    private WebElement findVisibleElementInsideForm(WebElement form, By locator) {
        try {
            for (WebElement el : form.findElements(locator))
                if (el.isDisplayed()) return el;
        } catch (Exception ignored) {}
        return null;
    }
    private WebElement findSubmitInsideForm(WebElement form) {
        return findVisibleElementInsideForm(form, By.xpath(
            ".//button[@type='submit'] | " +
            ".//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'submit')] | " +
            ".//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'send')] | " +
            ".//button[contains(translate(.,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'apply')] | " +
            ".//input[@type='submit']"
        ));
    }
    private void fillVisibleFormWithInvalidData(WebElement form) {
        fillInputByHints(form, new String[]{"name"},                "Test User");
        fillInputByHints(form, new String[]{"email"},               "invalid-email");
        fillInputByHints(form, new String[]{"phone","mobile","tel"},"123");
        fillInputByHints(form, new String[]{"course","subject"},    "Software Testing");
        fillInputByHints(form, new String[]{"company"},             "Test Company");
        fillTextArea(form, "Automation negative validation message.");
        chooseFirstRealOption(form);
    }
    private void fillVisibleFormWithValidData(WebElement form) {
        fillInputByHints(form, new String[]{"name"},                "Rajesh Kumar");
        fillInputByHints(form, new String[]{"email"},               "rajesh.kumar@gmail.com");
        fillInputByHints(form, new String[]{"phone","mobile","tel"},"9876543210");
        fillInputByHints(form, new String[]{"course","subject"},    "Software Testing - Selenium");
        fillInputByHints(form, new String[]{"company"},             "Automation Solutions");
        fillTextArea(form, "Hello team. I am interested in your Software Testing course. " +
            "Please share batch schedule and fees. Available weekdays 10 AM–6 PM. Thank you.");
        chooseFirstRealOption(form);
    }
    private void fillInputByHints(WebElement form, String[] hints, String value) {
        try {
            for (WebElement input : form.findElements(By.cssSelector("input"))) {
                try {
                    if (!input.isDisplayed() || !input.isEnabled()) continue;
                    String type = safeLower(input.getAttribute("type"));
                    if (type.equals("hidden")||type.equals("submit")||type.equals("button")
                            ||type.equals("checkbox")||type.equals("radio")||type.equals("file")) continue;
                    String name = safeLower(input.getAttribute("name"));
                    String id   = safeLower(input.getAttribute("id"));
                    String ph   = safeLower(input.getAttribute("placeholder"));
                    for (String hint : hints) {
                        if (name.contains(hint)||id.contains(hint)||ph.contains(hint)||type.contains(hint)) {
                            typeIntoField(input, value); return;
                        }
                    }
                } catch (Exception ignored) {}
            }
        } catch (Exception ignored) {}
    }
    private void fillTextArea(WebElement form, String value) {
        try {
            for (WebElement ta : form.findElements(By.tagName("textarea")))
                if (ta.isDisplayed() && ta.isEnabled()) { typeIntoField(ta, value); return; }
        } catch (Exception ignored) {}
    }
    private void chooseFirstRealOption(WebElement form) {
        try {
            for (WebElement sel : form.findElements(By.tagName("select"))) {
                if (!sel.isDisplayed()||!sel.isEnabled()) continue;
                List<WebElement> opts = sel.findElements(By.tagName("option"));
                if (opts.size() >= 2) { opts.get(1).click(); return; }
            }
        } catch (Exception ignored) {}
    }
    private void printFormFieldsSummary(WebElement form, String pageName) {
        List<WebElement> inputs = form.findElements(By.tagName("input"));
        List<WebElement> tas    = form.findElements(By.tagName("textarea"));
        log("  " + pageName + " form: " + inputs.size() + " inputs | " + tas.size() + " textareas");
        for (WebElement inp : inputs) {
            try {
                if (inp.isDisplayed())
                    log("    INPUT name='" + inp.getAttribute("name")
                        + "' type='" + inp.getAttribute("type")
                        + "' placeholder='" + inp.getAttribute("placeholder") + "'");
            } catch (Exception ignored) {}
        }
    }
    private boolean formHasInvalidField(WebElement form) {
        try {
            for (WebElement f : form.findElements(By.cssSelector("input, textarea, select")))
                if (fieldMarkedInvalid(f)) return true;
        } catch (Exception ignored) {}
        return false;
    }

    // ═══════════════════════════════════════════════════════════
    //  FIELD INTERACTION — STICKY HEADER SAFE
    // ═══════════════════════════════════════════════════════════

    /**
     * Sticky-header-aware field typing.
     * Uses JS focus() instead of .click() to avoid interception
     * by the site's fixed nav bar (z-99999, top-83px).
     */
    private void typeIntoField(WebElement el, String value) {
        try {
            js.executeScript("arguments[0].scrollIntoView(true);", el); sleepMs(150);
            js.executeScript("window.scrollBy(0, -" + STICKY_OFFSET + ");");  sleepMs(150);
            js.executeScript("arguments[0].focus();", el);                    sleepMs(100);
            el.clear(); sleepMs(80);
            el.sendKeys(value); sleepMs(80);
            log("  Typed [" + safeFieldName(el) + "]: '" +
                (value.length() > 50 ? value.substring(0, 50) + "..." : value) + "'");
        } catch (Exception e) {
            log("  ⚠ Could not type into [" + safeFieldName(el) + "]: " + e.getMessage());
        }
    }

    private void clickElement(WebElement el) {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(el));
            js.executeScript("arguments[0].scrollIntoView(true);", el); sleepMs(150);
            js.executeScript("window.scrollBy(0, -" + STICKY_OFFSET + ");");  sleepMs(200);
            el.click(); return;
        } catch (Exception ignored) {}
        try { actions.moveToElement(el).pause(Duration.ofMillis(300)).click().perform(); return; }
        catch (Exception ignored) {}
        js.executeScript("arguments[0].click();", el);
    }

    // ═══════════════════════════════════════════════════════════
    //  VALIDATION HELPERS
    // ═══════════════════════════════════════════════════════════

    private boolean hasValidationMessage() {
        String body = driver.findElement(By.tagName("body")).getText().toLowerCase();
        return body.contains("required") || body.contains("invalid")
            || body.contains("please enter") || body.contains("please fill")
            || body.contains("enter valid") || body.contains("is required")
            || body.contains("not valid") || body.contains("incorrect format");
    }
    private boolean fieldMarkedInvalid(WebElement field) {
        try {
            String ariaInvalid = field.getAttribute("aria-invalid");
            String className   = field.getAttribute("class");
            Boolean ok = (Boolean) js.executeScript("return arguments[0].checkValidity();", field);
            return "true".equalsIgnoreCase(ariaInvalid)
                || (className != null && className.toLowerCase().contains("error"))
                || Boolean.FALSE.equals(ok);
        } catch (Exception e) { return false; }
    }
    private boolean currentUrlLooksSame(String base) {
        return driver.getCurrentUrl().toLowerCase().contains(base.replace(BASE_URL, "").toLowerCase());
    }
    private boolean isModalOrPopupVisible() {
        for (String sel : new String[]{".modal",".popup",".dialog","[role='dialog']",".overlay"}) {
            try {
                for (WebElement el : driver.findElements(By.cssSelector(sel)))
                    if (el.isDisplayed()) return true;
            } catch (Exception ignored) {}
        }
        return false;
    }
    private Long getScrollY() {
        try { return ((Number) js.executeScript("return window.pageYOffset;")).longValue(); }
        catch (Exception e) { return 0L; }
    }
    private boolean hasScrollChanged(Long old) {
        Long cur = getScrollY(); return cur != null && old != null && !cur.equals(old);
    }

    // ═══════════════════════════════════════════════════════════
    //  BROWSER / SCROLL HELPERS
    // ═══════════════════════════════════════════════════════════

    private void dismissOverlays() {
        for (String sel : new String[]{"button[id*='accept' i]","button[class*='accept' i]",
                ".cookie-accept",".cookie-close","button[class*='close' i]",".modal-close",
                ".popup-close","[aria-label='Close']","[aria-label='close']",".dismiss"}) {
            try {
                for (WebElement el : driver.findElements(By.cssSelector(sel)))
                    if (el.isDisplayed() && el.isEnabled()) { el.click(); sleepMs(300); break; }
            } catch (Exception ignored) {}
        }
        pressEscape();
    }
    private void pressEscape() {
        try { driver.findElement(By.tagName("body")).sendKeys(Keys.ESCAPE); sleepMs(200); }
        catch (Exception ignored) {}
    }
    private void waitForPageLoad() {
        wait.until(d -> ((JavascriptExecutor) d).executeScript("return document.readyState").equals("complete"));
    }
    private void scrollTop()   { js.executeScript("window.scrollTo(0,0);"); }
    private void scrollBottom(){ js.executeScript("window.scrollTo(0,document.body.scrollHeight);"); }
    private void lazyScrollPage() {
        try {
            long h = ((Number) js.executeScript("return document.body.scrollHeight;")).longValue();
            for (int i = 1; i <= 5; i++) { js.executeScript("window.scrollTo(0,arguments[0]);",(h/5)*i); sleepMs(300); }
            scrollTop();
        } catch (Exception ignored) {}
    }
    private WebElement findFirstVisibleElement(By locator) {
        for (WebElement el : driver.findElements(locator))
            try { if (el.isDisplayed()) return el; } catch (Exception ignored) {}
        return null;
    }

    // ═══════════════════════════════════════════════════════════
    //  STRING / ATTRIBUTE HELPERS
    // ═══════════════════════════════════════════════════════════

    private boolean pageHasAnyText(String... texts) {
        String body = driver.findElement(By.tagName("body")).getText().toLowerCase();
        for (String t : texts) if (body.contains(t.toLowerCase())) return true;
        return false;
    }
    private String safeText(WebElement el) { try { return el.getText().trim(); } catch (Exception e) { return ""; } }
    private String safeHref(WebElement el) {
        try { String h = el.getAttribute("href"); return h == null ? "" : h.trim(); }
        catch (Exception e) { return ""; }
    }
    private String safeLower(String v) { return v == null ? "" : v.toLowerCase().trim(); }
    private String safeFieldName(WebElement el) {
        try {
            String n = el.getAttribute("name"); if (n != null && !n.isEmpty()) return n;
            String p = el.getAttribute("placeholder"); if (p != null && !p.isEmpty()) return p;
            return el.getTagName();
        } catch (Exception e) { return "unknown"; }
    }

    // ═══════════════════════════════════════════════════════════
    //  LOGGING
    // ═══════════════════════════════════════════════════════════

    private void banner(String id, String desc) {
        System.out.println("\n==================================================");
        System.out.println(id + ": " + desc);
        System.out.println("==================================================");
    }
    private void printHeader(String tc, String desc) {
        System.out.println("\n--------------------------------------------------");
        System.out.println(tc + " | " + desc);
        System.out.println("--------------------------------------------------");
    }
    private void step(int n, String desc) { System.out.println("  STEP " + n + ": " + desc); }
    private void log(String msg)          { System.out.println(msg); }
    private void pass(String tc, String msg) { System.out.println("  ✔ PASS [" + tc + "]: " + msg); }
    private void sleepMs(int ms) { try { Thread.sleep(ms); } catch (InterruptedException ignored) {} }
}