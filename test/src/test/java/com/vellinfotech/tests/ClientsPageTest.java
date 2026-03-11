package com.vellinfotech.tests;

import com.vellinfotech.base.BaseTest;
import com.vellinfotech.pages.ClientsPage;
import com.vellinfotech.Utils.TestUtils;
import org.testng.Assert;
import org.testng.annotations.*;

import java.util.List;

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 *   ClientsPageTest.java
 *   PACKAGE : com.vellinfotech.tests
 *
 *   PURPOSE : Full test suite for vellinfotech.com Clients page
 *             Tests client logos, testimonials, slider, stats, quality
 *
 *   25 TEST CASES:
 *   ─────────────────────────────────────────────────────────────────
 *   PHASE 1 : Navigation             TC-01 to TC-04
 *   PHASE 2 : Page Structure         TC-05 to TC-09
 *   PHASE 3 : Client Logos           TC-10 to TC-14
 *   PHASE 4 : Testimonials / Reviews TC-15 to TC-20
 *   PHASE 5 : Slider / Carousel      TC-21 to TC-22
 *   PHASE 6 : Page Quality           TC-23 to TC-25
 *   ─────────────────────────────────────────────────────────────────
 * ╚══════════════════════════════════════════════════════════════════════╝
 */
public class ClientsPageTest extends BaseTest {

    private ClientsPage clientsPage;
    private TestUtils   utils;
    private String      clientsURL = "";

    @BeforeClass
    public void setUpPage() {
        super.setUp();
        clientsPage = new ClientsPage(driver, wait);
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

        int len = clientsPage.getPageBodyLength();
        log("Body: " + len + " chars");
        assertTrue(len > 50, "TC-01",
            "Homepage loaded (" + len + " chars)",
            "Homepage body too short (" + len + " chars) — page did not render");
    }

    @Test(priority = 2, description = "TC-02 | Clients link exists in navigation")
    public void tc02_ClientsLinkInNav() {
        head("TC-02", "Clients Link in Navigation");

        List<String> navLinks = clientsPage.getAllNavLinkTexts();
        log("Total nav links: " + navLinks.size());
        log("All nav links on page:");
        navLinks.forEach(l -> log("  → " + l));

        boolean found = navLinks.stream().anyMatch(l ->
            l.toLowerCase().matches(".*(client|customer|partner|who we work|our work).*")
        );

        if (!found) {
            log("✗ FAIL: No 'Clients' / 'Customers' link found in nav");
            log("✗ DETAIL: Searched for: client/clients/customer/partner/who we work");
            log("✗ DETAIL: See all nav links printed above — may use a different label");
            Assert.fail("TC-02: Clients link not found. Check nav links printed above.");
        }
        pass("TC-02", "Clients link found in nav");
    }

    @Test(priority = 3, description = "TC-03 | Navigate to Clients page via nav link")
    public void tc03_NavigateToClients() {
        head("TC-03", "Navigate to Clients Page");
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        utils.sleep(800);
        utils.dismissOverlays();
        utils.scrollToTop();

        try {
            clientsPage.clickClientsNavLink();
            clientsURL = clientsPage.getCurrentURL();
            log("Landed on: " + clientsURL);
            pass("TC-03", "Navigated to: " + clientsURL);
        } catch (Exception e) {
            log("✗ FAIL: " + e.getMessage());
            Assert.fail("TC-03: " + e.getMessage());
        }
    }

    @Test(priority = 4, description = "TC-04 | URL verified as Clients page")
    public void tc04_URLVerified() {
        head("TC-04", "URL is Clients Page");
        String url = clientsPage.getCurrentURL();
        clientsURL  = url;
        log("Current URL: " + url);
        log("Homepage  : " + BASE_URL);

        boolean changedFromHome = !url.equals(BASE_URL);
        boolean hasKeyword      = url.toLowerCase()
            .matches(".*(client|customer|partner|our-work|placement).*");

        log("Changed from homepage : " + changedFromHome);
        log("URL has keyword       : " + hasKeyword);

        if (!changedFromHome && !hasKeyword) {
            log("✗ FAIL: URL did not change to Clients page");
            log("✗ DETAIL: Still on → " + url);
            log("✗ DETAIL: The Clients nav link may be '#' or broken");
            Assert.fail("TC-04: Not on Clients page. URL: " + url);
        }
        pass("TC-04", "Clients page URL confirmed: " + url);
    }

    // ════════════════════════════════════════════════
    //  PHASE 2 — PAGE STRUCTURE
    // ════════════════════════════════════════════════

