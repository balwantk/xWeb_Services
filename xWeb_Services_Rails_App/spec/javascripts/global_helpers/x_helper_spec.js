describe("Global helper", function() {
  it("should be defined", function(){
        expect(xHelper).toBeDefined();
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
