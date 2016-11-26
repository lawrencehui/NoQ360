Template.infoInputPage.helpers({
	selectedNum(){
		return Session.get('selectedNum')
	}
});

Template.infoInputPage.events({
	'click .groupMinus'(){
		Session.set('selectedNum', Session.get('selectedNum') - 1)
	},
	'click .groupPlus'(){
		Session.set('selectedNum', Session.get('selectedNum') + 1)

	},

	'click .groupSubmit'(){
		console.log('I got clicked');

		let data = {};
		data.noOfPeople = Session.get('selectedNum');
		data.groupType = $('.groupTypeSelect option:selected').val();

		let shoppingOpt = $('.shoppingCb ').prop('checked');
		let foodOpt = $('.foodCb').prop('checked');
		let sightseeingOpt = $('.sightseeingCb').prop('checked');
		let ticketCode = Session.get('ticketCode')

		let interest = {
											ticketCode,
											shoppingOpt,
			 								foodOpt,
											sightseeingOpt
										};
		data.interest = interest;

		console.log(data)
		// Meteor.call('addNewQueue', data, (err, result)=>{
		// 	console.log('in addNewQueue');
		// 	console.log(result);
		// 	passdata = Object.assign({}, data, {queueId: result})
		// })

		Blaze.renderWithData(Template.boardingPassPage, {data }, $('.boardingPass-modal').get(0));

		Meteor.setTimeout(function(){
			$('.boardingPass-modal').addClass('open');
			$('.boardingPass-modal').addClass('blackOverlay');
		}, 100);


	}

});

Template.infoInputPage.onRendered(function(){
	Session.set('selectedNum', 1)

});
