Feature: No JS support
  As a site visitor
  I want to see some information when I visit with a non-JS browser
  So that I know that i've not been forgotten
  
  
  Scenario: Content with JS off..
    Given JS is off
    When i go to Xipcraft's home page
    Then I should see all the information that I need to without requiring JS
