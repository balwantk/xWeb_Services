When /^I visit a non\-existent page$/ do
  visit("/404");
end

When /^The page I visit triggers a server error$/ do
  visit("/500");
end

When /^The page I visit is not authorized for access$/ do
  visit("/422");
end

When /^I should be told that "([^"]*)"$/ do |error_notice|
  page.should have_content(error_notice);
end

When /^I should see links to the info email address, the home and the jobs page as follows:$/ do |table|
  # table is a Cucumber::Ast::Table
  links = table.raw
  links.flatten!
  links.each do |nav_list_items|
    page.html.should match nav_list_items
  end
end

