package com.vellinfotech.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.vellinfotech.Utils.TestUtils;
import com.vellinfotech.base.BaseTest;
import com.vellinfotech.pages.PlacedStudentsPage;

public class PlacedStudentsPageTest extends BaseTest {

    private PlacedStudentsPage placedStudentsPage;
    private TestUtils utils;

    @BeforeClass(alwaysRun = true)
    public void initPage() {
        placedStudentsPage = new PlacedStudentsPage(driver, wait);
        utils = new TestUtils(driver, wait);
    }

    @Test(priority = 1, description = "Homepage should load")
    public void tc01_homepageLoads() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        int bodyLength = driver.findElement(org.openqa.selenium.By.tagName("body"))
                .getText().trim().length();

        System.out.println("Homepage body length: " + bodyLength);
        Assert.assertTrue(bodyLength > 100, "Homepage content too short.");
    }

    @Test(priority = 2, description = "Homepage nav should contain Placed Students List link")
    public void tc02_placedStudentsNavExists() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        boolean found = placedStudentsPage.homepageHasPlacedStudentsNav();
        System.out.println("Placed Students nav found: " + found);

        Assert.assertTrue(found, "Placed Students List nav link not found.");
    }

    @Test(priority = 3, description = "Navigate to Placed Students List page")
    public void tc03_navigateToPlacedStudentsPage() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        placedStudentsPage.clickPlacedStudentsNav();
        String url = placedStudentsPage.getCurrentUrl();

        System.out.println("Current URL after nav click: " + url);
        Assert.assertTrue(url.contains("placed") || url.contains("student"),
                "Did not navigate to placed students page.");
    }

    @Test(priority = 4, description = "Placed Students page should be valid")
    public void tc04_pageValid() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        Assert.assertFalse(placedStudentsPage.getBodyText().contains("404"),
                "Page shows 404.");
        Assert.assertTrue(placedStudentsPage.getBodyLength() > 300,
                "Placed Students page content is too small.");
    }

    @Test(priority = 5, description = "Headings should be present")
    public void tc05_headingsPresent() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        List<String> headings = placedStudentsPage.getHeadings();

        System.out.println("Headings count: " + headings.size());
        for (String h : headings) {
            System.out.println(" - " + h);
        }

        Assert.assertFalse(headings.isEmpty(), "No headings found on page.");
    }

    @Test(priority = 6, description = "Placed Students related text should be present")
    public void tc06_relatedTextPresent() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        boolean found = placedStudentsPage.hasPlacedStudentsRelatedText();
        System.out.println("Placed Students related text found: " + found);

        Assert.assertTrue(found, "Placed Students related text not found.");
    }

    @Test(priority = 7, description = "Placed students list should exist as table rows or cards")
    public void tc07_listContentPresent() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        int tableRows = placedStudentsPage.countVisibleTableRows();
        int cards = placedStudentsPage.countVisibleCards();

        System.out.println("Visible table rows: " + tableRows);
        System.out.println("Visible cards     : " + cards);

        Assert.assertTrue(tableRows > 0 || cards > 0,
                "No list content found as table rows or cards.");
    }

    @Test(priority = 8, description = "Images should not have empty src")
    public void tc08_imagesValid() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        int total = placedStudentsPage.countImagesWithSrc();
        int broken = placedStudentsPage.countBrokenImagesByEmptySrc();

        System.out.println("Images with src: " + total);
        System.out.println("Broken images  : " + broken);

        Assert.assertTrue(total > 0, "No images found.");
        Assert.assertEquals(broken, 0, "Some images have empty src.");
    }

    @Test(priority = 9, description = "Links should be available")
    public void tc09_validLinksPresent() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        int validLinks = placedStudentsPage.countValidLinks();
        System.out.println("Valid links count: " + validLinks);

        Assert.assertTrue(validLinks >= 5, "Too few valid links: " + validLinks);
    }

    @Test(priority = 10, description = "Footer should be visible")
    public void tc10_footerVisible() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        utils.scrollToBottom();
        utils.sleep(700);

        boolean footerVisible = placedStudentsPage.isFooterVisible();
        System.out.println("Footer visible: " + footerVisible);

        Assert.assertTrue(footerVisible, "Footer not visible.");
    }

    @Test(priority = 11, description = "Page should scroll")
    public void tc11_scrollWorks() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        long pageHeight = utils.getPageHeight();
        System.out.println("Page height: " + pageHeight);
        Assert.assertTrue(pageHeight > 300, "Page height too small.");

        utils.scrollToBottom();
        utils.sleep(700);

        long scrollPos = utils.getScrollPosition();
        System.out.println("Scroll position: " + scrollPos);
        Assert.assertTrue(scrollPos > 0, "Scroll position did not change.");
    }

    @Test(priority = 12, description = "Deep audit of page elements")
    public void tc12_fullPageAudit() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        placedStudentsPage.printFullAudit();
        Assert.assertTrue(true, "Audit completed.");
    }

    @Test(priority = 13, description = "Page load should be under 10 seconds")
    public void tc13_pageLoadTime() {
        long start = System.currentTimeMillis();

        driver.get(BASE_URL);
        utils.waitForPageLoad();
        placedStudentsPage.clickPlacedStudentsNav();

        long duration = System.currentTimeMillis() - start;
        System.out.println("Placed Students page load time: " + duration + " ms");

        Assert.assertTrue(duration < 10000,
                "Placed Students page took too long to load: " + duration + " ms");
    }
}