describe("Global validator function that returns true/string/object on successful validation or false on failure", function() {
  
  it("should be defined", function(){
    expect(xValidate).toBeDefined();
  });
   
  describe("Email validation", function() {
    
    it("should be defined", function () {
      
      expect(xValidate.email).toBeDefined();
  
    });
    it("should not allow empty string", function () {
      
      expect(xValidate.email("")).toEqual({"result":false,"error":"too short (min 6)"});
  
    });  
    it("should allow starting and ending space characters and return validated/processed value", function() {
      expect(xValidate.email(" a@xipcraft.com ")).toEqual( {"result":true,"processed_value":"a@xipcraft.com"})
      expect(xValidate.email("   a@xipcraft.com  ")).toEqual( {"result":true,"processed_value":"a@xipcraft.com"})
      expect(xValidate.email(" a@xipcraft.com")).toEqual( {"result":true,"processed_value":"a@xipcraft.com"})
      expect(xValidate.email("a@xipcraft.com ")).toEqual( {"result":true,"processed_value":"a@xipcraft.com"})
                      
    });
    it("should be minimum 6 characters length", function() {
      expect(xValidate.email('a@b.i')).toEqual( {"result":false,"error":"too short (min 6)"})
    
    });
    
    it("should be maximum 318 characters length", function() {
       var emailid = "aaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhzza@xipcraft.com";  
       expect(xValidate.email(emailid)).toEqual({"result":false,"error":"too long (max 318)"})  
    });
    
    it("should have only one @ character", function() {
      expect(xValidate.email("axipcraft.com")).toEqual( {"result":false,"error":"should contain only one @"})
      expect(xValidate.email("a@bt@xipcraft.com")).toEqual( {"result":false,"error":"should not contain more then one @"}) 
      expect(xValidate.email("a@@xip@craft.com")).toEqual( {"result":false,"error":"should not contain more then one @"})
      expect(xValidate.email("a@@xipc.raft@com")).toEqual( {"result":false,"error":"should not contain more then one @"})
      
    });
    
    it("should not allow space characters between any part of the email address", function() {
        expect(xValidate.email("a b@xipcraft.com")).toEqual({"result":false,"error":"should not contain space characters"})
        expect(xValidate.email("ab bt@x ipcraft.com")).toEqual({"result":false,"error":"should not contain space characters"})
          
    });
    
    it("should allow valid email address", function() {
       expect(xValidate.email('hiphop.faker@xipcraft.com')).toEqual( {"result":true,"processed_value":"hiphop.faker@xipcraft.com"})
    });
    
   
    
    describe("Email local-part validation", function() {
      it("should be minimum 1 character long", function() {
      
          expect(xValidate.email("@xipcraft.com")).toEqual({"result":false,"error":"local part too short (min 1)"})
      });
      
      it("should be maximum 64 characters long", function() {
      
          var emailid ="aaaaaabbbbbbbbbbccccccccccccccccccdddddddddddddddddddddddddddddeeeeeeeeee@xipcraft.com"
          expect(xValidate.email(emailid)).toEqual({"result":false,"error":"local part too long (max 64)"})
      });
      
      
      it("should not have '.' character two or more times consecutively", function() {
        expect(xValidate.email("a..b@xipcraft.com")).toEqual({"result":false,"error":"local part contaning . operator two or more times consecutively"})
        expect(xValidate.email("a........b@xipcraft.com")).toEqual({"result":false,"error":"local part contaning . operator two or more times consecutively"})
      });
      
      it("should not have  '.' as a first and last character ", function() {
        expect(xValidate.email(".a@xipcraft.com")).toEqual({"result":false,"error":"local part contaning . operator at first place"})
        expect(xValidate.email("a.@xipcraft.com")).toEqual({"result":false,"error":"local part contaning . operator at last place"})
        
      });
        
      it("should contain any of [a-z] to [A-Z] characters to [0-9] numbers", function() {
        expect(xValidate.email("afggfhjghfz@xipcraft.co.in")).toEqual({"result":true,"processed_value":"afggfhjghfz@xipcraft.co.in"})
        expect(xValidate.email("AGDFGDGDZ@xipcraft.in")).toEqual({"result":true,"processed_value":"AGDFGDGDZ@xipcraft.in"})
        expect(xValidate.email("0978989839@xipcraft.com")).toEqual({"result":true,"processed_value":"0978989839@xipcraft.com"})
        expect(xValidate.email("afsfzsafAWERWERZ05649@admin.xipcraft.com")).toEqual({"result":true,"processed_value":"afsfzsafAWERWERZ05649@admin.xipcraft.com"})
      });
      
      it("should not contain ()[]\;:,<>\" and space special characters", function() {
        expect(xValidate.email("a[b]c@xipcraft.com")).toEqual({"result":false,"error":"local part contains invalid special characters"})
        expect(xValidate.email("a(b)c@xipcraft.com")).toEqual({"result":false,"error":"local part contains invalid special characters"})
        expect(xValidate.email("a;bc@xipcraft.com")).toEqual({"result":false,"error":"local part contains invalid special characters"})
        expect(xValidate.email("a:bc@xipcraft.com")).toEqual({"result":false,"error":"local part contains invalid special characters"})
        expect(xValidate.email("a<b>c@xipcraft.com")).toEqual({"result":false,"error":"local part contains invalid special characters"})
        expect(xValidate.email("a(b)c[d]e\f;g:h,i<j>k\"@xipcraft.com")).toEqual({"result":false,"error":"local part contains invalid special characters"})
      });
      it("should allow ! # $ % * / ? ^ ` { | } ~ special characters", function() {
  
        expect(xValidate.email("a!b#c$d%e*f/g?h^i`j{1|2}3~4@xipcraft.com")).toEqual({"result":true,"processed_value":"a!b#c$d%e*f/g?h^i`j{1|2}3~4@xipcraft.com"})
      });
    });
    
    
    describe("Email domain-part validation", function() {
        
        
        it("should be maximum 253 characters long", function() {
           
            var emailId = "a@xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiipppppppppppppppppppppppppppppppppppppppppppppppppppcccccccccccccccccccccccccccccrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffftttttttttttttttttt.com"
            expect(xValidate.email(emailId)).toEqual({"result":false,"error":"domain part too long (max 253)"})
        });
        
        
        it("should not start and end with '-' character", function() {
          expect(xValidate.email("a@-xipcraft.com")).toEqual({"result":false,"error":"domain part should not start with character -"})
          expect(xValidate.email("a@xipcraft.com-")).toEqual({"result":false,"error":"domain part should not end with character -"})
    
        });
        
        it("should contain at least one  '.' operator as a seperator for domain name and textual portion", function() {
          expect(xValidate.email("a@xipcraftcom")).toEqual({"result":false,"error":"domain part must contain . character"})
        });
        it("should not contain ! # : ; , $ % * \/ ? ^ ` { | } ()[]\;:,<>\" and space special characters", function() {

          expect(xValidate.email("a@xipc:raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc;raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc,raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc$raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc%raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc*raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc/raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc?raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc^raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc'raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc{raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipcr}aft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc[raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipcr]aft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc(raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipcr)aft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipc<raft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@xipcr>aft.com")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
          expect(xValidate.email("a@^x/{i}[p](c)<r>a*f:t%;.c$om")).toEqual({"result":false,"error":"domain part contaning invalid special character"})
        });
        
        it("should contain any of [a-z] and . and - characters and [0-9] numbers", function() {
          expect(xValidate.email("a@XipCraft09.com")).toEqual({"result":false,"error":"domain part should not contain upper case character"})
          expect(xValidate.email("a@xipcraf-t09.com")).toEqual({"result":true,"processed_value":"a@xipcraf-t09.com"})
          expect(xValidate.email("a@xipcraf.t09.com")).toEqual({"result":true,"processed_value":"a@xipcraf.t09.com"})
        });
        
    });
  
  });
  //TODO:space stripping in all 
  //Name maxlenght should be 64
  //spaces in between allowed in name
  describe("First and Last name validation", function() {
    
    it("should be defined", function () {
      
      expect(xValidate.name).toBeDefined();
  
    });
    it("should not allow empty name", function() {
      expect(xValidate.name("")).toEqual({"result":false,"error":"too short"});
    });
    
    it("should allow starting and ending space characters and return validated/processed value", function() {
        expect(xValidate.name(" xipcraft ")).toEqual({"result":true,"processed_value":"xipcraft"});
        expect(xValidate.name("  xipcraft")).toEqual({"result":true,"processed_value":"xipcraft"});
        expect(xValidate.name("xipcraft  ")).toEqual({"result":true,"processed_value":"xipcraft"});
    });     
    it("should allow maximum 64 characters", function() {
        expect(xValidate.name("aaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbbbbbbbcccccccccczzzzzzzzzz")).toEqual({"result":false,"error":"should be maximum 64 characters"});
    });
    it("should not allow numbers", function() {
       expect(xValidate.name("abc12d453ef")).toEqual({"result":false,"error":"should not contain numbers"});
    });
    it("should not allow special characters", function() { //- & '' allowed
       expect(xValidate.name("a_b-c,e. f")).toEqual({"result":false,"error":"should not contain non-alpha characters"});
    });
    it("should allow only characters [a-zA-Z\s]", function() {
       expect(xValidate.name("xipcraft")).toEqual({"result":true,"processed_value":"xipcraft"});
       expect(xValidate.name("xip craft")).toEqual({"result":true,"processed_value":"xip craft"});
    });
    
  });
  
  
  describe("Cell number validation", function() {
    
    it("should be defined", function () {
      expect(xValidate.cellNumber).toBeDefined();
  
    });
     
    it("should strip  -, spaces and []()", function () {
      expect(xValidate.cellNumber("  123,456,7891")).toEqual({"result":true,"processed_value":"1234567891"});
      expect(xValidate.cellNumber("123,456,7891 ")).toEqual({"result":true,"processed_value":"1234567891"});
      expect(xValidate.cellNumber("1-234567-891")).toEqual({"result":true,"processed_value":"1234567891"});
      expect(xValidate.cellNumber("123,456,7891")).toEqual({"result":true,"processed_value":"1234567891"});
      expect(xValidate.cellNumber("123 456 7891")).toEqual({"result":true,"processed_value":"1234567891"});
      expect(xValidate.cellNumber("123[456]7891")).toEqual({"result":true,"processed_value":"1234567891"});
      expect(xValidate.cellNumber("123(456)7891")).toEqual({"result":true,"processed_value":"1234567891"});
    });
    
    it("should be minimum and maximum 10  numbers", function () {
      expect(xValidate.cellNumber("123456789")).toEqual({"result":false,"error":"should be minimum 10 numbers"});
      expect(xValidate.cellNumber("1111123456789")).toEqual({"result":false,"error":"should be maximum 10 numbers"});
      expect(xValidate.cellNumber("1123456789")).toEqual({"result":true,"processed_value":"1123456789"});
    });
    
    it("should not allow characters", function () {
      expect(xValidate.cellNumber("a123456789")).toEqual({"result":false,"error":"should not contain letters"});
  
    });
    /*it("should not allow special characters", function () {
      expect(xValidate.cellNumber("1-23456789")).toEqual({"result":false,"error":"should not contain non-alpha characters"});
      expect(xValidate.cellNumber("+123456789")).toEqual({"result":false,"error":"should not contain non-alpha characters"});
  
  });*/
    it("should allow only numbers", function () {
      expect(xValidate.cellNumber("1234567899")).toEqual({"result":true,"processed_value":"1234567899"});
    });
      
  });
  
  describe("Request  validation", function() {
    it("should be defined", function() {
      expect(xValidate.request).toBeDefined();
    });
    it("should not be an empty request", function () {
        expect(xValidate.request("")).toEqual({"result":false,"error":"should not be empty"});
          
    });
    it("should allow starting and ending space characters and return validated/processed value", function() {
        expect(xValidate.request("   hi, this is a request.")).toEqual({"result":true,"processed_value":"hi, this is a request."});
        expect(xValidate.request("   hi, this is a request.    ")).toEqual({"result":true,"processed_value":"hi, this is a request."});
        expect(xValidate.request("hi, this is a request.    ")).toEqual({"result":true,"processed_value":"hi, this is a request."});
    });
    it("should not allow = ! < > / characters", function () {
        expect(xValidate.request("hi, this is a request about  <html>")).toEqual({"result":false,"error":"should not contain characters like =!<>/"});
        expect(xValidate.request("hi, this is a request about where != sql")).toEqual({"result":false,"error":"should not contain characters like =!<>/"});
        expect(xValidate.request("hi, this is a request about the date 19/02/2011.")).toEqual({"result":false,"error":"should not contain characters like =!<>/"});  
    });
    it("should allow [a-bA-B0-9.,'-_] characters", function () {
        expect(xValidate.request("hi, this is a request.")).toEqual({"result":true,"processed_value":"hi, this is a request."});
        expect(xValidate.request("hi, this is a request's about this and that.")).toEqual({"result":true,"processed_value":"hi, this is a request's about this and that."});  
        expect(xValidate.request("hi, this is a request about the date 19-02-2011.")).toEqual({"result":true,"processed_value":"hi, this is a request about the date 19-02-2011."});  
        expect(xValidate.request("hi, this_is a request about the date 19-02-2011.")).toEqual({"result":true,"processed_value":"hi, this_is a request about the date 19-02-2011."});  
    });
  });
  
  /*describe("Landline number validation", function() {
    it("should be defined", function () {
      expect(xValidate.landlineNumber).toBeDefined();
  
    });
    it("should be minimum and maximum 10  numbers", function () {
      expect(xValidate.landlineNumber("202605259")).toEqual({"result":false,"error":"should be minimum 10 numbers"});
      expect(xValidate.landlineNumber("000202605259")).toEqual({"result":false,"error":"should be maximum 10 numbers"});
      expect(xValidate.landlineNumber("2026052591")).toEqual({"result":true,"processed_value":"2026052591"});
    });
    
    it("should not allow characters", function () {
      expect(xValidate.landlineNumber("a123456789")).toEqual({"result":false,"error":"should not contain letters"});
  
    });
    it("should not allow special characters", function () {
      expect(xValidate.landlineNumber("2-02605259")).toEqual({"result":false,"error":"should not contain non-alpha characters"});
      expect(xValidate.landlineNumber("+202605259")).toEqual({"result":false,"error":"should not contain non-alpha characters"});
  
    });
    it("should allow only numbers", function () {
      expect(xValidate.landlineNumber("2026052599")).toEqual({"result":true,"processed_value":"2026052599"});
    });
      
  });*/
      
  
  //TODO: ref - http://www.beachnet.com/~hstiles/cardtype.html
  /*describe("Credit card validation", function() {
    
    describe ("VISA card validation", function() {
        
        it("should be defined", function () {
          expect(xValidate.creditCardNumber).toBeDefined();
      
        });
        it("should allow only numbers", function () {
          expect(xValidate.creditCardNumber("VISA","42A345678B982a29")).toEqual({"result":false,"error":"should contain only numbers"});
          expect(xValidate.creditCardNumber("VISA","42;3:3+4{5}67898229")).toEqual({"result":false,"error":"should contain only numbers"});
        });
        it("should allow correct card type", function () {
          expect(xValidate.creditCardNumber("InvalidType","4234567898229")).toEqual({"result":false,"error":"invalid card type"});
          expect(xValidate.creditCardNumber("visa","4234567898229")).toEqual({"result":false,"error":"invalid card type"});
          expect(xValidate.creditCardNumber("VISA","4234567898221")).toEqual({"result":true,"processed_value":"4234567898221"});
        });
        it("should validate number prefix", function () {
          expect(xValidate.creditCardNumber("VISA","2234567898224")).toEqual({"result":false,"error":"number should start with 4"});
          expect(xValidate.creditCardNumber("VISA","1234567898224")).toEqual({"result":false,"error":"number should start with 4"});
          
        });
        it("should validate length", function () {
          expect(xValidate.creditCardNumber("VISA","")).toEqual({"result":false,"error":"should be minimum 13 and maximum 16 digits"});
          expect(xValidate.creditCardNumber("VISA","423456789822")).toEqual({"result":false,"error":"should be minimum 13 and maximum 16 digits"});
          expect(xValidate.creditCardNumber("VISA","423456789822123456")).toEqual({"result":false,"error":"should be minimum 13 and maximum 16 digits"});
        });
        it("should allow correct card type and number", function () {
          expect(xValidate.creditCardNumber("VISA","4234567898221")).toEqual({"result":true,"processed_value":"4234567898221"});
          
        });
        
    });
    describe ("MASTERCARD card validation", function() {
    
    });
    });*/
  
  
  /*
  it("should validate addresses", function() {
    
    });*/
    
});