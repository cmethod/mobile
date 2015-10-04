if (Meteor.isServer) {

Meteor.startup(function(){
  process.env.MAIL_URL="smtp://contactcrystalchen:mobilesite@smtp.gmail.com:465/";
});
Meteor.methods({
  'sendEmail': function (emailbody) {
    this.unblock();

    Email.send({
       to: '51614cc@gmail.com',
       subject: 'message from contact form',
       text: emailbody
     });
  }
});

}
