@wip
Feature: Information Views
  As a site visitor
  I want information about Xipcraft
  So that I may work with them in the future
  
  @javascript
  Scenario Outline: Page Navigation
    When I go to the Xipcraft <page> URL
    Then I the page title should be <title>
      And I should see the headline <headline>, <subheadline> and <nav options>
      
    Examples: 
  
  Scenario: Values Page
  Scenario: Products Page
  Scenario: Team Page
  Scenario: Contact Page
    