    @Test(priority = 5, description = "TC-05 | Page is valid (not 404)")
    public void tc05_PageIsValid() {
        head("TC-05", "Page is Valid — Not 404");
        boolean valid = clientsPage.isValidPage();
        String  body  = clientsPage.getBodyText();
        log("Page valid: " + valid);
        log("Body length: " + clientsPage.getPageBodyLength() + " chars");

        if (body.contains("404") || body.contains("page not found")) {
            log("✗ FAIL: Page shows 404 or 'Page Not Found'");
            log("✗ DETAIL: URL → " + clientsPage.getCurrentURL());
            log("✗ BUG: The Clients page does not exist or URL is wrong");
            Assert.fail("TC-05: Clients page returned 404 / Not Found");
        }
        pass("TC-05", "Page is valid and loaded");
    }

    @Test(priority = 6, description = "TC-06 | Page title is valid")
    public void tc06_PageTitle() {
        head("TC-06", "Page Title");
        String title = clientsPage.getPageTitle();
        log("Title: \"" + title + "\"");
        assertTrue(
            title.toLowerCase().contains("vell")
            || title.toLowerCase().matches(".*(client|customer|partner|testimonial|review).*"),
            "TC-06", "Title valid: \"" + title + "\"",
            "Title missing brand/keyword → \"" + title + "\""
        );
    }

    @Test(priority = 7, description = "TC-07 | Page headings H1/H2 visible")
    public void tc07_PageHeadings() {
        head("TC-07", "Page Headings");
        List<String> headings = clientsPage.getAllHeadings();
        log("All headings found:");
        headings.forEach(h -> log("  " + h));

        if (headings.isEmpty()) {
            log("✗ FAIL: No H1 or H2 headings found on Clients page");
            log("✗ DETAIL: Page may not have a proper heading structure");
        }
        assertTrue(!headings.isEmpty(), "TC-07",
            headings.size() + " heading(s) found",
            "No H1/H2 headings on Clients page");
    }

    @Test(priority = 8, description = "TC-08 | Navigation bar still visible on Clients page")
    public void tc08_NavBarVisible() {
        head("TC-08", "Nav Bar Visible");
        utils.scrollToTop();
        boolean visible = clientsPage.isNavBarVisible();
        log("Nav bar visible: " + visible);
        assertTrue(visible, "TC-08", "Nav bar is visible",
            "Navigation bar NOT visible on Clients page");
    }

    @Test(priority = 9, description = "TC-09 | Page body has meaningful content")
    public void tc09_PageBodyContent() {
        head("TC-09", "Page Body Content");
        int    len  = clientsPage.getPageBodyLength();
        String body = clientsPage.getBodyText();
        log("Body length: " + len + " chars");
        log("First 400 chars: \"" + body.substring(0, Math.min(400, body.length())) + "\"");

        boolean hasCompanyContent = clientsPage.hasCompanyContent();
        log("Has company/client content: " + hasCompanyContent);

        assertTrue(len > 200 && hasCompanyContent, "TC-09",
            "Page has " + len + " chars with relevant content",
            "Body too short or irrelevant content (" + len + " chars) — page may not have loaded");
    }

    // ════════════════════════════════════════════════
    //  PHASE 3 — CLIENT LOGOS
    // ════════════════════════════════════════════════

    @Test(priority = 10, description = "TC-10 | Client logos section is present")
    public void tc10_ClientLogosSection() {
        head("TC-10", "Client Logos Section");
        utils.scrollToPercent(0.3);
        utils.sleep(500);

        boolean hasSection = clientsPage.hasClientLogosSection();
        int     logoCount  = clientsPage.countClientLogos();
        log("Client logo section found : " + hasSection);
        log("Client logo images found  : " + logoCount);

        if (!hasSection) {
            log("✗ DETAIL: No element matched: .clients / .our-clients / .client-logo / .partner-logo");
            log("✗ DETAIL: The page may not show client logos — check if this section exists");
        }
        assertTrue(hasSection || logoCount > 0, "TC-10",
            "Client logos section found with " + logoCount + " logo(s)",
            "No client logos section found on Clients page");
    }

