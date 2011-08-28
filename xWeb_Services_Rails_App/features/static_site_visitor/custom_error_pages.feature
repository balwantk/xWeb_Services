@wip
Feature: Error pages
  As a site visitor on 
  I want to be greeted gently
  So that I feel that the guys at xipcraft know what they're doing
  
  Scenario: Visiting a non existent page 
    When I visit a non-existent page
    Then I should get a "404" Status
      And I should be told that "We can't find the page that you are looking for..."
      And I should see "Are you sure it exists?"
      And I should see "Can we help?" 
      And I should see a link to "Contact us"
    
  Scenario: Internal server error
    When The page I visit triggers a server error
    Then I should get a "500" Status
      And I should be told that "Oops, looks like something went wrong here!"
      And I should see "We are looking into the matter."
      And I should see "Can we help?" 
      And I should see a link to "Contact us"

  Scenario: Rejected request
    When The page I visit is not authorized for access
    Then I should get a "422" Status
      And I should be told that "Sorry, I don't think we can do that for you..."
      And I should see "Can we help?" 
      And I should see a link to "Contact us"