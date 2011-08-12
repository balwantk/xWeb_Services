var specRouter = new HomeRouter;


describe("HomeRouter", function() {
  describe("the contact view route", function() {
    
    it("should call the correct callback when I navigate to ~/#!<route>", function() {
      
    });
    
    describe("the callbacks", function() {
      it("should [if needed] instantiate the VCO that handles the respective view", function() {

      });
      
      it("should call the render function on the respective VCO.", function() {

      });
    });   
  });  
});












// var routeSpies = []
// var specRoutes = [
//                   ["!contact","contact"]
//                  ];
//                  
// // Loopadoop through all route-callback pairs
// // for (var i=0; i < specRoutes.length; i++) {
// //   console.log(i)
// // };
// 
// 
//   i=0
//   routeSpies[i] = sinon.spy();
//   var spy = routeSpies[i];
//   // Helper variables to make the code more readable..
//   var route = specRoutes[i][0];
//   var callback = specRoutes[i][1];
//   var param = specRoutes[i][2];
//   var id = specRoutes[i][3];
//   var routeEvent = ("route:"+callback);
//   
//   // console.log("route is "+route);
//   // console.log("callback is "+callback);
//   // console.log("route event is "+routeEvent);
//   
//   it("fires  route on "+route, function() {      
//     // Bind the spy as the callback to listen to the routing event
//     specRouter.bind(routeEvent, spy);
// 
//     // Set the hash route to the desired value
//     window.location.hash = route;
// 
//     // Ask backbone to start watching hashchanges if not already doing so       
//     if (Backbone.history.options == undefined) {
//       Backbone.history.start();
//     }
// 
//     // The listener callback spy should have been called once and with the correct argument
//     expect(spy).toHaveBeenCalledOnce();
//     expect(spy).toHaveBeenCalledWith(/*params, id*/);
// 
//     // Remove bound listener spy
//     specRouter.unbind(routeEvent);
//     window.location.hash = "";
//   });
//   
//   
//   
// // };
// 
// 
