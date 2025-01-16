import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {images} from '../../../assets/images';
import {TouchableButton} from '../../../components/atoms/button';
import CustomAppBar from '../../../components/atoms/customAppBar';
import PremiumList from '../../../components/molecules/premiumList';
import {isTablet, rhp, wp} from '../../../constants/dimensions';
import {Strings} from '../../../constants/strings';
import {styles} from './styles';

const PremiumScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
        }}>
        <CustomAppBar
          title={Strings.premium}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <View style={styles.insideBody}>
            <LottieView
              source={require('../../../assets/lottie/payment.json')}
              autoPlay
              loop={true}
              style={styles.paymentAnimation}
              //   duration={3000}
            />
            <Text style={styles.unlockAllText}>{Strings.unlockAll}</Text>
            <Text style={styles.subHeading}>{Strings.aLotInteresting}</Text>

            <PremiumList />
            <TouchableButton
              btnInside={{width: wp(70)}}
              btnPropStyle={{width: wp(70)}}
              title={'Continue'}
              onPress={() => navigation.pop()}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PremiumScreen;
