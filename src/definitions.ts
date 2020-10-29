declare module '@capacitor/core' {
  interface PluginRegistry {
    SystemUI: SystemUIPlugin;
  }
}

export interface SystemUIPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
