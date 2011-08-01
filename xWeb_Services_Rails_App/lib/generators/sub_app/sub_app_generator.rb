require 'yaml'
class SubAppGenerator < Rails::Generators::Base
  source_root File.expand_path('../templates', __FILE__)
  argument :sub_app_name, :type => :string, :default => "application"
 
  def generate_sub_app
    
      empty_directory "app/styles/#{sub_app_name.underscore}"
      empty_directory "app/views/#{sub_app_name.underscore}"
      create_file "app/styles/#{sub_app_name.underscore}/main.scss"
      
      #directory "app/sub_app/#{sub_app_name.underscore}/framework/"
      
      #sub_app_begin.js, collections/, css/, hash_routes.js, models/, 
      #view_control_objects, view_helper_objects, view_templates, sub_app_end.js
      
      create_file "app/view_controllers/#{sub_app_name.underscore}_view_controller.coffee"
      create_file "app/view_helpers/#{sub_app_name.underscore}_view_helper.coffee"
      
    #  empty_directory "public/images/#{sub_app_name.underscore}"
      empty_directory "public/images/#{sub_app_name.underscore}/embed"
      
      create_file "app/routers/#{sub_app_name.underscore}_router.coffee"
      create_file "app/sub_apps/#{sub_app_name.underscore}_sub_app.coffee"
      
      
     # append_sub_app_js_to_assets_yml
      puts "MAKE js and css ENTRIES INTO assets.yml MANUALLY!!!"
      puts "MAKE js and css ENTRIES INTO assets.yml MANUALLY!!!"
      puts "MAKE js and css ENTRIES INTO assets.yml MANUALLY!!!"
      puts "MAKE js and css ENTRIES INTO assets.yml MANUALLY!!!"
      
     # append_sub_app_css_to_assets_yml
      
    end
    
    def file_name  
      sub_app_name.underscore  
    end
    
    private
    def append_sub_app_js_to_assets_yml
      js = ["app/sub_apps/home/bin/view_templates/*.jst",
            "app/sub_apps/home/bin/sub_application.js",
            "app/sub_apps/home/bin/hash_routes.js",
            "app/sub_apps/home/bin/models/*.js",
            "app/sub_apps/home/bin/collections/*.js",
            "app/sub_apps/home/bin/view_controllers/*.js",
            "app/sub_apps/home/bin/view_helpers/*.js"]
      
      assets  = YAML.load_file "config/assets.yml"
      x = assets ["javascripts"]["awesome"]
      size = x.size
      
      #File.open("#{RAILS_ROOT}/lib/generators/sub_app/templates/assets_js.yml").each_line{ |s|
      js.each { |s|
        s["home"] = "#{sub_app_name.underscore}"
        assets ["javascripts"]["awesome"][size] = s.to_str 
        size = size +1
      }
      File.open("#{RAILS_ROOT}/config/assets.yml", 'w') { |f| YAML.dump(assets, f) }
    end
    
     def append_sub_app_css_to_assets_yml
      js = ["app/sub_apps/home/bin/css/main.css"]
      
                                                                                                                                                                                                                                 
      assets  = YAML.load_file "config/assets.yml"
      x = assets ["stylesheets"]["gorgeous"]
      size = x.size
      
      #File.open("#{RAILS_ROOT}/lib/generators/sub_app/templates/assets_js.yml").each_line{ |s|
      js.each { |s|
        s["home"] = "#{sub_app_name.underscore}"
        assets ["stylesheets"]["gorgeous"][size] = s.to_str 
        size = size +1
      }
      File.open("#{RAILS_ROOT}/config/assets.yml", 'w') { |f| YAML.dump(assets, f) }
    end
    
end
