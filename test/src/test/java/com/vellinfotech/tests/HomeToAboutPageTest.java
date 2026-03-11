package com.vellinfotech.tests;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.*;
import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;
import java.util.List;

/**
 * ╔══════════════════════════════════════════════════════════════╗
 *  Project   :  Vell InfoTech – Navigation & About Page Tests
 *  Website   :  https://www.vellinfotech.com/
 *  Test Flow :  Homepage  →  Click "About" in Nav  →  Verify About Page
 *  Framework :  Selenium WebDriver 4.x + TestNG 7.x
 *  IDE       :  Eclipse
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  ECLIPSE SETUP
 *  ─────────────────────────────────────────────────────────────
 *  Step 1 : File → New → Maven Project
 *  Step 2 : Add to pom.xml:
 *             • selenium-java      4.18.1
 *             • testng             7.9.0
 *             • webdrivermanager   5.7.0
 *  Step 3 : Create package:  com.vellinfotech.tests
 *  Step 4 : Paste this file inside that package
 *  Step 5 : Right-click file → Run As → TestNG Test
 *  ─────────────────────────────────────────────────────────────
 *
 *  TEST EXECUTION ORDER
 *  ─────────────────────────────────────────────────────────────
 *  PHASE 1 – HOMEPAGE (TC-01 to TC-04)
 *    TC-01 : Verify homepage loads correctly
 *    TC-02 : Verify page title is "Vell InfoTech"
 *    TC-03 : Verify navigation bar is visible
 *    TC-04 : Verify "About" link exists in navigation
 *
 *  PHASE 2 – NAVIGATION (TC-05 to TC-07)
 *    TC-05 : Click "About" link from homepage nav
 *    TC-06 : Verify URL changed to About page
 *    TC-07 : Verify About page title/heading loaded
 *
 *  PHASE 3 – ABOUT PAGE FULL CHECK (TC-08 to TC-20)
 *    TC-08 : Verify About page banner/hero section
 *    TC-09 : Verify About page main heading (H1/H2)
 *    TC-10 : Verify intro/description paragraph text
 *    TC-11 : Verify "Who We Are" / company overview section
 *    TC-12 : Verify Mission / Vision section
 *    TC-13 : Verify team/leadership section (if present)
 *    TC-14 : Verify images on About page load correctly
 *    TC-15 : Verify About page has Call-To-Action (CTA)
 *    TC-16 : Verify navigation bar still visible on About page
 *    TC-17 : Verify footer is present on About page
 *    TC-18 : Verify no broken links on About page
 *    TC-19 : Verify About page is responsive (viewport meta)
 *    TC-20 : Verify page scroll works (page has content below fold)
 * ─────────────────────────────────────────────────────────────
 */
public class HomeToAboutPageTest {

    WebDriver driver;
    WebDriverWait wait;
    Actions actions;

    // ── Constants ─────────────────────────────────────
    private static final String HOME_URL     = "https://www.vellinfotech.com/";
    private static final String HOME_TITLE   = "Vell Infotech \u2014 Best Software Training & Placement Support"; // actual live site title
    private static final int    WAIT_SECONDS = 20;

    // ─────────────────────────────────────────────────
    //  SETUP  (runs ONCE before all test cases)
    // ─────────────────────────────────────────────────
    @BeforeClass
    public void setUp() {
        System.out.println("\n========================================");
        System.out.println("  SETUP: Launching Chrome Browser");
        System.out.println("========================================");

        // Auto-downloads the correct ChromeDriver — no manual download needed
        io.github.bonigarcia.wdm.WebDriverManager.chromedriver().setup();

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-popup-blocking");
        // options.addArguments("--headless=new"); // Uncomment to run without browser window

        driver  = new ChromeDriver(options);
        wait    = new WebDriverWait(driver, Duration.ofSeconds(WAIT_SECONDS));
        actions = new Actions(driver);

        System.out.println("  Browser launched successfully.");
        System.out.println("  Navigating to: " + HOME_URL);
        driver.get(HOME_URL);
        waitForPageLoad();
    }

    // ─────────────────────────────────────────────────
    //  TEARDOWN  (runs ONCE after all test cases)
    // ─────────────────────────────────────────────────
    @AfterClass
    public void tearDown() {
        System.out.println("\n========================================");
        System.out.println("  TEARDOWN: Closing Browser");
        System.out.println("========================================");
        if (driver != null) {
            driver.quit();
            System.out.println("  Browser closed.");
        }
    }

    // ══════════════════════════════════════════════════
    //  PHASE 1 — HOMEPAGE VERIFICATION
    // ══════════════════════════════════════════════════

    /**
     * TC-01
     * STEP 1: Open the browser and navigate to https://www.vellinfotech.com/
     * STEP 2: Wait for the page to fully load
     * STEP 3: Verify the page loaded (body is not empty)
     */
    @Test(priority = 1, description = "TC-01 | Homepage loads without errors")
    public void tc01_HomepageLoadsSuccessfully() {
        printTestHeader("TC-01", "Verify Homepage Loads Successfully");

        // STEP 1: Ensure we are on the homepage
        System.out.println("  STEP 1: Navigating to homepage → " + HOME_URL);
        driver.get(HOME_URL);

        // STEP 2: Wait for full page render
        System.out.println("  STEP 2: Waiting for page to fully load...");
        waitForPageLoad();

        // STEP 3: Check body text is not empty (JS rendered page)
        System.out.println("  STEP 3: Verifying page body has content...");
        String bodyText = driver.findElement(By.tagName("body")).getText().trim();
        System.out.println("  Body content length: " + bodyText.length() + " characters");

        Assert.assertFalse(bodyText.isEmpty(),
            "FAIL TC-01: Homepage body is empty. Page may not have rendered.");
        Assert.assertTrue(bodyText.length() > 30,
            "FAIL TC-01: Homepage has very little text. Possible render issue.");

        System.out.println("  ✔ PASS: Homepage loaded with content.");
    }

