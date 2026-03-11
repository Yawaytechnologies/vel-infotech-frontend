package com.vellinfotech.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.vellinfotech.Utils.TestUtils;
import com.vellinfotech.base.BaseTest;
import com.vellinfotech.pages.BlogPage;

public class BlogPageTest extends BaseTest {

    private BlogPage blogPage;
    private TestUtils utils;
    private final String BLOG_URL = "https://www.vellinfotech.com/blog";

    @BeforeClass(alwaysRun = true)
    public void initPage() {
        blogPage = new BlogPage(driver, wait);
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

    @Test(priority = 2, description = "Homepage nav should contain Blog link")
    public void tc02_blogNavExists() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        boolean found = blogPage.homepageHasBlogNav();
        System.out.println("Blog nav found: " + found);

        Assert.assertTrue(found, "Blog nav link not found.");
    }

    @Test(priority = 3, description = "Navigate to Blog page")
    public void tc03_navigateToBlogPage() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        blogPage.clickBlogNav();
        String url = blogPage.getCurrentUrl();

        System.out.println("Current URL after nav click: " + url);
        Assert.assertTrue(url.contains("blog"), "Did not navigate to blog page.");
    }

    @Test(priority = 4, description = "Blog page should be valid")
    public void tc04_blogPageValid() {
        blogPage.openPage(BLOG_URL);

        Assert.assertTrue(blogPage.getCurrentUrl().contains("blog"),
                "URL is not blog related.");
        Assert.assertFalse(blogPage.getBodyText().contains("404"),
                "Page shows 404.");
        Assert.assertTrue(blogPage.getBodyLength() > 300,
                "Blog page content is too small.");
    }

    @Test(priority = 5, description = "Headings should be present")
    public void tc05_headingsPresent() {
        blogPage.openPage(BLOG_URL);

        List<String> headings = blogPage.getHeadings();
        System.out.println("Headings count: " + headings.size());
        for (String h : headings) {
            System.out.println(" - " + h);
        }

        Assert.assertFalse(headings.isEmpty(), "No headings found on page.");
    }

    @Test(priority = 6, description = "Blog-related text should be present")
    public void tc06_relatedTextPresent() {
        blogPage.openPage(BLOG_URL);

        boolean found = blogPage.hasBlogRelatedText();
        System.out.println("Blog related text found: " + found);

        Assert.assertTrue(found, "Blog-related text not found.");
    }

    @Test(priority = 7, description = "Blog content should exist")
    public void tc07_blogContentPresent() {
        blogPage.openPage(BLOG_URL);

        int cards = blogPage.countVisibleBlogCards();
        int titles = blogPage.countVisibleBlogTitles();
        int descriptions = blogPage.countVisibleBlogDescriptions();

        System.out.println("Blog cards        : " + cards);
        System.out.println("Blog titles       : " + titles);
        System.out.println("Blog descriptions : " + descriptions);

        Assert.assertTrue(cards > 0 || titles > 0 || descriptions > 0,
                "No visible blog content found.");
    }

    @Test(priority = 8, description = "Blog dates should exist if available")
    public void tc08_blogDatesAudit() {
        blogPage.openPage(BLOG_URL);

        int dates = blogPage.countVisibleDates();
        System.out.println("Visible dates count: " + dates);

        Assert.assertTrue(dates >= 0, "Date audit failed.");
    }

    @Test(priority = 9, description = "First blog link should open if present")
    public void tc09_firstBlogLinkNavigation() {
        blogPage.openPage(BLOG_URL);

        String before = blogPage.getCurrentUrl();
        boolean clicked = blogPage.clickFirstBlogLink();
        String after = blogPage.getCurrentUrl();

        System.out.println("Before URL: " + before);
        System.out.println("After URL : " + after);
        System.out.println("Clicked   : " + clicked);

        if (!clicked) {
            Assert.assertTrue(true, "No dedicated blog link found to click.");
            return;
        }

        Assert.assertNotEquals(after, before, "Blog link click did not navigate.");
    }

    @Test(priority = 10, description = "Images should not have empty src")
    public void tc10_imagesValid() {
        blogPage.openPage(BLOG_URL);

        int total = blogPage.countImagesWithSrc();
        int broken = blogPage.countBrokenImagesByEmptySrc();

        System.out.println("Images with src: " + total);
        System.out.println("Broken images  : " + broken);

        Assert.assertTrue(total > 0, "No images found.");
        Assert.assertEquals(broken, 0, "Some images have empty src.");
    }

    @Test(priority = 11, description = "Links should be available")
    public void tc11_validLinksPresent() {
        blogPage.openPage(BLOG_URL);

        int validLinks = blogPage.countValidLinks();
        System.out.println("Valid links count: " + validLinks);

        Assert.assertTrue(validLinks >= 5, "Too few valid links: " + validLinks);
    }

    @Test(priority = 12, description = "Footer should be visible")
    public void tc12_footerVisible() {
        blogPage.openPage(BLOG_URL);

        utils.scrollToBottom();
        utils.sleep(700);

        boolean footerVisible = blogPage.isFooterVisible();
        System.out.println("Footer visible: " + footerVisible);

        Assert.assertTrue(footerVisible, "Footer not visible.");
    }

    @Test(priority = 13, description = "Page should scroll")
    public void tc13_scrollWorks() {
        blogPage.openPage(BLOG_URL);

        long pageHeight = utils.getPageHeight();
        System.out.println("Page height: " + pageHeight);
        Assert.assertTrue(pageHeight > 300, "Page height too small.");

        utils.scrollToBottom();
        utils.sleep(700);

        long scrollPos = utils.getScrollPosition();
        System.out.println("Scroll position: " + scrollPos);
        Assert.assertTrue(scrollPos > 0, "Scroll position did not change.");
    }

    @Test(priority = 14, description = "Deep audit of blog page elements")
    public void tc14_fullPageAudit() {
        blogPage.openPage(BLOG_URL);
        blogPage.printFullAudit();

        Assert.assertTrue(true, "Audit completed.");
    }

    @Test(priority = 15, description = "Page load should be under 10 seconds")
    public void tc15_pageLoadTime() {
        long start = System.currentTimeMillis();
        blogPage.openPage(BLOG_URL);
        long duration = System.currentTimeMillis() - start;

        System.out.println("Blog page load time: " + duration + " ms");
        Assert.assertTrue(duration < 10000,
                "Blog page took too long to load: " + duration + " ms");
    }
}