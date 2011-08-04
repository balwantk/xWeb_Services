# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
XWebServicesRailsApp::Application.initialize!

Sass::Plugin.options[:style] = :compact
Sass::Plugin.options[:syntax] = :scss
Sass::Plugin.options[:template_location] = './app'
Sass::Plugin.options[:css_location] = './public/bin'

puts "SASS SETTINGS DONE!!!! \n:D:D:D:D:D"