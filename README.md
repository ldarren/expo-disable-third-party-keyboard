# Expo Disable Third-Party Keyboard Plugin

This Expo Config Plugin helps enhance your app's security by disabling third-party keyboards, which could potentially pose a security risk.

## Installation

1. Install the plugin using npm or Yarn:
   ```sh
   npm install expo-disable-third-party-keyboard-plugin
	 or
	 yarn add expo-disable-third-party-keyboard-plugin
	 ```

2. Add the plugin to your app.json or app.config.js
```json
{
  "expo": {
    "plugins": [
      ["expo-disable-third-party-keyboard-plugin", { "isEnabled": true }]
    ]
  }
}
```
## Options
- `isEnabled`: A boolean to toggle the plugin on or off. Default is `true`.

## Notes
- This plugin is designed for iOS apps and modifies the `AppDelegate.m` file.
- Ensure to test your app thoroughly after applying this plugin.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with improvements.

### Enhancements and Considerations
- Error Handling: Ensure your plugin checks for possible errors, such as the absence of the AppDelegate.m file or the @end keyword.
- Configuration Options: While this plugin currently has a simple boolean option, consider adding more configurability as needed. For example, the ability to disable the plugin for certain screens only.
- Platform Checks: If expanding the plugin's scope, include checks to only apply iOS-specific modifications when the app is being run on an iOS device.
