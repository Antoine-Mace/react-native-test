# React Native Test, QudiniTest Application

[![rn version][rn-badge]][rn-url] [![react version][react-badge]][react-url] [![jest version][jest-badge]][jest-url]

## Environment

Install NODE and Watchman (Recommended):
```
brew install
brew install watchman
```

Install react-native CLI:
```
npm install -g react-native-cli
```

To run android or ios you need to install android studio and/or xcode first.

Install Xcode  (Version >=8) via the Mac App Store

https://developer.apple.com/xcode/

Download and install JDK8 or newer

http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

Android Studio:

https://developer.android.com/studio/install.html

then you need tu run emulator of your device

https://developer.android.com/studio/run/emulator.html

Setup your Android Development environment

https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment


## Quick start

From qudiniTest directory,

run with `yarn` or `npm`

```
yarn
yarn android
yarn ios
```

### Production build

From root directory,

run with `yarn` or `npm`

```
yarn ios-build-release [DIR] [PACKAE_NAME] [VERSION]
yarn android-build-release  [DIR] [PACKAE_NAME] [VERSION]
```
exemple:
```
yarn ios-build-release qudiniTest qudinitest 1.0.0
yarn android-build-release qudiniTest qudinitest 1.0.0
```
## Test

From qudiniTest directory,

run with `yarn` or `npm`
```
yarn test
```

## Flow

From qudiniTest directory,

run with `yarn` or `npm`
```
yarn flow
```

[rn-badge]: https://img.shields.io/badge/RN-0.55.*-green.svg?style=flat
[rn-url]: https://facebook.github.io/react-native/
[react-badge]: https://img.shields.io/badge/React-16.3.*-green.svg?style=flat
[react-url]: https://reactjs.org/
[jest-badge]: https://img.shields.io/badge/Jest-22.4.*-green.svg?style=flat
[jest-url]: https://facebook.github.io/jest/