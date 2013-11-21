if (Meteor.isClient) {

  // some context for #with
  Template.main.someData = function () {

    console.log('With helper run?!');
    return {
      someData: 'The "testTemplate"'
    };

  };


  Template.testTemplate.rendered = function () {
    // change things periodically
    Meteor.setInterval(function(){
      Session.set('myTextReplacement', _.uniqueId());
    }, 1000);
  };
  Template.testTemplate.myTextReplacement = function () {
    return Session.get('myTextReplacement');
  };
}
