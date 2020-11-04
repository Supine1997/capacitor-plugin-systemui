import { WebPlugin } from '@capacitor/core';
import { SystemUiBarVisibilityOption, SystemUiColorOption, SystemUiIconModeOption, SystemUIPlugin, SystemUiPluginInfoResult } from './definitions';
export declare class SystemUIWeb extends WebPlugin implements SystemUIPlugin {
    constructor();
    setIconMode(option: SystemUiIconModeOption): Promise<void>;
    setStatusBarIconMode(option: SystemUiIconModeOption): Promise<void>;
    setNavigationBarIconMode(option: SystemUiIconModeOption): Promise<void>;
    getInfo(): Promise<SystemUiPluginInfoResult>;
    setNavigationBarVisibility(option: SystemUiBarVisibilityOption): Promise<void>;
    setNavigationBarBackgroundColor(option: SystemUiColorOption): Promise<void>;
}
declare const SystemUI: SystemUIWeb;
export { SystemUI };
