if (Meteor.isClient) {


FlowRouter.route('/', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "home" });
  }
});


FlowRouter.route('/about-me', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "about-me" });
  }
});

FlowRouter.route('/projects-desktop', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "projects-desktop" });
  }
});

FlowRouter.route('/projects-morningsignout', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "projects-morningsignout" });
  }
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {

    }
};
}
