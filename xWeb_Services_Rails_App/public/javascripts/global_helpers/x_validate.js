var xValidate = {
   
  email:function(email_id_to_validate){
   
        var result_hash = {};
        email_id_to_validate = xHelper.stripStartEndSpaces(email_id_to_validate);
        
        //validates length
        if(email_id_to_validate.length < 6){
          result_hash.result = false;
          result_hash.error = "too short (min 6)";
          return result_hash;
        }else if (email_id_to_validate.length > 318) {
          result_hash.result = false;
          result_hash.error = "too long (max 318)";
          return result_hash;
        }
        
       //validates @ char
        var noOfChars = email_id_to_validate.split("@").length-1;
        
        if(noOfChars == 0){
          result_hash.result = false;
          result_hash.error = "should contain only one @";
          return result_hash;
        
        }else if(noOfChars >1){
          result_hash.result = false;
          result_hash.error = "should not contain more then one @";
          return result_hash;
        }
        //validates spaces
        noOfChars = email_id_to_validate.split(" ").length-1;
        if(noOfChars > 0){
          result_hash.result = false;
          result_hash.error = "should not contain space characters";
          return result_hash;
        }

        //validate local part  
        var localPart =  email_id_to_validate.split("@")[0];
        if(localPart.length < 1){
          result_hash.result = false;
          result_hash.error = "local part too short (min 1)";
          return result_hash;
        }else if (localPart.length > 64) {
          result_hash.result = false;
          result_hash.error = "local part too long (max 64)";
          return result_hash;
        }else if(/\.\./.test(localPart)){
          result_hash.result = false;
          result_hash.error = "local part contaning . operator two or more times consecutively";
          return result_hash;
        }else if(localPart.charAt(0)== '.'){
          result_hash.result = false;
          result_hash.error = "local part contaning . operator at first place";
          return result_hash;
        }else if(localPart.charAt(localPart.length-1)== '.'){
          result_hash.result = false;
          result_hash.error = "local part contaning . operator at last place";
          return result_hash;
        }
        var invalidChars = "()[]\;:,<>\"";
          for(var i=0;i<localPart.length;i++){
            if (invalidChars.indexOf(localPart.charAt(i)) != -1){          
              result_hash.result = false;
              result_hash.error = "local part contains invalid special characters";
              return result_hash;
          }
            
        }

        //validate domain part  
        var domainPart =  email_id_to_validate.split("@")[1];
        if(domainPart.length-1 > 253){
          result_hash.result = false;
          result_hash.error = "domain part too long (max 253)";
          return result_hash;
        }else if(/[!#:;,$%*\/?^'{}\[\]< >()]+/.test(domainPart)){   //? ^ ` { | } () < > \[ \]]
           result_hash.result = false;
           result_hash.error = "domain part contaning invalid special character";
           return result_hash;
        }else if(/[A-Z]/.test(domainPart)){   
           result_hash.result = false;
           result_hash.error = "domain part should not contain upper case character";
           return result_hash;
        }else if(domainPart.charAt(0)== '-'){
          result_hash.result = false;
          result_hash.error = "domain part should not start with character -";
          return result_hash;
        }else if(domainPart.charAt(domainPart.length-1)== '-'){
          result_hash.result = false;
          result_hash.error = "domain part should not end with character -";
          return result_hash;
        }else if(domainPart.indexOf('.')== -1){
          result_hash.result = false;
          result_hash.error = "domain part must contain . character";
          return result_hash;
        }

        if((/[A-Za-z0-9!#$%*\/?^`{|}]+/.test(localPart)) 
                    && (/[a-z]+/.test(domainPart))
                    && (/[0-9]*/.test(domainPart))
                    && (/[.]+/.test(domainPart))
                    && (/[-]*/.test(domainPart))){
          result_hash.result = true;
          result_hash.processed_value = email_id_to_validate;
        }
        return result_hash;
    },
    
    name:function(name_to_validate) {
      var result_hash = {};
      name_to_validate = xHelper.stripStartEndSpaces(name_to_validate);
      if(name_to_validate.length < 1){
          result_hash.result = false;
          result_hash.error = "too short";
          return result_hash;
      }else if(name_to_validate.length > 64){
          result_hash.result = false;
          result_hash.error = "should be maximum 64 characters";
          return result_hash;
          
      }else if(/[0-9]+/.test(name_to_validate)){
          result_hash.result = false;
          result_hash.error = "should not contain numbers";
          return result_hash;
      }else if(/[!#$%*\/?^`,-_.{|}]+/.test(name_to_validate)){
          result_hash.result = false;
          result_hash.error = "should not contain non-alpha characters";
          return result_hash; 
      }else if(/[a-zA-Z\s]+/.test(name_to_validate)){
          result_hash.result = true;
          result_hash.processed_value = name_to_validate;
          return result_hash; 
      }  
      return result_hash;
    },
    cellNumber:function(cell_number_to_validate){
      result_hash = {};
      cell_number_to_validate = xHelper.stripStartEndSpaces(cell_number_to_validate);
      cell_number_to_validate = cell_number_to_validate.replace(/-/gi,"");
      cell_number_to_validate = cell_number_to_validate.replace(/,/gi,"");
      cell_number_to_validate = cell_number_to_validate.replace(/\[/gi,"");
      cell_number_to_validate = cell_number_to_validate.replace(/\]/gi,"");
      cell_number_to_validate = cell_number_to_validate.replace(/\(/gi,"");
      cell_number_to_validate = cell_number_to_validate.replace(/\)/gi,"");
      cell_number_to_validate = cell_number_to_validate.replace(/\s/gi,"");

      if(cell_number_to_validate.length < 10){
          result_hash.result = false;
          result_hash.error = "should be minimum 10 numbers";
          return result_hash;
      } else if(cell_number_to_validate.length > 10){
          result_hash.result = false;
          result_hash.error = "should be maximum 10 numbers";
          return result_hash;
      }else if(/[a-zA-Z]+/.test(cell_number_to_validate)){
          result_hash.result = false;
          result_hash.error = "should not contain letters";
          return result_hash; 
      }else if(/[! + # $ % * \/ ? ^ ` , \- _ . { | } \s]+/.test(cell_number_to_validate)){
          result_hash.result = false;
          result_hash.error = "should not contain non-alpha characters";
          return result_hash; 
      }else if(/[0-9]+/.test(cell_number_to_validate)){
          result_hash.result = true;
          result_hash.processed_value = cell_number_to_validate;
          return result_hash; 
      }
    },
    landlineNumber:function(landline_number_to_validate){
      return xValidate.cellNumber(landline_number_to_validate)
    },
    creditCardNumber:function(card_type,card_number){
      var result_hash = {};
      if(card_type != "VISA" && card_type != "MASTERCARD"){
          result_hash.result = false;
          result_hash.error = "invalid card type";
          return result_hash;
      }else if(/[a-zA-Z!;:\"+#$%*\/?^`,\-_.{|}\s]+/.test(card_number)){
          result_hash.result = false;
          result_hash.error = "should contain only numbers";
          return result_hash; 
      }
      if(card_type == 'VISA'){
        if(card_number.length < 13 || card_number.length > 16) {
          result_hash.result = false;
          result_hash.error = "should be minimum 13 and maximum 16 digits";
          return result_hash;  
        }else if(card_number.charAt(0) != "4"){
          result_hash.result = false;
          result_hash.error = "number should start with 4";
          return result_hash;  
        }else if(/[4-9]+/.test(card_number)){
          result_hash.result = true;
          result_hash.processed_value = card_number;
          return result_hash;    
        } 
      }
      return result_hash;
      
    },
    request:function(request_to_validate) {
      var result_hash = {};
      request_to_validate =  xHelper.stripStartEndSpaces(request_to_validate);
      if(request_to_validate.length < 1){
        result_hash.result = false;
        result_hash.error = "should not be empty";
        return result_hash;  
      
      }else if (/[=!<>\/]+/.test(request_to_validate)){
        result_hash.result = false;
        result_hash.error = "should not contain characters like =!<>/";
        return result_hash;  
        
      }else if(/[a-zA-Z]+/.test(request_to_validate)){
        result_hash.result = true;
        result_hash.processed_value = request_to_validate;
        return result_hash;
      }
      return result_hash;
    }
}