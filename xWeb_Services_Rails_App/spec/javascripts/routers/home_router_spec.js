var specRouter = new HomeSubAppRouter;



describe("HomeSubAppRouter", function() {
  
  describe("routes, respective params and ids", function() {
    var routeSpies = []
    var specRoutes = [
                      ["","home"],
                      ["!home","home"],
                      ["!contact","contact"],
                      ["!team","team"]
                     ];
                     
    // Loopadoop through all route-callback pairs
    // for (var i=0; i < specRoutes.length; i++) {
    //   console.log(i)
    // };
    
    
      i=3
      routeSpies[i] = sinon.spy();
      var spy = routeSpies[i];
      // Helper variables to make the code more readable..
      var route = specRoutes[i][0];
      var callback = specRoutes[i][1];
      var param = specRoutes[i][2];
      var id = specRoutes[i][3];
      var routeEvent = ("route:"+callback);
      
      // console.log("route is "+route);
      // console.log("callback is "+callback);
      // console.log("route event is "+routeEvent);
      
      it("fires  route on "+route, function() {      
        // Bind the spy as the callback to listen to the routing event
        specRouter.bind(routeEvent, spy);

        // Set the hash route to the desired value
        window.location.hash = route;

        // Ask backbone to start watching hashchanges if not already doing so       
        if (Backbone.history.options == undefined) {
          Backbone.history.start();
        }

        // The listener callback spy should have been called once and with the correct argument
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(/*params, id*/);

        // Remove bound listener spy
        specRouter.unbind(routeEvent);
        window.location.hash = "";
      });
      
      
      
    // };
    

    
  });  
  
});



