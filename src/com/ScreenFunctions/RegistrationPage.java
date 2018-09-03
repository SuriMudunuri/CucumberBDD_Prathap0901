package com.ScreenFunctions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class RegistrationPage
{
	@FindBy(how=How.XPATH,using="//a[text()='Register']")
	public static WebElement Lnk_Register_Homepage;
	
	
	
	public static boolean clickRegistrationlink()
	{
		boolean status=true;
		try
		{
			if(Lnk_Register_Homepage.isDisplayed())
			{
				Lnk_Register_Homepage.click();
			}
						
		}
		catch(Exception e)
		{
			e.getMessage();
			status=false;
		}
		return status;
	}

}
