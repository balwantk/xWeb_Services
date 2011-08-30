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
    //XipcraftStaticSiteSubApp.HomeAndFooter[0].style.height = "100px"
    morpheus(XipcraftStaticSiteSubApp.HomeAndFooter, {    
      opacity: 0,
      duration: 700,
      complete: function () {
        XipcraftStaticSiteSubApp.HomeAndFooter[0].style.height = "0px";

      }
    });
    /*  
    morpheus(CarouselAndFooter, {    
      opacity: 100,
      duration: 700,
      complete: function () {
        this.CarouselAndFooter[0].style.height = "100px";
      }
      });*/
    
    return true;
  },
  navToHomeView:function(){
  
  },

  setElementHeight: function(element,height){

  },

  setElementLeftPosition: function(element, left_position){
    
  }


};