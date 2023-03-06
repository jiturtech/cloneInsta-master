import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../Resource/Colors"

const AddStory = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M10 0v8h8v2h-8v8H8v-8H0V8h8V0h2Z" fill={Colors.themeColor} />
  </Svg>
)

export default AddStory