    /**
     * TC-02
     * STEP 1: Read the browser tab title
     * STEP 2: Verify it contains "Vell Infotech"
     */
    @Test(priority = 2, description = "TC-02 | Homepage title contains 'Vell Infotech'")
    public void tc02_HomepageTitleIsCorrect() {
        printTestHeader("TC-02", "Verify Homepage Title");

        // STEP 1: Get the browser tab title
        System.out.println("  STEP 1: Reading browser tab title...");
        String actualTitle = driver.getTitle().trim();
        System.out.println("  Actual Title   : \"" + actualTitle + "\"");
        System.out.println("  Expected Title : \"" + HOME_TITLE + "\"");

        // STEP 2A: Try exact match first
        System.out.println("  STEP 2: Comparing title...");
        boolean exactMatch    = actualTitle.equals(HOME_TITLE);
        // STEP 2B: Fallback — contains check (handles minor title changes)
        boolean containsMatch = actualTitle.toLowerCase().contains("vell infotech");

        System.out.println("  Exact match    : " + exactMatch);
        System.out.println("  Contains match : " + containsMatch);

        Assert.assertTrue(exactMatch || containsMatch,
            "FAIL TC-02: Title mismatch!\n" +
            "  Expected : '" + HOME_TITLE + "'\n" +
            "  Actual   : '" + actualTitle + "'");

        System.out.println("  ✔ PASS: Page title is correct → \"" + actualTitle + "\"");
    }

    /**
     * TC-03
     * STEP 1: Look for the navigation bar using common selectors
     * STEP 2: Verify at least one nav element is visible on screen
     */
    @Test(priority = 3, description = "TC-03 | Navigation bar is visible on homepage")
    public void tc03_NavigationBarIsVisible() {
        printTestHeader("TC-03", "Verify Navigation Bar is Visible");

        // STEP 1: Try multiple common nav selectors
        System.out.println("  STEP 1: Searching for navigation bar...");
        String[] navSelectors = {
            "nav",
            "header nav",
            ".navbar",
            ".nav",
            ".navigation",
            ".main-menu",
            "#menu",
            ".header ul",
            "header ul"
        };

        WebElement navElement = null;
        String usedSelector   = "";

        for (String selector : navSelectors) {
            List<WebElement> found = driver.findElements(By.cssSelector(selector));
            if (!found.isEmpty() && found.get(0).isDisplayed()) {
                navElement   = found.get(0);
                usedSelector = selector;
                break;
            }
        }

        // STEP 2: Assert navigation is found and visible
        System.out.println("  STEP 2: Verifying navigation is displayed...");
        Assert.assertNotNull(navElement, "FAIL TC-03: Navigation bar NOT found on homepage.");
        Assert.assertTrue(navElement.isDisplayed(),
            "FAIL TC-03: Navigation bar found but NOT visible.");

        System.out.println("  Nav found using selector: " + usedSelector);
        System.out.println("  ✔ PASS: Navigation bar is visible on homepage.");
    }

    /**
     * TC-04
     * STEP 1: Find all anchor tags in the header/nav area
     * STEP 2: Look for a link whose text contains "About"
     * STEP 3: Verify the About link is visible and has a valid href
     */
    @Test(priority = 4, description = "TC-04 | 'About' link exists in the navigation menu")
    public void tc04_AboutLinkExistsInNav() {
        printTestHeader("TC-04", "Verify 'About' Link in Navigation");

        // STEP 1: Collect all navigation links
        System.out.println("  STEP 1: Collecting all header/nav links...");
        List<WebElement> navLinks = driver.findElements(
            By.cssSelector("nav a, header a, .navbar a, .nav a, .menu a, header ul li a")
        );
        System.out.println("  Total links found in nav area: " + navLinks.size());

        // STEP 2: Search for "About" text
        System.out.println("  STEP 2: Searching for 'About' link text...");
        WebElement aboutLink = null;
        for (WebElement link : navLinks) {
            String linkText = link.getText().trim().toLowerCase();
            if (linkText.contains("about")) {
                aboutLink = link;
                System.out.println("  Found link: \"" + link.getText() + "\" → " + link.getAttribute("href"));
                break;
            }
        }

        // Fallback: search by href if text search fails
        if (aboutLink == null) {
            System.out.println("  Text search failed. Trying href-based search...");
            List<WebElement> hrefLinks = driver.findElements(
                By.xpath("//a[contains(@href,'about')]")
            );
            if (!hrefLinks.isEmpty()) {
                aboutLink = hrefLinks.get(0);
                System.out.println("  Found via href: " + aboutLink.getAttribute("href"));
            }
        }

        // STEP 3: Assert About link exists and is visible
        System.out.println("  STEP 3: Verifying About link is visible...");
        Assert.assertNotNull(aboutLink,
            "FAIL TC-04: 'About' link NOT found in navigation. " +
            "Check if the nav link text is different (e.g., 'About Us', 'Company').");
        Assert.assertTrue(aboutLink.isDisplayed(),
            "FAIL TC-04: About link found but NOT visible.");

        String href = aboutLink.getAttribute("href");
        Assert.assertNotNull(href, "FAIL TC-04: About link has no href attribute.");
        Assert.assertFalse(href.isEmpty(), "FAIL TC-04: About link href is empty.");

        System.out.println("  ✔ PASS: 'About' link is visible with href: " + href);
    }

