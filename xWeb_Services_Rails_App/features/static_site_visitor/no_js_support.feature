Feature: No JS support
  As a site visitor
  I want to see most of the information when I visit with a non-JS browser
  So that I know that i've not been forgotten
  
  Scenario: Content with JS off..
    Given JS is off
    When i go to Xipcraft's home page
    Then I should see the title as "You found Xipcraft!"
      And I should see the main callout as "We create simple, beautiful web apps that make life easier.".
      And I should see the sub-callout as "We're passionate about technology, communication and user experience. We work on the web to fulfill this purpose.".
      And I should see the following page navigation:
        |<li><span><a href="#produce">Product</a></span></li>|
        |<li><a href="#team">Team</a></li>|
        |<li><a href="#contact">Contact</a></li>|
        |<li><a href="jobs">Jobs</a></li>|
      And I should see the copyright notice as "© Xipcraft Systems Pvt. Ltd.".
  
  Scenario: no-js class applied on html tag
    Given JS is off
    When I go to Xipcraft's home page
    Then The html tag should HAVE a class of "no-js"
  

  