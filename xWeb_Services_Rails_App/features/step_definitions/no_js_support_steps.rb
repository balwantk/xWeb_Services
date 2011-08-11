Given /^JS is off$/ do
  Capybara.current_driver = :rack_test
end

When /^i go to Xipcraft's home page$/ do
  visit("/")
  page.should have_content('You found Xipcraft!')
end

Then /^I should be told that I need JS to view the fill site$/ do
  page.should have_content("We're sorry but we'll need JavaScript to load up the full site.")
end

Then /^I should be given some essential information that i may be looking for anyways$/ do
  page.should have_content("Anyways, we've got a collection of information below that you may find useful.")
end

Then /^I should be advised to upgrade by browser or turn JS on\.$/ do
  page.should have_content("We strongly recommend upgrading to a modern browser or turning JavaScript on and reloading the page.")
end

Then /^I should see some relevant information that I could use anyways$/ do
  page.should have_content("About Xipcraft")
  page.should have_content("Contact")
  page.should have_content("Products")
  page.should have_content("Values")
  page.should have_content("Team")
end


