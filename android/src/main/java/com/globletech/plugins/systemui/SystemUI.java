package com.globletech.plugins.systemui;

import android.graphics.Color;
import android.view.View;
import android.view.Window;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.globletech.plugins.systemui.utils.ScreenUtil;
import com.globletech.plugins.systemui.utils.SystemUIHelper;

/**
 * 系统UI插件
 */
@NativePlugin
public class SystemUI extends Plugin {
    enum UiCategory {STATUS_BAR, NAVIGATION_BAR, ALL;}

    @PluginMethod()
    public void setIconMode(final PluginCall call) {
        setSystemUIIconMode(call, UiCategory.ALL);
    }

    @PluginMethod()
    public void setStatusBarIconMode(final PluginCall call) {
        setSystemUIIconMode(call, UiCategory.STATUS_BAR);
    }

    @PluginMethod()
    public void setNavigationBarIconMode(final PluginCall call) {
        setSystemUIIconMode(call, UiCategory.NAVIGATION_BAR);
    }

    @PluginMethod()
    public void setNavigationBarVisibility(final PluginCall call) {
        final String visibility = call.getString("visibility");
        if (visibility == null) {
            call.error("Mode must be provided");
            return;
        }
        boolean isHidden = visibility.equals("HIDDEN");
        getBridge().executeOnMainThread(() -> {
            Window window = getBridge().getActivity().getWindow();
            View decorView = window.getDecorView();
            int uiOptions = decorView.getSystemUiVisibility();
            if (isHidden) { // 默认沉浸模式
                uiOptions = uiOptions | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
            } else {
                uiOptions = uiOptions & ~View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                        & ~View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
            }
            decorView.setSystemUiVisibility(uiOptions);
            call.success();
        });
    }

    @PluginMethod()
    public void setNavigationBarBackgroundColor(final PluginCall call) {
        final String color = call.getString("color");
        if (color == null) {
            call.error("Color must be provided");
            return;
        }
        getBridge().executeOnMainThread(() -> {
            Window window = getBridge().getActivity().getWindow();
            try {
                window.setNavigationBarColor(
                        Color.parseColor(color.toUpperCase())
                );
                call.success();
            } catch (IllegalArgumentException ex) {
                call.error("Invalid color provided. Must be a hex string (ex: #ff0000");
            }
        });
    }

    @PluginMethod()
    public void getInfo(final PluginCall call) {
        JSObject obj = new JSObject();
        obj.put(
                "statusBarHeight",
                ScreenUtil.px2dp(
                        getBridge().getActivity(),
                        SystemUIHelper.getStatusBarHeight(getBridge().getActivity())
                )
        );
        obj.put(
                "navigationBarHeight",
                ScreenUtil.px2dp(
                        getBridge().getActivity(),
                        SystemUIHelper.getNavigationBarHeight(getBridge().getActivity())
                )
        );
        call.success(obj);
    }

    private void setSystemUIIconMode(final PluginCall call, UiCategory category) {
        final String mode = call.getString("mode");
        if (mode == null) {
            call.error("Mode must be provided");
            return;
        }
        boolean isLight = mode.equals("LIGHT");
        getBridge().executeOnMainThread(() -> {
            switch (category) {
                case STATUS_BAR:
                    SystemUIHelper.setStatusBarMode(getBridge().getActivity(), isLight);
                    break;
                case NAVIGATION_BAR:
                    SystemUIHelper.setNavigationBarMode(getBridge().getActivity(), isLight);
                    break;
                case ALL:
                    SystemUIHelper.setStatusBarMode(getBridge().getActivity(), isLight);
                    SystemUIHelper.setNavigationBarMode(getBridge().getActivity(), isLight);
                    break;
            }
            call.success();
        });
    }
}
