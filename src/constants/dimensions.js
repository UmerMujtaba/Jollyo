import {Dimensions, PixelRatio} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const _height = Dimensions.get('window').height;
const _width = Dimensions.get('window').width;
const widthPercentageToDP = widthPercent => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = heightPercent => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
const DesignWidth = 390;
const DesignHeight = 844;
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
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
export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  ResponsiveWidth as rwp,
  ResponsiveHeight as rhp,
  ResponsiveFontSize as rfs,
  _height as height,
  _width as width,
};
