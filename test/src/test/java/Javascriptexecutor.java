import java.time.Duration;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Javascriptexecutor {

    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        try {
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
            driver.get("https://www.facebook.com");

            JavascriptExecutor jse = (JavascriptExecutor) driver;

            jse.executeScript("document.getElementByname('email').value='nivi1234@gmail.com'");
            jse.executeScript("document.getElementByname('pass').value='nivi@1234'");

            // better than sleep: just scroll directly or wait on condition if needed
            jse.executeScript("window.scrollBy(0,500)");
            jse.executeScript("window.scrollBy(0,-500)");

        } finally {
            driver.quit();
        }
    }
}