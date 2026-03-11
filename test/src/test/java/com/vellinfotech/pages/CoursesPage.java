package com.vellinfotech.pages;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.vellinfotech.Utils.TestUtils;

public class CoursesPage {

    private WebDriver driver;
    private WebDriverWait wait;
    private TestUtils utils;

    public CoursesPage(WebDriver driver, WebDriverWait wait) {
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
    private By inputs = By.cssSelector("input");
    private By textareas = By.cssSelector("textarea");
    private By selects = By.cssSelector("select");
    private By forms = By.tagName("form");
    private By footer = By.cssSelector("footer, .footer, [class*='footer']");
    private By successMessage = By.cssSelector(".success, .alert-success, .thank-you, .confirmation, [class*='success'], [class*='thank']");
    private By validationMessages = By.cssSelector(".error, .error-message, .invalid-feedback, [class*='error'], [class*='invalid'], .help-block");

    // all-courses detail links
    private By courseDetailLinks = By.cssSelector("a[href*='/all-courses/']");

    // enquiry form
    private By nameInput = By.cssSelector("input[name='name'], input[placeholder*='name' i]");
    private By emailInput = By.cssSelector("input[type='email'], input[name*='email' i]");
    private By phoneInput = By.cssSelector("input[type='tel'], input[name*='phone' i], input[placeholder*='mobile' i]");
    private By messageInput = By.cssSelector("textarea");
    private By submitButton = By.cssSelector("form button[type='submit'], form input[type='submit'], button[type='submit']");

    public void openCoursesPage(String url) {
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

    public boolean homepageHasCoursesNav() {
        for (WebElement link : driver.findElements(navLinks)) {
            String text = safeText(link).toLowerCase();
            String href = safeAttr(link, "href").toLowerCase();
            if (text.contains("course") || href.contains("/all-courses")) {
                return true;
            }
        }
        return false;
    }

    public void clickCoursesNav() {
        for (WebElement link : driver.findElements(navLinks)) {
            String text = safeText(link).toLowerCase();
            String href = safeAttr(link, "href").toLowerCase();
            if (text.contains("course") || href.contains("/all-courses")) {
                utils.scrollTo(link);
                utils.safeClick(link);
                utils.waitForPageLoad();
                utils.dismissOverlays();
                utils.sleep(1000);
                return;
            }
        }
        throw new NoSuchElementException("Courses navigation link not found.");
    }

    public List<String> getHeadings() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(headings)) {
            String t = safeText(el);
            if (!t.isEmpty()) out.add(t);
        }
        return out;
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

    public List<String> getVisibleLinksText() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(links)) {
            if (isDisplayed(el)) {
                String t = safeText(el);
                String href = safeAttr(el, "href");
                if (!t.isEmpty() || !href.isEmpty()) {
                    out.add("TEXT=\"" + t + "\" | HREF=\"" + href + "\"");
                }
            }
        }
        return out;
    }

    public List<String> getVisibleInputsInfo() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(inputs)) {
            if (isDisplayed(el)) {
                out.add(
                    "type=" + safeAttr(el, "type") +
                    ", name=" + safeAttr(el, "name") +
                    ", id=" + safeAttr(el, "id") +
                    ", placeholder=" + safeAttr(el, "placeholder")
                );
            }
        }
        return out;
    }

    public List<String> getVisibleTextareasInfo() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(textareas)) {
            if (isDisplayed(el)) {
                out.add(
                    "name=" + safeAttr(el, "name") +
                    ", id=" + safeAttr(el, "id") +
                    ", placeholder=" + safeAttr(el, "placeholder")
                );
            }
        }
        return out;
    }

    public List<String> getVisibleSelectsInfo() {
        List<String> out = new ArrayList<>();
        for (WebElement el : driver.findElements(selects)) {
            if (isDisplayed(el)) {
                out.add(
                    "name=" + safeAttr(el, "name") +
                    ", id=" + safeAttr(el, "id")
                );
            }
        }
        return out;
    }

    public int countForms() {
        return driver.findElements(forms).size();
    }

    public boolean isFooterVisible() {
        List<WebElement> els = driver.findElements(footer);
        return !els.isEmpty() && isDisplayed(els.get(0));
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
        int valid = 0;
        for (WebElement a : driver.findElements(links)) {
            String href = safeAttr(a, "href");
            if (!href.isEmpty() && !href.equals("#")) valid++;
        }
        return valid;
    }

    public List<WebElement> getVisibleCourseLinks() {
        List<WebElement> out = new ArrayList<>();
        for (WebElement el : driver.findElements(courseDetailLinks)) {
            String href = safeAttr(el, "href");
            String text = safeText(el);
            if (isDisplayed(el)
                    && href.contains("/all-courses/")
                    && !href.equalsIgnoreCase("https://www.vellinfotech.com/all-courses")
                    && !text.isEmpty()) {
                out.add(el);
            }
        }
        return out;
    }

    public List<String> getVisibleCourseNames() {
        LinkedHashSet<String> names = new LinkedHashSet<>();
        for (WebElement el : getVisibleCourseLinks()) {
            String text = safeText(el).replaceAll("\\s+", " ").trim();
            if (!text.isEmpty()) names.add(text);
        }
        return new ArrayList<>(names);
    }

    public boolean hasCourseNamedLike(String... keywords) {
        String body = getBodyText().replaceAll("\\s+", " ");
        for (String keyword : keywords) {
            if (body.contains(keyword.toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    public boolean clickFirstCourseLink() {
        List<WebElement> courseLinks = getVisibleCourseLinks();
        if (courseLinks.isEmpty()) return false;

        WebElement first = courseLinks.get(0);
        utils.scrollTo(first);
        utils.safeClick(first);
        utils.waitForPageLoad();
        utils.sleep(1000);
        return true;
    }

    public boolean hasForm() {
        return !driver.findElements(forms).isEmpty();
    }

    public void scrollToForm() {
        List<WebElement> fs = driver.findElements(forms);
        if (!fs.isEmpty()) {
            utils.scrollTo(fs.get(0));
            utils.sleep(500);
        }
    }

    public boolean fillName(String value) {
        WebElement el = firstVisible(nameInput);
        if (el == null) return false;
        clearAndType(el, value);
        return true;
    }

    public boolean fillEmail(String value) {
        WebElement el = firstVisible(emailInput);
        if (el == null) return false;
        clearAndType(el, value);
        return true;
    }

    public boolean fillPhone(String value) {
        WebElement el = firstVisible(phoneInput);
        if (el == null) return false;
        clearAndType(el, value);
        return true;
    }

    public boolean fillMessage(String value) {
        WebElement el = firstVisible(messageInput);
        if (el == null) return false;
        clearAndType(el, value);
        return true;
    }

    public int fillEnquiryForm(String name, String email, String phone, String message) {
        int count = 0;
        if (fillName(name)) count++;
        if (fillEmail(email)) count++;
        if (fillPhone(phone)) count++;
        if (fillMessage(message)) count++;
        return count;
    }

    public void clearFormFields() {
        WebElement name = firstVisible(nameInput);
        WebElement email = firstVisible(emailInput);
        WebElement phone = firstVisible(phoneInput);
        WebElement msg = firstVisible(messageInput);

        if (name != null) clearAndType(name, "");
        if (email != null) clearAndType(email, "");
        if (phone != null) clearAndType(phone, "");
        if (msg != null) clearAndType(msg, "");
    }

    public void submitForm() {
        WebElement btn = firstVisible(submitButton);
        if (btn == null) throw new NoSuchElementException("Submit button not found.");
        utils.scrollTo(btn);
        utils.safeClick(btn);
        utils.sleep(1500);
    }

    public boolean hasHtml5ValidationErrors() {
        WebElement name = firstVisible(nameInput);
        WebElement email = firstVisible(emailInput);
        WebElement phone = firstVisible(phoneInput);

        return hasValidationMessage(name) || hasValidationMessage(email) || hasValidationMessage(phone);
    }

    public List<String> getVisibleValidationMessages() {
        List<String> errors = new ArrayList<>();
        for (int attempt = 0; attempt < 2; attempt++) {
            try {
                for (WebElement el : driver.findElements(validationMessages)) {
                    if (isDisplayed(el)) {
                        String t = safeText(el);
                        if (!t.isEmpty()) errors.add(t);
                    }
                }
                return errors;
            } catch (StaleElementReferenceException e) {
                errors.clear();
                utils.sleep(400);
            }
        }
        return errors;
    }

    public boolean isSuccessVisible() {
        try {
            for (WebElement el : driver.findElements(successMessage)) {
                if (isDisplayed(el) && !safeText(el).isEmpty()) {
                    return true;
                }
            }
        } catch (Exception ignored) {
        }
        String bodyText = getBodyText();
        return bodyText.contains("thank you")
                || bodyText.contains("success")
                || bodyText.contains("submitted")
                || bodyText.contains("we will contact");
    }

    public void printFullPageAudit() {
        System.out.println("========== PAGE AUDIT ==========");
        System.out.println("URL       : " + getCurrentUrl());
        System.out.println("TITLE     : " + getPageTitle());
        System.out.println("BODY LEN  : " + getBodyLength());
        System.out.println("FORMS     : " + countForms());
        System.out.println("IMAGES    : " + countImagesWithSrc());
        System.out.println("LINKS     : " + countValidLinks());
        System.out.println("FOOTER    : " + isFooterVisible());

        System.out.println("\n--- HEADINGS ---");
        for (String h : getHeadings()) System.out.println(" - " + h);

        System.out.println("\n--- BUTTONS ---");
        for (String b : getVisibleButtons()) System.out.println(" - " + b);

        System.out.println("\n--- INPUTS ---");
        for (String i : getVisibleInputsInfo()) System.out.println(" - " + i);

        System.out.println("\n--- TEXTAREAS ---");
        for (String t : getVisibleTextareasInfo()) System.out.println(" - " + t);

        System.out.println("\n--- SELECTS ---");
        for (String s : getVisibleSelectsInfo()) System.out.println(" - " + s);

        System.out.println("\n--- COURSE NAMES ---");
        for (String c : getVisibleCourseNames()) System.out.println(" - " + c);
    }

    private WebElement firstVisible(By locator) {
        for (WebElement el : driver.findElements(locator)) {
            try {
                if (el.isDisplayed() && el.isEnabled()) return el;
            } catch (Exception ignored) {
            }
        }
        return null;
    }

    private void clearAndType(WebElement el, String value) {
        utils.scrollTo(el);
        el.click();
        el.sendKeys(Keys.chord(Keys.CONTROL, "a"));
        el.sendKeys(Keys.DELETE);
        if (!value.isEmpty()) el.sendKeys(value);
    }

    private boolean hasValidationMessage(WebElement el) {
        if (el == null) return false;
        try {
            Object msg = ((JavascriptExecutor) driver).executeScript(
                "return arguments[0].validationMessage;", el);
            return msg != null && !msg.toString().trim().isEmpty();
        } catch (Exception e) {
            return false;
        }
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