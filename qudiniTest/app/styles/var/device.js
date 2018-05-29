import {Platform, PixelRatio, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window');

const platform = Platform.OS;

const pixelCalc = (size: number):number => PixelRatio.roundToNearestPixel(size)

export {
  height,
  width,
  platform,
  pixelCalc
}