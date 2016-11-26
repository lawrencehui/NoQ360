Router.configure({
  layoutTemplate: "layout"
})

Router.route('/scan', {
  name: 'scanningPage',
  template: "scanningPage"
});


Router.route('/boardingPass', {
  name: 'boardingPassPage',
  template: "boardingPassPage"
});
