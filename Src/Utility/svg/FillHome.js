import * as React from "react"
import { Path, Svg } from "react-native-svg"
import { Colors } from "../../Resource/Colors"

const FillHome = (props) => (
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
      d="m11.7.904 10 9.802a1 1 0 0 1 .3.714V23.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V18a3 3 0 0 0-2.824-2.995L11 15a3 3 0 0 0-2.995 2.824L8 18v5.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.492-.41L0 23.5V11.42a1 1 0 0 1 .3-.714l10-9.802a1 1 0 0 1 1.4 0Z"
      fill={Colors.themeColor}
    />
  </Svg>
)

export default FillHome