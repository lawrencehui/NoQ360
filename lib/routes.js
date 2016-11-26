Router.configure({
  layoutTemplate: "layout"
})

Router.route('/', {
  name: 'scanningPage',
  template: "scanningPage"
});


Router.route('/boardingPass', {
  name: 'boardingPassPage',
  template: "boardingPassPage"
});
