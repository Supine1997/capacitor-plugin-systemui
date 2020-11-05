declare module '@capacitor/core' {
  interface PluginRegistry {
    SystemUI: SystemUIPlugin;
  }
}

export interface SystemUIPlugin {
  /**
   * 同时设置状态栏&导航栏Icon模式
   * @param option SystemUIIconModeOption
   */
  setIconMode(option: SystemUIIconModeOption): Promise<void>;

  /**
   * 设置状态栏图标模式
   * @param option SystemUIIconModeOption
   */
  setStatusBarIconMode(option: SystemUIIconModeOption): Promise<void>;

  /**
   * 设置导航栏图标模式
   * @param option SystemUIIconModeOption
   */
  setNavigationBarIconMode(option: SystemUIIconModeOption): Promise<void>;

  /**
   * 获取UI信息
   */
  getInfo(): Promise<SystemUIPluginInfoResult>;

  /**
   * 设置导航栏是否可见
   * @param option SystemUIBarVisibilityOption
   */
  setNavigationBarVisibility(option: SystemUIBarVisibilityOption): Promise<void>;

  /**
   * 设置导航栏背景色
   * @param option SystemUIColorOption
   */
  setNavigationBarBackgroundColor(option: SystemUIColorOption): Promise<void>;
}

export interface SystemUIIconModeOption {
  mode: SystemUIIconMode;
}

export interface SystemUIBarVisibilityOption {
  visibility: SystemUIBarVisibility;
}

export interface SystemUIColorOption {
  color: string;
}

export interface SystemUIPluginInfoResult {
  /**
   * 状态栏高度
   */
  statusBarHeight: number;
  /**
   * 导航栏高度
   */
  navigationBarHeight: number;
}

export enum SystemUIIconMode {
  /**
   * 浅色图标模式
   */
  LIGHT = 'LIGHT',
  /**
   * 深色图标模式
   */
  DARK = 'DARK',
}

export enum SystemUIBarVisibility {
  /**
   * 可见
   */
  VISIBLE = 'VISIBLE',
  /**
   * 不可见
   */
  HIDDEN = 'HIDDEN',
}
