import React from 'react';
import {FlatList} from 'react-native';
import {rhp} from '../../constants/dimensions';
import {UserGuideData} from '../../utils/userGuideData';
import UserGuideComponent from '../atoms/userGuideComponent';

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
      contentContainerStyle={{paddingBottom: rhp(150)}}
    />
  );
};
export default UserGuideComponentList;