    @Test(priority = 11, description = "TC-11 | Client logos have valid src (not broken)")
    public void tc11_LogosNotBroken() {
        head("TC-11", "Client Logos Not Broken");

        clientsPage.printAllLogoDetails();

        int broken = clientsPage.countBrokenLogos();
        int total  = clientsPage.countClientLogos();
        log("Total logos  : " + total);
        log("Broken logos : " + broken);

        if (broken > 0) {
            log("✗ FAIL: " + broken + " logo(s) have no src attribute");
            log("✗ DETAIL: Logos with no src will show as broken images to users");
            log("✗ BUG: Fix the src attribute for each broken logo listed above");
        }
        assertTrue(broken == 0, "TC-11",
            "All " + total + " logos have valid src",
            broken + " logo(s) are broken (missing src)");
    }

    @Test(priority = 12, description = "TC-12 | Client logos have alt text (accessibility)")
    public void tc12_LogosHaveAltText() {
        head("TC-12", "Logo Alt Text — Accessibility");

        List<String> alts    = clientsPage.getLogoAltTexts();
        int          missing = clientsPage.countLogosWithMissingAlt();
        int          total   = clientsPage.countClientLogos();

        log("Total logos        : " + total);
        log("Missing alt text   : " + missing);
        log("Alt texts found:");
        alts.forEach(a -> log("  → \"" + (a.isEmpty() ? "(EMPTY)" : a) + "\""));

        if (missing > 0) {
            log("⚠ BUG: " + missing + " logo(s) have no alt text");
            log("⚠ DETAIL: Missing alt text fails accessibility (WCAG) standards");
            log("⚠ FIX: Add alt='Company Name' to each client logo <img> tag");
        }
        assertTrue(missing == 0, "TC-12",
            "All " + total + " logos have alt text",
            missing + " logo(s) missing alt text — accessibility issue");
    }

    @Test(priority = 13, description = "TC-13 | Minimum number of client logos (at least 3)")
    public void tc13_MinimumLogoCount() {
        head("TC-13", "Minimum Client Logo Count");
        int count = clientsPage.countClientLogos();
        log("Client logos found: " + count);

        if (count == 0) {
            log("✗ FAIL: No client logos found at all");
            log("✗ BUG: Clients page shows no client logos — page may be empty");
        } else if (count < 3) {
            log("⚠ WARNING: Only " + count + " logo(s) found — expected at least 3");
        } else {
            log("✔ " + count + " logos found — looks good");
        }

        assertTrue(count >= 3, "TC-13",
            count + " client logos found (meets minimum of 3)",
            "Only " + count + " logo(s) found — expected at least 3 client logos");
    }

    @Test(priority = 14, description = "TC-14 | Client names visible on page")
    public void tc14_ClientNamesVisible() {
        head("TC-14", "Client Names Visible");
        boolean hasNames = clientsPage.hasClientNames();
        String  body     = clientsPage.getBodyText();
        log("Client names found: " + hasNames);

        if (!hasNames) {
            log("⚠ INFO: No recognisable company names found in page text");
            log("⚠ DETAIL: Page may show logos only without company name text");
            log("  Page text sample: \"" + body.substring(0, Math.min(300, body.length())) + "\"");
        }
        // Soft check — log warning but don't fail (logos-only is acceptable)
        pass("TC-14", hasNames ? "Client names visible in page text" : "Logos only (no text names) — soft pass");
    }

    // ════════════════════════════════════════════════
    //  PHASE 4 — TESTIMONIALS / REVIEWS
    // ════════════════════════════════════════════════

    @Test(priority = 15, description = "TC-15 | Testimonials section is present")
    public void tc15_TestimonialsSection() {
        head("TC-15", "Testimonials Section");
        utils.scrollToPercent(0.5);
        utils.sleep(600);

        boolean hasSection = clientsPage.hasTestimonialsSection();
        log("Testimonials section found: " + hasSection);

        if (!hasSection) {
            log("✗ DETAIL: No element matched: .testimonial / .review / .feedback");
            log("✗ DETAIL: No keyword found: 'testimonial' / 'what our client says' / 'review'");
            log("✗ BUG: Clients page has no testimonials — candidates/students see no social proof");
        }
        assertTrue(hasSection, "TC-15",
            "Testimonials section found",
            "No testimonials/reviews section on Clients page");
    }

    @Test(priority = 16, description = "TC-16 | Testimonials have review text")
    public void tc16_TestimonialText() {
        head("TC-16", "Testimonial Text Content");

        List<String> texts = clientsPage.getTestimonialTexts();
        log("Testimonial texts found: " + texts.size());

        if (texts.isEmpty()) {
            log("✗ FAIL: No testimonial text found");
            log("✗ DETAIL: Testimonial cards exist but contain no paragraph/blockquote text");
            log("✗ BUG: Reviews are empty — users see blank testimonial cards");
        }

        texts.forEach(t -> log("  Text: \"" + t.substring(0, Math.min(80, t.length())) + "\""));
        assertTrue(!texts.isEmpty(), "TC-16",
            texts.size() + " testimonial text(s) found",
            "Testimonial section has no text content");
    }

