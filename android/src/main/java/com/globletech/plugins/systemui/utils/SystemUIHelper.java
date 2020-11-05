package com.globletech.plugins.systemui.utils;

import android.app.Activity;
import android.content.res.Resources;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import com.gyf.immersionbar.OSUtils;

/**
 * 系统UI工具类
 */
public class SystemUIHelper {

    /**
     * 设置内容全屏模式
     * *即内容延申到状态栏导航栏一下 并且状态栏导航栏全透明
     *
     * @param activity Activity
     */
    public static void setContentFullScreen(Activity activity) {
        Window window = activity.getWindow();
        View decorView = window.getDecorView();

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            window.clearFlags(
                    WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS
                            | WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION
            );
            decorView.setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            );
            window.addFlags(
                    WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS
            );
            window.setStatusBarColor(Color.TRANSPARENT);
            window.setNavigationBarColor(Color.TRANSPARENT);
            return;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
    }

    /**
     * 设置状态栏深色模式
     *
     * @param activity Activity
     * @param light    light
     */
    public static void setStatusBarMode(Activity activity, boolean light) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            View decorView = activity.getWindow().getDecorView();
            int visibilityFlags = decorView.getSystemUiVisibility();
            if (light) {
                decorView.setSystemUiVisibility(visibilityFlags & ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
            } else {
                decorView.setSystemUiVisibility(visibilityFlags | View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
            }
        }
    }

    /**
     * 设置导航栏深色模式
     *
     * @param activity Activity
     * @param light    light
     */
    public static void setNavigationBarMode(Activity activity, boolean light) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            View decorView = activity.getWindow().getDecorView();
            int visibilityFlags = decorView.getSystemUiVisibility();
            if (light) {
                decorView.setSystemUiVisibility(visibilityFlags & ~View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
            } else {
                decorView.setSystemUiVisibility(visibilityFlags | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
            }
        }
    }

    /**
     * 获取状态栏高度
     *
     * @param activity context
     * @return height *单位dp
     */
    public static int getStatusBarHeight(Activity activity) {
        int pxValue = 0;
        if (OSUtils.isMIUI()) {
            pxValue = new BarConfig(activity).getStatusBarHeight();
        } else {
            Resources resources = activity.getResources();
            int resourceId = resources.getIdentifier("status_bar_height", "dimen", "android");
            pxValue = resources.getDimensionPixelSize(resourceId);
        }
        return pxValue;
    }

    /**
     * 获取导航栏高度
     *
     * @param activity context
     * @return height *单位dp
     */
    public static int getNavigationBarHeight(Activity activity) {
        int pxValue = 0;
        if (OSUtils.isMIUI() || OSUtils.isEMUI()) {
            pxValue = new BarConfig(activity).getNavigationBarHeight();
        } else {
            Resources resources = activity.getResources();
            int resourceId = resources.getIdentifier("navigation_bar_height", "dimen", "android");
            pxValue = resources.getDimensionPixelSize(resourceId);
        }
        return pxValue;
    }
}
