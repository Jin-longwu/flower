if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/uni-ui/uni-grid/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-grid-item/uni-grid-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/maramlee-waterfalls-flow/maramlee-waterfalls-flow?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup?hash=63f3d097e78ac04213190ce4a92c81860617f7b4');
require('../../components/uni-ui/uni-list/uni-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-list-item/uni-list-item?hash=fe1213e9c0f0e8f3af9638ea181ed89769808cde');
require('../../components/uni-ui/uni-goods-nav/uni-goods-nav?hash=74adc7affc884ab4340065f9141f18d3ecec70a1');
require('../../components/uni-popup/uni-popup-message?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-popup/uni-popup-dialog?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=7ec40f696a8b432345732e6959ffc0ebcd5dca08');
require('../../pages/shop/shop?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/classify/classify?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/member/member?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cart/cart?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/moregoods/moregoods?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/detail/detail?hash=8e8a3548a04fb32cd7b47f6604dbfa88cc2bfc3f');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}