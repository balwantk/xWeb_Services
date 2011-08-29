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
      
      var htmlEl = document.getElementsByTagName("html")[0];
     
      if(/\bno-js\b/.test(htmlEl.className) == false) {
            document.getElementsByTagName("html")[0].className = document.getElementsByTagName("html")[0].className+' no-js';
      }
      expect(/\bno-js\b/.test(document.getElementsByTagName("html")[0].className)).toBeTruthy();
    });

    
    it("should be defined", function() {
      expect(xCheck.forJavaScript).toBeDefined();
    });
    
    it("should replace all the html tags ka class 'no-js' with 'js' if js is active", function() {
      /*
        TODO @dinesh RUN TEST xCheck.forJavaScript();
                     WRITE EXPECTATION> Expect htmlEl.className has string "no-js" to be falsy
      */
      xCheck.forJavaScript(document);
      expect(/\bno-js\b/.test(document.getElementsByTagName("html")[0].className)).toBeFalsy();
    
    });    
    
    afterEach(function() {
     
      if(/\bno-js\b/.test(document.getElementsByTagName("html")[0].className )) {
            document.getElementsByTagName("html")[0].className = document.getElementsByTagName("html")[0].className.replace(/\bno-js\b/, '');
      }
      expect(/\bno-js\b/.test(document.getElementsByTagName("html")[0].className)).toBeFalsy();
    });
  });
});