package runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        plugin = {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
        features = "src/test/resources/features",
        glue = {"stepDefinitions"},
        tags = "@spotify",
        monochrome = true
)
public class TestRunner extends AbstractTestNGCucumberTests {
}
