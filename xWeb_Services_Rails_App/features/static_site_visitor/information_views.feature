Feature: Information Views
  As a site visitor
  I want information about Xipcraft
  So that I may work with them in the future
  
  @javascript
  Scenario: Landing View
    When I go to Xipcraft's home page
    Then I should see the following markup:
        """
          <title>You Found Xipcraft</title>
          <meta name="description" content="We create simple, beautiful web apps that make life easier.">
        """
      And I should see the main callout as "We create simple, beautiful web apps that make life easier.".
      And I should see the sub-callout as "We're passionate about technology, communication and user experience. We look to the web to fulfill this purpose.".
      And I should see the following page navigation:
      
      # Note that the with JS navigation has the href="#links" stripped and replaced with href="#" for carousels.
      # This is to prevent the default auto navigation that occurs when using # hrefs
      # The default navigation messes with the position: relative that is used as a reference for all animations.
      
      """
        <nav class="main">
          <ul>
            <li><span><a href="#">Product</a></span></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="jobs">Jobs</a></li>
          </ul>
        </nav>
      """
      And I should see the copyright notice as "<strong>&copy; Xipcraft Systems Pvt. Ltd.</strong>".
  
  @javascript
  Scenario: Correct carousel style on JS applied
  # TODO
  
  @javascript
  Scenario: no-js class removed from html tag
    When I go to Xipcraft's home page
    Then The html tag should NOT HAVE a class of "no-js"
  
  @javascript
  Scenario Outline:  Content of Other Views
    Given that i am on Xipcraft's home page
    When I navigate to Xipcraft's <page_path>
    Then I should see <information_about_the_page>
    And I should see a link to go back to the home page
    And I should see the copyright notice as "<strong>&copy; Xipcraft Systems Pvt. Ltd.</strong>".
  
    Examples: 
    |page_path  | information_about_the_page                         |
    |"#home"    |"Customer care should be easy."                     |
    |"#team"    |"We share a passion for writing excellent software."|
    |"#contact" |"info at xipcraft dot com"                          |

    

    