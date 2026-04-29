// import React from 'react';
// import {Image, ImageBackground, View} from 'react-native';
// import {styles} from './styles';
// import {HeadingText} from '../../../components/atoms/heading';
// import OtpFieldContainer from '../../../components/molecules/codeFieldContainer';
// import {TouchableButton} from '../../../components/atoms/button';
// import TimerContainer from '../../../components/molecules/timerRowContainer';
// import {images} from '../../../assets/images';
// import {navigate} from '../../../navigationHandler/navigationRef';
// import {ScreenNames} from '../../../constants/strings';
// import {useKeyboard} from '../../../hooks';
// import FastImage from 'react-native-fast-image';
// import {rhp} from '../../../constants/dimensions';

// const OtPScreen = () => {
//   const keyboardStatus = useKeyboard();

//   return (
//     //  <View style={styles.container}>
//     <ImageBackground source={images.backgroundImage} style={styles.container}>
//       <HeadingText />
//       <OtpFieldContainer />
//       <TouchableButton
//         title={'Verify'}
//         btnPropStyle={{marginTop: 40}}
//         onPress={() => navigate(ScreenNames.profile)}
//       />
//       <TimerContainer />
//       {!keyboardStatus && (
//         <View
//           style={{flex: 1, justifyContent: 'flex-end', marginBottom: rhp(40)}}>
//           <FastImage
//             source={images.cubImage}
//             style={styles.imgStyle}
//             resizeMode={FastImage.resizeMode.cover}
//           />
//         </View>
//       )}
//       {/* </View> */}
//     </ImageBackground>
//   );
// };

// export default OtPScreen;
