#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(SystemUI, "SystemUI",
           CAP_PLUGIN_METHOD(setIconMode, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setStatusBarIconMode, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setNavigationBarIconMode, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getInfo, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setNavigationBarVisibility, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setNavigationBarBackgroundColor, CAPPluginReturnPromise);
)
