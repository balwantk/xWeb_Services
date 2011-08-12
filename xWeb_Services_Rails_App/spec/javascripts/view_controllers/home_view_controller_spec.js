describe("ContactViewController", function() {
  
  it("should be instantiated with the correct element", function() {
    
  });
  
  it("Should have the correct template loaded up", function() {
    
  });
  
  it("should be extended with a message object that contains the visitor's form data", function() {
    
  });
  
  
  describe("render function", function() {
    it("should transition out any DOM elements that need to be replaced or hidden", function() {
      
    });
    it("should generate and render DOM elements hidden", function() {
      
    });
    it("should transition in DOM elements", function() {
      
    });
  });
  
  describe("event listeners", function() {
    describe("request fields", function() { 
      it("should call validator on *blur[@bug]* of field with correct arguments", function() {
      
      });
    
      it("it should enter field data into message object if args are valid", function() {
      
      });
      
      it("should display submitter if necessary fields are valid and filled", function() {
        
      });
      
      it("should display option to enter more data if necessary fields are valid and filled", function() {

      });
      
      describe("more data", function() {
       it("should hide the submitter if i choose to fill more data", function() {

        });
        
        it("should display option to not enter more data if the extended form (for more data) is shown", function() {
          
        });
        
        it("should display submitter if i do not want to enter more data", function() {

        });
        
        it("should display submitter if necessary fields are valid and filled", function() {

        });
      });     
    });   
    
    describe("submit data", function() {
      describe("form submit via drag and drop", function() {
        it("should set the attrs of the model with the message object on successful drag and drop", function() {
          
        });
      });

      describe("form submit via captcha", function() {
        it("should set the attrs of the model with the message object on successful captcha submission", function() {
          
        });
      });
       
      it("should call model.save if net connection is active or unknown", function() {
        
      });
      
      
      describe("errors and acknowledements", function() {
        it("should display a net connection outage of connectivity is down for sure", function() {
          
        });      
        
        it("should display interim message to me after retrying without success sending for 5 seconds", function() {
          
        });
        
        it("should display option to keep trying to me after retrying without success sending for 10 seconds", function() {
          
        });
        
        it("should display try later message to me after retrying without success sending for 10 more seconds", function() {
          
        });
        
        it("should give the me an acknowledgement of successful send and render any other text", function() {
          
        });
        
      });
    });    
  });
});