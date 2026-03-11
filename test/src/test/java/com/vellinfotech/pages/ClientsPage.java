package com.vellinfotech.pages;

import com.vellinfotech.Utils.TestUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

/**
 * ╔══════════════════════════════════════════════════════════════╗
 *   ClientsPage.java
 *   PACKAGE : com.vellinfotech.pages
 *   PURPOSE : Page Object — ALL locators and actions for
 *             the Clients page of vellinfotech.com
 *
 *   COVERS:
 *   - Client logos section
 *   - Testimonials / reviews section
 *   - Client names and company details
 *   - Slider / carousel interactions
 *   - Trust badges and stats
 * ╚══════════════════════════════════════════════════════════════╝
 */
public class ClientsPage {

    private WebDriver     driver;
    private WebDriverWait wait;
    private TestUtils     utils;

    public ClientsPage(WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait   = wait;
        this.utils  = new TestUtils(driver, wait);
    }

    // ════════════════════════════════════════════════════
    //  ELEMENT LOCATORS
    // ════════════════════════════════════════════════════

    // Page structure
    private By pageH1        = By.tagName("h1");
    private By pageH2        = By.tagName("h2");
    private By navBar        = By.cssSelector("nav, header nav, .navbar, .nav, header");
    private By footerEl      = By.cssSelector("footer, .footer, #footer, [class*='footer']");
    private By bannerSection = By.cssSelector(
        ".banner, .hero, .hero-section, .page-banner, .inner-banner, " +
        "[class*='banner'], [class*='hero'], section:first-of-type, .top-section"
    );

    // Client logos
    private By clientLogos = By.cssSelector(
        ".client-logo, .clients-logo, .logo-item, .partner-logo, " +
        "[class*='client'] img, [class*='logo'] img, " +
        ".clients img, .our-clients img, [id*='client'] img, " +
        ".brand img, .brands img, [class*='brand'] img"
    );

    // Client logo wrapper section
    private By clientSection = By.cssSelector(
        ".clients, .our-clients, .client-section, [class*='client'], " +
        "[id*='client'], .partners, .our-partners, [class*='partner']"
    );

    // Testimonials
    private By testimonialSection = By.cssSelector(
        ".testimonial, .testimonials, .review, .reviews, " +
        "[class*='testimonial'], [class*='review'], [id*='testimonial'], " +
        ".feedback, [class*='feedback']"
    );

    private By testimonialCards = By.cssSelector(
        ".testimonial-item, .testimonial-card, .review-card, " +
        "[class*='testimonial-item'], [class*='review-item'], " +
        ".feedback-item, .quote-item"
    );

    private By testimonialText = By.cssSelector(
        ".testimonial-text, .testimonial p, .review-text, " +
        "[class*='testimonial'] p, [class*='review'] p, " +
        "blockquote, .quote, [class*='quote']"
    );

    private By testimonialAuthor = By.cssSelector(
        ".testimonial-author, .author, .reviewer-name, .client-name, " +
        "[class*='author'], [class*='reviewer'], .name, " +
        ".testimonial h4, .testimonial h5, .review h4"
    );

    private By testimonialRating = By.cssSelector(
        ".rating, .stars, [class*='rating'], [class*='star'], " +
        ".review-rating, fa-star, i.fa-star"
    );

    // Slider / Carousel controls
    private By sliderNext = By.cssSelector(
        ".next, .slick-next, .owl-next, .carousel-next, " +
        "[class*='next'], button[aria-label*='next' i], " +
        ".swiper-button-next, .arrow-next"
    );

    private By sliderPrev = By.cssSelector(
        ".prev, .slick-prev, .owl-prev, .carousel-prev, " +
        "[class*='prev'], button[aria-label*='prev' i], " +
        ".swiper-button-prev, .arrow-prev"
    );

    private By sliderDots = By.cssSelector(
        ".slick-dots li, .owl-dots .owl-dot, " +
        ".carousel-indicators li, .swiper-pagination-bullet, " +
        "[class*='dot']"
    );

    // Stats / counters
    private By statsSection = By.cssSelector(
        ".stats, .counters, .numbers, .achievements, " +
        "[class*='stat'], [class*='counter'], [class*='number'], " +
        "[class*='achievement']"
    );

