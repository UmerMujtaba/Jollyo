import {View, Text, FlatList} from 'react-native';
import React from 'react';
import UserGuideComponent from '../atoms/userGuideComponent';
import {UserGuideData} from '../../utils/userGuideData';
import {rhp} from '../../constants/dimensions';

const UserGuideComponentList = () => {
  const renderItem = ({item}) => {
    return (
      <UserGuideComponent
        count={item.count}
        title={item.title}
        subTitle={item.subTitle}
      />
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={UserGuideData}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={{paddingBottom: rhp(100)}}
    />
  );
};
export default UserGuideComponentList;
