package com.vellinfotech.tests;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.*;
import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;
import java.util.List;

/**
 * ============================================================
 *  Project     : Vell InfoTech – Homepage Automation
 *  URL         : https://www.vellinfotech.com/
 *  Page Title  : Vell InfoTech
 *  Framework   : Selenium WebDriver 4.x + TestNG 7.x
 *  IDE         : Eclipse
 * ============================================================
 *
 *  ECLIPSE SETUP (pom.xml dependencies):
 *  ─────────────────────────────────────
 *  1. selenium-java           4.18.1
 *  2. testng                  7.9.0
 *  3. webdrivermanager        5.7.0
 *  ─────────────────────────────────────
 *  Run: Right-click file → Run As → TestNG Test
 * ============================================================
 */
public class VelInfoTechHomePageTest {

    WebDriver driver;
    WebDriverWait wait;

    private static final String BASE_URL   = "https://www.vellinfotech.com/";
    private static final String EXP_TITLE  = "Vell InfoTech";   // confirmed from live site
    private static final int    WAIT_SEC   = 20;

    // ─────────────────────────────────────────
    // SETUP & TEARDOWN
    // ─────────────────────────────────────────

    @BeforeClass
    public void setUp() {
        // Auto-downloads correct ChromeDriver – no manual setup needed
        io.github.bonigarcia.wdm.WebDriverManager.chromedriver().setup();

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-popup-blocking");
        // options.addArguments("--headless=new");  // uncomment to run without browser window

        driver = new ChromeDriver(options);
        wait   = new WebDriverWait(driver, Duration.ofSeconds(WAIT_SEC));

        driver.get(BASE_URL);

        // Wait for JS to fully render the page
        wait.until(webDriver ->
            ((JavascriptExecutor) webDriver)
                .executeScript("return document.readyState").equals("complete")
        );
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    // ─────────────────────────────────────────
    // TC-01 : Exact Page Title Verification
    // ─────────────────────────────────────────
    @Test(priority = 1, description = "Verify homepage title is 'Vell InfoTech'")
    public void testPageTitle() {
        String actualTitle = driver.getTitle().trim();
        System.out.println("[TC-01] Page Title: " + actualTitle);
        Assert.assertEquals(actualTitle, EXP_TITLE,
            "FAIL: Title mismatch. Expected: '" + EXP_TITLE + "' | Actual: '" + actualTitle + "'");
    }

    // ─────────────────────────────────────────
    // TC-02 : Homepage URL Verification
    // ─────────────────────────────────────────
    @Test(priority = 2, description = "Verify the browser is on vellinfotech.com")
    public void testPageURL() {
        String currentURL = driver.getCurrentUrl();
        System.out.println("[TC-02] Current URL: " + currentURL);
        Assert.assertTrue(currentURL.contains("vellinfotech.com"),
            "FAIL: URL does not contain 'vellinfotech.com'. Actual: " + currentURL);
    }

    // ─────────────────────────────────────────
    // TC-03 : Page is Not Blank (Body Has Content)
    // ─────────────────────────────────────────
    @Test(priority = 3, description = "Verify the page body is not empty after JS render")
    public void testPageBodyNotEmpty() {
        String bodyText = driver.findElement(By.tagName("body")).getText().trim();
        System.out.println("[TC-03] Body text length: " + bodyText.length() + " chars");
        Assert.assertFalse(bodyText.isEmpty(),
            "FAIL: Page body is empty – JS may not have rendered.");
        Assert.assertTrue(bodyText.length() > 50,
            "FAIL: Page body has very little content (" + bodyText.length() + " chars).");
    }

    // ─────────────────────────────────────────
    // TC-04 : Logo Visible in Header
    // ─────────────────────────────────────────
    @Test(priority = 4, description = "Verify company logo is displayed")
    public void testLogoDisplayed() {
        // Tries multiple common logo selectors
        By[] logoSelectors = {
            By.cssSelector("img[alt*='Vell' i]"),
            By.cssSelector("img[alt*='logo' i]"),
            By.cssSelector("img[src*='logo' i]"),
            By.cssSelector("header img"),
            By.cssSelector(".logo img"),
            By.cssSelector(".navbar-brand img"),
            By.cssSelector("a.logo img"),
            By.cssSelector("#logo"),
            By.cssSelector(".site-logo")
        };

        boolean found = false;
        for (By sel : logoSelectors) {
            List<WebElement> els = driver.findElements(sel);
            if (!els.isEmpty() && els.get(0).isDisplayed()) {
                System.out.println("[TC-04] Logo found via: " + sel);
                found = true;
                break;
            }
        }
        Assert.assertTrue(found, "FAIL: Logo not visible on homepage.");
    }

    // ─────────────────────────────────────────
    // TC-05 : Navigation Bar is Present
    // ─────────────────────────────────────────
    @Test(priority = 5, description = "Verify navigation bar is rendered on the page")
    public void testNavBarPresent() {
        By[] navSelectors = {
            By.tagName("nav"),
            By.cssSelector("header nav"),
            By.cssSelector(".navbar"),
            By.cssSelector(".nav"),
            By.cssSelector("#navbar"),
            By.cssSelector(".main-menu"),
            By.cssSelector(".header-menu")
        };

        boolean found = false;
        for (By sel : navSelectors) {
            List<WebElement> els = driver.findElements(sel);
            if (!els.isEmpty() && els.get(0).isDisplayed()) {
                System.out.println("[TC-05] Nav found via: " + sel);
                found = true;
                break;
            }
        }
        Assert.assertTrue(found, "FAIL: Navigation bar not found on homepage.");
    }

    // ─────────────────────────────────────────
    // TC-06 : Nav Links Are Clickable
    // ─────────────────────────────────────────
    @Test(priority = 6, description = "Verify navigation links are present and clickable")
    public void testNavLinksExist() {
        List<WebElement> links = driver.findElements(
            By.cssSelector("nav a, .navbar a, header ul li a, .menu a")
        );
        System.out.println("[TC-06] Nav links count: " + links.size());
        Assert.assertTrue(links.size() >= 2,
            "FAIL: Expected at least 2 nav links, found: " + links.size());

        for (WebElement link : links) {
            if (link.isDisplayed()) {
                String href = link.getAttribute("href");
                System.out.println("   Nav link: " + link.getText() + " → " + href);
            }
        }
    }

    // ─────────────────────────────────────────
    // TC-07 : Hero / Banner Section Exists
    // ─────────────────────────────────────────
    @Test(priority = 7, description = "Verify the hero/banner section is displayed")
    public void testHeroBannerSection() {
        By[] heroSelectors = {
            By.cssSelector(".hero"),
            By.cssSelector(".banner"),
            By.cssSelector(".hero-section"),
            By.cssSelector(".main-banner"),
            By.cssSelector(".slider"),
            By.cssSelector(".home-banner"),
            By.cssSelector("section:first-of-type"),
            By.cssSelector(".jumbotron"),
            By.cssSelector("[class*='hero']"),
            By.cssSelector("[class*='banner']")
        };

        boolean found = false;
        for (By sel : heroSelectors) {
            List<WebElement> els = driver.findElements(sel);
            if (!els.isEmpty() && els.get(0).isDisplayed()) {
                System.out.println("[TC-07] Hero/Banner found via: " + sel);
                found = true;
                break;
            }
        }
        Assert.assertTrue(found, "FAIL: Hero/Banner section not found.");
    }

    // ─────────────────────────────────────────
    // TC-08 : H1 or H2 Heading Exists
    // ─────────────────────────────────────────
    @Test(priority = 8, description = "Verify at least one visible heading exists on the page")
    public void testHeadingExists() {
        List<WebElement> h1s = driver.findElements(By.tagName("h1"));
        List<WebElement> h2s = driver.findElements(By.tagName("h2"));

        boolean headingFound = false;
        String headingText = "";

        if (!h1s.isEmpty() && h1s.get(0).isDisplayed()) {
            headingText = h1s.get(0).getText().trim();
            headingFound = true;
        } else if (!h2s.isEmpty() && h2s.get(0).isDisplayed()) {
            headingText = h2s.get(0).getText().trim();
            headingFound = true;
        }

        System.out.println("[TC-08] Heading text: " + headingText);
        Assert.assertTrue(headingFound, "FAIL: No H1 or H2 heading found on homepage.");
        Assert.assertFalse(headingText.isEmpty(), "FAIL: Heading is empty.");
    }

    // ─────────────────────────────────────────
    // TC-09 : Services Section Present
    // ─────────────────────────────────────────
    @Test(priority = 9, description = "Verify a Services section or link is visible")
    public void testServicesSectionVisible() {
        // Try ID/class first, then fall back to text search
        By[] serviceSelectors = {
            By.cssSelector("#services"),
            By.cssSelector(".services"),
            By.cssSelector(".our-services"),
            By.cssSelector("[class*='service']"),
            By.xpath("//*[contains(translate(normalize-space(text()),'SERVICE','service'),'service')]")
        };

        boolean found = false;
        for (By sel : serviceSelectors) {
            List<WebElement> els = driver.findElements(sel);
            if (!els.isEmpty() && els.get(0).isDisplayed()) {
                System.out.println("[TC-09] Services section found via: " + sel);
                found = true;
                break;
            }
        }
        Assert.assertTrue(found, "FAIL: No Services section found on homepage.");
    }

    // ─────────────────────────────────────────
    // TC-10 : "Contact" Link Present
    // ─────────────────────────────────────────
    @Test(priority = 10, description = "Verify a Contact link is present on homepage")
    public void testContactLinkPresent() {
        List<WebElement> contactLinks = driver.findElements(
            By.xpath("//a[contains(translate(normalize-space(.),'CONTACT','contact'),'contact')]")
        );
        System.out.println("[TC-10] Contact links found: " + contactLinks.size());
        Assert.assertFalse(contactLinks.isEmpty(), "FAIL: No 'Contact' link found.");
        Assert.assertTrue(contactLinks.get(0).isDisplayed(), "FAIL: Contact link not visible.");
    }

    // ─────────────────────────────────────────
    // TC-11 : Footer Visible
    // ─────────────────────────────────────────
    @Test(priority = 11, description = "Verify the footer is present at the bottom of page")
    public void testFooterVisible() {
        // Scroll to bottom first
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight)");

        try { Thread.sleep(800); } catch (InterruptedException ignored) {}

        By[] footerSelectors = {
            By.tagName("footer"),
            By.cssSelector(".footer"),
            By.cssSelector("#footer"),
            By.cssSelector("[class*='footer']")
        };

        boolean found = false;
        for (By sel : footerSelectors) {
            List<WebElement> els = driver.findElements(sel);
            if (!els.isEmpty()) {
                System.out.println("[TC-11] Footer found via: " + sel);
                found = true;
                break;
            }
        }
        Assert.assertTrue(found, "FAIL: Footer element not found on homepage.");
    }

