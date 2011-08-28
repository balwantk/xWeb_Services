describe("General javascript that powers the Xipcraft static site", function() {
  
  
  describe("application code", function() {
    it("should be defined", function() {
      expect(xipcraftStaticSiteSubApp).toBeDefined();
    });
    
    it("should execute on document ready", function() {
      /*
        TODO @dinesh
      */
    });
  });
  
  describe("Google analytics code", function() {
    it("should be defined", function() {
      expect(_gag).toBeDefined();
    });
    
    it("should have the correct account number", function() {
      /*
        TODO @dinesh
        A/c number is UA-25360290-1
      */
    });
    
    describe("the correct settings for the _gag array", function() {
      /*
        TODO @dinesh 
      */
    });
  });
});