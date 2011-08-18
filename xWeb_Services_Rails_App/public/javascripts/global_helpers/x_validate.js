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
        }else if(/[! # : ; , $ % * \/ ? ^ ' {}\[\]< > ()]+/.test(domainPart)){   //? ^ ` { | } () < > \[ \]]
           result_hash.result = false;
           result_hash.error = "domain part contaning invalid special character";
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


       //&& (/[a-z0-9]+/.test(domainPart))
        if(/[A-Za-z0-9! # $ % * \/ ? ^ ` { | }]+/.test(localPart)){
          result_hash.result = true;
          result_hash.processed_value = email_id_to_validate;
        }
      return result_hash;
    }

  
  

}