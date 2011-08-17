describe("Global validator function that returns true/string/object on successful validation or false on failure", function() {
  
  it("should be defined", function(){
    expect(xValidate).toBeDefined();
  });
  
  describe("Email validation", function() {
     
    it("should be defined", function () {
      
      expect(xValidate.email).toBeDefined();
  
    });
    /* The local-part of an email address may be up to 64 characters long and 
    # the domain name may have a maximum of 253 characters
    
    # Valid characters that can be used in a local-partr 
    # Uppercase and lowercase English letters (a–z, A–Z)
    # Digits 0 to 9

    # Character . (dot, period, full stop) provided that it is not the first or last character,
    # and provided also that it does not appear two or more times consecutively (e.g. John..Doe@example.com).

    
    # Valid characters that can be used in a domain name are:
    # a-z
    # 0-9
    # - but not as a starting or ending character
    # . as a separator for the textual portions of a domain name
    # standards-permissible characters: ! # $ % * / ? ^ ` { | } ~
    */
    
    it("should allow valid email address", function() {
      // Input of "hiphop.faker@xipcraft.com" should return {"result":true}
      
    });
    it("should be minimum 6 characters length", function() {
      
      // Input of "a@b.i" should return  {{"result":false},{"error":"too short"})
      
    
    });
    it("should be maximum 318 characters length", function() {
       // Input of "aaaaaaaaaaa..a@xipcraft.com" should return  {{"result":false},{"error":"too long"})
    
    });
    
    it("should have only one @ character", function() {
       // Input of "a@bt@xipcraft.com" should return  {{"result":false},{"error":"invalid format"})    
       // Input of "a@@xipcraft.com" should return  {{"result":false},{"error":"invalid format"})    
       // Input of "a@@xipc.raft@com" should return  {{"result":false},{"error":"invalid format"})    
       // Input of "axipcraft.com" should return  {{"result":false},{"error":"invalid format"})    
    });
    
    it("should allow starting and ending space characters", function() {
      // Input of " ab@bt@xipcraft.com " should return  {"result":true}
      // Input of "  ab@bt@xipcraft.com  " should return  {"result":true}
      // Input of " ab@bt@xipcraft.com" should return  {"result":true}
      // Input of "ab@bt@xipcraft.com " should return  {"result":true}
                      
    });
    
    it("should not allow space characters between any part of the email address", function() {
        // Input of "a b@bt@xipcraft.com" should return  {{"result":false},{"error":"local part contaning space characters"})    
        // Input of "ab@bt@x ipcraft.com" should return  {{"result":false},{"error":"domain part contaning space characters"})    
      
    });
    
    describe("Email local-part validation", function() {
      
      it("should be maximum 64 characters long", function() {
          // Input of "aaa...aaa@@xipcraft.com" should return  {{"result":false},{"error":"local part too long"})    
      });
      it("should be minimum 1 character long", function() {
          // Input of "@xipcraft.com" should return  {{"result":false},{"error":"local part too short"})    
      });
      
      it("should not have '.' character two or more times consecutively", function() {
         // Input of "a..b@xipcraft.com" should return  {{"result":false},{"error":"local part contaning . operator two or more times consecutively"})  
         // Input of "a.....b@xipcraft.com" should return  {{"result":false},{"error":"local part contaning . operator two or more times consecutively"})        
      });
      
      it("should not have  '.' as a first and last character ", function() {
        // Input of "a.@xipcraft.com" should return  {{"result":false},{"error":"local part contaning . operator two or more times consecutively"})        
        // Input of ".a@xipcraft.com" should return  {{"result":false},{"error":"local part contaning . operator two or more times consecutively"})        
    
      });
        
      it("should contain any of [a-z] to [A-Z] characters to [0-9] numbers", function() {
        // Input of "a..z@xipcraft.com" should return  {"result":true}
        // Input of "A..Z@xipcraft.com" should return  {"result":true}
        // Input of "0..9@xipcraft.com" should return  {"result":true}
        // Input of "a..z..A..Z..0..9@xipcraft.com" should return  {"result":true}
      });
      
      it("should not contain ()[]\;:,<>\" and space special characters", function() {
        // Input of a[b]c@xipcraft.com" should return  {{"result":false},{"error":"local part invalid special characters"}}
        // Input of a(b)c@xipcraft.com" should return  {{"result":false},{"error":"local part invalid special characters"}}
        // Input of a\bc@xipcraft.com" should return  {{"result":false},{"error":"local part invalid special characters"}}
        // Input of a;bc@xipcraft.com" should return  {{"result":false},{"error":"local part invalid special characters"}}
        // Input of a:bc@xipcraft.com" should return  {{"result":false},{"error":"local part invalid special characters"}}
        // Input of a<b>c@xipcraft.com" should return  {{"result":false},{"error":"local part invalid special characters"}}
        // Input of a(b)c[d]e\f;g:h,i<j>k "@xipcraft.com" should return  {{"result":false},{"error":"local part invalid special characters"}}
      });
      it("should allow ! # $ % * / ? ^ ` { | } ~ special characters", function() {
        // Input of a!b#c$d%e*f/g?h^i`j{1|2}3~4@xipcraft.com" should return  {"result":true}
      });
    });
    
    
    describe("Email domain-part validation", function() {
        
        it("should be maximum 253 characters long", function() {
            // Input of "a@xxxxx...ipcraft.com" should return  {{"result":false},{"error":"domain part too long"}}    
        });
        
        
        it("should not start with '-' character", function() {
          // Input of "a@-xipcraft.com" should return  {{"result":false},{"error":"domain part starting with invalid character"}}    
    
        });
        
        it("should not end with '-' character", function() {
          // Input of "a@xipcraft.com-" should return  {{"result":false},{"error":"domain part ending with invalid character"}}    
    
        });
        
        it("should contain at least one  '.' operator as a seperator for domain name and textual portion", function() {
          // Input of "a@xipcraftcom" should return  {{"result":false},{"error":"domain part not containing . operater"}}    
        });
        
        it("should contain any of [a-z] characters and [0-9] numbers", function() {
          // Input of "a@xipcraft09.com" should return  {"result":true}  
          // Input of "a@xipcraf-t09.com" should return  {"result":true}  
          // Input of "a@xipc:raft.com" should return  {{"result":false},{"error":"domain part contaning invalid special character"})  
          // Input of "a@xipc;raft.com" should return  {{"result":false},{"error":"domain part contaning invalid special character"})  
          // Input of "a@xipc<raft.com" should return  {{"result":false},{"error":"domain part contaning invalid special character"})  
        });
        
    });
  
 
  
  it("should validate names or fields like company", function() {
    
  });
  
  
  it("should validate requests", function() {
    
  });
  
  it("should validate cell numbers", function() {
    
  });
  
  it("should validate landline numbers", function() {
    
  });
  
  it("should validate addresses", function() {
    /*
      TODO 
    */
  });
  
  it("should validate credit card numbers", function() {
    /*
      TODO 
    */
  });
});