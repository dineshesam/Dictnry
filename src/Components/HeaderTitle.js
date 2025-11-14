import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';


const HeaderTitle = () => {
  const { useOnline , currentTheme} = useContext(AppContext);

  
  const navigation = useNavigation();
  const { colors } = currentTheme;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
      <Text style={{ fontSize: 24, fontWeight: '700', color: colors.text, marginInlineStart:40 ,marginRight:60,marginLeft:50}}>Dictionary</Text>
      {useOnline && (
       
          <Image
            source={require('../assets/icons/wifi.png')}
            style={{ width: 22, height: 22, marginRight: 4, marginLeft:90,tintColor: colors.text }}
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
    </View>
  );
};

export default HeaderTitle;
