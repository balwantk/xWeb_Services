@wip
Feature: Contact form
  As a site visitor
  I want to get in touch with Xipcraft
  So that they can help me out with my query
  
  Scenario: Getting in touch with drag and drop giving part details
    Given that I am on Xipcraft's contact page
      And i fill the details
      And i request to fill in more details 
      And i cancel request to fill in more details # Testing the show hide of the extra forms and submitter..
    When I drag and drop the submitter
    Then I should be shown an acknowledgement
      And The site should ask me"Where to next?"
      And I should see the links "Home", "Values", "Products", "Team"
  
  Scenario: Getting in touch with drag and drop giving full details
    Given that I am on Xipcraft's contact page
      And i fill in all the details
      And i fill in more details
    When I drag and drop the submitter
    Then I should be shown an acknowledgement
      And The site should ask me"Where to next?"
      And I should see the links "Home", "Values", "Products", "Team"

  Scenario: Getting in touch with captcha
    Given that I am on the contact page
      And i fill the details
      And i request to fill in more details
    When I choose to click via captcha
    Then I should be shown the captcha message  
    
 # TODO: Need to figure out how to test captcha send