    private By statNumbers = By.cssSelector(
        ".counter, .count, .stat-number, [class*='counter'], " +
        "[class*='count'], h2.number, span.number"
    );

    // All images on page
    private By allImages = By.tagName("img");

    // All links
    private By allLinks = By.tagName("a");

    // Error / validation messages
    private By errorMessages = By.cssSelector(
        ".error, [class*='error'], .alert-danger, .not-found, " +
        ".page-not-found, h1.error"
    );

    // ════════════════════════════════════════════════════
    //  NAVIGATION
    // ════════════════════════════════════════════════════

    /** Click the Clients link in the nav menu */
    public void clickClientsNavLink() {
        String[] textKeywords = {
            "client", "clients", "our clients", "customer", "customers",
            "partner", "partners", "who we work"
        };
        List<WebElement> links = driver.findElements(
            By.cssSelector("nav a, header a, .navbar a, header ul li a, .menu a, .nav-link")
        );

        for (WebElement link : links) {
            String text = link.getText().trim().toLowerCase();
            for (String kw : textKeywords) {
                if (text.contains(kw)) {
                    utils.log("Clicking nav: \"" + link.getText().trim() + "\"");
                    utils.safeClick(link);
                    utils.waitForPageLoad();
                    utils.sleep(1200);
                    return;
                }
            }
        }
        // Search by href
        for (WebElement link : links) {
            String href = utils.safeAttr(link, "href").toLowerCase();
            if (href.contains("client") || href.contains("customer") || href.contains("partner")) {
                utils.log("Clicking by href: " + href);
                utils.safeClick(link);
                utils.waitForPageLoad();
                utils.sleep(1200);
                return;
            }
        }
        throw new NoSuchElementException(
            "Clients link NOT found in navigation.\n" +
            "The link may be labelled 'Our Clients', 'Customers', or 'Partners'."
        );
    }

    /** Get all nav link texts for debugging */
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

    // ════════════════════════════════════════════════════
    //  PAGE INFO
    // ════════════════════════════════════════════════════

    public String getPageTitle()      { return driver.getTitle().trim(); }
    public String getCurrentURL()     { return driver.getCurrentUrl(); }
    public int    getPageBodyLength() {
        return driver.findElement(By.tagName("body")).getText().trim().length();
    }
    public String getBodyText() {
        return driver.findElement(By.tagName("body")).getText().toLowerCase();
    }

