import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const UserGuideComponent = ({count, title, subTitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.countRow}>
        <View style={styles.line}></View>
        <View style={styles.dottedBorderContainer}>
          <View style={styles.borderContainer}>
            <View style={styles.filledContainer}>
              <Text style={styles.countText}>{count}</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.subHeading}>{subTitle}</Text>
    </View>
  );
};
