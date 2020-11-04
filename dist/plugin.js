var capacitorSystemUI = (function (exports, core) {
    'use strict';

    (function (SystemUiIconMode) {
        SystemUiIconMode["LIGHT"] = "LIGHT";
        SystemUiIconMode["DARK"] = "DARK";
    })(exports.SystemUiIconMode || (exports.SystemUiIconMode = {}));
    (function (SystemUiBarVisibility) {
        SystemUiBarVisibility["VISIBLE"] = "VISIBLE";
        SystemUiBarVisibility["HIDDEN"] = "HIDDEN";
    })(exports.SystemUiBarVisibility || (exports.SystemUiBarVisibility = {}));

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class SystemUIWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'SystemUI',
                platforms: ['web'],
            });
        }
        // @ts-ignore
        setIconMode(option) {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
        // @ts-ignore
        setStatusBarIconMode(option) {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
        // @ts-ignore
        setNavigationBarIconMode(option) {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
        getInfo() {
            return __awaiter(this, void 0, void 0, function* () {
                return {
                    statusBarHeight: 0,
                    navigationBarHeight: 0,
                };
            });
        }
        // @ts-ignore
        setNavigationBarVisibility(option) {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
        // @ts-ignore
        setNavigationBarBackgroundColor(option) {
            return __awaiter(this, void 0, void 0, function* () {
            });
        }
    }
    const SystemUI = new SystemUIWeb();
    core.registerWebPlugin(SystemUI);

    exports.SystemUI = SystemUI;
    exports.SystemUIWeb = SystemUIWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map