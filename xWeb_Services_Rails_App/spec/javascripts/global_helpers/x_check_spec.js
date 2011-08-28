describe("Global checker function that's inspired from Modernizr", function() {
  it("should be defined", function() {
    expect(xCheck).toBeDefined();
  });
  
  describe("checker for detecting javascript on a page", function() {
    it("should be defined", function() {
      expect(xCheck.forJavaScript).toBeDefined();
    });
    it("should replace the html class 'no-js' with 'js' if js is active", function() {
      /*
        TODO @dinesh
      */
    });
  });
});