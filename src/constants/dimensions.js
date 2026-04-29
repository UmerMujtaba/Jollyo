import {Dimensions, PixelRatio} from 'react-native';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';

const _height = Dimensions.get('window').height;
const _width = Dimensions.get('window').width;

const DesignWidth = 390;
const DesignHeight = 844;
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const isTablet = DeviceWidth >= 600;
const DeviceWidthRatioDesignWidth = DeviceWidth / DesignWidth;
const DeviceHeightRatioDesignHeight = DeviceHeight / DesignHeight;


const ResponsiveWidth = width => {
  return PixelRatio.roundToNearestPixel(width * DeviceWidthRatioDesignWidth);
};
const ResponsiveHeight = height => {
  return PixelRatio.roundToNearestPixel(height * DeviceHeightRatioDesignHeight);
};
const ResponsiveFontSize = fontSize => {
  return PixelRatio.roundToNearestPixel(
    fontSize * DeviceHeightRatioDesignHeight,
  );
};
export const hp = HP;
export const wp = WP;


// const widthPercentageToDP = widthPercent => {
//   const elemWidth =
//     typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
//   return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
// };
// const heightPercentageToDP = heightPercent => {
//   const elemHeight =
//     typeof heightPercent === 'number'
//       ? heightPercent
//       : parseFloat(heightPercent);
//   return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
// };
export const isIOS = Platform.OS === 'ios';

export {
  // widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
  ResponsiveWidth as rwp,
  ResponsiveHeight as rhp,
  WP as rfs,
  _height as height,
  _width as width,
  isTablet,
};

// const isPAD = !(aspectRatio > 1.6);
//  const wpForTab = (widthPercent, ratio = null) => {
//   let width = isPAD ? Math.floor(widthPercent * (ratio ? ratio : MOB_TAB_WIDTH_RATIO)) : widthPercent;
//   return widthPercentageToDP(width);
// };
// const hpForTab = (heightPercent, ratio = null) => {
//   let height = isPAD ? Math.floor(heightPercent * (ratio ? ratio : MOB_TAB_HEIGHT_RATIO)) : heightPercent;
//   return heightPercentageToDP(height);
// };
//   isPAD
