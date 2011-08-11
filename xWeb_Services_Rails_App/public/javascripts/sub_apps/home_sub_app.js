var HomeSubApp = $.domReady(function() {
    new HomeSubAppRouter
    Backbone.History.prototype.start();
});
