import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import i18n from 'i18next';


const HeaderTitle = ({ title }) => {
  const { useOnline, currentTheme } = useContext(AppContext);
  const navigation = useNavigation();
  const { colors } = currentTheme;
   const curL = i18n.language; 

  console.log('Current Language:', curL);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Title */}
      <Text style={{ fontSize: 24,fontFamily: 'NotoSansTelugu_ExtraCondensed-Black',
    fontWeight: '600', color: colors.text, marginHorizontal: 40 }}>
        {title}
      </Text>

      {/* Show icons only on Home screen */}
      {(title === 'Home' || title === "హోమ్" || title === 'होम') && (
        <>
          {/* Online Icon */}
          {useOnline && (
            <Image
              source={require('../assets/icons/wifi.png')}
              style={{ width: 22, height: 22, marginLeft: 20, tintColor: colors.text }}
            />
          )}

          {/* Settings Icon */}
          <TouchableOpacity
            onPress={() => navigation.navigate('settings')}
            style={{ marginLeft: 12 }}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Image
              source={require('../assets/icons/settings.png')}
              style={{ width: 22, height: 22, tintColor: colors.text }}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default HeaderTitle;