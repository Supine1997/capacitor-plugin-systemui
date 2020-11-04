declare module '@capacitor/core' {
    interface PluginRegistry {
        SystemUI: SystemUIPlugin;
    }
}
export interface SystemUIPlugin {
    setIconMode(option: SystemUiIconModeOption): Promise<void>;
    setStatusBarIconMode(option: SystemUiIconModeOption): Promise<void>;
    setNavigationBarIconMode(option: SystemUiIconModeOption): Promise<void>;
    getInfo(): Promise<SystemUiPluginInfoResult>;
    setNavigationBarVisibility(option: SystemUiBarVisibilityOption): Promise<void>;
    setNavigationBarBackgroundColor(option: SystemUiColorOption): Promise<void>;
}
export interface SystemUiIconModeOption {
    mode: SystemUiIconMode;
}
export interface SystemUiBarVisibilityOption {
    visibility: SystemUiBarVisibility;
}
export interface SystemUiColorOption {
    color: string;
}
export interface SystemUiPluginInfoResult {
    statusBarHeight: number;
    navigationBarHeight: number;
}
export declare enum SystemUiIconMode {
    LIGHT = "LIGHT",
    DARK = "DARK"
}
export declare enum SystemUiBarVisibility {
    VISIBLE = "VISIBLE",
    HIDDEN = "HIDDEN"
}
