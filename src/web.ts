import {WebPlugin} from '@capacitor/core';
import {
    SystemUiBarVisibilityOption, SystemUiColorOption,
    SystemUiIconModeOption,
    SystemUIPlugin,
    SystemUiPluginInfoResult
} from './definitions';

export class SystemUIWeb extends WebPlugin implements SystemUIPlugin {
    constructor() {
        super({
            name: 'SystemUI',
            platforms: ['web'],
        });
    }

    // @ts-ignore
    async setIconMode(option: SystemUiIconModeOption): Promise<void> {
    }

    // @ts-ignore
    async setStatusBarIconMode(option: SystemUiIconModeOption): Promise<void> {
    }

    // @ts-ignore
    async setNavigationBarIconMode(option: SystemUiIconModeOption): Promise<void> {
    }

    async getInfo(): Promise<SystemUiPluginInfoResult> {
        return {
            statusBarHeight: 0,
            navigationBarHeight: 0,
        };
    }

    // @ts-ignore
    async setNavigationBarVisibility(option: SystemUiBarVisibilityOption): Promise<void> {
    }

    // @ts-ignore
    async setNavigationBarBackgroundColor(option: SystemUiColorOption): Promise<void> {
    }
}

const SystemUI = new SystemUIWeb();

export {SystemUI};

import {registerWebPlugin} from '@capacitor/core';

registerWebPlugin(SystemUI);
