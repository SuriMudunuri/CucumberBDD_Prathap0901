package com.GenericFunctions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class GenericFunctions
{
	public static WebDriver driver;
		
	public static boolean launchBrowser(String browser, String url)
	{
		boolean status = true;
		try
		{
			switch(browser.toLowerCase())
			{
			case "firefox":
			{
				driver = new FirefoxDriver();
				break;
			}
			case "chrome":
			{
				System.setProperty("webdriver.driver.chrome","D:\\SuriMudunuri\\chromedriver.exe");
				driver = new ChromeDriver();
				break;
			}
			default:
				throw new Exception("message");
			}
			
			driver.get(url);
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);	
		}
		catch(Exception e)
		{
			e.getMessage();
			status=false;
		}	
		return status;
		
	}

}
