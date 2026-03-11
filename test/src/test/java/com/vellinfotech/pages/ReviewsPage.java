package com.vellinfotech.pages;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.vellinfotech.Utils.TestUtils;

public class ReviewsPage {

    private WebDriver driver;
    private WebDriverWait wait;
    private TestUtils utils;

    public ReviewsPage(WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait = wait;
        this.utils = new TestUtils(driver, wait);
    }

    private By body = By.tagName("body");
    private By navLinks = By.cssSelector("nav a, header a, .navbar a, .menu a");
    private By headings = By.cssSelector("h1, h2, h3, h4, h5, h6");
    private By buttons = By.cssSelector("button, input[type='submit'], input[type='button'], .btn, a.btn");
    private By links = By.tagName("a");
    private By images = By.tagName("img");
    private By footer = By.cssSelector("footer, .footer, [class*='footer']");
    private By forms = By.tagName("form");

    // Reviews / testimonial / rating related
    private By reviewCards = By.cssSelector(
        ".review, .reviews, .review-card, .testimonial, .testimonial-card, " +
        "[class*='review'], [class*='testimonial']"
    );
    private By reviewTexts = By.cssSelector(
        ".review p, .review-card p, .testimonial p, .testimonial-card p, " +
        "[class*='review'] p, [class*='testimonial'] p"
    );
    private By reviewAuthors = By.cssSelector(
        ".review h3, .review h4, .review-card h3, .review-card h4, " +
        ".testimonial h3, .testimonial h4, .author, [class*='author']"
    );
    private By reviewRatings = By.cssSelector(
        "[class*='rating'], [class*='star'], .stars, .star"
    );
    private By reviewLinks = By.cssSelector(
        "a[href*='review'], a[href*='testimonial'], a[href*='rating']"
    );

