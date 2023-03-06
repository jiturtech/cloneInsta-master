import * as React from "react"
import { Path, Svg } from "react-native-svg"
import { Appearance } from "react-native";
import { Colors } from "../../Resource/Colors";
const colorScheme = Appearance.getColorScheme();

const HomeIcon = (props) => (
  <Svg
    width={22}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.7 10.706 11.7.904a1 1 0 0 0-1.4 0l-10 9.802a1 1 0 0 0-.3.714V23.5l.008.09A.5.5 0 0 0 .5 24h8a.5.5 0 0 0 .5-.5V18l.005-.176C9.096 16.249 9.402 15 11 15l.176.005c1.458.085 1.78 1.21 1.82 2.645L13 18v5.5a.5.5 0 0 0 .5.5h8l.09-.008A.5.5 0 0 0 22 23.5V11.42a1 1 0 0 0-.3-.714Zm-20.2.924L11 2.32l9.5 9.311V22.5h-6V18l-.005-.37c-.067-2.43-.953-3.99-3.232-4.122l-.22-.007c-2.492-.001-3.381 1.574-3.535 4.236l-.007.22V22.5H1.5V11.63Z"
      fill={Colors.themeColor}
    />
  </Svg>
)

export default HomeIcon