package com.vellinfotech.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.vellinfotech.Utils.TestUtils;
import com.vellinfotech.base.BaseTest;
import com.vellinfotech.pages.InternshipPage;

public class InternshipPageTest extends BaseTest {

    private InternshipPage internshipPage;
    private TestUtils utils;

    @BeforeClass(alwaysRun = true)
    public void initPage() {
        internshipPage = new InternshipPage(driver, wait);
        utils = new TestUtils(driver, wait);
    }

    @Test(priority = 1, description = "Homepage should load")
    public void tc01_homepageLoads() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        int bodyLength = driver.findElement(org.openqa.selenium.By.tagName("body")).getText().trim().length();
        System.out.println("Homepage body length: " + bodyLength);

        Assert.assertTrue(bodyLength > 100, "Homepage content too short.");
    }

    @Test(priority = 2, description = "Homepage nav should contain internship link")
    public void tc02_internshipNavExists() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        boolean found = internshipPage.homepageHasInternshipNav();
        System.out.println("Internship nav found: " + found);

        Assert.assertTrue(found, "Internship nav link not found.");
    }

    @Test(priority = 3, description = "Navigate to internship page")
    public void tc03_navigateToInternshipPage() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        internshipPage.clickInternshipNav();
        String url = internshipPage.getCurrentUrl();

        System.out.println("Current URL after nav click: " + url);
        Assert.assertTrue(url.contains("intern"), "Did not navigate to internship page.");
    }

    @Test(priority = 4, description = "Internship page should be valid")
    public void tc04_internshipPageValid() {
        // Prefer nav flow over hardcoded URL
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        Assert.assertTrue(internshipPage.getCurrentUrl().contains("intern"),
                "URL is not internship related.");
        Assert.assertFalse(internshipPage.getBodyText().contains("404"),
                "Page shows 404.");
        Assert.assertTrue(internshipPage.getBodyLength() > 300,
                "Internship page looks too small.");
    }

    @Test(priority = 5, description = "Headings should be present")
    public void tc05_headingsPresent() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        List<String> headings = internshipPage.getHeadings();
        System.out.println("Headings count: " + headings.size());
        for (String h : headings) System.out.println(" - " + h);

        Assert.assertFalse(headings.isEmpty(), "No headings found.");
    }

    @Test(priority = 6, description = "Internship-related text should exist")
    public void tc06_internshipTextPresent() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        boolean found = internshipPage.hasInternshipRelatedText(
                "internship",
                "intern",
                "training",
                "career",
                "apply"
        );

        System.out.println("Internship related text found: " + found);
        Assert.assertTrue(found, "Internship-related text not found.");
    }

    @Test(priority = 7, description = "Visible internship links should exist")
    public void tc07_visibleInternshipLinksExist() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        List<String> names = internshipPage.getVisibleInternshipLinkNames();
        System.out.println("Visible internship links:");
        for (String n : names) System.out.println(" - " + n);

        Assert.assertTrue(names.size() >= 1, "No visible internship links found.");
    }

    @Test(priority = 8, description = "First internship link should navigate if available")
    public void tc08_firstInternshipLinkNavigation() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        String before = internshipPage.getCurrentUrl();
        boolean clicked = internshipPage.clickFirstInternshipLink();
        String after = internshipPage.getCurrentUrl();

        System.out.println("Before URL: " + before);
        System.out.println("After URL : " + after);
        System.out.println("Clicked   : " + clicked);

        if (!clicked) {
            Assert.assertTrue(true, "No dedicated internship link found to click.");
            return;
        }

        Assert.assertNotEquals(after, before, "Internship link click did not navigate.");
    }

    @Test(priority = 9, description = "Images should have src")
    public void tc09_imagesValid() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        int total = internshipPage.countImagesWithSrc();
        int broken = internshipPage.countBrokenImagesByEmptySrc();

        System.out.println("Images with src: " + total);
        System.out.println("Broken images  : " + broken);

        Assert.assertTrue(total > 0, "No images found.");
        Assert.assertEquals(broken, 0, "Some images have empty src.");
    }

    @Test(priority = 10, description = "Links should be available")
    public void tc10_validLinksPresent() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        int validLinks = internshipPage.countValidLinks();
        System.out.println("Valid links count: " + validLinks);

        Assert.assertTrue(validLinks >= 5, "Too few valid links: " + validLinks);
    }

    @Test(priority = 11, description = "Footer should be visible")
    public void tc11_footerVisible() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        utils.scrollToBottom();
        utils.sleep(700);

        boolean footerVisible = internshipPage.isFooterVisible();
        System.out.println("Footer visible: " + footerVisible);

        Assert.assertTrue(footerVisible, "Footer not visible.");
    }

    @Test(priority = 12, description = "Form existence check")
    public void tc12_formExists() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        boolean hasForm = internshipPage.hasForm();
        System.out.println("Form exists: " + hasForm);

        Assert.assertTrue(hasForm, "Internship form not found.");
    }

    @Test(priority = 13, description = "Empty form submit should show validation")
    public void tc13_emptyFormValidation() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        Assert.assertTrue(internshipPage.hasForm(), "Form not present.");

        internshipPage.scrollToForm();
        internshipPage.clearFormFields();
        internshipPage.submitForm();

        boolean html5 = internshipPage.hasHtml5ValidationErrors();
        List<String> errors = internshipPage.getVisibleValidationMessages();

        System.out.println("HTML5 validation: " + html5);
        System.out.println("Visible validation errors: " + errors);

        Assert.assertTrue(html5 || !errors.isEmpty(),
                "Empty form submit did not show validation.");
    }

    @Test(priority = 14, description = "Invalid email should be blocked")
    public void tc14_invalidEmailValidation() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        Assert.assertTrue(internshipPage.hasForm(), "Form not present.");

        internshipPage.scrollToForm();
        int filled = internshipPage.fillInternshipForm(
                "Test User",
                "invalid-email",
                "9876543210",
                "Interested in internship details"
        );

        System.out.println("Filled field count: " + filled);
        Assert.assertTrue(filled >= 3, "Could not fill enough fields.");

        internshipPage.submitForm();

        boolean html5 = internshipPage.hasHtml5ValidationErrors();
        List<String> errors = internshipPage.getVisibleValidationMessages();

        System.out.println("HTML5 validation: " + html5);
        System.out.println("Visible validation errors: " + errors);

        Assert.assertTrue(html5 || !errors.isEmpty(),
                "Invalid email was not blocked.");
    }

    @Test(priority = 15, description = "Valid form should submit")
    public void tc15_validFormSubmit() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        Assert.assertTrue(internshipPage.hasForm(), "Form not present.");

        internshipPage.scrollToForm();
        int filled = internshipPage.fillInternshipForm(
                "Arjun Patel",
                "arjun.patel@gmail.com",
                "9876543210",
                "I am interested in internship opportunities. Please share details."
        );

        System.out.println("Filled field count: " + filled);
        Assert.assertTrue(filled >= 4, "Could not fill all fields.");

        String before = internshipPage.getCurrentUrl();
        internshipPage.submitForm();
        utils.sleep(2000);
        String after = internshipPage.getCurrentUrl();

        List<String> errors = internshipPage.getVisibleValidationMessages();
        boolean success = internshipPage.isSuccessVisible();

        System.out.println("Before URL      : " + before);
        System.out.println("After URL       : " + after);
        System.out.println("Errors          : " + errors);
        System.out.println("Success visible : " + success);

        Assert.assertTrue(errors.isEmpty(), "Valid data produced validation errors: " + errors);
        Assert.assertTrue(success || !after.equals(before),
                "Valid submit had no visible success and no navigation.");
    }

    @Test(priority = 16, description = "Page should scroll")
    public void tc16_scrollWorks() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        long pageHeight = utils.getPageHeight();
        System.out.println("Page height: " + pageHeight);
        Assert.assertTrue(pageHeight > 300, "Page height too small.");

        utils.scrollToBottom();
        utils.sleep(700);

        long scrollPos = utils.getScrollPosition();
        System.out.println("Scroll position: " + scrollPos);
        Assert.assertTrue(scrollPos > 0, "Scroll position did not change.");
    }

    @Test(priority = 17, description = "Deep audit: print visible element groups")
    public void tc17_fullPageAudit() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();

        internshipPage.printFullPageAudit();
        Assert.assertTrue(true, "Audit completed.");
    }

    @Test(priority = 18, description = "Page load should be under 10 seconds")
    public void tc18_pageLoadTime() {
        long start = System.currentTimeMillis();
        driver.get(BASE_URL);
        utils.waitForPageLoad();
        internshipPage.clickInternshipNav();
        long duration = System.currentTimeMillis() - start;

        System.out.println("Internship page load time: " + duration + " ms");
        Assert.assertTrue(duration < 10000,
                "Internship page took too long to load: " + duration + " ms");
    }
}