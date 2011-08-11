require 'yaml'
class SubAppGenerator < Rails::Generators::Base
  source_root File.expand_path('../templates', __FILE__)
  argument :sub_app_name, :type => :string, :default => "application"
 
    def generate_sub_app
    
      
      empty_directory "app/views/#{file_name}"
      empty_directory "public/images/#{file_name}/embed"
      
      create_file "app/views/layouts/#{file_name}.html.erb"
      create_file "app/stylesheets/#{file_name}/main.scss"
      create_file "app/javascripts/view_controllers/#{file_name}_view_controller.js"
      create_file "app/javascripts/view_helpers/#{file_name}_view_helper.js"
      create_file "app/javascripts/routers/#{file_name}_router.js"
      create_file "app/javascripts/sub_apps/#{file_name}_sub_app.js"
      
      create_file "spec/javascripts/view_controllers/#{file_name}_view_controller_spec.js"
      create_file "spec/javascripts/view_helpers/#{file_name}_view_helper_spec.js"
      create_file "spec/javascripts/routers/#{file_name}_router_spec.js"
      create_file "spec/javascripts/sub_apps/#{file_name}_sub_app_spec.js"
      
      
     
      
    end
    
    def file_name  
      sub_app_name.underscore  
    end
    
    
    
end