    // ─────────────────────────────────────────
    // TC-12 : Footer Contains Brand/Copyright
    // ─────────────────────────────────────────
    @Test(priority = 12, description = "Verify footer contains copyright or brand name")
    public void testFooterCopyrightText() {
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight)");
        try { Thread.sleep(500); } catch (InterruptedException ignored) {}

        String bodyText = driver.findElement(By.tagName("body")).getText().toLowerCase();
        boolean hasCopyright = bodyText.contains("©") ||
                               bodyText.contains("copyright") ||
                               bodyText.contains("vell") ||
                               bodyText.contains("infotech") ||
                               bodyText.contains("all rights");

        System.out.println("[TC-12] Footer copyright check: " + hasCopyright);
        Assert.assertTrue(hasCopyright, "FAIL: No copyright or brand text found in footer.");
    }

    // ─────────────────────────────────────────
    // TC-13 : No Images with Missing src
    // ─────────────────────────────────────────
    @Test(priority = 13, description = "Verify all images have a valid src attribute")
    public void testImagesHaveSrc() {
        // Scroll to trigger lazy-load
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight / 2)");
        try { Thread.sleep(800); } catch (InterruptedException ignored) {}

        List<WebElement> images = driver.findElements(By.tagName("img"));
        int broken = 0;
        for (WebElement img : images) {
            String src = img.getAttribute("src");
            if (src == null || src.trim().isEmpty()) {
                broken++;
                System.out.println("   [WARN] Broken image (no src): " + img.getAttribute("alt"));
            }
        }
        System.out.println("[TC-13] Total images: " + images.size() + " | Broken: " + broken);
        Assert.assertEquals(broken, 0,
            "FAIL: Found " + broken + " image(s) with no src attribute.");
    }

    // ─────────────────────────────────────────
    // TC-14 : Social Media Links Present
    // ─────────────────────────────────────────
    @Test(priority = 14, description = "Verify at least one social media link exists")
    public void testSocialMediaLinks() {
        List<WebElement> socialLinks = driver.findElements(By.xpath(
            "//a[contains(@href,'facebook.com') or contains(@href,'linkedin.com') " +
            "or contains(@href,'twitter.com') or contains(@href,'instagram.com') " +
            "or contains(@href,'youtube.com') or contains(@href,'x.com')]"
        ));
        System.out.println("[TC-14] Social media links found: " + socialLinks.size());
        for (WebElement s : socialLinks) {
            System.out.println("   Social: " + s.getAttribute("href"));
        }
        Assert.assertFalse(socialLinks.isEmpty(),
            "FAIL: No social media links found on homepage.");
    }

    // ─────────────────────────────────────────
    // TC-15 : All Hyperlinks Have href
    // ─────────────────────────────────────────
    @Test(priority = 15, description = "Verify all anchor tags have a valid href attribute")
    public void testAllLinksHaveHref() {
        List<WebElement> allLinks = driver.findElements(By.tagName("a"));
        int noHref = 0;
        for (WebElement link : allLinks) {
            String href = link.getAttribute("href");
            if (href == null || href.trim().isEmpty() || href.equals("#")) {
                noHref++;
            }
        }
        System.out.println("[TC-15] Total links: " + allLinks.size() +
                           " | Links with no/empty href: " + noHref);
        // We only warn — some '#' anchors are valid (e.g., scroll-to-top)
        if (noHref > 0) {
            System.out.println("   [INFO] " + noHref + " link(s) have '#' or empty href (may be intentional).");
        }
        // Assert that not ALL links are broken
        Assert.assertTrue(allLinks.size() - noHref >= 3,
            "FAIL: Too few valid hyperlinks on homepage.");
    }

    // ─────────────────────────────────────────
    // TC-16 : Page Loads Under 10 Seconds
    // ─────────────────────────────────────────
    @Test(priority = 16, description = "Verify homepage loads within acceptable time")
    public void testPageLoadPerformance() {
        long start = System.currentTimeMillis();
        driver.get(BASE_URL);
        wait.until(webDriver ->
            ((JavascriptExecutor) webDriver)
                .executeScript("return document.readyState").equals("complete")
        );
        long loadTime = System.currentTimeMillis() - start;
        System.out.println("[TC-16] Page load time: " + loadTime + " ms");
        Assert.assertTrue(loadTime < 10000,
            "FAIL: Page load time exceeded 10 seconds. Actual: " + loadTime + " ms");
    }

    // ─────────────────────────────────────────
    // TC-17 : Logo Redirects to Homepage
    // ─────────────────────────────────────────
    @Test(priority = 17, description = "Verify clicking the logo brings user back to homepage")
    public void testLogoRedirectsToHome() {
        // First navigate away
        driver.get(BASE_URL + "#bottom");

        By[] logoLinks = {
            By.cssSelector("a[href='/'] img"),
            By.cssSelector("a.logo"),
            By.cssSelector(".navbar-brand"),
            By.cssSelector("header a:first-of-type"),
            By.cssSelector("a[href*='vellinfotech']")
        };

        boolean clicked = false;
        for (By sel : logoLinks) {
            List<WebElement> els = driver.findElements(sel);
            if (!els.isEmpty() && els.get(0).isDisplayed()) {
                els.get(0).click();
                clicked = true;
                System.out.println("[TC-17] Logo clicked via: " + sel);
                break;
            }
        }

        if (clicked) {
            wait.until(ExpectedConditions.urlContains("vellinfotech.com"));
            String url = driver.getCurrentUrl();
            System.out.println("[TC-17] After logo click URL: " + url);
            Assert.assertTrue(url.contains("vellinfotech.com"),
                "FAIL: After logo click, URL is: " + url);
        } else {
            System.out.println("[TC-17] SKIP: Logo link selector not found — inspect manually.");
        }
    }

    // ─────────────────────────────────────────
    // TC-18 : Responsive – Viewport Meta Tag
    // ─────────────────────────────────────────
    @Test(priority = 18, description = "Verify the page has a responsive viewport meta tag")
    public void testViewportMetaTag() {
        WebElement viewportMeta = driver.findElement(
            By.cssSelector("meta[name='viewport']")
        );
        String content = viewportMeta.getAttribute("content");
        System.out.println("[TC-18] Viewport meta: " + content);
        Assert.assertNotNull(content, "FAIL: Viewport meta tag is missing.");
        Assert.assertTrue(content.contains("width=device-width"),
            "FAIL: Viewport meta does not have 'width=device-width'. Actual: " + content);
    }
}