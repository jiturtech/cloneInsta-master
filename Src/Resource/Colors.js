import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

export const Colors = {
    themeColor: colorScheme == "light" ? "#262626" : "#F2F2F2",
    grey: "grey",
    blue: "#3797EF",
    royalBlue: '#4169e1',
    borderActive:  colorScheme == "light" ?'rgba(0,0,0,1)' : 'rgba(255,255,255,1)',
    borderInActive: colorScheme == "light" ?'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
    white: "white",
    themeGradientColor: colorScheme == "dark" ? ['#121212', '#121212'] : ['#F2F2F2', '#F2F2F2'],
    backgroundColor: colorScheme == "dark" ? "#121212" : '#F2F2F2',
    black: "black",
    borderColor:colorScheme=="dark"?"#FFFFFF26":'#A6A6AA',
    paginationColor:colorScheme=="dark"?"#121212E5":'#121212B2',
    dotColor:colorScheme=="dark"?"#00000026":'#FFFFFF54',
    borderStoryColor:['#FBAA47','#D91A46','#A60F93'],
    barStyle:colorScheme=="dark"?"light-content":"dark-content"
    
}