    public void openPage(String url) {
        driver.get(url);
        utils.waitForPageLoad();
        utils.dismissOverlays();
        utils.sleep(1000);
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public String getPageTitle() {
        return driver.getTitle().trim();
    }

    public String getBodyText() {
        return driver.findElement(body).getText().trim().toLowerCase();
    }

    public int getBodyLength() {
        return driver.findElement(body).getText().trim().length();
    }

    public boolean homepageHasReviewsNav() {
        for (WebElement link : driver.findElements(navLinks)) {
            String text = safeText(link).toLowerCase();
            String href = safeAttr(link, "href").toLowerCase();

            if (text.contains("review") || text.contains("testimonial") || href.contains("review")) {
                return true;
            }
        }
        return false;
    }

    public void clickReviewsNav() {
        for (WebElement link : driver.findElements(navLinks)) {
            String text = safeText(link).toLowerCase();
            String href = safeAttr(link, "href").toLowerCase();

            if (text.contains("review") || text.contains("testimonial") || href.contains("review")) {
                utils.scrollTo(link);
                utils.safeClick(link);
                utils.waitForPageLoad();
                utils.dismissOverlays();
                utils.sleep(1000);
                return;
            }
        }
        throw new NoSuchElementException("Reviews navigation link not found.");
    }

    public List<String> getHeadings() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(headings)) {
            String t = safeText(el);
            if (!t.isEmpty()) out.add(t);
        }
        return out;
    }

    public boolean hasReviewsRelatedText() {
        String text = getBodyText().replaceAll("\\s+", " ");
        return text.contains("review")
                || text.contains("reviews")
                || text.contains("testimonial")
                || text.contains("what our students say")
                || text.contains("verified feedback")
                || text.contains("rating")
                || text.contains("stars");
    }

    public int countVisibleReviewCards() {
        int count = 0;
        for (WebElement el : driver.findElements(reviewCards)) {
            if (isDisplayed(el) && !safeText(el).isEmpty()) {
                count++;
            }
        }
        return count;
    }

    public int countVisibleReviewTexts() {
        int count = 0;
        for (WebElement el : driver.findElements(reviewTexts)) {
            if (isDisplayed(el) && !safeText(el).isEmpty()) {
                count++;
            }
        }
        return count;
    }

    public int countVisibleReviewAuthors() {
        int count = 0;
        for (WebElement el : driver.findElements(reviewAuthors)) {
            if (isDisplayed(el) && !safeText(el).isEmpty()) {
                count++;
            }
        }
        return count;
    }

    public int countVisibleRatings() {
        int count = 0;
        for (WebElement el : driver.findElements(reviewRatings)) {
            if (isDisplayed(el)) {
                count++;
            }
        }
        return count;
    }

    public List<String> getVisibleReviewLinks() {
        LinkedHashSet<String> out = new LinkedHashSet<>();
        for (WebElement el : driver.findElements(reviewLinks)) {
            if (isDisplayed(el)) {
                String text = safeText(el);
                String href = safeAttr(el, "href");
                if (!text.isEmpty() || !href.isEmpty()) {
                    out.add("TEXT=\"" + text + "\" | HREF=\"" + href + "\"");
                }
            }
        }
        return new ArrayList<>(out);
    }

    public int countImagesWithSrc() {
        int count = 0;
        for (WebElement img : driver.findElements(images)) {
            String src = safeAttr(img, "src");
            if (!src.isEmpty()) count++;
        }
        return count;
    }

    public int countBrokenImagesByEmptySrc() {
        int broken = 0;
        for (WebElement img : driver.findElements(images)) {
            String src = safeAttr(img, "src");
            if (src.isEmpty()) broken++;
        }
        return broken;
    }

    public int countValidLinks() {
        int count = 0;
        for (WebElement a : driver.findElements(links)) {
            String href = safeAttr(a, "href");
            if (!href.isEmpty() && !href.equals("#")) {
                count++;
            }
        }
        return count;
    }

    public int countForms() {
        return driver.findElements(forms).size();
    }

    public boolean isFooterVisible() {
        List<WebElement> els = driver.findElements(footer);
        return !els.isEmpty() && isDisplayed(els.get(0));
    }

    public List<String> getVisibleButtons() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(buttons)) {
            if (isDisplayed(el)) {
                String t = safeText(el);
                if (!t.isEmpty()) out.add(t);
            }
        }
        return out;
    }

    public void printFullAudit() {
        System.out.println("========== REVIEWS PAGE AUDIT ==========");
        System.out.println("URL            : " + getCurrentUrl());
        System.out.println("TITLE          : " + getPageTitle());
        System.out.println("BODY LEN       : " + getBodyLength());
        System.out.println("REVIEW CARDS   : " + countVisibleReviewCards());
        System.out.println("REVIEW TEXTS   : " + countVisibleReviewTexts());
        System.out.println("REVIEW AUTHORS : " + countVisibleReviewAuthors());
        System.out.println("RATINGS        : " + countVisibleRatings());
        System.out.println("FORMS          : " + countForms());
        System.out.println("IMAGES         : " + countImagesWithSrc());
        System.out.println("LINKS          : " + countValidLinks());
        System.out.println("FOOTER         : " + isFooterVisible());

        System.out.println("\n--- HEADINGS ---");
        for (String h : getHeadings()) System.out.println(" - " + h);

        System.out.println("\n--- BUTTONS ---");
        for (String b : getVisibleButtons()) System.out.println(" - " + b);

        System.out.println("\n--- REVIEW LINKS ---");
        for (String r : getVisibleReviewLinks()) System.out.println(" - " + r);
    }

    private boolean isDisplayed(WebElement el) {
        try {
            return el.isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    private String safeText(WebElement el) {
        try {
            return el.getText().trim();
        } catch (Exception e) {
            return "";
        }
    }

    private String safeAttr(WebElement el, String attr) {
        try {
            String value = el.getAttribute(attr);
            return value == null ? "" : value.trim();
        } catch (Exception e) {
            return "";
        }
    }
}