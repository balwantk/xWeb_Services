
describe("Global helper", function() {
  it("should be defined", function(){
        expect(xHelper).toBeDefined();
  });
  
  describe("helper to replace hrefs of anchor tags to #", function() {
    
    beforeEach(function() {
    
      for(var i=0;i<3;i++){
          var anchorTag = document.createElement("a");
          anchorTag.setAttribute('href','#test'+i);
          anchorTag.setAttribute('id','jasmine_test_hash_tag_'+i);
          document.getElementsByTagName("html")[0].appendChild(anchorTag);
          anchorTag = document.createElement("a");
          anchorTag.setAttribute('href','test'+i);
          anchorTag.setAttribute('id','jasmine_test_unhashed_tag_'+i);
          document.getElementsByTagName("html")[0].appendChild(anchorTag);
      }
            
      for(var x=0;x<3;x++){
        var anchorHashTag = document.getElementById('jasmine_test_hash_tag_'+x);
        expect(/\/#test[0-2]/.test(anchorHashTag.href)).toBeTruthy();
        
        var anchorUnhashTag = document.getElementById('jasmine_test_unhashed_tag_'+x);
        expect(/\/test[0-2]/.test(anchorUnhashTag.href)).toBeTruthy();                 
      }
      
    });
    
    it("xHelper.poundHashAnchorTags should be defined", function(){
        expect(xHelper.poundHashAnchorTags).toBeDefined();
    });
    
    it("should set the href attribute as # for all anchor tags on a document", function() {

      xHelper.poundHashAnchorTags();
      
       for(var x=0;x<3;x++){
        var anchorHashTag = document.getElementById('jasmine_test_hash_tag_'+x);
       
        expect(/\/#/.test(anchorHashTag.href)).toBeTruthy();
      }
      
    }); 
    
    it("should not touch the href attribute without # for all anchor tags on a document", function() {
      xHelper.poundHashAnchorTags();
      
       for(var x=0;x<3;x++){
        var anchorUnhashTag = document.getElementById('jasmine_test_unhashed_tag_'+x);
        expect(/\/test[0-2]/.test(anchorUnhashTag.href)).toBeTruthy();                 
       }
      
    }); 
    
    afterEach(function() {
       for(var x=0;x<3;x++){
        var anchorHashTag = document.getElementById('jasmine_test_hash_tag_'+x);
        anchorHashTag.parentNode.removeChild(anchorHashTag); 
        
        var anchorUnhashTag = document.getElementById('jasmine_test_unhashed_tag_'+x);
        anchorUnhashTag.parentNode.removeChild(anchorUnhashTag);                    
      }
      });
  });
  
  
  describe("helper to strip spaces before and after any string", function() {
    it("should be defined", function(){
        expect(xHelper.stripStartEndSpaces).toBeDefined();
    });
    it("should strip starting spaces", function(){
        expect(xHelper.stripStartEndSpaces("    x@xipcraft.com")).toEqual("x@xipcraft.com")
        
    });  
    it("should strip ending spaces", function(){
      expect(xHelper.stripStartEndSpaces("xyz@#f0f0m976hn754    ")).toEqual("xyz@#f0f0m976hn754")
    });
    it("should strip both starting and ending spaces", function(){
      expect(xHelper.stripStartEndSpaces("    7{}#e%)(*&^%$#@!^*())xyz@#f0f0m976hn754    ")).toEqual("7{}#e%)(*&^%$#@!^*())xyz@#f0f0m976hn754")
    });  

    it("should not strip middle spaces", function(){
       expect(xHelper.stripStartEndSpaces("     7{}#e%)(*&^%$#@!^*()      )xyz@#f0f0    m976hn754    ")).toEqual("7{}#e%)(*&^%$#@!^*()      )xyz@#f0f0    m976hn754")
    });  
  
  });
  
});
