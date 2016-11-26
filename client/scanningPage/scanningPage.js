Template.scanningPage.helpers({
	getToday(){
		return new Date()
	}

});

Template.scanningPage.events({
	'click .scanBtn'(){
		console.log('I got clicked');
		cordova.plugins.barcodeScanner.scan(
			(result)=>{
				console.log(result)
				alert(result);
			}
		);
	}

});

Template.scanningPage.onCreated(function(){


});

Template.scanningPage.onRendered(function(){
	cordova.plugins.barcodeScanner.scan(
		(result)=>{
			console.log(result)
			alert(result);
		}
	);

});
