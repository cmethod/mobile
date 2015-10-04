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

    BlazeLayout.render('layout1', { top: "navigation", main: "projectsDesktop" });
  }
});

FlowRouter.route('/projects-morningsignout', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "projects-morningsignout" });
  }
});

FlowRouter.route('/freelance', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "freelance" });
  }
});

FlowRouter.route('/contact', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "contact" });
  }
});

FlowRouter.route('/submitted', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "submitted" });
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
