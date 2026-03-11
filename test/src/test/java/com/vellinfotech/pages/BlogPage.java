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

public class BlogPage {

    private WebDriver driver;
    private WebDriverWait wait;
    private TestUtils utils;

    public BlogPage(WebDriver driver, WebDriverWait wait) {
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

    // blog/article/post related
    private By blogCards = By.cssSelector(
        ".blog, .blog-card, .post, .post-card, .article, .article-card, " +
        "[class*='blog'], [class*='post'], [class*='article']"
    );
    private By blogTitles = By.cssSelector(
        ".blog h2, .blog h3, .blog-card h2, .blog-card h3, " +
        ".post h2, .post h3, .post-card h2, .post-card h3, " +
        "[class*='blog'] h2, [class*='blog'] h3, " +
        "[class*='post'] h2, [class*='post'] h3"
    );
    private By blogDescriptions = By.cssSelector(
        ".blog p, .blog-card p, .post p, .post-card p, .article p, [class*='blog'] p, [class*='post'] p"
    );
    private By blogLinks = By.cssSelector(
        "a[href*='blog'], a[href*='post'], a[href*='article']"
    );
    private By dateElements = By.cssSelector(
        "time, .date, [class*='date'], [class*='published'], [class*='posted']"
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

    public boolean homepageHasBlogNav() {
        for (WebElement link : driver.findElements(navLinks)) {
            String text = safeText(link).toLowerCase();
            String href = safeAttr(link, "href").toLowerCase();

            if (text.contains("blog") || href.contains("blog")) {
                return true;
            }
        }
        return false;
    }

    public void clickBlogNav() {
        for (WebElement link : driver.findElements(navLinks)) {
            String text = safeText(link).toLowerCase();
            String href = safeAttr(link, "href").toLowerCase();

            if (text.contains("blog") || href.contains("blog")) {
                utils.scrollTo(link);
                utils.safeClick(link);
                utils.waitForPageLoad();
                utils.dismissOverlays();
                utils.sleep(1000);
                return;
            }
        }
        throw new NoSuchElementException("Blog navigation link not found.");
    }

    public List<String> getHeadings() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(headings)) {
            String t = safeText(el);
            if (!t.isEmpty()) out.add(t);
        }
        return out;
    }

    public boolean hasBlogRelatedText() {
        String text = getBodyText().replaceAll("\\s+", " ");
        return text.contains("blog")
                || text.contains("blogs")
                || text.contains("article")
                || text.contains("articles")
                || text.contains("post")
                || text.contains("read more");
    }

    public int countVisibleBlogCards() {
        int count = 0;
        for (WebElement el : driver.findElements(blogCards)) {
            if (isDisplayed(el) && !safeText(el).isEmpty()) {
                count++;
            }
        }
        return count;
    }

    public int countVisibleBlogTitles() {
        int count = 0;
        for (WebElement el : driver.findElements(blogTitles)) {
            if (isDisplayed(el) && !safeText(el).isEmpty()) {
                count++;
            }
        }
        return count;
    }

    public int countVisibleBlogDescriptions() {
        int count = 0;
        for (WebElement el : driver.findElements(blogDescriptions)) {
            String text = safeText(el);
            if (isDisplayed(el) && !text.isEmpty() && text.length() > 10) {
                count++;
            }
        }
        return count;
    }

    public int countVisibleDates() {
        int count = 0;
        for (WebElement el : driver.findElements(dateElements)) {
            if (isDisplayed(el) && !safeText(el).isEmpty()) {
                count++;
            }
        }
        return count;
    }

    public List<String> getVisibleBlogLinks() {
        LinkedHashSet<String> out = new LinkedHashSet<>();
        for (WebElement el : driver.findElements(blogLinks)) {
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

    public boolean clickFirstBlogLink() {
        for (WebElement el : driver.findElements(blogLinks)) {
            if (isDisplayed(el)) {
                String href = safeAttr(el, "href");
                if (!href.isEmpty()) {
                    utils.scrollTo(el);
                    utils.safeClick(el);
                    utils.waitForPageLoad();
                    utils.sleep(1000);
                    return true;
                }
            }
        }
        return false;
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
        System.out.println("========== BLOG PAGE AUDIT ==========");
        System.out.println("URL          : " + getCurrentUrl());
        System.out.println("TITLE        : " + getPageTitle());
        System.out.println("BODY LEN     : " + getBodyLength());
        System.out.println("BLOG CARDS   : " + countVisibleBlogCards());
        System.out.println("BLOG TITLES  : " + countVisibleBlogTitles());
        System.out.println("DESCRIPTIONS : " + countVisibleBlogDescriptions());
        System.out.println("DATES        : " + countVisibleDates());
        System.out.println("FORMS        : " + countForms());
        System.out.println("IMAGES       : " + countImagesWithSrc());
        System.out.println("LINKS        : " + countValidLinks());
        System.out.println("FOOTER       : " + isFooterVisible());

        System.out.println("\n--- HEADINGS ---");
        for (String h : getHeadings()) System.out.println(" - " + h);

        System.out.println("\n--- BUTTONS ---");
        for (String b : getVisibleButtons()) System.out.println(" - " + b);

        System.out.println("\n--- BLOG LINKS ---");
        for (String l : getVisibleBlogLinks()) System.out.println(" - " + l);
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
