import { DefaultTheme, DarkTheme } from '@react-navigation/native';


const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFFFFF',
      text: '#111111',
      card: '#ebebf4ff',
      border: '#E6E6E6',
      tint: '#49575aff',
      tabBg:'#d7e2e8ff',
      buttonBg:'black' ,
      buttonText: '#FFFFFF' // Off-white / book page color

    },
  };

   const CustomDarkTheme = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: '#000000',
        text: '#FFFFFF',
        card: '#4a4a4eff',
        border: '#333333',
        tint: '#c2c6c7ff',
         tabBg:'#111111',
          buttonBg:'#444',
           buttonText: '#FFFFFF'
      },
    };

    export { CustomLightTheme, CustomDarkTheme };