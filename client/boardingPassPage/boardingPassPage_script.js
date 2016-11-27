Template.boardingPassPage.helpers({
	getToday(){
		return moment().format('DD MMM YYYY')
	},
	getETA(){
		let queueCount = Queues.find({}).count();
		let minsToQueue = queueCount/10;
		let timeETA = moment().add(minsToQueue, 'm')
		console.log('queueCount', queueCount);
		console.log('minsToQueue', minsToQueue);
		console.log('timeETA', timeETA);

		// moment().add(minsToQueue, 'm')
		let roundedMinute = 5 * Math.round( moment(timeETA).minutes() / 5 );
		console.log('roundedMinute', roundedMinute);

		return moment().hours(timeETA.hours()).minutes(roundedMinute).format('hh:mm')
	},
	getSuggestions(){
		const OptNamePairs = {
			shoppingOpt: "Shopping",
			foodOpt: "Food",
			sightseeingOpt: "Sightseeing"
		};

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
	// 'scroll .infoInputPageContent'(){
	// 	console.log('being scrolled');
	// }

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
