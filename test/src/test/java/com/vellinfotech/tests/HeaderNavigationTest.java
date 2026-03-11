package com.vellinfotech.tests;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.vellinfotech.Utils.TestUtils;
import com.vellinfotech.base.BaseTest;

public class HeaderNavigationTest extends BaseTest {

    private TestUtils utils;

    @BeforeClass(alwaysRun = true)
    public void initPage() {
        utils = new TestUtils(driver, wait);
    }

    @Test(priority = 1, description = "Header links should be visible")
    public void tc01_headerLinksVisible() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        List<WebElement> links = driver.findElements(
                By.cssSelector("nav a, header a, .navbar a, .menu a"));

        int visibleCount = 0;

        for (WebElement link : links) {
            if (link.isDisplayed()) {
                String text = link.getText().trim();
                String href = link.getAttribute("href");
                System.out.println("TEXT = " + text + " | HREF = " + href);
                visibleCount++;
            }
        }

        Assert.assertTrue(visibleCount >= 5,
                "Too few visible header links found.");
    }

    @Test(priority = 2, description = "Important header links should exist")
    public void tc02_importantHeaderLinksExist() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        String body = driver.findElement(By.tagName("body")).getText().toLowerCase();

        Assert.assertTrue(body.contains("about"), "About link/text not found.");
        Assert.assertTrue(body.contains("courses"), "Courses link/text not found.");
        Assert.assertTrue(body.contains("contact"), "Contact link/text not found.");
    }
}
