package com.TestCases;

import org.openqa.selenium.support.PageFactory;

import com.GenericFunctions.GenericFunctions;
import com.ScreenFunctions.RegistrationPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class TC_02_SectionHeader extends GenericFunctions
{

	public static RegistrationPage RegPag ;

@Given("^As a user I want to launch (.*) browser pass the (.*) and maximize it$")
public static void launchApplication(String browser, String url)
{
	System.out.println(browser);	
	boolean status;
	status = launchBrowser(browser,url);
	if(status)
	{
		System.out.println("Browser is launched successfully");
	}
	else
	{
		System.out.println("Browser is not launched successfully");
	}
}

@When("The browser/application is opened, click on register link2")
public static void clickRegistration()
{
	RegPag = PageFactory.initElements(driver, RegistrationPage.class);
	boolean status;
	status = RegPag.clickRegistrationlink();
	if(status)
	{
		System.out.println("Registration clicked");
	}
	else
	{
		System.out.println("Registration Not clicked");
	}
}

}
