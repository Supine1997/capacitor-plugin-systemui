# capacitor-plugin-systemui

Capacitor系统UI插件。

## 安装

```shell script
npm install git+http://192.168.3.168:12000/tool/capacitor-plugin-systemui.git
ionic capacitor sync
```

## 配置

### Android
> `android/app/src/main/java/com/globletech/petid/MainActivity.java`
```java
import com.globletech.plugins.systemui.SystemUI;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(SystemUI.class);
        }});
    }
}
```

## 例子
```typescript
import {Plugins} from "@capacitor/core";
import {SystemUIPlugin} from 'capacitor-plugin-systemui';

const SystemUI = Plugins.SystemUI as SystemUIPlugin;

SystemUI.getInfo();
```

## [接口](src/definitions.ts)

## 提及
[ImmersionBar](https://github.com/gyf-dev/ImmersionBar)
