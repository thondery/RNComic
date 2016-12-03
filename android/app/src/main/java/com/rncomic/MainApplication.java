package com.rncomic;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.microsoft.codepush.react.CodePush;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    /*@Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }*/

    @Override
    protected String getJSBundleFile(){
        return CodePush.getBundleUrl();
    }
    
    @Override 
    protected List<ReactPackage> getPackages(){
        //实例化 CodePush运行时，把它添加到 packages,填写正确的 部署秘钥（ deployment key）
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new CodePush("U024rwqr7FDpG98r2nuqXm3vN9f_EJD1r_a3W", MainApplication.this, BuildConfig.DEBUG)
        );
    }

    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    /*@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
      );
    }*/
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
