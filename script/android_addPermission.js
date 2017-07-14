var AndroidManifest = require('androidmanifest');
var manifestFilePath = __dirname+'/../platforms/android/AndroidManifest.xml'
var manifest = new AndroidManifest().readFile(manifestFilePath)
 
manifest
.usesPermission('android.permission.RECORD_AUDIO')
.usesPermission('android.permission.CAMERA')
manifest.findOrCreateByAndroidName(manifest.$("manifest"),"uses-feature","android.hardware.camera")
manifest.findOrCreateByAndroidName(manifest.$("manifest"),"uses-feature","android.hardware.camera.autofocus")

manifest.writeFile(manifestFilePath);