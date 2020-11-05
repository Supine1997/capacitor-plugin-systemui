import { WebPlugin } from '@capacitor/core';
import { SystemUIBarVisibilityOption, SystemUIColorOption, SystemUIIconModeOption, SystemUIPlugin, SystemUIPluginInfoResult } from './definitions';
export declare class SystemUIWeb extends WebPlugin implements SystemUIPlugin {
    constructor();
    setIconMode(option: SystemUIIconModeOption): Promise<void>;
    setStatusBarIconMode(option: SystemUIIconModeOption): Promise<void>;
    setNavigationBarIconMode(option: SystemUIIconModeOption): Promise<void>;
    getInfo(): Promise<SystemUIPluginInfoResult>;
    setNavigationBarVisibility(option: SystemUIBarVisibilityOption): Promise<void>;
    setNavigationBarBackgroundColor(option: SystemUIColorOption): Promise<void>;
}
declare const SystemUI: SystemUIWeb;
export { SystemUI };
