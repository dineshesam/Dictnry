
import { useTheme } from '@react-navigation/native';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import createTextStyles from '../Styles/textStyles';

const useDynamicStyles = () => {
  const { colors } = useTheme();
  const { fontSize } = useContext(AppContext);
  const textStyles = createTextStyles(colors, fontSize);

  return { textStyles, colors };
};

export default useDynamicStyles;
