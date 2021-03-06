package com.crisisapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.airbnb.android.react.lottie.LottiePackage;
import org.wonday.pdf.RCTPdfView;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactlibrary.RNReactNativeMusicplayercontrollerPackage;
import com.cinder92.musicfiles.RNReactNativeGetMusicFilesPackage;
import com.imagepicker.ImagePickerPackage;
import com.wix.interactable.Interactable;
import cl.json.RNSharePackage;
import com.hopding.pdflib.PDFLibPackage;
import com.christopherdro.htmltopdf.RNHTMLtoPDFPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.tkporter.sendsms.SendSMSPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNDeviceInfo(),
            new LottiePackage(),
            new RCTPdfView(),
            new RNFetchBlobPackage(),
            new RNReactNativeMusicplayercontrollerPackage(),
            new RNReactNativeGetMusicFilesPackage(),
            new ImagePickerPackage(),
            new Interactable(),
            new RNSharePackage(),
            new PDFLibPackage(),
            new RNHTMLtoPDFPackage(),
            new LinearGradientPackage(),
            SendSMSPackage.getInstance(),
            new VectorIconsPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
