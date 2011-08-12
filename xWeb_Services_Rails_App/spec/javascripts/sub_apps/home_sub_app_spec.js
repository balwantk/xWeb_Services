/*
  @author: Balwant
*/

describe("HomeSubApp", function() { 
  it("should be properly defined", function() {    
    expect(HomeSubApp).toBeTruthy();
  });
  
  it("have an init function defined", function() {
    expect(HomeSubApp.init).toBeTruthy();
  });
  
  /*
    TODO Pl improve the spec to test the init function (i can't seem to figure out how):
      1] It should start its router.
      2] It should start backbone istory if not already started.
  */

});
