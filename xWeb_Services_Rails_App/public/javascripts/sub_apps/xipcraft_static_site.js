var XipcraftStaticSiteSubApp = {
  HomeAndFooter: [],
  CarouselAndFooter:[],
  
  init:function(){
  
    var anchors = document.getElementsByTagName('a');
    for(var i=0;i<anchors.length;i++) {
      if(/\/#produce/.test(anchors[i].href)) {
        bean.add(anchors[i],'click',this.navToCarouselPane);
      }else if(/\/#team/.test(anchors[i].href)) {
        bean.add(anchors[i],'click',this.navToCarouselPane);
      }else if(/\/#contact/.test(anchors[i].href)) {
        bean.add(anchors[i],'click',this.navToCarouselPane);
      }
    }
    
    xHelp.anchorTagPounder();
    
    this.HomeAndFooter[0] = document.getElementById("home_view");
    this.HomeAndFooter[1] = document.getElementById("the_end");
    this.CarouselAndFooter[0] = document.getElementById("produce_team_contact_carousel");
    this.CarouselAndFooter[1] = document.getElementById("the_end");
    
  },  
  navToCarouselPane:function(option){
 
    morpheus(this.HomeAndFooter, {    
      opacity: 0,
      duration: 700,
      complete: function () {
        XipcraftStaticSiteSubApp.HomeAndFooter[0].style.height = '0%';
      }
    });
    
    this.CarouselAndFooter[0].style.height = '100%';
    
    morpheus(this.CarouselAndFooter, {    
      opacity: 100,
      duration: 700
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
      morpheus(this.CarouselAndFooter, {    
      opacity: 0,
      duration: 700,
      complete: function () {
        XipcraftStaticSiteSubApp.CarouselAndFooter[0].style.height = '0%';
      }
     });
    
     this.HomeAndFooter[0].style.height = '100%';
     morpheus(this.HomeAndFooter, {    
      opacity: 100,
      duration: 700
     });    
  }
};