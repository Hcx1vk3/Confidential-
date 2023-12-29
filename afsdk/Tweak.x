#import <Foundation/Foundation.h>


%hook AppsFlyerLib

// Tried to Disable AppsFlyersdk here

- (BOOL)isStopped { return YES; }
- (BOOL)disableSKAdNetwork { return YES; }
- (BOOL)disableIDFVCollection { return YES; }
- (BOOL)disableCollectASA { return YES; }
- (BOOL)disableAppleAdsAttribution { return YES; }

%end


%hook Singular
 
 //Tried to disable singular sdk 

+ (void)stopAllTracking {}
+ (BOOL)isAllTrackingStopped { return YES; }
+ (BOOL)endSession { return YES; }



%end


%hook SingularConfig

// tried to disable singular config

- (BOOL)skAdNetworkEnabled { return NO; }


%end

%hook SingularUserAgentCollector

- (void)collectUserAgent {}

%end

%hook FIRApp

//TRIED TO DISABLE FIRBaselogging

- (BOOL)isDataCollectionDefaultEnabled { return NO; }

%end


%hook FBSDKSettings

- (void)setAdvertiserIDCollectionEnabled:(BOOL)a { %orig(NO); }
- (BOOL)isAutoLogAppEventsEnabled { return NO; }
- (BOOL)isAdvertiserTrackingEnabled { return NO; }
- (BOOL)isDataProcessingRestricted { return YES; }
- (BOOL)isSKAdNetworkReportEnabled { return NO; }
- (BOOL)autoLogAppEventsEnabled { return NO; }
- (BOOL)autoLogAppEventsEnabled { return NO; }

 
%end


%hook APMMeasurement

- (BOOL)isAnalyticsCollectionDeactivated  { return YES;}
- (BOOL)isAnalyticsCollectionEnabled      { return NO;}
- (BOOL)isNetworkRequestPending           { return NO;}
- (BOOL)isNetworkReadyForRequest          { return NO;}
- (BOOL)shouldAllowAdNetworkRegistration    { return NO; }
- (BOOL)shouldEnableMeasurement    { return NO;}
- (BOOL)shouldUseBackgroundSession { return NO;}
- (BOOL)isEnabled    { return NO;}
- (void)uploadData {}
- (BOOL)hasDataToUpload { return NO;}

%end


%hook CleverTap

- (BOOL)isMuted  { return YES;}
- (BOOL)offline  {return YES; }


%end


%hook AppsFlyerUtils

+ (BOOL)isVPNConnected   {return NO; }

%end

%hook AppLovinMax

- (BOOL)isSDKInitialized { return NO; }
- (BOOL)isInitialized    { return NO; }


%end



%hook FBSDKLogger


- (BOOL)isActive { return NO; }


%end

