var HomeSubApp = {
    init: function () {
      var homeSubAppRouter = new HomeSubAppRouter;
      if (Backbone.history.options == undefined) {
        Backbone.history.start();
        
      }
      return true
    }
}
