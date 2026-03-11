package com.vellinfotech.Utils;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class BugReportUtils {

    public static void saveBugReport(
            String testName,
            String url,
            String expected,
            String actual,
            String screenshotPath,
            String errorMessage) {

        String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String folderPath = System.getProperty("user.dir") + File.separator + "bug-reports";
        String filePath = folderPath + File.separator + testName + "_" + timestamp + ".txt";

        try {
            File folder = new File(folderPath);
            if (!folder.exists()) {
                folder.mkdirs();
            }

            FileWriter writer = new FileWriter(filePath);

            writer.write("BUG REPORT\n");
            writer.write("=====================================\n");
            writer.write("Test Case     : " + testName + "\n");
            writer.write("Date/Time     : " + timestamp + "\n");
            writer.write("URL           : " + url + "\n");
            writer.write("Expected      : " + expected + "\n");
            writer.write("Actual        : " + actual + "\n");
            writer.write("Error Message : " + errorMessage + "\n");
            writer.write("Screenshot    : " + screenshotPath + "\n");

            writer.close();

            System.out.println("Bug report saved at: " + filePath);
        } catch (IOException e) {
            System.out.println("Failed to save bug report: " + e.getMessage());
        }
    }
}
