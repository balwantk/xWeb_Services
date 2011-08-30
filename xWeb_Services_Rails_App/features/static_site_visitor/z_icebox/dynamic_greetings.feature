@wip
Feature: Dynamic greetings
  As a site visitor
  I want to be greeted sweetly
  So that I have a nice day!
  
  @javascript @wip
  Scenario Outline: Time based greetings
    Given that it is between <start_time> and <end_time>
    When I go to Xipcraft's home page
    Then I should see <greeting>
    
    Examples: 
    | start_time | end_time | greeting |
    | "4am" | "12pm" | "Good morning, Welcome to Xipcraft." |
    | "12pm" | "4pm" | "Good afternoon, Welcome to Xipcraft." |
    | "4pm" | "11pm" | "Good evening, Welcome to Xipcraft." |
    | "11pm" | "4am" | "Welcome to Xipcraft." |