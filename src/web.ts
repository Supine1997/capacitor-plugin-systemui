import {WebPlugin} from '@capacitor/core';
import {
    SystemUIBarVisibilityOption, SystemUIColorOption,
    SystemUIIconModeOption,
    SystemUIPlugin,
    SystemUIPluginInfoResult
} from './definitions';

export class SystemUIWeb extends WebPlugin implements SystemUIPlugin {
    constructor() {
        super({
            name: 'SystemUI',
            platforms: ['web'],
        });
    }

    // @ts-ignore
    async setIconMode(option: SystemUIIconModeOption): Promise<void> {
    }

    // @ts-ignore
    async setStatusBarIconMode(option: SystemUIIconModeOption): Promise<void> {
    }

    // @ts-ignore
    async setNavigationBarIconMode(option: SystemUIIconModeOption): Promise<void> {
    }

    async getInfo(): Promise<SystemUIPluginInfoResult> {
        return {
            statusBarHeight: 0,
            navigationBarHeight: 0,
        };
    }

    // @ts-ignore
    async setNavigationBarVisibility(option: SystemUIBarVisibilityOption): Promise<void> {
    }

    // @ts-ignore
    async setNavigationBarBackgroundColor(option: SystemUIColorOption): Promise<void> {
    }
}

const SystemUI = new SystemUIWeb();

export {SystemUI};

import {registerWebPlugin} from '@capacitor/core';

registerWebPlugin(SystemUI);
