require 'spec_helper'

describe Message do
  
  describe "validations" do

    
    it "should escape html and validate" do
      
    end
    it "should escape SQL and validate" do
      
    
    end  
    
    it "should validate each value of the message hash and pass error with details of failure to controller" do
      
      # inputs to method create (
        # {request => request_value}
        # {email => email_value}
        # {first_name => first_name_value}
        # {last_name => last_name_value}
        # {cell_number => cell_number_value}
        # {company_name => company_name_value})
      
      # output for -
      # valid hash email and request only , should be valid
      # blank hash , should throw Exception "No data to save"
      # valid request and invalid email , should throw Exception "invalid email"
      # invalid request and valid email ,should throw Exception "invalid request"
      # valid request,email and rest are blank , should be valid
      # invalid first_name and rest are valid , should throw Exception "Invalid first_name"
      # invalid last_name and rest are valid , should throw Exception "Invalid last_name"
      # invalid cell_number and rest are valid , should throw Exception "Invalid cell_number"
      # invalid company_name and rest are valid , should throw Exception "Invalid company_name"
    
    end
  end
  
end
