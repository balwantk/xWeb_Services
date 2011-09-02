/*!
  Xipcraft xHelper
*/
var xHelper = {
  stripStartEndSpaces: function (str) {
    
    var exp = new RegExp(/\s/);
    if (exp.test(str)) {
      if (str.charAt(0) == ' ') {
         str = xHelper.stripStartEndSpaces(str.substring(1,str.length));
      } else if (str[str.length-1]==' ') {
         str = xHelper.stripStartEndSpaces(str.substring(0,str.length-1));
      }
      return str;
    }
  return str;
  },
  
  poundHashAnchorTags: function () { 
    var anchorTags = document.getElementsByTagName('a');
    for (var i = 0; i< anchorTags.length; i++) {
      if (/#/.test(document.getElementsByTagName('a')[i].href)) {
        document.getElementsByTagName('a')[i].href = '#';
      }
    }  
  }
}