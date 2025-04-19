$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/placeValidatures.feature");
formatter.feature({
  "name": "Validating Place API\u0027s",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if Person is being Successfully added using AddPersonAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddPerson"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Add Person Payload with \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"AddPersonAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "name": "the \"AddPersonAPI\" Call got success with status code \"201\"",
  "keyword": "Then "
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first_name",
        "last_name",
        "id"
      ]
    },
    {
      "cells": [
        "rohan",
        "srivastava",
        "4"
      ]
    },
    {
      "cells": [
        "ocean",
        "srivastava",
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if Person is being Successfully added using AddPersonAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddPerson"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Add Person Payload with \"rohan\" \"srivastava\" \"4\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.add_Person_Payload_with(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.reflection.ReflectionCache\r\n\tat org.codehaus.groovy.runtime.dgmimpl.NumberNumberMetaMethod.\u003cclinit\u003e(NumberNumberMetaMethod.java:33)\r\n\tat java.base/jdk.internal.misc.Unsafe.ensureClassInitialized0(Native Method)\r\n\tat java.base/jdk.internal.misc.Unsafe.ensureClassInitialized(Unsafe.java:1160)\r\n\tat java.base/jdk.internal.reflect.MethodHandleAccessorFactory.ensureClassInitialized(MethodHandleAccessorFactory.java:300)\r\n\tat java.base/jdk.internal.reflect.MethodHandleAccessorFactory.newConstructorAccessor(MethodHandleAccessorFactory.java:103)\r\n\tat java.base/jdk.internal.reflect.ReflectionFactory.newConstructorAccessor(ReflectionFactory.java:200)\r\n\tat java.base/java.lang.reflect.Constructor.acquireConstructorAccessor(Constructor.java:549)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.createMetaMethodFromClass(MetaClassRegistryImpl.java:258)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:111)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:86)\r\n\tat groovy.lang.GroovySystem.\u003cclinit\u003e(GroovySystem.java:36)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.\u003cclinit\u003e(InvokerHelper.java:86)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.createMap(ScriptBytecodeAdapter.java:635)\r\n\tat io.restassured.internal.ResponseParserRegistrar.\u003cinit\u003e(ResponseParserRegistrar.groovy)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:346)\r\n\tat io.restassured.builder.ResponseSpecBuilder.\u003cinit\u003e(ResponseSpecBuilder.java:66)\r\n\tat stepDefinitions.StepDefinition.add_Person_Payload_with(StepDefinition.java:61)\r\n\tat ✽.Add Person Payload with \"rohan\" \"srivastava\" \"4\"(file:src/test/java/features/placeValidatures.feature:13)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7 [in thread \"main\"]\r\n\tat org.codehaus.groovy.vmplugin.VMPluginFactory.\u003cclinit\u003e(VMPluginFactory.java:43)\r\n\tat org.codehaus.groovy.reflection.GroovyClassValueFactory.\u003cclinit\u003e(GroovyClassValueFactory.java:35)\r\n\tat org.codehaus.groovy.reflection.ClassInfo.\u003cclinit\u003e(ClassInfo.java:107)\r\n\tat org.codehaus.groovy.reflection.ReflectionCache.getCachedClass(ReflectionCache.java:95)\r\n\tat org.codehaus.groovy.reflection.ReflectionCache.\u003cclinit\u003e(ReflectionCache.java:39)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.registerMethods(MetaClassRegistryImpl.java:210)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:108)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:86)\r\n\tat groovy.lang.GroovySystem.\u003cclinit\u003e(GroovySystem.java:36)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.\u003cclinit\u003e(InvokerHelper.java:86)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.createMap(ScriptBytecodeAdapter.java:635)\r\n\tat io.restassured.internal.ResponseParserRegistrar.\u003cinit\u003e(ResponseParserRegistrar.groovy)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:346)\r\n\tat io.restassured.builder.ResponseSpecBuilder.\u003cinit\u003e(ResponseSpecBuilder.java:66)\r\n\tat stepDefinitions.StepDefinition.add_Person_Payload_with(StepDefinition.java:61)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user calls \"AddPersonAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the \"AddPersonAPI\" Call got success with status code \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_Call_got_success_with_status_code(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify if Person is being Successfully added using AddPersonAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddPerson"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Add Person Payload with \"ocean\" \"srivastava\" \"5\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.add_Person_Payload_with(String,String,String)"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class io.restassured.RestAssured\r\n\tat io.restassured.builder.ResponseSpecBuilder.\u003cinit\u003e(ResponseSpecBuilder.java:66)\r\n\tat stepDefinitions.StepDefinition.add_Person_Payload_with(StepDefinition.java:61)\r\n\tat ✽.Add Person Payload with \"ocean\" \"srivastava\" \"5\"(file:src/test/java/features/placeValidatures.feature:13)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.reflection.ReflectionCache [in thread \"main\"]\r\n\tat org.codehaus.groovy.runtime.dgmimpl.NumberNumberMetaMethod.\u003cclinit\u003e(NumberNumberMetaMethod.java:33)\r\n\tat java.base/jdk.internal.misc.Unsafe.ensureClassInitialized0(Native Method)\r\n\tat java.base/jdk.internal.misc.Unsafe.ensureClassInitialized(Unsafe.java:1160)\r\n\tat java.base/jdk.internal.reflect.MethodHandleAccessorFactory.ensureClassInitialized(MethodHandleAccessorFactory.java:300)\r\n\tat java.base/jdk.internal.reflect.MethodHandleAccessorFactory.newConstructorAccessor(MethodHandleAccessorFactory.java:103)\r\n\tat java.base/jdk.internal.reflect.ReflectionFactory.newConstructorAccessor(ReflectionFactory.java:200)\r\n\tat java.base/java.lang.reflect.Constructor.acquireConstructorAccessor(Constructor.java:549)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.createMetaMethodFromClass(MetaClassRegistryImpl.java:258)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:111)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:86)\r\n\tat groovy.lang.GroovySystem.\u003cclinit\u003e(GroovySystem.java:36)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.\u003cclinit\u003e(InvokerHelper.java:86)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.createMap(ScriptBytecodeAdapter.java:635)\r\n\tat io.restassured.internal.ResponseParserRegistrar.\u003cinit\u003e(ResponseParserRegistrar.groovy)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:346)\r\n\tat io.restassured.builder.ResponseSpecBuilder.\u003cinit\u003e(ResponseSpecBuilder.java:66)\r\n\tat stepDefinitions.StepDefinition.add_Person_Payload_with(StepDefinition.java:61)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user calls \"AddPersonAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the \"AddPersonAPI\" Call got success with status code \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_Call_got_success_with_status_code(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify if Person is being Successfully get using GetPersonAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPerson"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Get Person Payload with \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"GetSinglePersonAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.step({
  "name": "the \"GetSinglePersonAPI\" Call got success with status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if Person is being Successfully get using GetPersonAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetPerson"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Get Person Payload with \"3\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.get_Person_Payload_with(String)"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class io.restassured.RestAssured\r\n\tat io.restassured.builder.ResponseSpecBuilder.\u003cinit\u003e(ResponseSpecBuilder.java:66)\r\n\tat stepDefinitions.StepDefinition.get_Person_Payload_with(StepDefinition.java:119)\r\n\tat ✽.Get Person Payload with \"3\"(file:src/test/java/features/placeValidatures.feature:28)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.reflection.ReflectionCache [in thread \"main\"]\r\n\tat org.codehaus.groovy.runtime.dgmimpl.NumberNumberMetaMethod.\u003cclinit\u003e(NumberNumberMetaMethod.java:33)\r\n\tat java.base/jdk.internal.misc.Unsafe.ensureClassInitialized0(Native Method)\r\n\tat java.base/jdk.internal.misc.Unsafe.ensureClassInitialized(Unsafe.java:1160)\r\n\tat java.base/jdk.internal.reflect.MethodHandleAccessorFactory.ensureClassInitialized(MethodHandleAccessorFactory.java:300)\r\n\tat java.base/jdk.internal.reflect.MethodHandleAccessorFactory.newConstructorAccessor(MethodHandleAccessorFactory.java:103)\r\n\tat java.base/jdk.internal.reflect.ReflectionFactory.newConstructorAccessor(ReflectionFactory.java:200)\r\n\tat java.base/java.lang.reflect.Constructor.acquireConstructorAccessor(Constructor.java:549)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.createMetaMethodFromClass(MetaClassRegistryImpl.java:258)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:111)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:86)\r\n\tat groovy.lang.GroovySystem.\u003cclinit\u003e(GroovySystem.java:36)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.\u003cclinit\u003e(InvokerHelper.java:86)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.createMap(ScriptBytecodeAdapter.java:635)\r\n\tat io.restassured.internal.ResponseParserRegistrar.\u003cinit\u003e(ResponseParserRegistrar.groovy)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:346)\r\n\tat io.restassured.builder.ResponseSpecBuilder.\u003cinit\u003e(ResponseSpecBuilder.java:66)\r\n\tat stepDefinitions.StepDefinition.add_Person_Payload_with(StepDefinition.java:61)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user calls \"GetSinglePersonAPI\" with \"GET\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_calls_with_http_request(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the \"GetSinglePersonAPI\" Call got success with status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_Call_got_success_with_status_code(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify if Person is being Successfully deleted using DeletePersonAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeletePerson"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Delete Person Payload with \"\u003cid\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"DeletePersonAPI\" with Delete http request for \"\u003cid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the \"DeletePersonAPI\" Call got success with status code \"200\"",
  "keyword": "Then "
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if Person is being Successfully deleted using DeletePersonAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeletePerson"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Delete Person Payload with \"5\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.delete_Person_Payload_with(String)"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class io.restassured.RestAssured\r\n\tat io.restassured.builder.ResponseSpecBuilder.\u003cinit\u003e(ResponseSpecBuilder.java:66)\r\n\tat stepDefinitions.StepDefinition.delete_Person_Payload_with(StepDefinition.java:132)\r\n\tat ✽.Delete Person Payload with \"5\"(file:src/test/java/features/placeValidatures.feature:41)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.reflection.ReflectionCache [in thread \"main\"]\r\n\tat org.codehaus.groovy.runtime.dgmimpl.NumberNumberMetaMethod.\u003cclinit\u003e(NumberNumberMetaMethod.java:33)\r\n\tat java.base/jdk.internal.misc.Unsafe.ensureClassInitialized0(Native Method)\r\n\tat java.base/jdk.internal.misc.Unsafe.ensureClassInitialized(Unsafe.java:1160)\r\n\tat java.base/jdk.internal.reflect.MethodHandleAccessorFactory.ensureClassInitialized(MethodHandleAccessorFactory.java:300)\r\n\tat java.base/jdk.internal.reflect.MethodHandleAccessorFactory.newConstructorAccessor(MethodHandleAccessorFactory.java:103)\r\n\tat java.base/jdk.internal.reflect.ReflectionFactory.newConstructorAccessor(ReflectionFactory.java:200)\r\n\tat java.base/java.lang.reflect.Constructor.acquireConstructorAccessor(Constructor.java:549)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.createMetaMethodFromClass(MetaClassRegistryImpl.java:258)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:111)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:86)\r\n\tat groovy.lang.GroovySystem.\u003cclinit\u003e(GroovySystem.java:36)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.\u003cclinit\u003e(InvokerHelper.java:86)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.createMap(ScriptBytecodeAdapter.java:635)\r\n\tat io.restassured.internal.ResponseParserRegistrar.\u003cinit\u003e(ResponseParserRegistrar.groovy)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:346)\r\n\tat io.restassured.builder.ResponseSpecBuilder.\u003cinit\u003e(ResponseSpecBuilder.java:66)\r\n\tat stepDefinitions.StepDefinition.add_Person_Payload_with(StepDefinition.java:61)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user calls \"DeletePersonAPI\" with Delete http request for \"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_calls_with_Delete_http_request_for(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the \"DeletePersonAPI\" Call got success with status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_Call_got_success_with_status_code(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "status": "skipped"
});
});