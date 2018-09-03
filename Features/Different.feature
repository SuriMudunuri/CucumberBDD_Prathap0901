Feature: This feature is designed to validate muultiple sets of data 

@MulDataSet 
Scenario Outline: scenario description 

	Given As a user I want to launch <browser> browser pass the <url> and maximize it
	
	Examples: 
		| browser | url | 
		| firefox | http://demo.nopcommerce.com/ | 
		| chrome | http://demo.nopcommerce.com/ | 
		
 