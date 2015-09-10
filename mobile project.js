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


  Template.projects-desktop.events({
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
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0xffffff, 0 );
    renderer.setSize(window.innerWidth, window.innerHeight);
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


}

/*
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
