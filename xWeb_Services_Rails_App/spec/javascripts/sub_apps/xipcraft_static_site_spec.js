describe("General javascript that powers the Xipcraft static site", function() {
  
  describe("application code", function() {
    it("should be defined", function() {
      expect(XipcraftStaticSite).toBeDefined();
    });
    
    it("shoud have essential functions defined", function() {
      expect(XipcraftStaticSite.init).toBeDefined();
      expect(XipcraftStaticSite.reallyInit).toBeDefined(); 
      expect(XipcraftStaticSite.navToCarouselPane).toBeDefined();
      expect(XipcraftStaticSite.navToHomeEl).toBeDefined();
    });
    
    beforeEach(function() {
      // Create dummy DOM elements for test
      //  - anchors
      //  - home view div
      //  - carousel container
      //  - footer
      //   Verify presence of dummy DOM elements
      
      
       var mainDivTag = document.createElement("div");
       mainDivTag.setAttribute('id','main');
       document.getElementsByTagName("html")[0].appendChild(mainDivTag);
      
       var brandingDivTag = document.createElement("div");
       brandingDivTag.setAttribute('id','xipcraft_branding');
       document.getElementsByTagName("html")[0].appendChild(brandingDivTag);
      
       var anchorTag = document.createElement("a");
       anchorTag.setAttribute('href','#produce');
       anchorTag.setAttribute('id','test_product_anchor_tag');
       document.getElementsByTagName("html")[0].appendChild(anchorTag);
      
       anchorTag = document.createElement("a");
       anchorTag.setAttribute('href','#team');
       anchorTag.setAttribute('id','test_team_anchor_tag');
       document.getElementsByTagName("html")[0].appendChild(anchorTag);
      
       anchorTag = document.createElement("a");
       anchorTag.setAttribute('href','#contact');
       anchorTag.setAttribute('id','test_contact_anchor_tag');
       document.getElementsByTagName("html")[0].appendChild(anchorTag);
      
       var homeDivTag = document.createElement("div");
       homeDivTag.setAttribute('id','home_view');
       document.getElementsByTagName("html")[0].appendChild(homeDivTag);
      
       var mainCarouselDivTag = document.createElement("div");
       mainCarouselDivTag.setAttribute('id','main_carousel_showcase');
       document.getElementsByTagName("html")[0].appendChild(mainCarouselDivTag);
      
       var carouselDivTag = document.createElement("div");
       carouselDivTag.setAttribute('id','produce_team_contact_carousel');
       document.getElementsByTagName("html")[0].appendChild(carouselDivTag);
      
       var footerTag = document.createElement("footer");
       footerTag.setAttribute('id','the_end');
       document.getElementsByTagName("html")[0].appendChild(footerTag);
       
       //expect
       
       mainDivTag = document.getElementById('main');
       expect(mainDivTag).not.toBeNull();
       
       brandingDivTag = document.getElementById('xipcraft_branding');
       expect(brandingDivTag).not.toBeNull();
       
       anchorTag = document.getElementById('test_team_anchor_tag');
       expect(anchorTag).not.toBeNull();
      
       homeDivTag = document.getElementById('home_view');
       expect(homeDivTag).not.toBeNull();
       
       mainCarouselDivTag = document.getElementById('main_carousel_showcase');
       expect(mainCarouselDivTag).not.toBeNull();
      
       carouselDivTag = document.getElementById('produce_team_contact_carousel');
       expect(carouselDivTag).not.toBeNull();
      
       footerTag = document.getElementById('the_end');
       expect(footerTag).not.toBeNull();
      
    });
        
    afterEach(function() {
      // Destroy dummy DOM elements for test
      // Verify destruction of dummy DOM elements

       var mainDivTag = document.getElementById('main');
       mainDivTag.parentNode.removeChild(mainDivTag); 
       mainDivTag = document.getElementById('main');
       expect(mainDivTag).toBeNull();
      
       var brandingDivTag = document.getElementById('xipcraft_branding');
       brandingDivTag.parentNode.removeChild(brandingDivTag); 
       brandingDivTag = document.getElementById('xipcraft_branding');
       expect(brandingDivTag).toBeNull();
  
       var anchorTag = document.getElementById('test_team_anchor_tag');
       anchorTag.parentNode.removeChild(anchorTag); 
       anchorTag = document.getElementById('test_team_anchor_tag');
       expect(anchorTag).toBeNull();
       
       var homeDivTag = document.getElementById('home_view');
       homeDivTag.parentNode.removeChild(homeDivTag); 
       homeDivTag = document.getElementById('home_view');
       expect(homeDivTag).toBeNull();
       
       var mainCarouselDivTag = document.getElementById('main_carousel_showcase');
       mainCarouselDivTag.parentNode.removeChild(mainCarouselDivTag); 
       mainCarouselDivTag = document.getElementById('main_carousel_showcase');
       expect(mainCarouselDivTag).toBeNull();
      
       
       var carouselDivTag = document.getElementById('produce_team_contact_carousel');
       carouselDivTag.parentNode.removeChild(carouselDivTag); 
       carouselDivTag = document.getElementById('produce_team_contact_carousel');
       expect(carouselDivTag).toBeNull();
      
       var footerTag = document.getElementById('the_end');
       footerTag.parentNode.removeChild(footerTag); 
       footerTag = document.getElementById('the_end');
       expect(footerTag).toBeNull();
    });
    
    describe("XipcraftStaticSite.init", function() {
      it("should ignore init code if it detects IE6", function() {

         var spy = sinon.spy(XipcraftStaticSite, "reallyInit");
         
         var tempClass = document.getElementsByTagName("html")[0].class;
         document.getElementsByTagName("html")[0].class = "ie6";
        
         expect(document.getElementsByTagName("html")[0].class).toEqual("ie6");
         
         XipcraftStaticSite.init(); 
         expect(spy.called).toBeFalsy();
          
         document.getElementsByTagName("html")[0].class = tempClass;
         expect(document.getElementsByTagName("html")[0].class).toEqual(tempClass);
           
        
      });
      
      it("should ignore init code if it detects IE7", function() {
        
         XipcraftStaticSite.reallyInit.restore();
         var spy = sinon.spy(XipcraftStaticSite, "reallyInit");
         
         var tempClass = document.getElementsByTagName("html")[0].class;
         document.getElementsByTagName("html")[0].class = "ie7";
         expect(document.getElementsByTagName("html")[0].class).toEqual("ie7");
        
         XipcraftStaticSite.init(); 
         expect(spy.called).toBeFalsy();
          
         document.getElementsByTagName("html")[0].class = tempClass;
         expect(document.getElementsByTagName("html")[0].class).toEqual(tempClass);
      });
       
      describe("XipcraftStaticSite.init", function() {
        
        var tempClass;
        beforeEach(function() {
          tempClass = document.getElementsByTagName("html")[0].class;
          document.getElementsByTagName("html")[0].class = "other";
          expect(document.getElementsByTagName("html")[0].class).toEqual("other");
           
        });
        
        it("should go ahead with executing the code if !ie6 && !ie7", function() {
  
           XipcraftStaticSite.reallyInit.restore();
           var spy = sinon.spy(XipcraftStaticSite, "reallyInit");
           XipcraftStaticSite.init(); 
           expect(spy.called).toBeTruthy();
   
        });
        
        it("should show all the page elements", function() {
          XipcraftStaticSite.init(); 
          expect(XipcraftStaticSite.MainEl.style.opacity).toBe("1");
        });
        
        afterEach(function() {
           document.getElementsByTagName("html")[0].class = tempClass;
           expect(document.getElementsByTagName("html")[0].class).toEqual(tempClass);
        });

      });
      
       
      it("should check hash fragment for team or contact and redirect to home", function() {
         
         // TODO - Someone please find a clever way to test this..
         // Currently done @manual
         
         /*
         window.location.hash = "#team"
         
         XipcraftStaticSite.init();
         
         expect(window.location.hash).toEqual("");
         */
    
       });
       
       
      it("should add JS navigation event listeners to anchor tags", function() {

        var spy = sinon.spy(XipcraftStaticSite, "navToCarouselPane");
        
        XipcraftStaticSite.init();
        
        var anchorTag = document.getElementById('test_product_anchor_tag');
        bean.fire(anchorTag,'click');
        expect(spy.called).toBeTruthy();
        //expect(spy).toBeHaveCalledWith('product'); TODO
        
        anchorTag = document.getElementById('test_team_anchor_tag');
        bean.fire(anchorTag,'click');
        expect(spy.calledTwice).toBeTruthy();
        //expect(spy).toBeHaveCalledWith('team'); TODO
        
        anchorTag = document.getElementById('test_contact_anchor_tag');
        bean.fire(anchorTag,'click');
        expect(spy.calledThrice).toBeTruthy();
        //expect(spy).toBeHaveCalledWith('contact'); TODO
         
       });
       
      it("should replace hash linked anchor tags with pounds", function() {
    
         var spy = sinon.spy(xHelper, "poundHashAnchorTags");
         
         XipcraftStaticSite.init();
         
         expect(spy.called).toBeTruthy();
         
       });
       
      it("should create arrays of elements to be animated", function() {
         
         XipcraftStaticSite.init();
         expect(XipcraftStaticSite.MainEl).toBe(document.getElementById("main"));
         expect(XipcraftStaticSite.BrandingEl).toBe(document.getElementById("xipcraft_branding"));
         expect(XipcraftStaticSite.HomeEl).toBe(document.getElementById("home_view"));
         expect(XipcraftStaticSite.CarouselEl).toBe(document.getElementById("produce_team_contact_carousel"));
         expect(XipcraftStaticSite.ShowcaseEl).toBe(document.getElementById("main_carousel_showcase"));
         expect(XipcraftStaticSite.FooterEl).toBe(document.getElementById("the_end"));
      });    
    });
     
 
    describe("JS Navigation", function() {
      
      describe("XipcraftStaticSite.navToCarouselPane", function() {

        it("Should first hide the headlines, footer, nav and dividers i.e. div#home_view", function() {         

          
           XipcraftStaticSite.navToCarouselPane('produce');
          
          // // 0] Margin top reset
           expect(XipcraftStaticSite.BrandingEl.style.marginTop).toBe("18px");
  
          // // 1] Home Opacity 0%
           expect(XipcraftStaticSite.HomeEl.style.opacity).toBe("0");

          // // 2] Footer Opacity 0%
           expect(XipcraftStaticSite.FooterEl.style.opacity).toBe("1");

          // // 3] Home Height 0px
          expect(XipcraftStaticSite.HomeEl.style.height).toBe("0px");

          // // 4] Footer Height 0px
           expect(XipcraftStaticSite.FooterEl.style.height).toBe("100%");
                  
        });

        it("should then show the carousel", function() {
        
           //XipcraftStaticSite.init();
           XipcraftStaticSite.navToCarouselPane('produce');
          // // 5] Carousel Height 100%
           expect(XipcraftStaticSite.CarouselEl.style.height).toBe("100%")

          // // 6] Footer Height 100%
           expect(XipcraftStaticSite.FooterEl.style.height).toBe("100%")
          // 
          // // 7] Carousel Opacity 100%
           expect(XipcraftStaticSite.CarouselEl.style.opacity).toBe("1")
 
          // // 8] Footer Opacity 100%
           expect(XipcraftStaticSite.FooterEl.style.opacity).toBe("1")
          
        });

        it("should then animate the carousel", function() {
          
          // 9] Transition to correct carousel pane
          //TODO* - Needs a dummy el to be made and test to be written..
          
          XipcraftStaticSite.init();
          
          XipcraftStaticSite.navToCarouselPane("produce");  
          expect(XipcraftStaticSite.ShowcaseEl.style.left).toEqual('0%');
          
        
          XipcraftStaticSite.navToCarouselPane("team");
          expect(XipcraftStaticSite.ShowcaseEl.style.left).toEqual('-100%');
        
        
          XipcraftStaticSite.navToCarouselPane("contact");
          expect(XipcraftStaticSite.ShowcaseEl.style.left).toEqual('-200%');
        
        });
      });

      describe("XipcraftStaticSite.navToHomeEl", function() { 
        it("should first hide the carousel", function() {    
       
          
          XipcraftStaticSite.navToHomeEl();
          // // 1] Carousel Opacity 0
          expect(XipcraftStaticSite.CarouselEl.style.opacity).toBe("0");
          // 
          // // 2] Footer Opacity 0
          expect(XipcraftStaticSite.FooterEl.style.opacity).toBe("1");
          // 
          // // 3] Carousel Height 0px
          expect(XipcraftStaticSite.CarouselEl.style.height).toBe("0px");
          // 
          // // 4] Footer Height 0px
          expect(XipcraftStaticSite.FooterEl.style.height).toBe("100%");

        });
        
        it("should then show the headlines, nav and dividers", function() {         
        
          // // 5] Home Height 100%
          expect(XipcraftStaticSite.HomeEl.style.height).toBe("100%");
          // 
          // // 6] Footer Height 100%
          expect(XipcraftStaticSite.FooterEl.style.height).toBe("100%");
          // 
          // // 7] Home Opacity 1
          expect(XipcraftStaticSite.HomeEl.style.opacity).toBe("1")
          // 
          // // 8] Footer Opacity 1
          expect(XipcraftStaticSite.FooterEl.style.opacity).toBe("1")
        });
      });
    });  
  });
});