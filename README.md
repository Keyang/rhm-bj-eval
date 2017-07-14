# RedHat mobile BlueJeans evaluation

This project is for BJ evaluation on cordova mobile apps.

To get started 
1. clone the repo
2. `npm install -g cordova@7.0.1`
3. `npm install .`
4. cordova platform add android
5. cordova platform add ios
6. cordova prepare
7. cordova run android


Result:

The app is working with Android platform under crosswalk plugin with any android OS version >4.0.0

For iOS, the app use ios webrtc plugin to expose WebRTC apis on iOS 9+. WebRTC has proven to be working ok in the mobile app but BlueJeans SDK does not and threw error when trying to retrieve stream tracks. Given limited time, no further investigation done.

