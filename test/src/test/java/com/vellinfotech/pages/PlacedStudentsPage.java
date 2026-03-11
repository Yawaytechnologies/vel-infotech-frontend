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

public class PlacedStudentsPage {

    private WebDriver driver;
    private WebDriverWait wait;
    private TestUtils utils;

    public PlacedStudentsPage(WebDriver driver, WebDriverWait wait) {
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
    private By tables = By.tagName("table");
    private By tableRows = By.cssSelector("table tr");
    private By listCards = By.cssSelector(".card, .student-card, .placed-card, [class*='student'], [class*='placed']");

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

    public boolean homepageHasPlacedStudentsNav() {
        for (WebElement link : driver.findElements(navLinks)) {
            String text = safeText(link).toLowerCase();
            String href = safeAttr(link, "href").toLowerCase();

            if (text.contains("placed students")
                    || text.contains("placed student")
                    || href.contains("placed-students")) {
                return true;
            }
        }
        return false;
    }

    public void clickPlacedStudentsNav() {
        for (WebElement link : driver.findElements(navLinks)) {
            String text = safeText(link).toLowerCase();
            String href = safeAttr(link, "href").toLowerCase();

            if (text.contains("placed students")
                    || text.contains("placed student")
                    || href.contains("placed-students")) {
                utils.scrollTo(link);
                utils.safeClick(link);
                utils.waitForPageLoad();
                utils.dismissOverlays();
                utils.sleep(1000);
                return;
            }
        }
        throw new NoSuchElementException("Placed Students List nav link not found.");
    }

    public List<String> getHeadings() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(headings)) {
            String t = safeText(el);
            if (!t.isEmpty()) out.add(t);
        }
        return out;
    }

    public boolean hasPlacedStudentsRelatedText() {
        String text = getBodyText().replaceAll("\\s+", " ");
        return text.contains("placed students")
                || text.contains("placed student")
                || text.contains("placement")
                || text.contains("student list")
                || text.contains("students list");
    }

    public int countTables() {
        return driver.findElements(tables).size();
    }

    public int countVisibleTableRows() {
        int count = 0;
        for (WebElement row : driver.findElements(tableRows)) {
            if (isDisplayed(row) && !safeText(row).isEmpty()) {
                count++;
            }
        }
        return count;
    }

    public int countVisibleCards() {
        int count = 0;
        for (WebElement card : driver.findElements(listCards)) {
            if (isDisplayed(card) && !safeText(card).isEmpty()) {
                count++;
            }
        }
        return count;
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

    public List<String> getVisibleLinks() {
        LinkedHashSet<String> out = new LinkedHashSet<>();
        for (WebElement el : driver.findElements(links)) {
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

    public void printFullAudit() {
        System.out.println("========== PLACED STUDENTS PAGE AUDIT ==========");
        System.out.println("URL        : " + getCurrentUrl());
        System.out.println("TITLE      : " + getPageTitle());
        System.out.println("BODY LEN   : " + getBodyLength());
        System.out.println("TABLES     : " + countTables());
        System.out.println("TABLE ROWS : " + countVisibleTableRows());
        System.out.println("CARDS      : " + countVisibleCards());
        System.out.println("IMAGES     : " + countImagesWithSrc());
        System.out.println("LINKS      : " + countValidLinks());
        System.out.println("FOOTER     : " + isFooterVisible());

        System.out.println("\n--- HEADINGS ---");
        for (String h : getHeadings()) System.out.println(" - " + h);

        System.out.println("\n--- BUTTONS ---");
        for (String b : getVisibleButtons()) System.out.println(" - " + b);

        System.out.println("\n--- LINKS ---");
        for (String l : getVisibleLinks()) System.out.println(" - " + l);
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