Router.configure({
  layoutTemplate: "layout"
})

Router.route('/', {
  name: 'scanningPage',
  template: "scanningPage"
});


Router.route('/infoInput', {
  name: 'infoInputPage',
  template: "infoInputPage"
});

Router.route('/boardingPass', {
  name: 'boardingPassPage',
  template: "boardingPassPage"
});
