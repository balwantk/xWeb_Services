var XipcraftStaticSite = {
  MainEl: "",
  BrandingEl: "",
  HomeEl: "",
  CarouselEl: "",
  FooterEl: "",
  init: function(){
    var htmlClass = document.getElementsByTagName("html")[0].className;
    if(!(/\bie6\b/.test(htmlClass)) && !(/\bie7\b/.test(htmlClass)) ) {
       this.reallyInit();
    } 
  },
  
  reallyInit: function () {
    // Check window.location.hash
    // If it is #team or #contact
    // redirect window to "http://www.xipcraft.com/" or "/"
    
    // @manual
    if(window.location.hash == '#team' ){
      window.location.href = window.location.href.replace("#team","") ;
    }else if(window.location.hash == '#contact'){
      window.location.href = window.location.href.replace("#contact","") ;
    }
    
    var anchors = document.getElementsByTagName('a');
    for(var i=0;i<anchors.length;i++) {
      if(/\/#produce/.test(anchors[i].href)) {
        bean.add(anchors[i],'click', function() {XipcraftStaticSite.navToCarouselPane('produce')} );
      }else if(/\/#team/.test(anchors[i].href)) {
        bean.add(anchors[i],'click', function() {XipcraftStaticSite.navToCarouselPane('team')} );
      }else if(/\/#contact/.test(anchors[i].href)) {
        bean.add(anchors[i],'click', function() {XipcraftStaticSite.navToCarouselPane('contact')} );
      }else if(/\/#main/.test(anchors[i].href)) {
        bean.add(anchors[i],'click', function() {XipcraftStaticSite.navToHomeEl()} );
      }
    }
    
    xHelper.poundHashAnchorTags();
    
    this.MainEl     = document.getElementById("main");
    this.BrandingEl = document.getElementById("xipcraft_branding");
    this.HomeEl     = document.getElementById("home_view");
    this.CarouselEl = document.getElementById("produce_team_contact_carousel");
    this.ShowcaseEl = document.getElementById("main_carousel_showcase");  
    this.FooterEl   = document.getElementById("the_end");
    
    this.MainEl.style.opacity = "1";
  },
    
  navToCarouselPane: function(option){
    // Animation Sequence Powered by CSS3 Animations
    
    //  TODO* 
    // -1] Add class "js" to #produce_team_contact_carousel element
    
    // 0] Margin top reset
    // TODO* - Needs a dummy el to be made and test to be written..
    this.BrandingEl.style.marginTop = "18px"
    
    // 1] Home Opacity 0%
    this.HomeEl.style.opacity = "0"

    // 2] Footer Opacity 0%
    this.FooterEl.style.opacity = "0"

    // 3] Home Height 0px
    this.HomeEl.style.height = "0px"

    // 4] Footer Height 0px
    this.FooterEl.style.height = "0px"

    // 5] Carousel Height 100%
    this.CarouselEl.style.height = "100%"

    // 6] Footer Height 100%
    this.FooterEl.style.height = "100%"

    // 7] Carousel Opacity 100%
    this.CarouselEl.style.opacity = "1"

    // 8] Footer Opacity 100%
    this.FooterEl.style.opacity = "1"
    
    // 9] Transition to correct carousel pane
    if(option == 'produce'){
       this.ShowcaseEl.style.left = '0%';
    }else if(option == 'team'){
       this.ShowcaseEl.style.left = '-100%';
    }else if(option == 'contact'){
      this.ShowcaseEl.style.left = '-200%';  
    }
  },
  
  navToHomeEl:function(){
    // Animation Sequence Powered by CSS3 Animations
    
    // TODO* 
    // 0] Remove class "js" from #produce_team_contact_carousel element
    
    // 1] Carousel Opacity 0
    this.CarouselEl.style.opacity = "0"

    // 2] Footer Opacity 0
    this.FooterEl.style.opacity = "0"

    // 3] Carousel Height 0px
    this.CarouselEl.style.height = "0px"

    // 4] Footer Height 0px
    this.FooterEl.style.height = "0px"

    // 5] Home Height 100%
    this.HomeEl.style.height = "100%"

    // 6] Footer Height 100%
    this.FooterEl.style.height = "100%"

    // 7] Home Opacity 1
    this.HomeEl.style.opacity = "1"

    // 8] Footer Opacity 1
    this.FooterEl.style.opacity = "1"
  }
};