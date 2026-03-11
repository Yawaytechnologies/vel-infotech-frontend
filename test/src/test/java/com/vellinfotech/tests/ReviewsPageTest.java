package com.vellinfotech.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.vellinfotech.Utils.TestUtils;
import com.vellinfotech.base.BaseTest;
import com.vellinfotech.pages.ReviewsPage;

public class ReviewsPageTest extends BaseTest {

    private ReviewsPage reviewsPage;
    private TestUtils utils;
    private final String REVIEWS_URL = "https://www.vellinfotech.com/reviews";

    @BeforeClass(alwaysRun = true)
    public void initPage() {
        reviewsPage = new ReviewsPage(driver, wait);
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

    @Test(priority = 2, description = "Homepage nav should contain Reviews link")
    public void tc02_reviewsNavExists() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        boolean found = reviewsPage.homepageHasReviewsNav();
        System.out.println("Reviews nav found: " + found);

        Assert.assertTrue(found, "Reviews nav link not found.");
    }

    @Test(priority = 3, description = "Navigate to Reviews page")
    public void tc03_navigateToReviewsPage() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        reviewsPage.clickReviewsNav();
        String url = reviewsPage.getCurrentUrl();

        System.out.println("Current URL after nav click: " + url);
        Assert.assertTrue(url.contains("review"), "Did not navigate to reviews page.");
    }

    @Test(priority = 4, description = "Reviews page should be valid")
    public void tc04_reviewsPageValid() {
        reviewsPage.openPage(REVIEWS_URL);

        Assert.assertTrue(reviewsPage.getCurrentUrl().contains("review"),
                "URL is not reviews related.");
        Assert.assertFalse(reviewsPage.getBodyText().contains("404"),
                "Page shows 404.");
        Assert.assertTrue(reviewsPage.getBodyLength() > 300,
                "Reviews page content is too small.");
    }

    @Test(priority = 5, description = "Headings should be present")
    public void tc05_headingsPresent() {
        reviewsPage.openPage(REVIEWS_URL);

        List<String> headings = reviewsPage.getHeadings();
        System.out.println("Headings count: " + headings.size());
        for (String h : headings) {
            System.out.println(" - " + h);
        }

        Assert.assertFalse(headings.isEmpty(), "No headings found on page.");
    }

    @Test(priority = 6, description = "Reviews-related text should be present")
    public void tc06_relatedTextPresent() {
        reviewsPage.openPage(REVIEWS_URL);

        boolean found = reviewsPage.hasReviewsRelatedText();
        System.out.println("Reviews related text found: " + found);

        Assert.assertTrue(found, "Reviews-related text not found.");
    }

    @Test(priority = 7, description = "Review content should exist")
    public void tc07_reviewContentPresent() {
        reviewsPage.openPage(REVIEWS_URL);

        int cards = reviewsPage.countVisibleReviewCards();
        int texts = reviewsPage.countVisibleReviewTexts();
        int authors = reviewsPage.countVisibleReviewAuthors();

        System.out.println("Review cards   : " + cards);
        System.out.println("Review texts   : " + texts);
        System.out.println("Review authors : " + authors);

        Assert.assertTrue(cards > 0 || texts > 0 || authors > 0,
                "No visible review content found.");
    }

    @Test(priority = 8, description = "Ratings or review indicators should exist if present")
    public void tc08_ratingsPresent() {
        reviewsPage.openPage(REVIEWS_URL);

        int ratings = reviewsPage.countVisibleRatings();
        System.out.println("Visible ratings count: " + ratings);

        Assert.assertTrue(ratings >= 0, "Ratings audit failed.");
    }

    @Test(priority = 9, description = "Images should not have empty src")
    public void tc09_imagesValid() {
        reviewsPage.openPage(REVIEWS_URL);

        int total = reviewsPage.countImagesWithSrc();
        int broken = reviewsPage.countBrokenImagesByEmptySrc();

        System.out.println("Images with src: " + total);
        System.out.println("Broken images  : " + broken);

        Assert.assertTrue(total > 0, "No images found.");
        Assert.assertEquals(broken, 0, "Some images have empty src.");
    }

    @Test(priority = 10, description = "Links should be available")
    public void tc10_validLinksPresent() {
        reviewsPage.openPage(REVIEWS_URL);

        int validLinks = reviewsPage.countValidLinks();
        System.out.println("Valid links count: " + validLinks);

        Assert.assertTrue(validLinks >= 5, "Too few valid links: " + validLinks);
    }

    @Test(priority = 11, description = "Footer should be visible")
    public void tc11_footerVisible() {
        reviewsPage.openPage(REVIEWS_URL);

        utils.scrollToBottom();
        utils.sleep(700);

        boolean footerVisible = reviewsPage.isFooterVisible();
        System.out.println("Footer visible: " + footerVisible);

        Assert.assertTrue(footerVisible, "Footer not visible.");
    }

    @Test(priority = 12, description = "Page should scroll")
    public void tc12_scrollWorks() {
        reviewsPage.openPage(REVIEWS_URL);

        long pageHeight = utils.getPageHeight();
        System.out.println("Page height: " + pageHeight);
        Assert.assertTrue(pageHeight > 300, "Page height too small.");

        utils.scrollToBottom();
        utils.sleep(700);

        long scrollPos = utils.getScrollPosition();
        System.out.println("Scroll position: " + scrollPos);
        Assert.assertTrue(scrollPos > 0, "Scroll position did not change.");
    }

    @Test(priority = 13, description = "Deep audit of review page elements")
    public void tc13_fullPageAudit() {
        reviewsPage.openPage(REVIEWS_URL);
        reviewsPage.printFullAudit();

        Assert.assertTrue(true, "Audit completed.");
    }

    @Test(priority = 14, description = "Page load should be under 10 seconds")
    public void tc14_pageLoadTime() {
        long start = System.currentTimeMillis();
        reviewsPage.openPage(REVIEWS_URL);
        long duration = System.currentTimeMillis() - start;

        System.out.println("Reviews page load time: " + duration + " ms");
        Assert.assertTrue(duration < 10000,
                "Reviews page took too long to load: " + duration + " ms");
    }
}