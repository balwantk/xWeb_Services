describe("Global checker function that's inspired from Modernizr", function() {

  
  it("should be defined", function() {
    expect(xCheck).toBeDefined();
  });
  
  describe("checker for detecting javascript on a page", function() {
    
    beforeEach(function() {
      /*
        TODO @dinesh  SETUP ENV
                      - Expect var htmlEl = document.documentElement.getElementByTagName("html") is defined
                      - Check if htmlEl.className has string "no-js"
                      - If no then append the sting "no-js" to the className
                      - Expect htmlEl.className has string "no-js" to be truthy
      */
    });

    
    it("should be defined", function() {
      expect(xCheck.forJavaScript).toBeDefined();
    });
    it("should replace all the html tags ka class 'no-js' with 'js' if js is active", function() {
      /*
        TODO @dinesh RUN TEST> xCheck.forJavaScript();
                     WRITE EXPECTATION> Expect htmlEl.className has string "no-js" to be falsy
      */
    });
  });
});