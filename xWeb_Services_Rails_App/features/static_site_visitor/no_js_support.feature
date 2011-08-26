Feature: No JS support
  As a site visitor
  I want to see most of the information when I visit with a non-JS browser
  So that I know that i've not been forgotten
  
  Scenario: Content with JS off..
    Given JS is off
    When i go to Xipcraft's home page
        """
          <title>You Found Xipcraft</title>
          <meta name="description" content="We create simple, beautiful web apps that make life easier.">
        """
      And I should see the main callout as "We create simple, beautiful web apps that make life easier.".
      And I should see the sub-callout as "We're passionate about technology, communication and user experience. We look to the web to fulfill this purpose.".
      And I should see the following page navigation:
        """
          <nav class="main">
            <ul>
              <li><span><a href="#produce">Product</a></span></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="jobs">Jobs</a></li>
            </ul>
          </nav>
        """
      And I should see the copyright notice as "<strong>&copy; Xipcraft Systems Pvt. Ltd.</strong>".

  Scenario Outline: Other Views
    Given JS is off
      And that i am on Xipcraft's home page
    When I navigate to Xipcraft's <this_page>
    Then I should see <information_about_the_page>
      And I should see a link to go back to the home page
      And I should see the copyright notice as "<strong>&copy; Xipcraft Systems Pvt. Ltd.</strong>".

    Examples: 
    |this_page  | information_about_the_page                         |
    |"#home"    |"Customer care should be easy."                     |
    |"#team"    |"We share a passion for writing excellent software."|
    |"#contact" |"info at xipcraft dot com"                          |
  