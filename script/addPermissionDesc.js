var p=__dirname+"/../platforms/ios/MyApp/MyApp-Info.plist";
var plist=require("plist");
var fs=require("fs");
var data=fs.readFileSync(p,"utf8");
var obj=plist.parse(data);
obj.NSCameraUsageDescription="BJ uses your camera to make video calls.";
obj.NSMicrophoneUsageDescription="BJ uses your microphone to make video calls.";
var out=plist.build(obj);
fs.writeFileSync(p,out,{encoding:"utf8"});