import React, {useState, createContext, useContext} from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import {colors} from '../constants/colors';
import {rfs} from '../constants/dimensions';
import fonts from '../constants/fonts';

const LoaderContext = createContext();

export const LoaderProvider = ({children}) => {
  const [loader, setLoader] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        loader,
        setLoader,
      }}>
      <View>
        <Modal transparent={true} onRequestClose={() => null} visible={loader}>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.PURPLE.backgroundClr,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: 15,
                backgroundColor: colors.WHITE.withWithOpacity,
                padding: 25,
              }}>
              <ActivityIndicator
                size="large"
                color={colors.ORANGE.darkOrange}
              />
              <Text
                style={{
                  fontSize: rfs(18),
                  // fontWeight: '200',
                  fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
                  color: colors.ORANGE.darkOrange,
                  opacity: 1,
                }}>
                {'Loading'}
              </Text>
            </View>
          </View>
        </Modal>
      </View>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoaderProvider = () => useContext(LoaderContext);
