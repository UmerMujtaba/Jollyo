import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {rfs, rhp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';

const CalendarComponent = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const currentDate = new Date();

  const getCurrentWeek = () => {
    const today = new Date();
    const startOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + 1),
    );
    const week = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }

    return week;
  };

  const week = getCurrentWeek();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.monthText}>
          {currentDate.toLocaleString('default', {month: 'long'})},{' '}
          {currentDate.getFullYear()}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.container, styles.insideContainer]}>
          {week.map((day, index) => {
            const isSelected = index === selectedDay - 1;
            return (
              <View
                key={index}
                style={[
                  styles.dayContainer,
                  isSelected && styles.selectedDayContainer,
                ]}>
                <Text
                  style={[
                    styles.dayText,
                    isSelected && styles.selectedDayText,
                  ]}>
                  {day
                    .toLocaleString('en-US', {weekday: 'short'})
                    .toUpperCase()}
                </Text>
                <Text
                  style={[
                    styles.dateText,
                    isSelected && styles.selectedDateText,
                  ]}>
                  {day.getDate()}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    marginBottom: rhp(20),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.lightYellow,
    width: wp(90),
    height: rhp(100),
    borderRadius: 16,
  },
  insideContainer: {
    backgroundColor: '#fbd351',
    height: rhp(95),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rhp(20),
  },
  monthText: {
    color: colors.white,
    fontSize: rfs(24),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
  dayContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 16,
  },
  selectedDayContainer: {
    backgroundColor: colors.pink,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  dayText: {
    color: colors.blacK,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(16),
    marginBottom: rhp(10),
  },
  selectedDayText: {
    color: colors.white,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  dateText: {
    color: colors.blacK,
    fontSize: rfs(18),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  selectedDateText: {
    color: colors.white,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});

export default CalendarComponent;
