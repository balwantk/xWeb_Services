// Declare the router globally..
var homeRouter

var HomeSubApp = {
  init: function () {
    homeRouter = new HomeRouter;
    if (Backbone.history.options == undefined) {
      Backbone.history.start();    
    }
  }
}


