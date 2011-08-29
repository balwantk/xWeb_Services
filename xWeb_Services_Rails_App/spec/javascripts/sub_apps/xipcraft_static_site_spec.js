describe("General javascript that powers the Xipcraft static site", function() {
  
  describe("application code", function() {
    it("should be defined", function() {
      expect(xipcraftStaticSiteSubApp).toBeDefined();
    });
    
    it("should add JS navigation event listeners to anchor tags", function() {
      // Add spy to addEventListener(el,callback) callback functions
      // Instantiate App object App.init() or app()
      // Manually trigger event on DOM object
      // Expect spy to be called with given args
      // Delete App object to prep for the next test.
    });
    
    it("should replace hash linked anchor tags with pounds", function() {
      // Add spy to anchorTagPounder()
      // Instantiate App object App.init() or app()
      // Expect anchorTagPounder() to be called
      // Delete App object to prep for the next test.
    });
    
    it("Should hide the headlines, nav and dividers before animating the carousel", function() {
      // navToCarouselPane(any_arg);
      // On navigating to carousel..
      // expect document.getElementById("home_view").style.height to be 0%
      // expect document.getElementById("produce_team_contact_carousel").style.height to be 100%
    });
    
    it("should animate the carousel", function() {
      //on navToCarouselPane("produce");
      //expect document.getElementById("main_carousel_showcase").style.left to be 0%  // Produce
      
      //on navToCarouselPane("team");
      //expect document.getElementById("main_carousel_showcase").style.left to be "-100%"  // Team
      
      //on navToCarouselPane("contact");
      //expect document.getElementById("main_carousel_showcase").style.left to be "-200%"  // Contact
    });
    
    it("should show the headlines, nav and dividers AND hide the carousel when returning to home view", function() {
      // on navToHomeView();
      // expect document.getElementById("home_view").style.height to be 100%
      // expect document.getElementById("produce_team_contact_carousel").style.height to be 0%
    });

  });
});