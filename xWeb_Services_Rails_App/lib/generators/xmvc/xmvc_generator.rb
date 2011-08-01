
class XmvcGenerator < Rails::Generators::Base
  source_root File.expand_path('../templates', __FILE__)
  #argument :new_project_name, :type => :string
  
  
  def generate_xmvc_project
      
      empty_directory "app/sub_apps/"
      empty_directory "app/collections/"
      empty_directory "app/routers/"
      empty_directory "app/styles/"
      empty_directory "public/bin/"
      empty_directory "public/framework/"
      empty_directory "public/images/framework/"
      
      # Add contents from respective templates
      
      create_file "config/assets.yml"
      create_file "public/humans.txt"     
      # Add contents from respective templates
    
      insert_into_file 'Gemfile', "\n"+"gem 'haml'", :after => "gem 'sqlite3'",:force => false 
      insert_into_file 'Gemfile', "\n"+"gem 'sass'", :after => "gem 'haml'",:force => false 
      insert_into_file 'Gemfile', "\n"+"gem 'jammit'", :after => "gem 'sass'",:force => false 
      insert_into_file 'Gemfile', "\n"+"gem 'json'", :after => "gem 'jammit'",:force => false 
      insert_into_file 'Gemfile', "\n"+"gem 'barista'", :after => "gem 'json'",:force => false 
      
      remove_file 'public/stylesheets'
      remove_file 'public/javascripts'
      
      puts "***************************************************************\nNEXT STEPS IN xMVC GENERATION:"
      puts "***************************************************************\n"
      puts "1] Run $> bundle install \n2] Populate assets.yml with the standard jammit settings for xMVC"
      puts "3] Run $> rails g barista:install"
      puts "4] ADD THE FOLLOWING LINES IN THE FILE barista_config.rb: \n\tc.root = Rails.root.join('app')\n\tc.output_root = Rails.root.join('public', 'bin')\n\tc.bare!\n"
      puts "\n"
      puts "5] ADD THE FOLLOWING LINES IN THE FILE (environment.rb): \n\tSass::Plugin.options[:style] = :compact\n\tSass::Plugin.options[:syntax] = :scss\n\tSass::Plugin.options[:template_location] = './app'\n\tSass::Plugin.options[:css_location] = './public/bin'"
      puts "\n"
      puts "6] Add the front end framework files to public/bin"
      puts "7] Be sure to add CSS entries into assets.yml manually."
      puts "8] Ban all spiders via robots.txt!"
      puts "***************************************************************\n"
      
    end
    def file_name  
      #new_project_name.underscore  
    end  
end
