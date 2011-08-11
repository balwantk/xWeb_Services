Feature: No JS support
  As a site visitor
  I want to see information when I visit with a non-JS browser
  So that I know that i've not been forgotten
  
  
  Scenario: Basic support with noscript tags
    Given JS is off
    When i go to Xipcraft's home page
    Then I should be told that I need JS to view the fill site
      And I should be given some essential information that i may be looking for anyways
      And I should be advised to upgrade by browser or turn JS on.
        
  @wip
  Scenario: Noscript content
    Given JS is off
    When i go to Xipcraft's home page
    Then I should see some relevant information that I could use anyways