    @Test(priority = 17, description = "TC-17 | Testimonials have author names")
    public void tc17_TestimonialAuthors() {
        head("TC-17", "Testimonial Author Names");

        List<String> authors = clientsPage.getTestimonialAuthors();
        log("Author names found: " + authors.size());
        authors.forEach(a -> log("  Author: \"" + a + "\""));

        if (authors.isEmpty()) {
            log("✗ FAIL: Testimonials have no author names");
            log("✗ BUG: Anonymous testimonials have less credibility");
            log("✗ FIX: Add client name, designation, and company to each testimonial");
        }
        assertTrue(!authors.isEmpty(), "TC-17",
            authors.size() + " author name(s) found",
            "No author names on testimonials — anonymous reviews reduce trust");
    }

    @Test(priority = 18, description = "TC-18 | Each testimonial has both text and author")
    public void tc18_TestimonialsComplete() {
        head("TC-18", "Testimonials Completeness Check");

        List<String> texts   = clientsPage.getTestimonialTexts();
        List<String> authors = clientsPage.getTestimonialAuthors();

        log("Testimonial texts   : " + texts.size());
        log("Testimonial authors : " + authors.size());

        boolean complete = clientsPage.allTestimonialsHaveAuthor();
        log("All complete (text + author): " + complete);

        if (texts.size() != authors.size()) {
            log("⚠ BUG: Mismatch — " + texts.size() + " texts but " + authors.size() + " authors");
            log("⚠ DETAIL: Some testimonials are missing either text or author name");
        }

        // Print side by side
        clientsPage.printAllTestimonials();

        assertTrue(complete, "TC-18",
            "All testimonials have text and author",
            "Testimonials missing author names — " + texts.size() + " texts, " + authors.size() + " authors");
    }

    @Test(priority = 19, description = "TC-19 | Star ratings visible on testimonials")
    public void tc19_StarRatings() {
        head("TC-19", "Star Ratings on Testimonials");

        boolean hasRatings = clientsPage.hasStarRatings();
        log("Star ratings visible: " + hasRatings);

        if (!hasRatings) {
            log("⚠ INFO: No star ratings found on testimonials");
            log("⚠ DETAIL: Star ratings increase credibility and trust");
            log("⚠ SUGGESTION: Add 5-star ratings to each testimonial card");
        }
        // Soft check — star ratings are good to have but not required
        pass("TC-19", hasRatings ? "Star ratings are visible" : "No star ratings — soft pass (not mandatory)");
    }

    @Test(priority = 20, description = "TC-20 | Stats / client count section visible")
    public void tc20_StatsSection() {
        head("TC-20", "Stats / Client Count Section");
        utils.scrollToPercent(0.4);
        utils.sleep(500);

        boolean hasStats = clientsPage.hasStatsSection();
        List<String> numbers = clientsPage.getStatNumbers();

        log("Stats section found: " + hasStats);
        log("Stat numbers found : " + numbers.size());
        numbers.forEach(n -> log("  → \"" + n + "\""));

        if (!hasStats) {
            log("⚠ INFO: No stats/counter section found");
            log("⚠ DETAIL: Stats like '500+ students placed' build trust");
        }
        pass("TC-20", hasStats ? "Stats section found with " + numbers.size() + " number(s)"
            : "No stats section — soft pass");
    }

    // ════════════════════════════════════════════════
    //  PHASE 5 — SLIDER / CAROUSEL
    // ════════════════════════════════════════════════

    @Test(priority = 21, description = "TC-21 | Client logo slider / carousel works")
    public void tc21_SliderFunctionality() {
        head("TC-21", "Slider / Carousel Functionality");
        reloadClients();

        boolean hasSlider  = clientsPage.hasSlider();
        int     dotCount   = clientsPage.countSliderDots();
        log("Slider found     : " + hasSlider);
        log("Slider dots      : " + dotCount);

        if (!hasSlider) {
            log("ℹ INFO: No slider/carousel detected — static layout or grid used");
            log("  Selectors tried: .slick-slider / .owl-carousel / .swiper / [class*='slider']");
            pass("TC-21", "No slider present — static layout (acceptable)");
            return;
        }

        // Test Next button
        boolean nextClicked = clientsPage.clickSliderNext();
        log("Next button clicked: " + nextClicked);
        if (!nextClicked) {
            log("⚠ BUG: Slider Next button not found or not clickable");
        }

        // Test Prev button
        boolean prevClicked = clientsPage.clickSliderPrev();
        log("Prev button clicked: " + prevClicked);
        if (!prevClicked) {
            log("⚠ BUG: Slider Prev button not found or not clickable");
        }

        if (!nextClicked && !prevClicked) {
            log("✗ FAIL: Slider exists but Next/Prev buttons don't work");
            Assert.fail("TC-21: Slider navigation buttons not working");
        }

        pass("TC-21", "Slider Next/Prev navigation working");
    }

