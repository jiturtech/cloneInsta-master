import * as React from "react"
import { Path, Svg } from "react-native-svg"
import { Colors } from "../../Resource/Colors"

const FillLike = (props) => (
  <Svg
    width={24}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m11.217 1.89.655.765.732-.765c2.575-2.575 6.567-2.455 9.215 0l.186.18c2.575 2.574 1.944 7.72-.511 10.367l-.323.342-.36.366c-1.385 1.392-8.003 7.084-8.003 7.084a1.5 1.5 0 0 1-1.94-.017l-2.017-1.75-1.796-1.58c-2.134-1.893-3.736-3.375-4.806-4.445C-.387 9.803-.894 4.705 1.742 2.07c2.636-2.636 6.84-2.816 9.476-.18Z"
      fill={Colors.themeColor}
    />
  </Svg>
)

export default FillLike
