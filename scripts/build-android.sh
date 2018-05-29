#!/usr/bin/env bash

if [ $1 ]; then
  DIR=$1
  if [ $2 ]; then
    NAME=$2
    if [ $3 ]; then
      VERSION=$3

      APK_SIGNER=~/Library/Android/sdk/build-tools/26.0.1/apksigner
      KEYSTORE=./keystore.jks
      clear

      cd $DIR

      echo "Creating build folder build/android"
      mkdir -p build && mkdir -p build/android

      if ! [ -x "$(command -v node)" ]; then
        echo "Error: you must install Node.js first."
        exit 1
      fi

      if [ -x "$(command -v yarn)" ]; then
        echo "Using Yarn to install dependency"
        yarn
      else
        if [ -x "$(command -v npm)" ]; then
          echo "Using Npm to install dependency"
          npm install
        else
          echo "Error: you must install Yarn or Npm first."
          echo "- yarn: https://yarnpkg.com/lang/en/docs/install/"
          echo "- npm: https://www.npmjs.com/get-npm"
          exit 1
        fi
      fi

      if ! [ -x "$(command -v react-native)" ]; then
        echo "Error: react-native client is not installed."
        exit 1
      fi
      echo "Link dependencies into $NAME project"
      react-native link

      echo "Starting Android build of $NAME-release-$VERSION"
      cd android
      ./gradlew assembleRelease

      if [ -f ./app/build/outputs/apk/app-release-unsigned.apk ]; then
        rsync ./app/build/outputs/apk/app-release-unsigned.apk ../build/android/$NAME-release-$VERSION.apk
        if [ -f ../build/android/$NAME-release-$VERSION.apk ]; then
          echo "Success: $NAME-release-$VERSION.apk as been created in $DIR/build/android folder."
          cd ../..
          if [ $KEYSTORE_PASSWORD ]; then
            echo "Using keystore to sign apk"
            echo $KEYSTORE_PASSWORD | $APK_SIGNER sign --ks $KEYSTORE ./$DIR/build/android/$NAME-release-$VERSION.apk
          else
            echo "KEYSTORE_PASSWORD environment variable must be set"
          fi
        else
          echo "Error: Import of /$DIR/android/app/build/outputs/apk/app-release-unsigned.apk failed."
        fi
      else
        echo "Error: Build failed."
      fi
    else
      echo "Error: App version is missing ./build-android.sh [APP_DIRECTORY] [PACKAGE_NAME] [APP_VERSION]"
    fi
  else
    echo "Error: Package name is missing ./build-android.sh [APP_DIRECTORY] [PACKAGE_NAME] [APP_VERSION]"
  fi
else
  echo "Error: Application directory  is missing ./build-android.sh [APP_DIRECTORY] [PACKAGE_NAME] [APP_VERSION]"
fi