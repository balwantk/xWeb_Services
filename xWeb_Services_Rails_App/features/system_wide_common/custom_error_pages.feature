Feature: Error pages
  As a site visitor 
  I want to be greeted gently if there is an error and be educated
  So that I know what went wrong
  
  Scenario: Visiting a non existent page 
    When I visit a non-existent page
      And I should be told that "Sorry, we can't find the page that you're looking for."
      And I should see "This usually happens when a page you're looking for either does not exist, or has been removed. Where would you like to go from here?"
      And I should see links to the info email address, the home and the jobs page as follows:
        |<li><span><a href="/">Home</a></span></li>|
        |<li><a href="jobs">Jobs</a></li>|
        |<li><a href="mailto:info@xipcraft.com">Contact</a></li>|
      And I should see the copyright notice as "© Xipcraft Systems Pvt. Ltd.".
    
  Scenario: Internal server error
    When The page I visit triggers a server error
      And I should be told that "Oops, looks like something went wrong here!"
      And I should see "We've been notified of the issue and are looking into the matter. If you need help with something, we're happy to help! Just contact us at the link below."
      And I should see links to the info email address, the home and the jobs page as follows:
        |<li><span><a href="/">Home</a></span></li>|
        |<li><a href="jobs">Jobs</a></li>|
        |<li><a href="mailto:info@xipcraft.com">Contact</a></li>|
      And I should see the copyright notice as "© Xipcraft Systems Pvt. Ltd.".
  
  Scenario: Rejected request
    When The page I visit is not authorized for access
      And I should be told that "Sorry, it looks like we can't fulfill that request for you."
      And I should see "It seems that you may not have permission to visit the page you asked for. If you need help with something, we're happy to help! Just contact us at the link below."
      And I should see links to the info email address, the home and the jobs page as follows:
        |<li><span><a href="/">Home</a></span></li>|
        |<li><a href="jobs">Jobs</a></li>|
        |<li><a href="mailto:info@xipcraft.com">Contact</a></li>|
      And I should see the copyright notice as "© Xipcraft Systems Pvt. Ltd.".
