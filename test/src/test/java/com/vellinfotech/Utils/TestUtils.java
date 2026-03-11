package com.vellinfotech.Utils;

import java.time.Duration;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestUtils {

    private WebDriver driver;
    private WebDriverWait wait;

    public TestUtils(WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait = wait;
    }

    public void log(String msg) {
        System.out.println(msg);
    }

    public void waitForPageLoad() {
        wait.until((ExpectedCondition<Boolean>) wd ->
            ((JavascriptExecutor) wd).executeScript("return document.readyState").equals("complete")
        );
    }

    public void sleep(long ms) {
        try {
            Thread.sleep(ms);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    public void scrollTo(WebElement element) {
        ((JavascriptExecutor) driver).executeScript(
            "arguments[0].scrollIntoView({block:'center', inline:'nearest'});",
            element
        );
    }

    public void scrollToTop() {
        ((JavascriptExecutor) driver).executeScript("window.scrollTo(0, 0);");
    }

    public void scrollToBottom() {
        ((JavascriptExecutor) driver).executeScript(
            "window.scrollTo(0, document.body.scrollHeight);"
        );
    }

    public void scrollToPercent(double percent) {
        ((JavascriptExecutor) driver).executeScript(
            "window.scrollTo(0, document.body.scrollHeight * arguments[0]);",
            percent
        );
    }

    public void safeClick(WebElement element) {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(element)).click();
        } catch (Exception e) {
            try {
                scrollTo(element);
                element.click();
            } catch (Exception ex) {
                ((JavascriptExecutor) driver).executeScript(
                    "arguments[0].click();",
                    element
                );
            }
        }
    }

    public void clearAndType(WebElement element, String text) {
        scrollTo(element);
        element.click();
        element.clear();
        element.sendKeys(text);
    }

    public String safeText(WebElement element) {
        try {
            return element.getText().trim();
        } catch (StaleElementReferenceException e) {
            return "";
        } catch (Exception e) {
            return "";
        }
    }

    public String safeAttr(WebElement element, String attrName) {
        try {
            String value = element.getAttribute(attrName);
            return value == null ? "" : value.trim();
        } catch (StaleElementReferenceException e) {
            return "";
        } catch (Exception e) {
            return "";
        }
    }

    public long getPageHeight() {
        Object value = ((JavascriptExecutor) driver).executeScript(
            "return Math.max(document.body.scrollHeight, " +
            "document.documentElement.scrollHeight, " +
            "document.body.offsetHeight, " +
            "document.documentElement.offsetHeight, " +
            "document.body.clientHeight, " +
            "document.documentElement.clientHeight);"
        );
        return ((Number) value).longValue();
    }

    public long getScrollPosition() {
        Object value = ((JavascriptExecutor) driver).executeScript(
            "return window.pageYOffset || document.documentElement.scrollTop;"
        );
        return ((Number) value).longValue();
    }

    public void waitForVisibility(WebElement element) {
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void waitForClickability(WebElement element) {
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public void shortWait() {
        new WebDriverWait(driver, Duration.ofSeconds(3)).until(d -> true);
    }

    public void dismissOverlays() {
        // fallback no-op so older classes compile
    }

    public boolean hasHTML5ValidationError(WebElement element) {
        try {
            Object result = ((JavascriptExecutor) driver).executeScript(
                "return arguments[0].validationMessage;", element
            );
            return result != null && !result.toString().trim().isEmpty();
        } catch (Exception e) {
            return false;
        }
    }

    public boolean hasHTML5ValidationError() {
        return false;
    }
}