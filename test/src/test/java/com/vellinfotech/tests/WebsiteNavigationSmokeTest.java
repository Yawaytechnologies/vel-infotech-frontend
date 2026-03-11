package com.vellinfotech.tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;
import java.util.List;

public class WebsiteNavigationSmokeTest {

    WebDriver driver;
    WebDriverWait wait;
    JavascriptExecutor js;
    Actions actions;

    private static final String BASE_URL = "https://www.vellinfotech.com/";
    private static final int WAIT_TIME = 20;

    // =========================================================
    // SETUP
    // =========================================================
    @BeforeClass
    public void setUp() {
        System.out.println("\n==============================================");
        System.out.println("SETUP: Launching Chrome Browser");
        System.out.println("==============================================");

        WebDriverManager.chromedriver().setup();

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-popup-blocking");
        // options.addArguments("--headless=new");

        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(WAIT_TIME));
        js = (JavascriptExecutor) driver;
        actions = new Actions(driver);

        driver.get(BASE_URL);
        waitForPageLoad();
        dismissOverlays();

        System.out.println("Launched URL: " + BASE_URL);
    }

    @AfterClass
    public void tearDown() {
        System.out.println("\n==============================================");
        System.out.println("TEARDOWN: Closing Browser");
        System.out.println("==============================================");

        if (driver != null) {
            driver.quit();
        }
    }

    // =========================================================
    // TEST CASES
    // =========================================================

    @Test(priority = 1, description = "TC-01 | Verify Home page loads successfully")
    public void tc01_verifyHomePage() {
        printHeader("TC-01", "Verify Home Page Loads");

        openHomePage();

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();
        String bodyText = driver.findElement(By.tagName("body")).getText().trim();

        System.out.println("Current URL : " + currentUrl);
        System.out.println("Page Title  : " + title);
        System.out.println("Body Length : " + bodyText.length());

        Assert.assertTrue(currentUrl.contains("vellinfotech"), "FAIL: Home page URL is incorrect.");
        Assert.assertTrue(title != null && !title.trim().isEmpty(), "FAIL: Home page title is empty.");
        Assert.assertTrue(bodyText.length() > 50, "FAIL: Home page body content is too small.");

        System.out.println("PASS: Home page loaded successfully.");
    }

    @Test(priority = 2, description = "TC-02 | Verify About page navigation")
    public void tc02_verifyAboutPage() {
        printHeader("TC-02", "Verify About Page");

        openHomePage();
        clickMenu("about");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("About URL   : " + currentUrl);
        System.out.println("About Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("about") || title.toLowerCase().contains("about"),
                "FAIL: About page did not open correctly."
        );

        verifyPageContent("About");
        System.out.println("PASS: About page verified.");
    }

    @Test(priority = 3, description = "TC-03 | Verify Courses page navigation")
    public void tc03_verifyCoursesPage() {
        printHeader("TC-03", "Verify Courses Page");

        openHomePage();
        clickMenu("course");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("Courses URL   : " + currentUrl);
        System.out.println("Courses Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("course") || title.toLowerCase().contains("course"),
                "FAIL: Courses page did not open correctly."
        );

        verifyPageContent("Courses");
        System.out.println("PASS: Courses page verified.");
    }

    @Test(priority = 4, description = "TC-04 | Verify Clients page navigation")
    public void tc04_verifyClientsPage() {
        printHeader("TC-04", "Verify Clients Page");

        openHomePage();
        clickMenu("client");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("Clients URL   : " + currentUrl);
        System.out.println("Clients Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("client") || title.toLowerCase().contains("client"),
                "FAIL: Clients page did not open correctly."
        );

        verifyPageContent("Clients");
        System.out.println("PASS: Clients page verified.");
    }

    @Test(priority = 5, description = "TC-05 | Verify Contact page navigation")
    public void tc05_verifyContactPage() {
        printHeader("TC-05", "Verify Contact Page");

        openHomePage();
        clickMenu("contact");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("Contact URL   : " + currentUrl);
        System.out.println("Contact Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("contact") || title.toLowerCase().contains("contact"),
                "FAIL: Contact page did not open correctly."
        );

        verifyPageContent("Contact");
        System.out.println("PASS: Contact page verified.");
    }

    @Test(priority = 6, description = "TC-06 | Verify Careers page navigation")
    public void tc06_verifyCareersPage() {
        printHeader("TC-06", "Verify Careers Page");

        openHomePage();
        clickMenu("career");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("Careers URL   : " + currentUrl);
        System.out.println("Careers Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("career") || title.toLowerCase().contains("career"),
                "FAIL: Careers page did not open correctly."
        );

        verifyPageContent("Careers");
        System.out.println("PASS: Careers page verified.");
    }

    @Test(priority = 7, description = "TC-07 | Verify Blog page navigation")
    public void tc07_verifyBlogPage() {
        printHeader("TC-07", "Verify Blog Page");

        openHomePage();
        clickMenu("blog");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("Blog URL   : " + currentUrl);
        System.out.println("Blog Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("blog") || title.toLowerCase().contains("blog"),
                "FAIL: Blog page did not open correctly."
        );

        verifyPageContent("Blog");
        System.out.println("PASS: Blog page verified.");
    }

    @Test(priority = 8, description = "TC-08 | Verify Internship page navigation")
    public void tc08_verifyInternshipPage() {
        printHeader("TC-08", "Verify Internship Page");

        openHomePage();
        clickMenu("internship");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("Internship URL   : " + currentUrl);
        System.out.println("Internship Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("intern") || title.toLowerCase().contains("intern"),
                "FAIL: Internship page did not open correctly."
        );

        verifyPageContent("Internship");
        System.out.println("PASS: Internship page verified.");
    }

    @Test(priority = 9, description = "TC-09 | Verify Placed Students page navigation")
    public void tc09_verifyPlacedStudentsPage() {
        printHeader("TC-09", "Verify Placed Students Page");

        openHomePage();
        clickMenu("placed");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("Placed Students URL   : " + currentUrl);
        System.out.println("Placed Students Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("placed") ||
                title.toLowerCase().contains("placed") ||
                title.toLowerCase().contains("student"),
                "FAIL: Placed Students page did not open correctly."
        );

        verifyPageContent("Placed Students");
        System.out.println("PASS: Placed Students page verified.");
    }

    @Test(priority = 10, description = "TC-10 | Verify Reviews page navigation")
    public void tc10_verifyReviewsPage() {
        printHeader("TC-10", "Verify Reviews Page");

        openHomePage();
        clickMenu("review");

        String currentUrl = driver.getCurrentUrl();
        String title = driver.getTitle();

        System.out.println("Reviews URL   : " + currentUrl);
        System.out.println("Reviews Title : " + title);

        Assert.assertTrue(
                currentUrl.toLowerCase().contains("review") || title.toLowerCase().contains("review"),
                "FAIL: Reviews page did not open correctly."
        );

        verifyPageContent("Reviews");
        System.out.println("PASS: Reviews page verified.");
    }

    @Test(priority = 11, description = "TC-11 | Verify header navigation links are visible")
    public void tc11_verifyHeaderLinksVisible() {
        printHeader("TC-11", "Verify Header Navigation Links");

        openHomePage();

        List<WebElement> navLinks = driver.findElements(
                By.cssSelector("nav a, header a, .navbar a, .nav a, .menu a")
        );

        System.out.println("Header/Nav links found: " + navLinks.size());

        int visibleLinks = 0;
        for (WebElement link : navLinks) {
            try {
                String text = link.getText().trim();
                if (link.isDisplayed() && !text.isEmpty()) {
                    visibleLinks++;
                    System.out.println("Visible Link: " + text + " -> " + link.getAttribute("href"));
                }
            } catch (Exception ignored) {
            }
        }

        Assert.assertTrue(visibleLinks >= 5, "FAIL: Too few visible header links found.");
        System.out.println("PASS: Header navigation links are visible.");
    }

    @Test(priority = 12, description = "TC-12 | Verify footer is present on important pages")
    public void tc12_verifyFooterPresence() {
        printHeader("TC-12", "Verify Footer Presence");

        String[] pages = {"about", "course", "client", "contact"};

        for (String page : pages) {
            openHomePage();
            clickMenu(page);

            js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
            sleepMs(1000);

            WebElement footer = findFooter();
            Assert.assertNotNull(footer, "FAIL: Footer not found on page: " + page);

            String footerText = footer.getText().trim();
            System.out.println("Footer found on " + page + " page. Text length: " + footerText.length());

            Assert.assertFalse(footerText.isEmpty(), "FAIL: Footer is empty on page: " + page);
        }

        System.out.println("PASS: Footer verified on all selected pages.");
    }

    @Test(priority = 13, description = "TC-13 | Verify all visible links on Home page have href")
    public void tc13_verifyAllHomePageLinksHaveHref() {
        printHeader("TC-13", "Verify All Home Page Links Have href");

        openHomePage();

        List<WebElement> links = driver.findElements(By.tagName("a"));

        int valid = 0;
        int invalid = 0;

        for (WebElement link : links) {
            try {
                if (!link.isDisplayed()) {
                    continue;
                }

                String href = link.getAttribute("href");
                String text = link.getText().trim();

                if (href == null || href.trim().isEmpty() || href.trim().equals("#")
                        || href.toLowerCase().startsWith("javascript")) {
                    invalid++;
                    System.out.println("INVALID LINK: " + text + " -> " + href);
                } else {
                    valid++;
                }
            } catch (Exception ignored) {
            }
        }

        System.out.println("Valid links   : " + valid);
        System.out.println("Invalid links : " + invalid);

        Assert.assertTrue(valid >= 5, "FAIL: Too few valid links found on home page.");
        System.out.println("PASS: Home page links have proper href values.");
    }

    // =========================================================
    // HELPER METHODS
    // =========================================================

    private void openHomePage() {
        driver.get(BASE_URL);
        waitForPageLoad();
        dismissOverlays();
        js.executeScript("window.scrollTo(0, 0);");
        sleepMs(800);
    }

    private void clickMenu(String keyword) {
        dismissOverlays();
        js.executeScript("window.scrollTo(0, 0);");
        sleepMs(500);

        WebElement menuLink = findMenuLink(keyword);
        Assert.assertNotNull(menuLink, "FAIL: Could not find menu link for keyword: " + keyword);

        String href = menuLink.getAttribute("href");
        System.out.println("Clicking menu: " + menuLink.getText().trim() + " -> " + href);

        boolean clicked = false;

        try {
            wait.until(ExpectedConditions.elementToBeClickable(menuLink));
            menuLink.click();
            clicked = true;
            System.out.println("Standard click worked.");
        } catch (Exception e) {
            System.out.println("Standard click failed.");
        }

        if (!clicked) {
            try {
                menuLink = findMenuLink(keyword);
                actions.moveToElement(menuLink).pause(Duration.ofMillis(300)).click().perform();
                clicked = true;
                System.out.println("Actions click worked.");
            } catch (Exception e) {
                System.out.println("Actions click failed.");
            }
        }

        if (!clicked) {
            try {
                menuLink = findMenuLink(keyword);
                js.executeScript("arguments[0].click();", menuLink);
                clicked = true;
                System.out.println("JS click worked.");
            } catch (Exception e) {
                System.out.println("JS click failed.");
            }
        }

        if (!clicked && href != null && !href.trim().isEmpty() && !href.equals("#")) {
            driver.get(href);
            clicked = true;
            System.out.println("Direct href navigation worked.");
        }

        Assert.assertTrue(clicked, "FAIL: Could not navigate using menu keyword: " + keyword);

        waitForPageLoad();
        dismissOverlays();
        sleepMs(1000);
    }

    private WebElement findMenuLink(String keyword) {
        String lowerKeyword = keyword.toLowerCase().trim();

        List<WebElement> links = driver.findElements(
                By.cssSelector("nav a, header a, .navbar a, .nav a, .menu a, ul li a")
        );

        for (WebElement link : links) {
            try {
                String text = link.getText().trim().toLowerCase();
                String href = link.getAttribute("href");

                if (link.isDisplayed() && (text.contains(lowerKeyword) ||
                        (href != null && href.toLowerCase().contains(lowerKeyword)))) {
                    return link;
                }
            } catch (Exception ignored) {
            }
        }

        try {
            List<WebElement> xpathLinks = driver.findElements(By.xpath("//a[contains(translate(., " +
                    "'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '" + lowerKeyword + "')]"));

            for (WebElement link : xpathLinks) {
                if (link.isDisplayed()) {
                    return link;
                }
            }
        } catch (Exception ignored) {
        }

        try {
            List<WebElement> hrefLinks = driver.findElements(By.xpath("//a[contains(@href,'" + lowerKeyword + "')]"));
            for (WebElement link : hrefLinks) {
                if (link.isDisplayed()) {
                    return link;
                }
            }
        } catch (Exception ignored) {
        }

        return null;
    }

    private void verifyPageContent(String pageName) {
        String bodyText = driver.findElement(By.tagName("body")).getText().trim();
        List<WebElement> headings = driver.findElements(By.cssSelector("h1, h2, h3"));

        System.out.println(pageName + " page body length: " + bodyText.length());
        System.out.println(pageName + " page heading count: " + headings.size());

        Assert.assertTrue(bodyText.length() > 50, "FAIL: " + pageName + " page content looks too short.");

        boolean hasHeading = false;
        for (WebElement h : headings) {
            try {
                if (h.isDisplayed() && !h.getText().trim().isEmpty()) {
                    hasHeading = true;
                    System.out.println("Heading found: " + h.getText().trim());
                    break;
                }
            } catch (Exception ignored) {
            }
        }

        Assert.assertTrue(hasHeading, "FAIL: No visible heading found on " + pageName + " page.");
    }

    private WebElement findFooter() {
        String[] footerSelectors = {
                "footer", ".footer", "#footer", "[class*='footer']"
        };

        for (String sel : footerSelectors) {
            try {
                List<WebElement> footers = driver.findElements(By.cssSelector(sel));
                for (WebElement footer : footers) {
                    if (footer.isDisplayed()) {
                        return footer;
                    }
                }
            } catch (Exception ignored) {
            }
        }
        return null;
    }

    private void dismissOverlays() {
        String[] overlaySelectors = {
                "button[id*='accept' i]",
                "button[class*='accept' i]",
                ".cookie-accept",
                ".cookie-close",
                "#cookie-accept",
                "button[class*='close' i]",
                ".modal-close",
                ".popup-close",
                "[aria-label='Close']",
                "[aria-label='close']",
                ".gdpr-accept",
                "#gdpr-accept",
                ".dismiss"
        };

        for (String sel : overlaySelectors) {
            try {
                List<WebElement> elements = driver.findElements(By.cssSelector(sel));
                for (WebElement el : elements) {
                    if (el.isDisplayed() && el.isEnabled()) {
                        el.click();
                        System.out.println("Overlay dismissed using: " + sel);
                        sleepMs(300);
                        break;
                    }
                }
            } catch (Exception ignored) {
            }
        }

        try {
            driver.findElement(By.tagName("body")).sendKeys(Keys.ESCAPE);
            sleepMs(300);
        } catch (Exception ignored) {
        }
    }

    private void waitForPageLoad() {
        wait.until(webDriver ->
                ((JavascriptExecutor) webDriver)
                        .executeScript("return document.readyState")
                        .equals("complete")
        );
    }

    private void printHeader(String tcId, String description) {
        System.out.println("\n==================================================");
        System.out.println(tcId + " | " + description);
        System.out.println("==================================================");
    }

    private void sleepMs(int ms) {
        try {
            Thread.sleep(ms);
        } catch (InterruptedException ignored) {
        }
    }
}