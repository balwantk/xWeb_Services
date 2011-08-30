@wip
Feature: Subtle suggestions
  As a site visitor
  I want to see some handy action suggestions
  So that I may find it easier to get what i'm looking for on the site
  
  @javascript @wip
  Scenario Outline: Page wise suggestions
    When I go to Xipcraft's <page_path>
    Then I should see <a_subtle_suggestion>

    Examples: 
      | page_path | a_subtle_suggestion |
      | home page | "We're hiring! Apply here." |
      | hash home page | "We're hiring! Apply here." |
      | values page | "Like what we're doing? spread the love!" |
      | products page | "Want to be updated of product announcements?" |
      | team page | "We're hiring! Apply here." |
      | contact page | "Looking for directions?" |