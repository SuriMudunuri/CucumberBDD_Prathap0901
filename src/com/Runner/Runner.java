package com.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="Features",
		glue={"com.TestCases"},
		monochrome=true,
		plugin={"html:Summary.html","json:Summary/summary.json"},
		tags={"@MulDataSet"}
		
		
		
				)

public class Runner
{

}
