package com.vellinfotech.base;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.ITestResult;
import org.testng.annotations.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 *   BaseTest.java  (v2 — WITH SCREENSHOT + BUG REPORT ON FAILURE)
 *   PACKAGE : com.vellinfotech.base
 *
 *   PURPOSE:
 *   Every test class extends this. Driver lifecycle (setup/teardown)
 *   lives here — never repeat it in individual test classes.
 *
 *   ON EVERY TEST FAILURE (automatic via @AfterMethod):
 *   ────────────────────────────────────────────────────────────────
 *   1. Screenshot → SeleniumFrameWork/screenshots/<tcName>_<timestamp>.png
 *   2. Bug report → SeleniumFrameWork/bug-reports/<tcName>_<timestamp>.txt
 *
 *   Bug report contains:
 *   - Test class + method name
 *   - Timestamp
 *   - Current page URL
 *   - Error message + full stack trace
 *   - Screenshot file path
 *   - Page title at time of failure
 *
 *   FOLDER STRUCTURE (auto-created if missing):
 *   SeleniumFrameWork/
 *   ├── screenshots/      ← PNG files saved here
 *   └── bug-reports/      ← TXT files saved here
 * ╚══════════════════════════════════════════════════════════════════╝
 */
public class BaseTest {

    // ── Shared fields — available to every extending test class ──
    protected WebDriver          driver;
    protected WebDriverWait      wait;
    protected JavascriptExecutor js;
    protected Actions            actions;

    protected static final String BASE_URL  = "https://www.vellinfotech.com/";
    protected static final int    WAIT_SECS = 20;

    // ── Output folder paths (relative to Eclipse project root) ──
    private static final String SCREENSHOT_DIR = "screenshots";
    private static final String BUGREPORT_DIR  = "bug-reports";

    // ── Date format for file names: yyyyMMdd_HHmmss ──
    private static final SimpleDateFormat DATE_FMT =
        new SimpleDateFormat("yyyyMMdd_HHmmss");

    // ═══════════════════════════════════════════════════════════
    //  SETUP
    // ═══════════════════════════════════════════════════════════

    @BeforeClass
    public void setUp() {
        System.out.println("\n╔══════════════════════════════════════════╗");
        System.out.println("  SETUP : " + this.getClass().getSimpleName());
        System.out.println("╚══════════════════════════════════════════╝");

        // ── Ensure output folders exist ──
        createFolderIfMissing(SCREENSHOT_DIR);
        createFolderIfMissing(BUGREPORT_DIR);

        WebDriverManager.chromedriver().setup();

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-popup-blocking");

        driver  = new ChromeDriver(options);
        wait    = new WebDriverWait(driver, Duration.ofSeconds(WAIT_SECS));
        js      = (JavascriptExecutor) driver;
        actions = new Actions(driver);

        driver.get(BASE_URL);
        System.out.println("  Browser launched → " + BASE_URL);
        System.out.println("  Screenshots folder : " + new File(SCREENSHOT_DIR).getAbsolutePath());
        System.out.println("  Bug reports folder : " + new File(BUGREPORT_DIR).getAbsolutePath());
    }

    // ═══════════════════════════════════════════════════════════
    //  TEARDOWN
    // ═══════════════════════════════════════════════════════════

    @AfterClass
    public void tearDown() {
        System.out.println("\n╔══════════════════════════════════════════╗");
        System.out.println("  TEARDOWN : " + this.getClass().getSimpleName());
        System.out.println("╚══════════════════════════════════════════╝");
        if (driver != null) driver.quit();
        System.out.println("  Browser closed.");
    }

    // ═══════════════════════════════════════════════════════════
    //  AFTER EACH TEST — SCREENSHOT + BUG REPORT ON FAILURE
    // ═══════════════════════════════════════════════════════════

    /**
     * Runs automatically after EVERY test method.
     *
     * If the test PASSED  → prints a clean PASS line.
     * If the test FAILED  → captures screenshot + writes bug report,
     *                       prints paths to console so you can find them.
     */
    @AfterMethod
    public void afterEachTest(ITestResult result) {
        String methodName = result.getMethod().getMethodName();
        String testDesc   = result.getMethod().getDescription();

        if (result.getStatus() == ITestResult.FAILURE) {
            // ── Test FAILED ──
            System.out.println("\n=====================================");
            System.out.println("FAILED TEST : " + methodName);
            System.out.println("DESC        : " + testDesc);
            System.out.println("CLASS       : " + result.getTestClass().getName());

            String timestamp   = DATE_FMT.format(new Date());
            String safeMethod  = methodName.replaceAll("[^a-zA-Z0-9_]", "_");
            String fileBase    = safeMethod + "_" + timestamp;

            // ── 1. Take Screenshot ──
            String screenshotPath = captureScreenshot(fileBase);

            // ── 2. Write Bug Report ──
            String bugReportPath = writeBugReport(result, fileBase, screenshotPath);

            System.out.println("SCREENSHOT  : " + screenshotPath);
            System.out.println("BUG REPORT  : " + bugReportPath);
            System.out.println("=====================================\n");

        } else if (result.getStatus() == ITestResult.SUCCESS) {
            // ── Test PASSED ──
            System.out.println("  ✔ PASSED → " + methodName +
                (testDesc != null && !testDesc.isEmpty() ? " | " + testDesc : ""));
            System.out.println("  ─────────────────────────────────────");

        } else if (result.getStatus() == ITestResult.SKIP) {
            System.out.println("  ⟳ SKIPPED → " + methodName);
        }
    }

    // ═══════════════════════════════════════════════════════════
    //  SCREENSHOT CAPTURE
    // ═══════════════════════════════════════════════════════════

