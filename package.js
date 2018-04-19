Package.describe({
  name: 'goodideal:bootstrap3-datetimepicker',
  summary: "Bootstrap 3 DateTime picker from @Eonasdan, packaged for Meteor.js",
  version: "4.17.47",
  git: "https://github.com/Eonasdan/bootstrap-datetimepicker"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('jquery', 'client');
  api.use('momentjs:moment@2.8.4');

  api.add_files([
    'lib/css/bootstrap-datetimepicker.css', // Add Date Time Picker CSS and JS files
    'lib/js/bootstrap-datetimepicker.js',
  ], 'client');
});
