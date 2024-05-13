const { withAppDelegate } = require('@expo/config-plugins');

// Code snippet to insert into AppDelegate.m
const keyboardDisableCodeSnippet = `
- (BOOL)application:(UIApplication *)application shouldAllowExtensionPointIdentifier:(UIApplicationExtensionPointIdentifier)extensionPointIdentifier {
    if ([extensionPointIdentifier isEqualToString:UIApplicationKeyboardExtensionPointIdentifier]) {
        return NO;
    }
    return YES;
}`;

const withDisableThirdPartyKeyboard = (config, { isEnabled = true }) => {
  if (!isEnabled) return config;

  return withAppDelegate(config, async (config) => {
    if (!config.modResults.contents.includes(keyboardDisableCodeSnippet)) {
      // Assuming AppDelegate.m ends with @end, which typically should be the case
      config.modResults.contents = config.modResults.contents.replace(
        /@end/,
        `${keyboardDisableCodeSnippet}\n@end`
      );
    }
    return config;
  });
};

module.exports = withDisableThirdPartyKeyboard;