    @Test(priority = 22, description = "TC-22 | Slider dot navigation works")
    public void tc22_SliderDotNavigation() {
        head("TC-22", "Slider Dot Navigation");

        boolean hasSlider = clientsPage.hasSlider();
        int     dotCount  = clientsPage.countSliderDots();
        log("Slider: " + hasSlider + " | Dots: " + dotCount);

        if (!hasSlider || dotCount == 0) {
            log("ℹ INFO: No slider or no dots found — skipping");
            pass("TC-22", "No slider dots — skip (static layout)");
            return;
        }

        // Click each dot
        int successCount = 0;
        for (int i = 0; i < Math.min(dotCount, 5); i++) {
            boolean clicked = clientsPage.clickSliderDot(i);
            log("Dot " + (i+1) + " clicked: " + clicked);
            if (clicked) successCount++;
            utils.sleep(300);
        }

        if (successCount == 0) {
            log("✗ FAIL: None of the slider dots were clickable");
            Assert.fail("TC-22: Slider dot navigation not working — 0/" + dotCount + " dots clickable");
        }

        pass("TC-22", successCount + "/" + dotCount + " slider dots clickable");
    }

    // ════════════════════════════════════════════════
    //  PHASE 6 — PAGE QUALITY
    // ════════════════════════════════════════════════

    @Test(priority = 23, description = "TC-23 | No broken images on Clients page")
    public void tc23_NoBrokenImages() {
        head("TC-23", "No Broken Images");
        reloadClients();

        // Scroll fully to load lazy images
        for (int i = 1; i <= 5; i++) { clientsPage.scrollStep(i, 5); }

        clientsPage.printBrokenImages();

        int total  = clientsPage.countImages();
        int broken = clientsPage.countBrokenImages();
        log("Total images  : " + total);
        log("Broken images : " + broken);

        assertTrue(broken == 0, "TC-23",
            "All " + total + " images have valid src",
            broken + " broken image(s) found — fix src attributes listed above");
    }

    @Test(priority = 24, description = "TC-24 | Footer present on Clients page")
    public void tc24_FooterPresent() {
        head("TC-24", "Footer Present");
        utils.scrollToBottom();
        utils.sleep(600);

        boolean visible = clientsPage.isFooterVisible();
        String  text    = clientsPage.getFooterText();
        log("Footer visible: " + visible);
        log("Footer (120 chars): \"" + text.substring(0, Math.min(120, text.length())) + "\"");

        assertTrue(visible, "TC-24", "Footer present with content",
            "Footer not found on Clients page");
    }

    @Test(priority = 25, description = "TC-25 | Page load time under 10 seconds")
    public void tc25_PageLoadTime() {
        head("TC-25", "Page Load Time");
        String url = clientsURL.isEmpty() ? BASE_URL + "clients" : clientsURL;
        log("Loading: " + url);

        long start = System.currentTimeMillis();
        driver.get(url);
        utils.waitForPageLoad();
        long ms = System.currentTimeMillis() - start;

        log("Load time : " + ms + " ms");
        log("Threshold : 10000 ms (10 seconds)");
        assertTrue(ms < 10000, "TC-25",
            "Loaded in " + ms + "ms ✔",
            "Loaded in " + ms + "ms — EXCEEDS 10s — performance issue on Clients page");
    }

    // ════════════════════════════════════════════════
    //  PRIVATE HELPERS
    // ════════════════════════════════════════════════

    private void reloadClients() {
        String url = clientsURL.isEmpty() ? BASE_URL + "clients" : clientsURL;
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

    private void log(String msg) {
        System.out.println("  " + msg);
    }

    private void head(String id, String desc) {
        System.out.println("\n══════════════════════════════════════════════════");
        System.out.println("  " + id + " | " + desc);
        System.out.println("══════════════════════════════════════════════════");
    }
}