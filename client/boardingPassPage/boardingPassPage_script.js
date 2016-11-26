Template.boardingPassPage.helpers({
	getToday(){
		return moment().format('DD MMM YYYY')
	},
	getSuggestions(){
		const OptNamePairs = {
			shoppingOpt: "Shopping",
			foodOpt: "Food",
			sightseeingOpt: "Sightseeing"
		};
		_;
		console.log(this.passdata.interest);
		interestOpts = _.keys(this.passdata.interest).map(function(interestOpt){
			if (this.passdata.interest[interestOpt] !== true){
				return "";
			}
			return OptNamePairs[interestOpt];
		});
		// const interestNames = this.data.passdata.interest;
		return Suggestions.find({category: {$in: interestOpts} }).fetch();
	},
	checkOffer(offer){
		return offer.length > 0 ? '' : 'show-none';
	}

});

Template.boardingPassPage.events({


});

Template.boardingPassPage.onCreated(function(){


});

Template.boardingPassPage.onRendered(function(){
	console.log(this.data.passdata);

	$("#qrcode").qrcode({
		text: this.data.passdata.queueId,
		"color": "#000000"
	});

});
