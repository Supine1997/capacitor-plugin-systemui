declare module '@capacitor/core' {
  interface PluginRegistry {
    SystemUI: SystemUIPlugin;
  }
}

export interface SystemUIPlugin {
  /**
   * 同时设置状态栏&导航栏Icon模式
   * @param option SystemUiIconModeOption
   */
  setIconMode(option: SystemUiIconModeOption): Promise<void>;

  /**
   * 设置状态栏图标模式
   * @param option SystemUiIconModeOption
   */
  setStatusBarIconMode(option: SystemUiIconModeOption): Promise<void>;

  /**
   * 设置导航栏图标模式
   * @param option SystemUiIconModeOption
   */
  setNavigationBarIconMode(option: SystemUiIconModeOption): Promise<void>;

  /**
   * 获取UI信息
   */
  getInfo(): Promise<SystemUiPluginInfoResult>;

  /**
   * 设置导航栏是否可见
   * @param option SystemUiBarVisibilityOption
   */
  setNavigationBarVisibility(option: SystemUiBarVisibilityOption): Promise<void>;

  /**
   * 设置导航栏背景色
   * @param option SystemUiColorOption
   */
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
  statusBarHeight: number; // 状态栏高度
  navigationBarHeight: number; // 导航栏高度
}

export enum SystemUiIconMode {
  LIGHT = 'LIGHT', // 浅色图标模式
  DARK = 'DARK', // 深色图标模式
}

export enum SystemUiBarVisibility {
  VISIBLE = 'VISIBLE', // 可见
  HIDDEN = 'HIDDEN', // 不可见
}
