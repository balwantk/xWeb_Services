var xHelp = {
  stripStartEndSpaces:function(str){
    
    var exp = new RegExp(/\s/)
    if(exp.test(str)){
      if(str.charAt(0)==' '){
         //console.log("-"+str);
         str = xHelp.stripStartEndSpaces(str.substring(1,str.length));
      }else if(str[str.length-1]==' '){
         //console.log(str+"-");  
         str = xHelp.stripStartEndSpaces(str.substring(0,str.length-1));
      }
      return str;
    }
  return str;
  },
  
  anchorTagPounder:function(document){ 
    
  }

}