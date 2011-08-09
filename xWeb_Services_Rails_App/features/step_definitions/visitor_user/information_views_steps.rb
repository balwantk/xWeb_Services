Then /^I should see a page title "([^"]*)"$/ do |page_title|
  page.should have_content(arg1)
end

Then /^I should see the headline "([^"]*)"$/ do |page_headline|
  pending # express the regexp above with the code you wish you had
end

Then /^I should see the sub headline "([^"]*)"$/ do |page_sub_headline|
  pending # express the regexp above with the code you wish you had
end

Then /^I should see navigation options to "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/ do |arg1, arg2, arg3, arg4|
  pending # express the regexp above with the code you wish you had
end


