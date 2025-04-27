package stepDefinitions;

import com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter;
import io.cucumber.java.After;
import static api.Utils.requestResponseLogs;

public class Hooks {

    @After
    public void afterScenario() {
        // Log API request and response details into the Extent Report for the current test step
        ExtentCucumberAdapter.addTestStepLog(requestResponseLogs.toString());
    }
}
