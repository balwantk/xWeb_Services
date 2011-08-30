Feature: Information Views
  As a site visitor
  I want information about Xipcraft
  So that I may work with them in the future
  
  @wip
  @javascript
  Scenario: Landing View
  When i go to Xipcraft's home page
  Then I should see the title as "You found Xipcraft!"
    And I should see the main callout as "We create simple, beautiful web apps that make life easier.".
    And I should see the sub-callout as "We're passionate about technology, communication and user experience. We work on the web to fulfill this purpose.".
    And I should see the following page navigation:
    |<li><span><a href="#">Product</a></span></li>|
    |<li><a href="#">Team</a></li>|
    |<li><a href="#">Contact</a></li>|
    |<li><a href="jobs">Jobs</a></li>|
    And I should see the copyright notice as "© Xipcraft Systems Pvt. Ltd.".



    

    