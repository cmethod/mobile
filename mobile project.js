/*
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
if (Meteor.isClient) {
  /* Template callbacks */
  /* Home Template */


  Template.projectsDesktop.events({
    'click .test': function(event, template){
      $("#desktopDemo").toggleClass('hide');
      $("#desktopDemo").toggleClass('show');
      $("#aboutDesktopDemo").toggleClass("show");
      $("#aboutDesktopDemo").toggleClass("hide");
    }
  })

  Template.navigation.events({
    'click paper-icon-button': function(event, template){
      $(event.currentTarget).toggleClass("clicked")}
  });


  /* Threejscube template */

  Template.home.onRendered(function() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 800);
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0 );
    renderer.setSize(300, 300);
    $(".threejscube-container")[0].appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var render = function() {
      requestAnimationFrame(render);
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
      renderer.render(scene, camera);
    };
    render();
  });



  Template.contact.events({
  	'click #submit-button':function(e,t){
      console.log("clicked");
  		var name = t.find("#name").value;
  		var emailorphone = t.find("#emailorphone").value;
  		var message = t.find("#message").value;
      var emailbody = "from: " + name + "\ncontact: " + emailorphone + "\nmessage: " + message;

      if (name == "" || emailorphone == "" || message == "") {
        alert("Please complete the form so I can receive your message!")
      } else {
        Meteor.call("sendEmail", emailbody);
        console.log("email sent");
        $("#contact-me")[0].reset();
        FlowRouter.go("/submitted")
      }
    }
  });

  Template.submitted.events({
    'click #back-button':function(){
      FlowRouter.go("/contact")
    }
  })



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });


}
