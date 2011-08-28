describe("Global helper", function() {
  it("should be defined", function(){
        expect(xHelp).toBeDefined();
  });
  
  describe("helper to replace hrefs of anchor tags to #", function() {
    it("should be defined", function(){
        expect(xHelp.anchorTagPounder).toBeDefined();
    });
    
    it("should set the href attribute as # for all anchor tags on a document", function() {
      /*
        TODO @dinesh
      */
    });    
  });
  
  describe("helper to strip spaces before and after any string", function() {
    it("should be defined", function(){
        expect(xHelp.stripStartEndSpaces).toBeDefined();
    });
    it("should strip starting spaces", function(){
        expect(xHelp.stripStartEndSpaces("    x@xipcraft.com")).toEqual("x@xipcraft.com")
        
    });  
    it("should strip ending spaces", function(){
      expect(xHelp.stripStartEndSpaces("xyz@#f0f0m976hn754    ")).toEqual("xyz@#f0f0m976hn754")
    });
    it("should strip both starting and ending spaces", function(){
      expect(xHelp.stripStartEndSpaces("    7{}#e%)(*&^%$#@!^*())xyz@#f0f0m976hn754    ")).toEqual("7{}#e%)(*&^%$#@!^*())xyz@#f0f0m976hn754")
    });  

    it("should not strip middle spaces", function(){
       expect(xHelp.stripStartEndSpaces("     7{}#e%)(*&^%$#@!^*()      )xyz@#f0f0    m976hn754    ")).toEqual("7{}#e%)(*&^%$#@!^*()      )xyz@#f0f0    m976hn754")
    });  
  
  });
  
});
