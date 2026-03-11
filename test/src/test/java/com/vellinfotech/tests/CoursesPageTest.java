package com.vellinfotech.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.vellinfotech.Utils.TestUtils;
import com.vellinfotech.base.BaseTest;
import com.vellinfotech.pages.CoursesPage;

public class CoursesPageTest extends BaseTest {

    private CoursesPage coursesPage;
    private TestUtils utils;

    @BeforeClass(alwaysRun = true)
    public void initPage() {
        coursesPage = new CoursesPage(driver, wait);
        utils = new TestUtils(driver, wait);
    }

    @Test(priority = 1, description = "Homepage should load")
    public void tc01_homepageLoads() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        int bodyLength = coursesPage.getBodyLength();
        System.out.println("Homepage body length: " + bodyLength);

        Assert.assertTrue(bodyLength > 100, "Homepage content too short.");
    }

    @Test(priority = 2, description = "Homepage nav should contain courses link")
    public void tc02_coursesNavExists() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        boolean found = coursesPage.homepageHasCoursesNav();
        System.out.println("Courses nav found: " + found);

        Assert.assertTrue(found, "Courses nav link not found.");
    }

    @Test(priority = 3, description = "Navigate to all-courses page")
    public void tc03_navigateToCoursesPage() {
        driver.get(BASE_URL);
        utils.waitForPageLoad();

        coursesPage.clickCoursesNav();
        String url = coursesPage.getCurrentUrl();

        System.out.println("Current URL after nav click: " + url);
        Assert.assertTrue(url.contains("/all-courses"), "Did not navigate to /all-courses.");
    }

    @Test(priority = 4, description = "All-courses page should be valid")
    public void tc04_coursesPageValid() {
        coursesPage.openCoursesPage(COURSES_URL);

        Assert.assertTrue(coursesPage.getCurrentUrl().contains("/all-courses"),
                "URL is not all-courses.");
        Assert.assertFalse(coursesPage.getBodyText().contains("404"),
                "Page shows 404.");
        Assert.assertTrue(coursesPage.getBodyLength() > 500,
                "All-courses page looks too small.");
    }

    @Test(priority = 5, description = "Headings should be present")
    public void tc05_headingsPresent() {
        coursesPage.openCoursesPage(COURSES_URL);

        List<String> headings = coursesPage.getHeadings();
        System.out.println("Headings count: " + headings.size());
        for (String h : headings) System.out.println(" - " + h);

        Assert.assertFalse(headings.isEmpty(), "No headings found.");
    }

    @Test(priority = 6, description = "Visible course links should exist")
    public void tc06_visibleCourseLinksExist() {
        coursesPage.openCoursesPage(COURSES_URL);

        List<String> names = coursesPage.getVisibleCourseNames();
        System.out.println("Visible course names:");
        for (String n : names) System.out.println(" - " + n);

        Assert.assertTrue(names.size() >= 5,
                "Expected at least 5 visible course links, found: " + names.size());
    }

    @Test(priority = 7, description = "Known core course names should be present")
    public void tc07_knownCoursesPresent() {
        coursesPage.openCoursesPage(COURSES_URL);

        Assert.assertTrue(coursesPage.hasCourseNamedLike("java"), "Java not found.");
        Assert.assertTrue(coursesPage.hasCourseNamedLike("python"), "Python not found.");
        Assert.assertTrue(coursesPage.hasCourseNamedLike("selenium"), "Selenium not found.");
        Assert.assertTrue(coursesPage.hasCourseNamedLike("software testing", "testing"),
                "Software Testing not found.");
    }

    @Test(priority = 8, description = "Data Science / AI related courses should be present")
    public void tc08_aiOrDataSciencePresent() {
        coursesPage.openCoursesPage(COURSES_URL);

        boolean found = coursesPage.hasCourseNamedLike(
                "data science",
                "datascienceai",
                "artificial intelligence",
                "machine learning",
                "ai"
        );

        System.out.println("AI / Data Science found: " + found);
        Assert.assertTrue(found, "AI / Data Science related course text not found.");
    }

    @Test(priority = 9, description = "Web / Full Stack related courses should be present")
    public void tc09_webOrFullStackPresent() {
        coursesPage.openCoursesPage(COURSES_URL);

        boolean found = coursesPage.hasCourseNamedLike(
                "full stack",
                "fullstack",
                "web",
                "html",
                "react",
                "javascript",
                "developement",
                "development"
        );

        System.out.println("Web / Full Stack found: " + found);
        Assert.assertTrue(found, "Web / Full Stack related course text not found.");
    }

    @Test(priority = 10, description = "First course link should open detail page")
    public void tc10_firstCourseLinkNavigation() {
        coursesPage.openCoursesPage(COURSES_URL);

        String before = coursesPage.getCurrentUrl();
        boolean clicked = coursesPage.clickFirstCourseLink();
        String after = coursesPage.getCurrentUrl();

        System.out.println("Before URL: " + before);
        System.out.println("After URL : " + after);
        System.out.println("Clicked   : " + clicked);

        Assert.assertTrue(clicked, "No clickable course link found.");
        Assert.assertNotEquals(after, before, "Course click did not navigate.");
    }

    @Test(priority = 11, description = "Images should have src")
    public void tc11_imagesValid() {
        coursesPage.openCoursesPage(COURSES_URL);

        int total = coursesPage.countImagesWithSrc();
        int broken = coursesPage.countBrokenImagesByEmptySrc();

        System.out.println("Images with src: " + total);
        System.out.println("Broken images  : " + broken);

        Assert.assertTrue(total > 0, "No images found.");
        Assert.assertEquals(broken, 0, "Some images have empty src.");
    }

    @Test(priority = 12, description = "Links should be available")
    public void tc12_validLinksPresent() {
        coursesPage.openCoursesPage(COURSES_URL);

        int validLinks = coursesPage.countValidLinks();
        System.out.println("Valid links count: " + validLinks);

        Assert.assertTrue(validLinks >= 10, "Too few valid links: " + validLinks);
    }

    @Test(priority = 13, description = "Footer should be visible")
    public void tc13_footerVisible() {
        coursesPage.openCoursesPage(COURSES_URL);
        utils.scrollToBottom();
        utils.sleep(700);

        boolean footerVisible = coursesPage.isFooterVisible();
        System.out.println("Footer visible: " + footerVisible);

        Assert.assertTrue(footerVisible, "Footer not visible.");
    }

    @Test(priority = 14, description = "Enquiry form should exist")
    public void tc14_formExists() {
        coursesPage.openCoursesPage(COURSES_URL);

        boolean hasForm = coursesPage.hasForm();
        System.out.println("Form exists: " + hasForm);

        Assert.assertTrue(hasForm, "Enquiry form not found.");
    }

    @Test(priority = 15, description = "Empty form submit should show validation")
    public void tc15_emptyFormValidation() {
        coursesPage.openCoursesPage(COURSES_URL);
        Assert.assertTrue(coursesPage.hasForm(), "Form not present.");

        coursesPage.scrollToForm();
        coursesPage.clearFormFields();
        coursesPage.submitForm();

        boolean html5 = coursesPage.hasHtml5ValidationErrors();
        List<String> errors = coursesPage.getVisibleValidationMessages();

        System.out.println("HTML5 validation: " + html5);
        System.out.println("Visible validation errors: " + errors);

        Assert.assertTrue(html5 || !errors.isEmpty(),
                "Empty form submit did not show validation.");
    }

    @Test(priority = 16, description = "Invalid email should be blocked")
    public void tc16_invalidEmailValidation() {
        coursesPage.openCoursesPage(COURSES_URL);
        Assert.assertTrue(coursesPage.hasForm(), "Form not present.");

        coursesPage.scrollToForm();
        int filled = coursesPage.fillEnquiryForm(
                "Test User",
                "invalid-email",
                "9876543210",
                "Interested in Selenium course"
        );

        System.out.println("Filled field count: " + filled);
        Assert.assertTrue(filled >= 3, "Could not fill enough fields.");

        coursesPage.submitForm();

        boolean html5 = coursesPage.hasHtml5ValidationErrors();
        List<String> errors = coursesPage.getVisibleValidationMessages();

        System.out.println("HTML5 validation: " + html5);
        System.out.println("Visible validation errors: " + errors);

        Assert.assertTrue(html5 || !errors.isEmpty(),
                "Invalid email was not blocked.");
    }

    @Test(priority = 17, description = "Valid form should submit")
    public void tc17_validFormSubmit() {
        coursesPage.openCoursesPage(COURSES_URL);
        Assert.assertTrue(coursesPage.hasForm(), "Form not present.");

        coursesPage.scrollToForm();
        int filled = coursesPage.fillEnquiryForm(
                "Arjun Patel",
                "arjun.patel@gmail.com",
                "9876543210",
                "I am interested in Selenium Automation Testing. Please share fees and schedule."
        );

        System.out.println("Filled field count: " + filled);
        Assert.assertTrue(filled >= 4, "Could not fill all fields.");

        String before = coursesPage.getCurrentUrl();
        coursesPage.submitForm();
        utils.sleep(2000);
        String after = coursesPage.getCurrentUrl();

        List<String> errors = coursesPage.getVisibleValidationMessages();
        boolean success = coursesPage.isSuccessVisible();

        System.out.println("Before URL      : " + before);
        System.out.println("After URL       : " + after);
        System.out.println("Errors          : " + errors);
        System.out.println("Success visible : " + success);

        Assert.assertTrue(errors.isEmpty(), "Valid data produced validation errors: " + errors);
        Assert.assertTrue(success || !after.equals(before),
                "Valid submit had no visible success and no navigation.");
    }

    @Test(priority = 18, description = "Page should scroll")
    public void tc18_scrollWorks() {
        coursesPage.openCoursesPage(COURSES_URL);

        long pageHeight = utils.getPageHeight();
        System.out.println("Page height: " + pageHeight);
        Assert.assertTrue(pageHeight > 500, "Page height too small.");

        utils.scrollToBottom();
        utils.sleep(700);

        long scrollPos = utils.getScrollPosition();
        System.out.println("Scroll position: " + scrollPos);
        Assert.assertTrue(scrollPos > 0, "Scroll position did not change.");
    }

    @Test(priority = 19, description = "Deep audit: print every main visible element group")
    public void tc19_fullPageAudit() {
        coursesPage.openCoursesPage(COURSES_URL);
        coursesPage.printFullPageAudit();

        Assert.assertTrue(true, "Audit completed.");
    }

    @Test(priority = 20, description = "Page load should be under 10 seconds")
    public void tc20_pageLoadTime() {
        long start = System.currentTimeMillis();
        coursesPage.openCoursesPage(COURSES_URL);
        long duration = System.currentTimeMillis() - start;

        System.out.println("Courses page load time: " + duration + " ms");
        Assert.assertTrue(duration < 10000,
                "Courses page took too long to load: " + duration + " ms");
    }
}