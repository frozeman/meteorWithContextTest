if (Meteor.isClient) {

  // some context for #with
  Template.hello.someData = function () {
    return {
      some: 'data'
    };
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });


  Template.testTemplate.firstHelper = function () {
    // set some value here to the data context
    this.myValue = 'test';
    console.log('SET value to the data context:', this.myValue);
  };
  Template.testTemplate.secondHelper = function () {
    // get some value here from the data context
    console.log('GET value from the data context:', this.myValue);
  };
}
