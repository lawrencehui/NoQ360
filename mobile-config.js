App.setPreference('Orientation', 'portrait');
App.setPreference('ios-orientation-iphone', 'portrait');
App.setPreference('AutoHideSplashScreen' ,'true');
App.setPreference('StatusBarOverlaysWebView', true);
App.setPreference('StatusBarStyle', 'default');
// App.setPreference('FadeSplashScreen', 'true');
// App.setPreference('FadeSplashScreenDuration', '500');
App.accessRule("*");
App.accessRule('http://192.168.5.108');

// App.icons({
//   // iOS
//   'iphone_2x': 'resources/ios/Icon-120.png',
//   'iphone_3x': 'resources/ios/Icon-180@3x.png',
//   'ipad': 'resources/ios/Icon-76.png',
//   'ipad_2x': 'resources/ios/Icon-152.png',
//   'ios_settings': 'resources/ios/Icon-29.png',
//   'ios_settings_2x': 'resources/ios/Icon-58.png',
//   'ios_settings_3x': 'resources/ios/Icon-87.png',
//   'ios_spotlight': 'resources/ios/Icon-40.png',
//   'ios_spotlight_2x': 'resources/ios/Icon-40@2x.png',
//   'ipad_pro': 'resources/ios/Icon-167.png',
//
//   // Android
//   'android_mdpi': 'resources/android/drawable-mdpi/icon.png',
//   'android_hdpi': 'resources/android/drawable-hdpi/icon.png',
//   'android_xhdpi': 'resources/android/drawable-xhdpi/icon.png',
//   'android_xxhdpi': 'resources/android/drawable-xxhdpi/icon.png',
//   'android_xxxhdpi': 'resources/android/drawable-xxxhdpi/icon.png'
// });
//
// //
// App.launchScreens({
//
//   'iphone_2x': "resources/splash/iphone4.png",
//   'iphone5':"resources/splash/iphone5.png",
//   'iphone6':"resources/splash/iphone6.png",
//   'iphone6p_portrait':"resources/splash/iphone6plus.png",
//
//   'android_mdpi_portrait':"resources/splash/MDPI.png",
//   'android_hdpi_portrait':"resources/splash/HDPI.png",
//   'android_xhdpi_portrait':"resources/splash/XHDPI.png",
//   'android_xxhdpi_portrait':"resources/splash/XXHDPI.png"
// });
