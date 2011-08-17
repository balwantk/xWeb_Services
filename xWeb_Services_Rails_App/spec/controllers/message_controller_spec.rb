require 'spec_helper'

describe MessageController do

  describe "creating message" do
    it "should parse the message hash and extract its component"
    
    it "should create message model"
    
    it "should send ack to message BB model on successful create"
    
    it "should send error with details to message BB model on any failure"
    
    describe "mailer control" do
      it "should extract current message and inject into message queue array"
        
      it "should extract other failed messages and inject into message queue array"
      
      describe "mail queue loop" do
        it "should extract each message from message queue array"
        
        describe "sending mails" do
          it "should send email to info@xipcraft.com"
          it "should delete message on successful send"
          it "should retry 5 times , once every minute, on failure"
          it "should mark the message as failed after failing all retries"
        end
        
      end
      
    end
        
  end 
end
