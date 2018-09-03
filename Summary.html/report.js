$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Different.feature");
formatter.feature({
  "line": 1,
  "name": "This feature is designed to validate muultiple sets of data",
  "description": "",
  "id": "this-feature-is-designed-to-validate-muultiple-sets-of-data",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-muultiple-sets-of-data;scenario-description",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@MulDataSet"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "As a user I want to launch \u003cbrowser\u003e browser pass the \u003curl\u003e and maximize it",
  "keyword": "Given "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "this-feature-is-designed-to-validate-muultiple-sets-of-data;scenario-description;",
  "rows": [
    {
      "cells": [
        "browser",
        "url"
      ],
      "line": 9,
      "id": "this-feature-is-designed-to-validate-muultiple-sets-of-data;scenario-description;;1"
    },
    {
      "cells": [
        "firefox",
        "http://demo.nopcommerce.com/"
      ],
      "line": 10,
      "id": "this-feature-is-designed-to-validate-muultiple-sets-of-data;scenario-description;;2"
    },
    {
      "cells": [
        "chrome",
        "http://demo.nopcommerce.com/"
      ],
      "line": 11,
      "id": "this-feature-is-designed-to-validate-muultiple-sets-of-data;scenario-description;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-muultiple-sets-of-data;scenario-description;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@MulDataSet"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "As a user I want to launch firefox browser pass the http://demo.nopcommerce.com/ and maximize it",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 27
    },
    {
      "val": "http://demo.nopcommerce.com/",
      "offset": 52
    }
  ],
  "location": "TC_02_SectionHeader.launchApplication(String,String)"
});
formatter.result({
  "duration": 18646099386,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "scenario description",
  "description": "",
  "id": "this-feature-is-designed-to-validate-muultiple-sets-of-data;scenario-description;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@MulDataSet"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "As a user I want to launch chrome browser pass the http://demo.nopcommerce.com/ and maximize it",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 27
    },
    {
      "val": "http://demo.nopcommerce.com/",
      "offset": 51
    }
  ],
  "location": "TC_02_SectionHeader.launchApplication(String,String)"
});
formatter.result({
  "duration": 57103935,
  "status": "passed"
});
});