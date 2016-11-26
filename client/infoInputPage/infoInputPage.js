Template.infoInputPage.helpers({

});

Template.infoInputPage.events({
	'click .goToBoardingPass'(){
		console.log('I got clicked');
    Blaze.renderWithData(Template.boardingPassPage, {data: ''}, $('.boardingPass-modal').get(0));

    Meteor.setTimeout(function(){
      $('.boardingPass-modal').addClass('open');
      $('.boardingPass-modal').addClass('blackOverlay');
    }, 100);
	}

});
