import { WebPlugin } from '@capacitor/core';
import { SystemUIPlugin } from './definitions';

export class SystemUIWeb extends WebPlugin implements SystemUIPlugin {
  constructor() {
    super({
      name: 'SystemUI',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const SystemUI = new SystemUIWeb();

export { SystemUI };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SystemUI);