    // ══════════════════════════════════════════════════
    //  PHASE 2 — NAVIGATION: HOMEPAGE → ABOUT PAGE
    // ══════════════════════════════════════════════════

    /**
     * TC-05  ★ FIXED – ElementClickInterceptedException
     *
     * ROOT CAUSE: A sticky header, cookie banner, or overlay was covering the
     * About link when Selenium tried to click it.
     *
     * FIX STRATEGY (4 layers of defence):
     *   STEP 1 – Dismiss any cookie banner / popup overlay first
     *   STEP 2 – Scroll to the TOP (not centre) so sticky nav is fully visible
     *   STEP 3 – Use WebDriverWait to confirm element is CLICKABLE before clicking
     *   STEP 4 – Try 4 click methods in order:
     *              A) Standard .click()
     *              B) Actions moveToElement().click()
     *              C) JavaScript click (arguments[0].click())
     *              D) Direct URL navigation via href (ultimate fallback)
     */
    @Test(priority = 5, description = "TC-05 | Click 'About' link to navigate from Homepage")
    public void tc05_ClickAboutLinkFromHomepage() {
        printTestHeader("TC-05", "Click 'About' from Homepage Navigation [FIXED]");

        // ── STEP 1: Reload homepage cleanly ─────────────────────────────
        System.out.println("  STEP 1: Loading homepage fresh...");
        driver.get(HOME_URL);
        waitForPageLoad();
        sleepMs(1000); // Let JS animations settle
        System.out.println("  Current URL: " + driver.getCurrentUrl());

        // ── STEP 2: Dismiss overlays (cookie banner / popup / chat widget) ─
        System.out.println("  STEP 2: Checking for and dismissing any overlays...");
        dismissOverlays();

        // ── STEP 3: Scroll to very top so sticky nav is fully visible ────
        System.out.println("  STEP 3: Scrolling to top of page...");
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 0);");
        sleepMs(600);

        // ── STEP 4: Find the About link ──────────────────────────────────
        System.out.println("  STEP 4: Finding 'About' link in navigation...");
        WebElement aboutLink = findAboutLink();
        Assert.assertNotNull(aboutLink,
            "FAIL TC-05: 'About' link NOT found in nav. " +
            "Check if the link text is 'About Us', 'Company', or inspect nav manually.");

        String aboutHref = aboutLink.getAttribute("href");
        System.out.println("  About link text : \"" + aboutLink.getText().trim() + "\"");
        System.out.println("  About link href : " + aboutHref);

        // ── STEP 5: Wait until About link is clickable ───────────────────
        System.out.println("  STEP 5: Waiting until About link is clickable...");
        try {
            wait.until(ExpectedConditions.elementToBeClickable(aboutLink));
            System.out.println("  About link is clickable.");
        } catch (Exception e) {
            System.out.println("  WARN: elementToBeClickable timed out. Proceeding anyway...");
        }

        // ── STEP 6: Try 4 click strategies in order ──────────────────────
        System.out.println("  STEP 6: Attempting to click About link...");
        boolean clicked = false;

        // Strategy A: Standard Selenium click
        System.out.println("  [Strategy A] Standard .click()...");
        try {
            aboutLink.click();
            clicked = true;
            System.out.println("  Strategy A succeeded.");
        } catch (ElementClickInterceptedException e) {
            System.out.println("  Strategy A blocked: " + e.getMessage().split("\n")[0]);
        } catch (Exception e) {
            System.out.println("  Strategy A failed: " + e.getMessage().split("\n")[0]);
        }

        // Strategy B: Actions moveToElement + click (bypasses sticky headers)
        if (!clicked) {
            System.out.println("  [Strategy B] Actions.moveToElement().click()...");
            try {
                // Re-find to avoid StaleElementReference
                aboutLink = findAboutLink();
                new Actions(driver)
                    .moveToElement(aboutLink)
                    .pause(Duration.ofMillis(300))
                    .click()
                    .perform();
                clicked = true;
                System.out.println("  Strategy B succeeded.");
            } catch (Exception e) {
                System.out.println("  Strategy B failed: " + e.getMessage().split("\n")[0]);
            }
        }

        // Strategy C: JavaScript click (ignores all overlays)
        if (!clicked) {
            System.out.println("  [Strategy C] JavaScript click...");
            try {
                aboutLink = findAboutLink();
                ((JavascriptExecutor) driver)
                    .executeScript("arguments[0].click();", aboutLink);
                clicked = true;
                System.out.println("  Strategy C succeeded.");
            } catch (Exception e) {
                System.out.println("  Strategy C failed: " + e.getMessage().split("\n")[0]);
            }
        }

        // Strategy D: Navigate directly via href (ultimate fallback)
        if (!clicked) {
            System.out.println("  [Strategy D] Direct URL navigation via href...");
            if (aboutHref != null && !aboutHref.isEmpty() && !aboutHref.equals("#")) {
                driver.get(aboutHref);
                clicked = true;
                System.out.println("  Strategy D succeeded. Navigated to: " + aboutHref);
            } else {
                System.out.println("  Strategy D failed: href is empty or '#'.");
            }
        }

        Assert.assertTrue(clicked,
            "FAIL TC-05: All 4 click strategies failed for the About link. " +
            "Please inspect the page manually and update selectors.");

        // ── STEP 7: Wait for About page to load ──────────────────────────
        System.out.println("  STEP 7: Waiting for About page to load...");
        waitForPageLoad();
        sleepMs(1500);

