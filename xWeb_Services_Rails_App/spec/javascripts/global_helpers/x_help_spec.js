
describe("Global helper", function() {
  it("should be defined", function(){
        expect(xHelp).toBeDefined();
  });
  
  describe("helper to replace hrefs of anchor tags to #", function() {
    
    beforeEach(function() {
      var anchorTag = document.createElement("a");
      anchorTag.setAttribute('href','#team');
      anchorTag.setAttribute('id','jasmine_test_team_tag');
      document.getElementsByTagName("html")[0].appendChild(anchorTag);
      var anchorTags = document.getElementById('jasmine_test_team_tag');
      
      for(var i=0;i<anchorTags.length;i++){
                 
      }
      //expect(/#team/.test(anchorTags[0].href)).toBeTruthy();
      //document.write('<a href="http://www.xipcraft.com/team" >');
      //document.write('<a href="http://www.xipcraft.com/about" >');
      //document.write('<a href="http://www.xipcraft.com/jobs" >');

    });
    
    it("xHelp.anchorTagPounder should be defined", function(){
        expect(xHelp.anchorTagPounder).toBeDefined();
    });
    
    it("should set the href attribute as # for all anchor tags on a document", function() {
      /*
        TODO @dinesh
      */
      xHelp.anchorTagPounder(document);
      
      expect(/\b#\b/.test(document.getElementsByTagName('a')[0].href)).toBeTruthy();
      //expect(/#/.test(document.getElementsByTagName('a')[1].href)).toBeTruthy();
      //expect(/#/.test(document.getElementsByTagName('a')[2].href)).toBeTruthy();
    });    
  });
  
  describe("helper to strip spaces before and after any string", function() {
    it("should be defined", function(){
        expect(xHelp.stripStartEndSpaces).toBeDefined();
    });
    it("should strip starting spaces", function(){
        expect(xHelp.stripStartEndSpaces("    x@xipcraft.com")).toEqual("x@xipcraft.com")
        
    });  
    it("should strip ending spaces", function(){
      expect(xHelp.stripStartEndSpaces("xyz@#f0f0m976hn754    ")).toEqual("xyz@#f0f0m976hn754")
    });
    it("should strip both starting and ending spaces", function(){
      expect(xHelp.stripStartEndSpaces("    7{}#e%)(*&^%$#@!^*())xyz@#f0f0m976hn754    ")).toEqual("7{}#e%)(*&^%$#@!^*())xyz@#f0f0m976hn754")
    });  

    it("should not strip middle spaces", function(){
       expect(xHelp.stripStartEndSpaces("     7{}#e%)(*&^%$#@!^*()      )xyz@#f0f0    m976hn754    ")).toEqual("7{}#e%)(*&^%$#@!^*()      )xyz@#f0f0    m976hn754")
    });  
  
  });
  
});