    /**
     * Takes a full-page screenshot and saves it to the screenshots/ folder.
     *
     * @param fileBase  base filename without extension (e.g. "tc01_HomepageLoads_20260310_120741")
     * @return          absolute path of the saved screenshot, or error message if failed
     */
    protected String captureScreenshot(String fileBase) {
        String filePath = SCREENSHOT_DIR + File.separator + fileBase + ".png";
        try {
            File src  = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            File dest = new File(filePath);
            Files.copy(src.toPath(), dest.toPath(), StandardCopyOption.REPLACE_EXISTING);
            System.out.println("Screenshot saved at: " + dest.getAbsolutePath());
            return dest.getAbsolutePath();
        } catch (Exception e) {
            String errMsg = "Screenshot FAILED: " + e.getMessage();
            System.out.println("⚠ " + errMsg);
            return errMsg;
        }
    }

    /**
     * Convenience method — takes a screenshot with a custom label.
     * Call this from within any test when you want a mid-test snapshot.
     *
     * Usage:  takeScreenshot("tc03_afterSubmit");
     */
    protected String takeScreenshot(String label) {
        String timestamp = DATE_FMT.format(new Date());
        String fileBase  = label.replaceAll("[^a-zA-Z0-9_]", "_") + "_" + timestamp;
        return captureScreenshot(fileBase);
    }

    // ═══════════════════════════════════════════════════════════
    //  BUG REPORT WRITER
    // ═══════════════════════════════════════════════════════════

    /**
     * Writes a detailed plain-text bug report when a test fails.
     *
     * Report includes:
     *   - Test method name and description
     *   - Timestamp of failure
     *   - URL of the page at time of failure
     *   - Page title
     *   - Full error message
     *   - Full stack trace
     *   - Path to the screenshot
     *
     * @param result         TestNG result object (has method info + throwable)
     * @param fileBase       base filename without extension
     * @param screenshotPath path to the screenshot file (already saved)
     * @return               absolute path of the bug report, or error message if failed
     */
    private String writeBugReport(ITestResult result,
                                  String fileBase,
                                  String screenshotPath) {
        String filePath = BUGREPORT_DIR + File.separator + fileBase + ".txt";
        File   file     = new File(filePath);

        try (FileWriter fw = new FileWriter(file)) {

            String timestamp   = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
            String methodName  = result.getMethod().getMethodName();
            String testDesc    = result.getMethod().getDescription();
            String className   = result.getTestClass().getName();
            String currentUrl  = "";
            String pageTitle   = "";

            // Safely get URL and title — driver may be in bad state on failure
            try { currentUrl = driver.getCurrentUrl(); } catch (Exception ignored) {}
            try { pageTitle  = driver.getTitle();       } catch (Exception ignored) {}

            Throwable cause = result.getThrowable();
            String errorMsg = cause != null ? cause.getMessage() : "No error message";

            // ── Build bug report content ──
            fw.write("╔══════════════════════════════════════════════════════════════╗\n");
            fw.write("  BUG REPORT — VellInfoTech Automation\n");
            fw.write("╚══════════════════════════════════════════════════════════════╝\n\n");

            fw.write("TIMESTAMP      : " + timestamp     + "\n");
            fw.write("TEST CLASS     : " + className     + "\n");
            fw.write("TEST METHOD    : " + methodName    + "\n");
            fw.write("DESCRIPTION    : " + testDesc      + "\n");
            fw.write("CURRENT URL    : " + currentUrl    + "\n");
            fw.write("PAGE TITLE     : " + pageTitle     + "\n");
            fw.write("SCREENSHOT     : " + screenshotPath + "\n\n");

            fw.write("─────────────────────────────────────────────────────────────\n");
            fw.write("ERROR MESSAGE\n");
            fw.write("─────────────────────────────────────────────────────────────\n");
            fw.write(errorMsg + "\n\n");

            fw.write("─────────────────────────────────────────────────────────────\n");
            fw.write("FULL STACK TRACE\n");
            fw.write("─────────────────────────────────────────────────────────────\n");
            if (cause != null) {
                fw.write(cause.toString() + "\n");
                for (StackTraceElement el : cause.getStackTrace()) {
                    fw.write("    at " + el.toString() + "\n");
                }
            } else {
                fw.write("No stack trace available.\n");
            }

            fw.write("\n─────────────────────────────────────────────────────────────\n");
            fw.write("SUGGESTED FIX CHECKLIST\n");
            fw.write("─────────────────────────────────────────────────────────────\n");
            fw.write("[ ] Check if the element selector is still valid on the live site\n");
            fw.write("[ ] Check if the page URL changed (site may have been updated)\n");
            fw.write("[ ] Check if a sticky header is intercepting clicks\n");
            fw.write("[ ] Check if the form field names/placeholders changed\n");
            fw.write("[ ] Increase wait time if element was not yet loaded\n");
            fw.write("[ ] Check screenshot — it shows the browser state at time of failure\n");

            System.out.println("Bug report saved at: " + file.getAbsolutePath());
            return file.getAbsolutePath();

        } catch (IOException e) {
            String errMsg = "Bug report FAILED to write: " + e.getMessage();
            System.out.println("⚠ " + errMsg);
            return errMsg;
        }
    }

    // ═══════════════════════════════════════════════════════════
    //  FOLDER CREATION
    // ═══════════════════════════════════════════════════════════

    private void createFolderIfMissing(String folderName) {
        File folder = new File(folderName);
        if (!folder.exists()) {
            boolean created = folder.mkdirs();
            System.out.println("  Created folder: " + folder.getAbsolutePath()
                + (created ? " ✔" : " ✗ (failed — check permissions)"));
        }
    }
}