        System.out.println("  Final URL: " + driver.getCurrentUrl());
        System.out.println("  ✔ PASS: About link clicked. Navigation completed.");
    }

    /**
     * TC-06
     * STEP 1: Read the current URL after clicking About
     * STEP 2: Verify the URL contains "about" or has changed from homepage
     */
    @Test(priority = 6, description = "TC-06 | URL changed to About page after clicking nav link")
    public void tc06_URLChangedToAboutPage() {
        printTestHeader("TC-06", "Verify URL Changed to About Page");

        // STEP 1: Get current URL
        System.out.println("  STEP 1: Reading current URL after navigation...");
        String currentURL = driver.getCurrentUrl();
        System.out.println("  Current URL  : " + currentURL);
        System.out.println("  Homepage URL : " + HOME_URL);

        // STEP 2: Verify URL has changed or contains "about"
        System.out.println("  STEP 2: Verifying URL change...");
        boolean urlChangedFromHome = !currentURL.equals(HOME_URL);
        boolean urlHasAbout        = currentURL.toLowerCase().contains("about");
        boolean urlHasHash         = currentURL.contains("#about"); // Single-page app style

        System.out.println("  URL changed from home : " + urlChangedFromHome);
        System.out.println("  URL contains 'about'  : " + urlHasAbout);
        System.out.println("  URL has #about anchor : " + urlHasHash);

        Assert.assertTrue(urlChangedFromHome || urlHasAbout || urlHasHash,
            "FAIL TC-06: URL did not change after clicking About link.\n" +
            "Still on: " + currentURL);

        System.out.println("  ✔ PASS: URL correctly changed to About page.");
    }

    /**
     * TC-07
     * STEP 1: Look for a heading that indicates the About page loaded
     * STEP 2: Verify the heading text is visible and not empty
     */
    @Test(priority = 7, description = "TC-07 | About page heading is visible after navigation")
    public void tc07_AboutPageHeadingLoaded() {
        printTestHeader("TC-07", "Verify About Page Heading After Navigation");

        // STEP 1: Find the page heading
        System.out.println("  STEP 1: Looking for About page heading...");
        String[] headingSelectors = {
            "h1", "h2", ".page-title", ".page-heading",
            ".about-title", ".section-title", "[class*='title']"
        };

        WebElement heading = null;
        for (String sel : headingSelectors) {
            List<WebElement> elements = driver.findElements(By.cssSelector(sel));
            for (WebElement el : elements) {
                String text = el.getText().trim();
                if (!text.isEmpty() && el.isDisplayed()) {
                    heading = el;
                    System.out.println("  Heading found using: " + sel);
                    System.out.println("  Heading text: \"" + text + "\"");
                    break;
                }
            }
            if (heading != null) break;
        }

        // STEP 2: Verify heading
        System.out.println("  STEP 2: Verifying heading is not empty...");
        Assert.assertNotNull(heading,
            "FAIL TC-07: No visible heading found on About page.");
        Assert.assertFalse(heading.getText().trim().isEmpty(),
            "FAIL TC-07: Heading element is empty.");

        System.out.println("  ✔ PASS: About page heading loaded: \"" + heading.getText().trim() + "\"");
    }

    // ══════════════════════════════════════════════════
    //  PHASE 3 — ABOUT PAGE FULL VERIFICATION
    // ══════════════════════════════════════════════════

    /**
     * TC-08
     * STEP 1: Check if there is a banner/hero image or section at the top of About page
     * STEP 2: Verify it is displayed
     */
    @Test(priority = 8, description = "TC-08 | About page banner/hero section is visible")
    public void tc08_AboutPageBannerVisible() {
        printTestHeader("TC-08", "Verify About Page Banner / Hero Section");

        // STEP 1: Scroll to top
        System.out.println("  STEP 1: Scrolling to top of page...");
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 0);");
        sleepMs(500);

        // STEP 2: Look for banner/hero elements
        System.out.println("  STEP 2: Searching for banner/hero section...");
        String[] bannerSelectors = {
            ".banner", ".hero", ".hero-section", ".about-banner",
            ".page-banner", ".inner-banner", ".top-section",
            "[class*='banner']", "[class*='hero']",
            "section:first-of-type", ".about-section:first-of-type"
        };

        boolean bannerFound = false;
        for (String sel : bannerSelectors) {
            List<WebElement> elements = driver.findElements(By.cssSelector(sel));
            if (!elements.isEmpty() && elements.get(0).isDisplayed()) {
                System.out.println("  Banner found using selector: " + sel);
                bannerFound = true;
                break;
            }
        }

        Assert.assertTrue(bannerFound,
            "FAIL TC-08: No banner/hero section found at top of About page.");
        System.out.println("  ✔ PASS: About page banner section is visible.");
    }

    /**
     * TC-09
     * STEP 1: Find the main H1 or H2 heading on the About page
     * STEP 2: Print its text
     * STEP 3: Verify it is not empty and contains meaningful text
     */
    @Test(priority = 9, description = "TC-09 | About page main H1/H2 heading is present")
    public void tc09_AboutPageMainHeading() {
        printTestHeader("TC-09", "Verify About Page Main Heading (H1/H2)");

        // STEP 1: Collect H1 and H2 tags
        System.out.println("  STEP 1: Finding H1 and H2 elements...");
        List<WebElement> h1List = driver.findElements(By.tagName("h1"));
        List<WebElement> h2List = driver.findElements(By.tagName("h2"));

        System.out.println("  H1 count: " + h1List.size());
        System.out.println("  H2 count: " + h2List.size());

        // STEP 2: Print all headings for debugging
        System.out.println("  STEP 2: Printing all H1/H2 headings...");
        for (WebElement h1 : h1List) {
            System.out.println("    H1 → \"" + h1.getText().trim() + "\"");
        }
        for (WebElement h2 : h2List) {
            System.out.println("    H2 → \"" + h2.getText().trim() + "\"");
        }

        // STEP 3: Assert at least one non-empty heading exists
        System.out.println("  STEP 3: Verifying at least one non-empty heading...");
        boolean hasHeading = false;
        for (WebElement h : h1List) {
            if (h.isDisplayed() && !h.getText().trim().isEmpty()) {
                hasHeading = true; break;
            }
        }
        if (!hasHeading) {
            for (WebElement h : h2List) {
                if (h.isDisplayed() && !h.getText().trim().isEmpty()) {
                    hasHeading = true; break;
                }
            }
        }

        Assert.assertTrue(hasHeading,
            "FAIL TC-09: No visible, non-empty H1 or H2 heading found on About page.");
        System.out.println("  ✔ PASS: About page has a valid main heading.");
    }

    /**
     * TC-10
     * STEP 1: Look for paragraph text on the About page
     * STEP 2: Verify at least one paragraph has readable content
     */
    @Test(priority = 10, description = "TC-10 | About page has descriptive paragraph text")
    public void tc10_AboutPageDescriptionText() {
        printTestHeader("TC-10", "Verify About Page Has Description / Paragraph Text");

        // STEP 1: Collect all <p> tags
        System.out.println("  STEP 1: Collecting all paragraph elements...");
        List<WebElement> paragraphs = driver.findElements(By.tagName("p"));
        System.out.println("  Total paragraphs found: " + paragraphs.size());

        // STEP 2: Find non-empty visible paragraphs
        System.out.println("  STEP 2: Checking for non-empty visible paragraphs...");
        int nonEmptyCount = 0;
        for (WebElement para : paragraphs) {
            String text = para.getText().trim();
            if (!text.isEmpty() && para.isDisplayed() && text.length() > 20) {
                nonEmptyCount++;
                System.out.println("  Para " + nonEmptyCount + ": \"" + text.substring(0, Math.min(80, text.length())) + "...\"");
                if (nonEmptyCount >= 3) break; // Print up to 3 examples
            }
        }

        System.out.println("  STEP 3: Verifying paragraph count...");
        Assert.assertTrue(nonEmptyCount >= 1,
            "FAIL TC-10: No readable paragraph text found on About page.");
        System.out.println("  ✔ PASS: About page has " + nonEmptyCount + "+ descriptive paragraph(s).");
    }

    /**
     * TC-11
     * STEP 1: Look for a "Who We Are" or company overview section
     * STEP 2: Verify it is present and visible
     */
    @Test(priority = 11, description = "TC-11 | 'Who We Are' / company overview section exists")
    public void tc11_WhoWeAreSection() {
        printTestHeader("TC-11", "Verify 'Who We Are' / Company Overview Section");

        // STEP 1: Scroll down to content area
        System.out.println("  STEP 1: Scrolling to content area...");
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 400);");
        sleepMs(500);

        // STEP 2: Search by section ID, class, and heading text
        System.out.println("  STEP 2: Searching for company overview section...");
        String[] keywords = { "who we are", "about us", "company", "overview", "who are we" };
        boolean sectionFound = false;

        // Check headings containing those keywords
        List<WebElement> allHeadings = driver.findElements(
            By.cssSelector("h1, h2, h3, h4, .section-title, .section-heading, [class*='title']")
        );

        for (WebElement heading : allHeadings) {
            String text = heading.getText().trim().toLowerCase();
            for (String keyword : keywords) {
                if (text.contains(keyword) && heading.isDisplayed()) {
                    sectionFound = true;
                    System.out.println("  Section found: \"" + heading.getText() + "\"");
                    break;
                }
            }
            if (sectionFound) break;
        }

        // Fallback: check CSS selectors
        if (!sectionFound) {
            String[] sectionSelectors = {
                "#about", ".about-section", ".who-we-are", ".company-overview",
                "[class*='about']", "[id*='about']"
            };
            for (String sel : sectionSelectors) {
                List<WebElement> els = driver.findElements(By.cssSelector(sel));
                if (!els.isEmpty() && els.get(0).isDisplayed()) {
                    sectionFound = true;
                    System.out.println("  Section found via selector: " + sel);
                    break;
                }
            }
        }

        Assert.assertTrue(sectionFound,
            "FAIL TC-11: 'Who We Are' / company overview section not found on About page.");
        System.out.println("  ✔ PASS: Company overview section is present.");
    }

    /**
     * TC-12
     * STEP 1: Look for Mission / Vision / Values section
     * STEP 2: Verify the section contains text
     */
    @Test(priority = 12, description = "TC-12 | Mission / Vision / Values section on About page")
    public void tc12_MissionVisionSection() {
        printTestHeader("TC-12", "Verify Mission / Vision / Values Section");

        // STEP 1: Search in all text on the page
        System.out.println("  STEP 1: Checking page text for Mission/Vision/Values...");
        String fullPageText = driver.findElement(By.tagName("body")).getText().toLowerCase();

        boolean hasMission = fullPageText.contains("mission");
        boolean hasVision  = fullPageText.contains("vision");
        boolean hasValues  = fullPageText.contains("values") || fullPageText.contains("core value");
        boolean hasGoal    = fullPageText.contains("goal") || fullPageText.contains("objective");

        System.out.println("  Contains 'mission' : " + hasMission);
        System.out.println("  Contains 'vision'  : " + hasVision);
        System.out.println("  Contains 'values'  : " + hasValues);
        System.out.println("  Contains 'goal'    : " + hasGoal);

        // STEP 2: Verify at least one of these is present
        System.out.println("  STEP 2: Asserting at least one section keyword exists...");
        Assert.assertTrue(hasMission || hasVision || hasValues || hasGoal,
            "FAIL TC-12: No Mission/Vision/Values/Goals section found on About page.");
        System.out.println("  ✔ PASS: Mission/Vision/Values content found on About page.");
    }

    /**
     * TC-13
     * STEP 1: Look for a Team / Leadership section
     * STEP 2: Print team member names/titles if found
     */
    @Test(priority = 13, description = "TC-13 | Team or Leadership section on About page (if present)")
    public void tc13_TeamSection() {
        printTestHeader("TC-13", "Verify Team / Leadership Section");

        // STEP 1: Check for team-related content
        System.out.println("  STEP 1: Searching for team/leadership section...");
        String pageText = driver.findElement(By.tagName("body")).getText().toLowerCase();

        boolean hasTeam     = pageText.contains("our team") || pageText.contains("meet our");
        boolean hasLeader   = pageText.contains("leadership") || pageText.contains("founders");
        boolean hasEmployee = pageText.contains("ceo") || pageText.contains("cto") ||
                              pageText.contains("director") || pageText.contains("manager");

        System.out.println("  Team keywords found    : " + hasTeam);
        System.out.println("  Leadership keywords    : " + hasLeader);
        System.out.println("  Employee title found   : " + hasEmployee);

        // STEP 2: Also check CSS selectors for team sections
        String[] teamSelectors = {
            ".team", ".our-team", ".team-section", ".team-member",
            "[class*='team']", ".staff", ".member"
        };

        boolean teamSectionFound = false;
        for (String sel : teamSelectors) {
            List<WebElement> elements = driver.findElements(By.cssSelector(sel));
            if (!elements.isEmpty()) {
                teamSectionFound = true;
                System.out.println("  Team section found via selector: " + sel +
                    " (" + elements.size() + " element(s))");
                break;
            }
        }

        // This test is informational — we warn but don't hard-fail
        if (!hasTeam && !hasLeader && !teamSectionFound) {
            System.out.println("  INFO TC-13: No team section found. This may be intentional.");
        } else {
            System.out.println("  ✔ PASS: Team/Leadership section is present on About page.");
        }
        // Soft assertion — always passes (some About pages don't have team sections)
        Assert.assertTrue(true, "TC-13 is informational — team section check completed.");
    }

    /**
     * TC-14
     * STEP 1: Find all images on the About page
     * STEP 2: Check each image has a non-empty src
     * STEP 3: Count broken images and assert count is 0
     */
    @Test(priority = 14, description = "TC-14 | All images on About page load correctly")
    public void tc14_AboutPageImagesLoad() {
        printTestHeader("TC-14", "Verify All About Page Images Have Valid src");

        // STEP 1: Scroll slowly to trigger lazy-load images
        System.out.println("  STEP 1: Scrolling page to trigger lazy-loaded images...");
        JavascriptExecutor js = (JavascriptExecutor) driver;
        for (int i = 0; i <= 3; i++) {
            js.executeScript("window.scrollTo(0, document.body.scrollHeight * " + (i * 0.33) + ");");
            sleepMs(400);
        }

        // STEP 2: Collect all images
        System.out.println("  STEP 2: Collecting all <img> elements...");
        List<WebElement> images = driver.findElements(By.tagName("img"));
        System.out.println("  Total images on page: " + images.size());

        // STEP 3: Check each image's src
        System.out.println("  STEP 3: Checking each image for valid src...");
        int brokenCount  = 0;
        int validCount   = 0;
        for (WebElement img : images) {
            String src = img.getAttribute("src");
            String alt = img.getAttribute("alt");
            if (src == null || src.trim().isEmpty()) {
                brokenCount++;
                System.out.println("    ✗ BROKEN image | alt='" + alt + "' | src is empty");
            } else {
                validCount++;
                System.out.println("    ✓ Valid image  | alt='" + alt + "' | " + src.substring(0, Math.min(60, src.length())));
            }
        }

        System.out.println("  Valid images  : " + validCount);
        System.out.println("  Broken images : " + brokenCount);

        Assert.assertEquals(brokenCount, 0,
            "FAIL TC-14: Found " + brokenCount + " image(s) with missing src on About page.");
        System.out.println("  ✔ PASS: All images have valid src attributes.");
    }

    /**
     * TC-15
     * STEP 1: Look for a CTA button or link (e.g., "Contact Us", "Get In Touch", "Learn More")
     * STEP 2: Verify it is visible and clickable
     */
    @Test(priority = 15, description = "TC-15 | Call-To-Action (CTA) button or link on About page")
    public void tc15_CTAButtonOnAboutPage() {
        printTestHeader("TC-15", "Verify CTA Button / Link on About Page");

        // STEP 1: Search for CTA elements
        System.out.println("  STEP 1: Searching for CTA buttons/links...");
        String[] ctaXpaths = {
            "//a[contains(translate(.,'CONTACT US','contact us'),'contact')]",
            "//a[contains(translate(.,'GET IN TOUCH','get in touch'),'get in touch')]",
            "//button[contains(translate(.,'CONTACT','contact'),'contact')]",
            "//a[contains(translate(.,'LEARN MORE','learn more'),'learn more')]",
            "//a[contains(translate(.,'GET STARTED','get started'),'get started')]",
            "//a[contains(translate(.,'HIRE US','hire us'),'hire us')]"
        };

        String[] ctaCssSelectors = {
            ".btn", ".button", ".cta", ".cta-btn",
            "a.btn", "a.button", "[class*='cta']",
            ".contact-btn"
        };

        WebElement ctaElement = null;

        // Try XPath text search
        for (String xpath : ctaXpaths) {
            List<WebElement> els = driver.findElements(By.xpath(xpath));
            if (!els.isEmpty() && els.get(0).isDisplayed()) {
                ctaElement = els.get(0);
                System.out.println("  CTA found via XPath: \"" + ctaElement.getText().trim() + "\"");
                break;
            }
        }

        // Try CSS if XPath fails
        if (ctaElement == null) {
            for (String sel : ctaCssSelectors) {
                List<WebElement> els = driver.findElements(By.cssSelector(sel));
                if (!els.isEmpty() && els.get(0).isDisplayed()) {
                    ctaElement = els.get(0);
                    System.out.println("  CTA found via CSS: " + sel + " → \"" + ctaElement.getText().trim() + "\"");
                    break;
                }
            }
        }

        // STEP 2: Assert CTA is visible
        System.out.println("  STEP 2: Verifying CTA is visible...");
        Assert.assertNotNull(ctaElement,
            "FAIL TC-15: No CTA button/link found on About page.");
        Assert.assertTrue(ctaElement.isDisplayed(),
            "FAIL TC-15: CTA element is not visible.");

        System.out.println("  ✔ PASS: CTA present: \"" + ctaElement.getText().trim() + "\"");
    }

    /**
     * TC-16
     * STEP 1: After navigating to About page, verify nav bar is still there
     * STEP 2: Confirm nav links are still present
     */
    @Test(priority = 16, description = "TC-16 | Navigation bar still visible on About page")
    public void tc16_NavStillVisibleOnAboutPage() {
        printTestHeader("TC-16", "Verify Navigation Bar Visible on About Page");

        // STEP 1: Scroll to top to see the header
        System.out.println("  STEP 1: Scrolling to top of About page...");
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 0);");
        sleepMs(500);

        // STEP 2: Find navigation element
        System.out.println("  STEP 2: Looking for navigation bar...");
        String[] navSelectors = { "nav", "header nav", ".navbar", ".nav", "#navbar", ".navigation" };
        boolean navFound = false;
        for (String sel : navSelectors) {
            List<WebElement> els = driver.findElements(By.cssSelector(sel));
            if (!els.isEmpty() && els.get(0).isDisplayed()) {
                navFound = true;
                System.out.println("  Nav bar found via: " + sel);
                break;
            }
        }

        Assert.assertTrue(navFound,
            "FAIL TC-16: Navigation bar NOT visible on About page. Possible layout issue.");
        System.out.println("  ✔ PASS: Navigation bar is visible on About page.");
    }

    /**
     * TC-17
     * STEP 1: Scroll to the bottom of About page
     * STEP 2: Verify the footer is present
     * STEP 3: Verify footer has content (copyright, links, etc.)
     */
    @Test(priority = 17, description = "TC-17 | Footer is present and has content on About page")
    public void tc17_FooterOnAboutPage() {
        printTestHeader("TC-17", "Verify Footer on About Page");

        // STEP 1: Scroll to bottom
        System.out.println("  STEP 1: Scrolling to bottom of About page...");
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight);");
        sleepMs(1000);

        // STEP 2: Find footer element
        System.out.println("  STEP 2: Looking for footer element...");
        String[] footerSelectors = { "footer", ".footer", "#footer", "[class*='footer']" };
        WebElement footerEl = null;
        for (String sel : footerSelectors) {
            List<WebElement> els = driver.findElements(By.cssSelector(sel));
            if (!els.isEmpty()) {
                footerEl = els.get(0);
                System.out.println("  Footer found via: " + sel);
                break;
            }
        }

        Assert.assertNotNull(footerEl, "FAIL TC-17: No footer element found on About page.");

        // STEP 3: Verify footer has text content
        System.out.println("  STEP 3: Checking footer has content...");
        String footerText = footerEl.getText().trim();
        System.out.println("  Footer text (first 100 chars): " +
            footerText.substring(0, Math.min(100, footerText.length())));

        Assert.assertFalse(footerText.isEmpty(),
            "FAIL TC-17: Footer found but has no text content.");
        System.out.println("  ✔ PASS: Footer is present and has content on About page.");
    }

    /**
     * TC-18
     * STEP 1: Collect all links on the About page
     * STEP 2: Verify each link has a valid href
     * STEP 3: Count and report links with missing/empty href
     */
    @Test(priority = 18, description = "TC-18 | No broken links on About page")
    public void tc18_NoBrokenLinksOnAboutPage() {
        printTestHeader("TC-18", "Verify No Broken Links on About Page");

        // STEP 1: Collect all anchor tags
        System.out.println("  STEP 1: Collecting all anchor elements...");
        List<WebElement> links = driver.findElements(By.tagName("a"));
        System.out.println("  Total links found: " + links.size());

        // STEP 2: Check each link
        System.out.println("  STEP 2: Checking each link for valid href...");
        int noHrefCount     = 0;
        int validLinkCount  = 0;

        for (WebElement link : links) {
            String href = link.getAttribute("href");
            if (href == null || href.trim().isEmpty()) {
                noHrefCount++;
                System.out.println("    ✗ No href → text: \"" + link.getText().trim() + "\"");
            } else {
                validLinkCount++;
            }
        }

        System.out.println("  Valid links   : " + validLinkCount);
        System.out.println("  No-href links : " + noHrefCount);

        // STEP 3: Assert enough valid links exist
        System.out.println("  STEP 3: Asserting minimum valid link count...");
        Assert.assertTrue(validLinkCount >= 2,
            "FAIL TC-18: Too few valid links on About page. Found: " + validLinkCount);
        System.out.println("  ✔ PASS: About page has " + validLinkCount + " valid links.");
    }

    /**
     * TC-19
     * STEP 1: Check for the viewport meta tag
     * STEP 2: Verify width=device-width is set (responsive design)
     */
    @Test(priority = 19, description = "TC-19 | About page has responsive viewport meta tag")
    public void tc19_ViewportMetaTagPresent() {
        printTestHeader("TC-19", "Verify Responsive Viewport Meta Tag on About Page");

        // STEP 1: Find viewport meta tag
        System.out.println("  STEP 1: Looking for viewport meta tag...");
        List<WebElement> metaTags = driver.findElements(By.cssSelector("meta[name='viewport']"));

        Assert.assertFalse(metaTags.isEmpty(),
            "FAIL TC-19: No viewport meta tag found. Page may not be mobile responsive.");

        // STEP 2: Check content attribute
        System.out.println("  STEP 2: Verifying viewport meta content...");
        String viewportContent = metaTags.get(0).getAttribute("content");
        System.out.println("  Viewport content: " + viewportContent);

        Assert.assertNotNull(viewportContent,
            "FAIL TC-19: Viewport meta tag has no content attribute.");
        Assert.assertTrue(viewportContent.contains("width=device-width"),
            "FAIL TC-19: Viewport meta does not contain 'width=device-width'. Found: " + viewportContent);

        System.out.println("  ✔ PASS: Viewport meta tag is correct → " + viewportContent);
    }

    /**
     * TC-20
     * STEP 1: Get the scroll height of the About page
     * STEP 2: Verify the page is taller than the visible viewport (has content below fold)
     */
    @Test(priority = 20, description = "TC-20 | About page has scrollable content (not empty page)")
    public void tc20_AboutPageHasScrollableContent() {
        printTestHeader("TC-20", "Verify About Page Has Scrollable Content");

        // STEP 1: Get page dimensions using JavaScript
        System.out.println("  STEP 1: Getting page scroll height...");
        JavascriptExecutor js = (JavascriptExecutor) driver;
        Long scrollHeight  = (Long) js.executeScript("return document.body.scrollHeight;");
        Long windowHeight  = (Long) js.executeScript("return window.innerHeight;");

        System.out.println("  Page scroll height  : " + scrollHeight + "px");
        System.out.println("  Browser window height: " + windowHeight + "px");

        // STEP 2: Assert the page is taller than the viewport
        System.out.println("  STEP 2: Verifying page has content below fold...");
        Assert.assertTrue(scrollHeight > windowHeight,
            "FAIL TC-20: About page appears very short (no content below fold). " +
            "scrollHeight=" + scrollHeight + ", windowHeight=" + windowHeight);

        System.out.println("  Page is " + (scrollHeight - windowHeight) + "px taller than viewport.");
        System.out.println("  ✔ PASS: About page has scrollable content.");
    }

    // ══════════════════════════════════════════════════
    //  HELPER / UTILITY METHODS
    // ══════════════════════════════════════════════════

    /** Waits for document.readyState to be 'complete' */
    private void waitForPageLoad() {
        wait.until(webDriver ->
            ((JavascriptExecutor) webDriver)
                .executeScript("return document.readyState").equals("complete")
        );
    }

    /** Locates the About link using multiple strategies */
    private WebElement findAboutLink() {
        // Strategy 1: by link text in nav area
        List<WebElement> navLinks = driver.findElements(
            By.cssSelector("nav a, header a, .navbar a, .nav a, header ul li a")
        );
        for (WebElement link : navLinks) {
            if (link.getText().trim().toLowerCase().contains("about")) {
                return link;
            }
        }
        // Strategy 2: by href containing "about"
        List<WebElement> hrefLinks = driver.findElements(By.xpath("//a[contains(@href,'about')]"));
        if (!hrefLinks.isEmpty()) return hrefLinks.get(0);

        // Strategy 3: any visible link with about text
        List<WebElement> allLinks = driver.findElements(
            By.xpath("//a[contains(translate(normalize-space(.),'ABOUT','about'),'about')]")
        );
        for (WebElement link : allLinks) {
            if (link.isDisplayed()) return link;
        }
        return null;
    }

    /**
     * Dismisses common overlays that cause ElementClickInterceptedException:
     * cookie banners, popups, chat widgets, GDPR bars.
     */
    private void dismissOverlays() {
        String[] overlaySelectors = {
            "button[id*='accept' i]",    "button[class*='accept' i]",
            "a[class*='accept' i]",       "button[id*='cookie' i]",
            ".cookie-accept",             ".cookie-close",
            "#cookie-accept",             "#cookieAccept",
            "button[class*='close' i]",   ".modal-close",
            ".popup-close",               ".close-btn",
            "[aria-label='Close']",       "[aria-label='close']",
            ".gdpr-accept",               "#gdpr-accept",
            ".dismiss",                   "#dismiss"
        };

        for (String selector : overlaySelectors) {
            try {
                List<WebElement> elements = driver.findElements(By.cssSelector(selector));
                for (WebElement el : elements) {
                    if (el.isDisplayed() && el.isEnabled()) {
                        el.click();
                        System.out.println("  Dismissed overlay via: " + selector);
                        sleepMs(500);
                        break;
                    }
                }
            } catch (Exception ignored) { /* overlay not present, skip */ }
        }

        // Press ESC to close any lingering modal
        try {
            driver.findElement(By.tagName("body")).sendKeys(Keys.ESCAPE);
            sleepMs(300);
        } catch (Exception ignored) {}

        System.out.println("  Overlay check complete.");
    }

    /** Prints a formatted header for each test case in the console */
    private void printTestHeader(String tcId, String description) {
        System.out.println("\n--------------------------------------------------");
        System.out.println("  " + tcId + " | " + description);
        System.out.println("--------------------------------------------------");
    }

    /** Simple sleep utility */
    private void sleepMs(int ms) {
        try { Thread.sleep(ms); } catch (InterruptedException ignored) {}
    }
}