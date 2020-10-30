import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SystemUI)
public class SystemUI: CAPPlugin {

    @objc func setIconMode(_ call: CAPPluginCall) {
        call.error("platform not support!")
    }

    @objc func setStatusBarIconMode(_ call: CAPPluginCall) {
        call.error("platform not support!")
    }

    @objc func setNavigationBarIconMode(_ call: CAPPluginCall) {
        call.error("platform not support!")
    }

    @objc func getInfo(_ call: CAPPluginCall) {
        call.error("platform not support!")
    }

    @objc func setNavigationBarVisibility(_ call: CAPPluginCall) {
        call.error("platform not support!")
    }

    @objc func setNavigationBarBackgroundColor(_ call: CAPPluginCall) {
        call.error("platform not support!")
    }
}
