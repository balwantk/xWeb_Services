Feature: Information Views
  As a site visitor
  I want information about Xipcraft
  So that I may work with them in the future
  
  @javascript
  Scenario Outline: Content and Navigation
    When I go to Xipcraft's <page_path>
    Then I should see <title>,<cta1>, <cta2>
      And I should see the copyright notice.
      
    Examples: 
      | page_path | title | cta1 | cta2 |
      | home page | "You found Xipcraft!" | "Products" | "Contact" |
      | hash home page | "You found Xipcraft!" | "Products" | "Contact" |
      | values page | "You found Xipcraft!" | "Our Products" | "Back" |
      | products page | "You found Xipcraft!" | "The Team" | "Thanks for visiting" |
      | team page | "You found Xipcraft!" | "The Team" | "Thanks for visiting" |
      | contact page | "You found Xipcraft!" | "The Team" | "Thanks for visiting" |
      
  
    

    

    