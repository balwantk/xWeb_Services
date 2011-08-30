describe("General javascript that powers the Xipcraft static site", function() {
  
  describe("application code", function() {
    it("should be defined", function() {
      expect(XipcraftStaticSiteSubApp).toBeDefined();
    });
    
    it("shoud have essential functions defined", function() {
      expect(XipcraftStaticSiteSubApp.init).toBeDefined();
      expect(XipcraftStaticSiteSubApp.navToCarouselPane).toBeDefined();
      expect(XipcraftStaticSiteSubApp.navToHomeView).toBeDefined();
    });
    
    beforeEach(function() {
      // Create dummy DOM elements for test
      //  - anchors
      //  - home view div
      //  - carousel container
      //  - footer
      // Verify presence of dummy DOM elements
      
       var anchorTag = document.createElement("a");
       anchorTag.setAttribute('href','#test');
       anchorTag.setAttribute('id','test_team_anchor_tag');
       document.getElementsByTagName("html")[0].appendChild(anchorTag);
      
       var homeDivTag = document.createElement("div");
       homeDivTag.setAttribute('id','test_home_view');
       document.getElementsByTagName("html")[0].appendChild(homeDivTag);
      
       var carouselDivTag = document.createElement("div");
       carouselDivTag.setAttribute('id','test_main_carousel_showcase');
       carouselDivTag.setAttribute('class','test_showcase');
       document.getElementsByTagName("html")[0].appendChild(carouselDivTag);
      
       var footerTag = document.createElement("footer");
       footerTag.setAttribute('id','test_the_end');
       document.getElementsByTagName("html")[0].appendChild(footerTag);
       
       //expect
       anchorTag = document.getElementById('test_team_anchor_tag');
       expect(anchorTag).not.toBeNull();
      
       homeDivTag = document.getElementById('test_home_view');
       expect(homeDivTag).not.toBeNull();
       
       carouselDivTag = document.getElementById('test_main_carousel_showcase');
       expect(carouselDivTag).not.toBeNull();
      
       footerTag = document.getElementById('test_the_end');
       expect(footerTag).not.toBeNull();
      
    });
        
    afterEach(function() {
      // Destroy dummy DOM elements for test
      // Verify destruction of dummy DOM elements
      
       var anchorTag = document.getElementById('test_team_anchor_tag');
       anchorTag.parentNode.removeChild(anchorTag); 
       anchorTag = document.getElementById('test_team_anchor_tag');
       expect(anchorTag).toBeNull();
       
       var homeDivTag = document.getElementById('test_home_view');
       homeDivTag.parentNode.removeChild(homeDivTag); 
       homeDivTag = document.getElementById('test_home_view');
       expect(homeDivTag).toBeNull();
      
       var carouselDivTag = document.getElementById('test_main_carousel_showcase');
       carouselDivTag.parentNode.removeChild(carouselDivTag); 
       carouselDivTag = document.getElementById('test_main_carousel_showcase');
       expect(carouselDivTag).toBeNull();
      
       var footerTag = document.getElementById('test_the_end');
       footerTag.parentNode.removeChild(footerTag); 
       footerTag = document.getElementById('test_the_end');
       expect(footerTag).toBeNull();
    });
    
    describe("XipcraftStaticSiteSubApp.init", function() {
      
      it("should add JS navigation event listeners to anchor tags", function() {
        // Add spy to addEventListener(el,callback) callback functions
        // Instantiate App object App.init() or app()
        // Manually trigger event on DOM object
        // Expect spy to be called with given args
        // Delete App object to prep for the next test.

        var spy = sinon.spy(XipcraftStaticSiteSubApp, "navToCarouselPane");
        XipcraftStaticSiteSubApp.init();
        var anchorTag = document.getElementById('test_team_anchor_tag');
        //anchorTag.click();
        expect(spy.called).toBeTruthy();
         
        
      });
      
      it("should replace hash linked anchor tags with pounds", function() {
        // Add spy to anchorTagPounder()
        // Instantiate App object App.init() or app()
        // Expect anchorTagPounder() to be called
        // Delete App object to prep for the next test.
      });
      
      it("should create arrays of elements to be animated", function() {
        // Instantiate App object App.init() or app()
        // Expect HomeAndFooter[0] to be == document.getElementById("home_view")
        // Expect HomeAndFooter[1] to be == document.getElementById("the_end")
        // Expect CarouselAndFooter[0] to be == document.getElementById("produce_team_contact_carousel")
        // Expect CarouselAndFooter[1] to be == document.getElementById("the_end")
        // Delete App object to prep for the next test.
      });
    });
    

    describe("JS Navigation", function() {
      
      describe("XipcraftStaticSiteSubApp.navToCarouselPane", function() {

        it("Should first hide the headlines, nav and dividers i.e. div#home_view", function() {         
          // Spy on HomeAndFooter[0].style.height() (i.e. the home view)
          // Fire functionXipcraftStaticSiteSubApp.navToCarouselPane(any_arg);
          // expect morpheus to be called with HomeAndFooter, {opacity:"0", callback: .style.height:"0px"}) 
          // expect HomeSpy to be called with "0px"
          
          // Actual CSS position verification and end-to-end testing done by capibara
        });

        it("should then show the carousel", function() {
          // Spy on CarouselAndFooter[0].style.height() (i.e. the carousel)
          // Fire XipcraftStaticSiteSubApp.navToCarouselPane(any_arg);
          // expect CarouselSpy to be called with "100%"
          // expect morpheus to be called with CarouselAndFooter, {opacity:"100",})
             
          // Actual CSS position verification and end-to-end testing done by capibara
        });

        it("should then animate the carousel", function() {
          // Spy on fn: document.getElementById("main_carousel_showcase").style.left()

          //on navToCarouselPane("produce");    
          //expect Spy to be called with "0%"  // Produce;

          //on navToCarouselPane("team");
          //expect Spy to be called with "-100%"  // Team

          //on navToCarouselPane("contact");
          //expect Spy to be called with "-200%"  // Contact
        });
      });

      describe("XipcraftStaticSiteSubApp.navToHomeView", function() { 
        it("should first hide the carousel", function() {    
          // Spy on CarouselAndFooter[0].style.height() (i.e. the carousel)
          // on App.navToHomeView();
          // expect morpheus to be called with CarouselAndFooter, {opacity:"0",})
          // expect CarouselSpy to be called with "0px"
          
          // Actual CSS position verification and end-to-end testing done by capibara
        });
        
        it("should then show the headlines, nav and dividers", function() {         
          // Spy on HomeAndFooter[0].style.height() (i.e. the home view)
          // on App.navToHomeView();  
          // expect HomeSpy to be called with "100%"
          // expect morpheus to be called with HomeAndFooter, {opacity:"100"})
          
          // Actual CSS position verification and end-to-end testing done by capibara
        });
      });
    });
    
  });
});