    public List<String> getAllHeadings() {
        List<String> headings = new ArrayList<>();
        for (WebElement h : driver.findElements(pageH1)) {
            String t = h.getText().trim();
            if (!t.isEmpty()) headings.add("H1: " + t);
        }
        for (WebElement h : driver.findElements(pageH2)) {
            String t = h.getText().trim();
            if (!t.isEmpty()) headings.add("H2: " + t);
        }
        return headings;
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

    // ════════════════════════════════════════════════════
    //  CLIENT LOGOS
    // ════════════════════════════════════════════════════

    /** Check if client logos section is present */
    public boolean hasClientLogosSection() {
        List<WebElement> section = driver.findElements(clientSection);
        List<WebElement> logos   = driver.findElements(clientLogos);
        return !section.isEmpty() || !logos.isEmpty();
    }

    /** Get all client logo images */
    public List<WebElement> getClientLogoImages() {
        List<WebElement> logos   = driver.findElements(clientLogos);
        List<WebElement> visible = new ArrayList<>();
        for (WebElement l : logos) if (l.isDisplayed()) visible.add(l);
        return visible;
    }

    /** Count client logos */
    public int countClientLogos() {
        return getClientLogoImages().size();
    }

    /** Get all logo alt texts */
    public List<String> getLogoAltTexts() {
        List<String> alts = new ArrayList<>();
        for (WebElement img : getClientLogoImages())
            alts.add(utils.safeAttr(img, "alt"));
        return alts;
    }

    /** Count logos with missing alt text (accessibility issue) */
    public int countLogosWithMissingAlt() {
        int count = 0;
        for (WebElement img : getClientLogoImages()) {
            String alt = utils.safeAttr(img, "alt").trim();
            if (alt.isEmpty()) count++;
        }
        return count;
    }

    /** Count logos with broken/missing src */
    public int countBrokenLogos() {
        int count = 0;
        for (WebElement img : getClientLogoImages()) {
            String src = img.getAttribute("src");
            if (src == null || src.trim().isEmpty()) count++;
        }
        return count;
    }

    /** Print full details of every logo */
    public void printAllLogoDetails() {
        List<WebElement> logos = getClientLogoImages();
        utils.log("── Client Logo Details (" + logos.size() + " found) ──");
        for (int i = 0; i < logos.size(); i++) {
            WebElement img = logos.get(i);
            String src = img.getAttribute("src");
            String alt = img.getAttribute("alt");
            utils.log("  Logo " + (i+1) + ":"
                + " alt='" + alt + "'"
                + " | src='" + (src != null ? src.substring(0, Math.min(60, src.length())) : "NULL") + "'"
            );
        }
    }

    // ════════════════════════════════════════════════════
    //  TESTIMONIALS
    // ════════════════════════════════════════════════════

    /** Check if testimonials section is present */
    public boolean hasTestimonialsSection() {
        List<WebElement> els = driver.findElements(testimonialSection);
        if (!els.isEmpty()) return true;
        // Check page text for keywords
        String body = getBodyText();
        return body.contains("testimonial") || body.contains("review")
            || body.contains("what our client") || body.contains("what our student")
            || body.contains("feedback") || body.contains("says about");
    }

    /** Count testimonial cards */
    public int countTestimonialCards() {
        List<WebElement> cards = driver.findElements(testimonialCards);
        int count = 0;
        for (WebElement c : cards) if (c.isDisplayed()) count++;
        return count;
    }

    /** Get all testimonial text content */
    public List<String> getTestimonialTexts() {
        List<String> texts = new ArrayList<>();
        List<WebElement> els = driver.findElements(testimonialText);
        for (WebElement el : els) {
            String t = el.getText().trim();
            if (!t.isEmpty() && el.isDisplayed()) texts.add(t);
        }
        return texts;
    }

    /** Get all testimonial author names */
    public List<String> getTestimonialAuthors() {
        List<String> authors = new ArrayList<>();
        List<WebElement> els = driver.findElements(testimonialAuthor);
        for (WebElement el : els) {
            String t = el.getText().trim();
            if (!t.isEmpty() && el.isDisplayed()) authors.add(t);
        }
        return authors;
    }

    /** Check if star ratings are visible */
    public boolean hasStarRatings() {
        List<WebElement> els = driver.findElements(testimonialRating);
        return !els.isEmpty();
    }

    /** Check each testimonial has both text and author */
    public boolean allTestimonialsHaveAuthor() {
        List<String> texts   = getTestimonialTexts();
        List<String> authors = getTestimonialAuthors();
        if (texts.isEmpty()) return false;
        return authors.size() >= texts.size();
    }

    /** Print full details of each testimonial */
    public void printAllTestimonials() {
        List<String> texts   = getTestimonialTexts();
        List<String> authors = getTestimonialAuthors();
        utils.log("── Testimonials (" + texts.size() + " found) ──");
        for (int i = 0; i < texts.size(); i++) {
            utils.log("  Testimonial " + (i+1) + ":");
            utils.log("    Text   : \"" + texts.get(i).substring(0, Math.min(100, texts.get(i).length())) + "\"");
            utils.log("    Author : \"" + (i < authors.size() ? authors.get(i) : "NOT FOUND") + "\"");
        }
    }

    // ════════════════════════════════════════════════════
    //  SLIDER / CAROUSEL
    // ════════════════════════════════════════════════════

    /** Check if a slider/carousel is present */
    public boolean hasSlider() {
        String[] sliderSelectors = {
            ".slick-slider", ".owl-carousel", ".swiper", ".carousel",
            "[class*='slider']", "[class*='carousel']", "[class*='swiper']"
        };
        for (String sel : sliderSelectors) {
            List<WebElement> els = driver.findElements(By.cssSelector(sel));
            if (!els.isEmpty() && els.get(0).isDisplayed()) return true;
        }
        return false;
    }

    /** Click slider Next button */
    public boolean clickSliderNext() {
        List<WebElement> btns = driver.findElements(sliderNext);
        for (WebElement btn : btns) {
            if (btn.isDisplayed() && btn.isEnabled()) {
                utils.safeClick(btn);
                utils.sleep(800);
                return true;
            }
        }
        return false;
    }

    /** Click slider Previous button */
    public boolean clickSliderPrev() {
        List<WebElement> btns = driver.findElements(sliderPrev);
        for (WebElement btn : btns) {
            if (btn.isDisplayed() && btn.isEnabled()) {
                utils.safeClick(btn);
                utils.sleep(800);
                return true;
            }
        }
        return false;
    }

    /** Count slider dots/bullets */
    public int countSliderDots() {
        return driver.findElements(sliderDots).size();
    }

    /** Click a specific slider dot by index */
    public boolean clickSliderDot(int index) {
        List<WebElement> dots = driver.findElements(sliderDots);
        if (index < dots.size() && dots.get(index).isDisplayed()) {
            utils.safeClick(dots.get(index));
            utils.sleep(800);
            return true;
        }
        return false;
    }

    // ════════════════════════════════════════════════════
    //  STATS / COUNTERS
    // ════════════════════════════════════════════════════

    /** Check if stats/counter section exists */
    public boolean hasStatsSection() {
        List<WebElement> els = driver.findElements(statsSection);
        if (!els.isEmpty()) return true;
        String body = getBodyText();
        return body.contains("clients") && (body.contains("+") || body.matches(".*\\d{2,}.*"));
    }

    /** Get all stat numbers found on page */
    public List<String> getStatNumbers() {
        List<String> numbers = new ArrayList<>();
        List<WebElement> els = driver.findElements(statNumbers);
        for (WebElement el : els) {
            String t = el.getText().trim();
            if (!t.isEmpty()) numbers.add(t);
        }
        return numbers;
    }

    // ════════════════════════════════════════════════════
    //  PAGE CONTENT CHECKS
    // ════════════════════════════════════════════════════

    /** Check page is not a 404 / error page */
    public boolean isValidPage() {
        String body = getBodyText();
        String title = getPageTitle().toLowerCase();
        boolean is404 = body.contains("404") || body.contains("page not found")
            || body.contains("not exist") || title.contains("404");
        return !is404 && getPageBodyLength() > 100;
    }

    /** Check if page has company name mentions */
    public boolean hasCompanyContent() {
        String body = getBodyText();
        return body.contains("vell") || body.contains("client")
            || body.contains("student") || body.contains("training")
            || body.contains("placed") || body.contains("company");
    }

    /** Check for client names text on page */
    public boolean hasClientNames() {
        String body = getBodyText();
        // Common company names that might appear as clients
        String[] companyKeywords = {
            "infosys", "tcs", "wipro", "cognizant", "accenture",
            "amazon", "google", "microsoft", "ibm", "capgemini",
            "hcl", "tech mahindra", "mphasis", "hexaware", "mindtree",
            "ltd", "pvt", "inc", "company", "technologies", "solutions"
        };
        for (String kw : companyKeywords)
            if (body.contains(kw)) return true;
        return false;
    }

    // ════════════════════════════════════════════════════
    //  IMAGE & LINK QUALITY
    // ════════════════════════════════════════════════════

    public int countImages()       { return driver.findElements(allImages).size(); }
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

    public int countHashLinks() {
        int count = 0;
        for (WebElement link : driver.findElements(allLinks)) {
            String href = link.getAttribute("href");
            if (href != null && (href.trim().equals("#") || href.endsWith("/#"))) count++;
        }
        return count;
    }

    /** Print all broken images */
    public void printBrokenImages() {
        utils.log("── Image Check ──");
        for (WebElement img : driver.findElements(allImages)) {
            String src = img.getAttribute("src");
            String alt = img.getAttribute("alt");
            if (src == null || src.trim().isEmpty())
                utils.log("  ✗ BROKEN | alt='" + alt + "' | src=NULL");
            else
                utils.log("  ✔ OK     | alt='" + alt + "' | " + src.substring(0, Math.min(60, src.length())));
        }
    }

    // ════════════════════════════════════════════════════
    //  SCROLL
    // ════════════════════════════════════════════════════

    public long getPageHeight()     { return utils.getPageHeight(); }
    public long getScrollPosition() { return utils.getScrollPosition(); }

    public void scrollStep(int step, int totalSteps) {
        double percent = (double) step / totalSteps;
        utils.scrollToPercent(percent);
        utils.sleep(500);
    }
}