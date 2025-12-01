import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import OptionButton from '../Components/OptionButton';
import FontSizeAdjuster from '../Components/FontSizeAdjuster';
import LanguageSelector from '../Components/LanguageSelector';


const SettingsScreen = () => {
  const {
    theme, setTheme,
    fontSize, setFontSize,
    useOnline, setUseOnline,
    currentTheme
  } = useContext(AppContext);

  const { colors } = currentTheme;
  const styles = createStyles(colors);
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Theme Mode Selection */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('settings')}</Text>
      <View style={styles.row}>
        <OptionButton
          label={t('Light')}
          isActive={theme === 'light'}
          onPress={() => setTheme('light')}
        />
        <OptionButton
          label={t('Dark')}
          isActive={theme === 'dark'}
          onPress={() => setTheme('dark')}
        />
        <OptionButton
          label={t('system')}
          isActive={theme === 'system'}
          onPress={() => setTheme('system')}
        />
      </View>

      {/* Font Size */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('fontsize')}</Text>
      <FontSizeAdjuster
        fontSize={fontSize}
        onIncrease={setFontSize}
        onDecrease={setFontSize}
        colors={currentTheme.colors}
      />

      {/* Online Search Toggle */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('enableOnlineSearch')}</Text>
      <View style={[styles.row]}>
        <View style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}>
          <Switch
            value={useOnline}
            onValueChange={setUseOnline}
            trackColor={{ false: colors.border, true: colors.card }}
            thumbColor={useOnline ? colors.text : '#ccc'}
          />
        </View>
      </View>

      {/* Language Selection */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('chooseLanguage')}</Text>
      <LanguageSelector
        languages={[
          { code: 'en', label: 'English' },
          { code: 'hi', label: 'हिन्दी' },
          { code: 'te', label: 'తెలుగు' }
        ]}
        onSelect={changeLanguage}
        colors={currentTheme.colors}
      />
    </View>
  );
};

const createStyles = (colors) => StyleSheet.create({
  container: { flex: 1, padding: 24 },
  sectionTitle: { fontSize: 24, fontFamily:'NotoSansTelugu_ExtraCondensed-Black', fontWeight: '600', marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20 },
  optionButton: { padding: 10, borderWidth: 1, borderColor: colors.border, borderRadius: 8, marginHorizontal: 5, backgroundColor: colors.card },
  optionText: { fontSize: 16, color: colors.text },
  fontButton: { backgroundColor: '#ccc', borderRadius: 5, padding: 8, marginHorizontal: 2 },
  fontButtonText: { fontSize: 20, fontWeight: 'bold' },
  fontValue: { fontSize: 18, minWidth: 40, textAlign: 'center' },
});

export default SettingsScreen;