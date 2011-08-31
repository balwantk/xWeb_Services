var easeIn = function (t) {
    return t * t;
}

var XipcraftStaticSiteSubApp = {
  HomeAndFooter: [],
  CarouselAndFooter:[],
  
  init:function(){
  
    var anchors = document.getElementsByTagName('a');
    for(var i=0;i<anchors.length;i++) {
      if(/\/#produce/.test(anchors[i].href)) {
        bean.add(anchors[i],'click', function() {XipcraftStaticSiteSubApp.navToCarouselPane('produce')} );
      }else if(/\/#team/.test(anchors[i].href)) {
        bean.add(anchors[i],'click', function() {XipcraftStaticSiteSubApp.navToCarouselPane('team')} );
      }else if(/\/#contact/.test(anchors[i].href)) {
        bean.add(anchors[i],'click', function() {XipcraftStaticSiteSubApp.navToCarouselPane('contact')} );
      }else if(/\/#main/.test(anchors[i].href)) {
        bean.add(anchors[i],'click', function() {XipcraftStaticSiteSubApp.navToHomeView()} );
      }
    }
    
    xHelp.anchorTagPounder();
    
    XipcraftStaticSiteSubApp.HomeAndFooter[0] = document.getElementById("home_view");
    XipcraftStaticSiteSubApp.HomeAndFooter[1] = document.getElementById("the_end");
    XipcraftStaticSiteSubApp.CarouselAndFooter[0] = document.getElementById("produce_team_contact_carousel");
    XipcraftStaticSiteSubApp.CarouselAndFooter[1] = document.getElementById("the_end");
    
  },  
  
  navToCarouselPane:function(option){
 
    morpheus(XipcraftStaticSiteSubApp.HomeAndFooter, {    
      opacity: "0%",
      duration: 1,
      easing: easeIn,
      complete: function () {
        XipcraftStaticSiteSubApp.HomeAndFooter[0].style.height = '0px';
        XipcraftStaticSiteSubApp.CarouselAndFooter[0].style.height = '100%';
        window.morpheus(XipcraftStaticSiteSubApp.CarouselAndFooter, {    
          opacity: "100%",
          easing: easeIn,
          duration: 1 // Seems to be the only way to show the animation down..
        });    
      }
      
    });
    var animateShowcase = document.getElementById("main_carousel_showcase");  

    if(option == 'produce'){
       animateShowcase.style.left = '0%';
    }else if(option == 'team'){
       animateShowcase.style.left = '-100%';

    }else if(option == 'contact'){
      animateShowcase.style.left = '-200%';  
    }
  },
  
  navToHomeView:function(){
      morpheus(XipcraftStaticSiteSubApp.CarouselAndFooter, {    
      opacity: "0%",
      duration: 1,
      easing: easeIn,
      complete: function () {
        XipcraftStaticSiteSubApp.CarouselAndFooter[0].style.height = '0px';
        XipcraftStaticSiteSubApp.HomeAndFooter[0].style.height = '100%';
        window.morpheus(XipcraftStaticSiteSubApp.HomeAndFooter, {    
         opacity: "100%",
         duration: 1,
         easing: easeIn
        });
      }
     });  
  }
};