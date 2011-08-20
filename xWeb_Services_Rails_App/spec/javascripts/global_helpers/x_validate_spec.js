describe("Global validator function that returns true/string/object on successful validation or false on failure", function() {
  
  it("should be defined", function(){
    expect(xValidate).toBeDefined();
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
  describe("First and Last name validation", function() {
    
    it("should be defined", function () {
      
      expect(xValidate.name).toBeDefined();
  
    });
    it("should not allow empty name", function() {
      expect(xValidate.name("")).toEqual({"result":false,"error":"too short"});
    });
    it("should not allow numbers", function() {
       expect(xValidate.name("abc12d453ef")).toEqual({"result":false,"error":"should not contain numbers"});
    });
    it("should not allow special characters", function() {
       expect(xValidate.name("a_b-c,e. f")).toEqual({"result":false,"error":"should not contain non-alpha characters"});
    });
    it("should allow only characters [a-zA-Z]", function() {
       expect(xValidate.name("xipcraft")).toEqual({"result":true,"processed_value":"xipcraft"});
    });
    
  });
  
  describe("Cell number validation", function() {
    it("should be defined", function () {
      expect(xValidate.cellNumber).toBeDefined();
  
    });
    it("should be minimum and maximum 10  numbers", function () {
      expect(xValidate.cellNumber("123456789")).toEqual({"result":false,"error":"should be minimum 10 numbers"});
      expect(xValidate.cellNumber("1111123456789")).toEqual({"result":false,"error":"should be maximum 10 numbers"});
      expect(xValidate.cellNumber("1123456789")).toEqual({"result":true,"processed_value":"1123456789"});
    });
    
    it("should not allow characters", function () {
      expect(xValidate.cellNumber("a123456789")).toEqual({"result":false,"error":"should not contain letters"});
  
    });
    it("should not allow special characters", function () {
      expect(xValidate.cellNumber("1-23456789")).toEqual({"result":false,"error":"should not contain non-alpha characters"});
      expect(xValidate.cellNumber("+123456789")).toEqual({"result":false,"error":"should not contain non-alpha characters"});
  
    });
    it("should allow only numbers", function () {
      expect(xValidate.cellNumber("1234567899")).toEqual({"result":true,"processed_value":"1234567899"});
    });
      
  });
  
  describe("Landline number validation", function() {
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
      
  });
  
  it("should validate requests", function() {
    
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