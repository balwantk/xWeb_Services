Given /^JS is off$/ do
  Capybara.current_driver = :rack_test
end

When /^i go to Xipcraft's home page$/ do
  visit("/");
end

Then /^I should see the title as "([^"]*)"$/ do |title|
  page.should have_content(title);
end

Then /^I should see the main callout as "([^"]*)"\.$/ do |headline|
  page.should have_content(headline);
end

Then /^I should see the sub\-callout as "([^"]*)"\.$/ do |sub_headline|
  page.should have_content(sub_headline);
end

Then /^I should see the following page navigation:$/ do |table|
  # table is a Cucumber::Ast::Table
  links = table.raw
  links.flatten!
  links.each do |nav_list_items|
    page.html.should match nav_list_items
  end
end

Then /^I should see the copyright notice as "([^"]*)"\.$/ do |copyright_notice|
  page.should have_content(copyright_notice);
end

Then /^The html tag should HAVE a class of "([^"]*)"$/ do |no_js_class|
  selector = "html."+no_js_class
  page.should have_selector(''+selector)
end
