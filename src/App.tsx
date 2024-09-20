import './App.scss';
import './trackers';
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
// import { Guigui } from './components/Guigui';
import { TonProofDemo } from './components/TonProofDemo/TonProofDemo';


function App() {
  console.log('demo app started');
//   window.tonkeeper = {
//     tonconnect: {
//       listeners: [],
//         walletInfo: {
//     "app_name": "bybitTonWallet",
//     "name": "Bybit Wallet",
//     "image": "https://pic.imgdb.cn/item/6695ec6cd9c307b7e96a7334.png",
//     "about_url": "https://www.bybit.com/web3",
//     "deepLink": "bybitapp://",
//     "platforms": [
//         "ios",
//         "android",
//         "chrome"
//     ]
// },
//       connect() {
//         return {
//           "id": 49,
//           "event": "connect",
//           "payload": {
//               "items": [
//                   {
//                       "name": "ton_addr",
//                       "address": "0:29aeb517e786a6d8d0d9f544d2d75629d943353804d82ba5dc4d4dff2fbe3863",
//                       "network": "-239",
//                       "publicKey": "7547ddb25e9c26966a3b5af4cbebcc28b45387f87413627f91fc6555151cb096",
//                       "walletStateInit": "te6cckECFgEAAwQAAgE0ARUBFP8A9KQT9LzyyAsCAgEgAxACAUgEBwLm0AHQ0wMhcbCSXwTgItdJwSCSXwTgAtMfIYIQcGx1Z70ighBkc3RyvbCSXwXgA/pAMCD6RAHIygfL/8nQ7UTQgQFA1yH0BDBcgQEI9ApvoTGzkl8H4AXTP8glghBwbHVnupI4MOMNA4IQZHN0crqSXwbjDQUGAHgB+gD0BDD4J28iMFAKoSG+8uBQghBwbHVngx6xcIAYUATLBSbPFlj6Ahn0AMtpF8sfUmDLPyDJgED7AAYAilAEgQEI9Fkw7UTQgQFA1yDIAc8W9ADJ7VQBcrCOI4IQZHN0coMesXCAGFAFywVQA88WI/oCE8tqyx/LP8mAQPsAkl8D4gIBIAgPAgEgCQ4CAVgKCwA9sp37UTQgQFA1yH0BDACyMoHy//J0AGBAQj0Cm+hMYAIBIAwNABmtznaiaEAga5Drhf/AABmvHfaiaEAQa5DrhY/AABG4yX7UTQ1wsfgAWb0kK29qJoQICga5D6AhhHDUCAhHpJN9KZEM5pA+n/mDeBKAG3gQFImHFZ8xhAT48oMI1xgg0x/TH9MfAvgju/Jk7UTQ0x/TH9P/9ATRUUO68qFRUbryogX5AVQQZPkQ8qP4ACSkyMsfUkDLH1Iwy/9SEPQAye1U+A8B0wchwACfbFGTINdKltMH1AL7AOgw4CHAAeMAIcAC4wABwAORMOMNA6TIyx8Syx/L/xESExQAbtIH+gDU1CL5AAXIygcVy//J0Hd0gBjIywXLAiLPFlAF+gIUy2sSzMzJc/sAyEAUgQEI9FHypwIAcIEBCNcY+gDTP8hUIEeBAQj0UfKnghBub3RlcHSAGMjLBcsCUAbPFlAE+gIUy2oSyx/LP8lz+wACAGyBAQjXGPoA0z8wUiSBAQj0WfKnghBkc3RycHSAGMjLBcsCUAXPFlAD+gITy2rLHxLLP8lz+wAACvQAye1UAFEAAAAAKamjF3VH3bJenCaWajta9MvrzCi0U4f4dBNif5H8ZVUVHLCWQPOAyo0="
//                   }
//               ],
//               "device": {
//                   "platform": "iphone",
//                   "appName": "Bybit Wallet",
//                   "appVersion": "5.0.0",
//                   "maxProtocolVersion": 2,
//                   "features": [
//                       "SendTransaction",
//                       {
//                           "name": "SendTransaction",
//                           "maxMessages": 4
//                       }
//                   ]
//               }
//           }
//       }
//       },
//       disconnect(){},
//       send(...args: any[]) {
//         console.log('send', args);
//       },
//           // 事件监听，callback会push到callbacks数组中
//     listen(callback: any) {
//           this.listeners.push(callback as never);
//           const listeners = this.listeners;
//           return () => {
//               const index = listeners.indexOf(callback  as never);
//               if (index > -1) {
//                   listeners.splice(index, 1);
//               }
//           };
//       },

//       notify(event: any) {
//           this.listeners.forEach((item) => item(event));
//           return event;
//       },
//       isWalletBrowser: true,
//     protocolVersion: 2,
//     }}
        
  console.log((window as any).bybitTonWallet);

  return (
    <TonConnectUIProvider
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
      uiPreferences={{theme: THEME.DARK}}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "bybitTonWallet",
            name: "Bybit Wallet",
            imageUrl: "https://static.bymj.io/bhop/image/Q3Kmzw7qczSZF5eqfo6pW8QuT1MDMmqC80lWxFBhiE0.png",
            aboutUrl: "https://www.bybit.com",
            universalLink: "https://app.bybit.com/ton-connect",
            jsBridgeKey: "bybitTonWallet",
            bridgeUrl: "https://api2-testnet.bybit.com/spot/api/web3/bridge/ton/bridge",
            platforms: ["ios", "android", "chrome"],
          },
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"]
          },
          {
            appName: "nicegramWallet",
            name: "Nicegram Wallet",
            imageUrl: "https://static.nicegram.app/icon.png",
            aboutUrl: "https://nicegram.app",
            universalLink: "https://nicegram.app/tc",
            deepLink: "nicegram-tc://",
            jsBridgeKey: "nicegramWallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["ios", "android"]
          },
          {
            appName: "binanceTonWeb3Wallet",
            name: "Binance Web3 Wallet",
            imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMEIwRTExIi8+CjxwYXRoIGQ9Ik01IDE1TDcuMjU4MDYgMTIuNzQxOUw5LjUxNjEzIDE1TDcuMjU4MDYgMTcuMjU4MUw1IDE1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNOC44NzA5NyAxMS4xMjlMMTUgNUwyMS4xMjkgMTEuMTI5TDE4Ljg3MSAxMy4zODcxTDE1IDkuNTE2MTNMMTEuMTI5IDEzLjM4NzFMOC44NzA5NyAxMS4xMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMi43NDE5IDE1TDE1IDEyLjc0MTlMMTcuMjU4MSAxNUwxNSAxNy4yNTgxTDEyLjc0MTkgMTVaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMS4xMjkgMTYuNjEyOUw4Ljg3MDk3IDE4Ljg3MUwxNSAyNUwyMS4xMjkgMTguODcxTDE4Ljg3MSAxNi42MTI5TDE1IDIwLjQ4MzlMMTEuMTI5IDE2LjYxMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0yMC40ODM5IDE1TDIyLjc0MTkgMTIuNzQxOUwyNSAxNUwyMi43NDE5IDE3LjI1ODFMMjAuNDgzOSAxNVoiIGZpbGw9IiNGMEI5MEIiLz4KPC9zdmc+Cg==",
            aboutUrl: "https://www.binance.com/en/web3wallet",
            deepLink: "bnc://app.binance.com/cedefi/ton-connect",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "safari", "ios", "android"],
            universalLink: "https://app.binance.com/cedefi/ton-connect"
          },
          {
            appName: "okxTonWallet",
            name: "OKX Wallet",
            imageUrl: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
            aboutUrl: "https://www.okx.com/web3",
            universalLink: "https://www.ouxyi.link/ul/uYJPB0",
            bridgeUrl: "https://www.okx.com/tonbridge/discover/rpc/bridge",
            jsBridgeKey: "okxTonWallet",
            platforms: ["chrome", "safari", "firefox", "ios", "android"]
          },
          {
            appName: "okxTonWalletTr",
            name: "OKX TR Wallet",
            imageUrl: "https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png",
            aboutUrl: "https://tr.okx.com/web3",
            universalLink: "https://www.ouxyi.link/ul/uYJPB0?entityId=5",
            bridgeUrl: "https://www.okx.com/tonbridge/discover/rpc/bridge",
            jsBridgeKey: "okxTonWallet",
            platforms: ["chrome", "safari", "firefox", "ios", "android"]
          }
        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start'
      }}
    >
      <div className="app">
        <Header/>
        {/* <Guigui /> */}
        <TxForm/>
        <TonProofDemo />
        <Footer/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
