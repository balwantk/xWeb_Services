/*
  @author: Balwant
*/


describe("HomeSubApp", function() { 
  it("should be properly defined", function() {    
    expect(HomeSubApp).toBeTruthy();
  });
  
  it("have an init function defined", function() {
    expect(HomeSubApp.init).toBeDefined();
  });
  
  it("should start backbone history", function() {
    HomeSubApp.init();
    expect(Backbone.history.options).toBeDefined();
  });
  
  it("should have instantiated a new router", function() {
    expect(homeRouter).toBeDefined();
  });
});
