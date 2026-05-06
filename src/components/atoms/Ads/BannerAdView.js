import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import { hp, rhp } from '../../../constants';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-3940256099942544~1458002511';

const BannerAdView = ({ isTabScreen }) => {
  const [visible, setVisible] = useState(true);
  const [adLoaded, setAdLoaded] = useState(false);

  if (!visible) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        isTabScreen ? styles.tabScreenPosition : styles.normalPosition,
      ]}
    >
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
          setAdLoaded(true);
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
          setVisible(false);
        }}
      />
      {adLoaded && (
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => setVisible(false)}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 9999,
  },
  normalPosition: {
    paddingVertical: 10,
  },
  tabScreenPosition: {
    position: 'absolute',
    bottom: hp(7.3),
    paddingBottom: 5,
  },
  skipButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 10000,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  skipText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default BannerAdView;
