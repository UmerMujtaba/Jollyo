import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const CalendarComponent = () => {
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


