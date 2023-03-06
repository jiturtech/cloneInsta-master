import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "../../Resource/Colors"

const InstagramStory = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 0a.75.75 0 0 1 0 1.5H4A2.5 2.5 0 0 0 1.5 4v2.25a.75.75 0 0 1-1.5 0V4a4 4 0 0 1 4-4h2.25ZM12 5.5A2.5 2.5 0 0 1 14.5 8v4a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 12V8A2.5 2.5 0 0 1 8 5.5h4ZM1.5 13.75a.75.75 0 0 0-1.5 0V16a4 4 0 0 0 4 4h2.25a.75.75 0 0 0 0-1.5H4A2.5 2.5 0 0 1 1.5 16v-2.25Zm18.5 0a.75.75 0 0 0-1.5 0V16a2.5 2.5 0 0 1-2.5 2.5h-2.25a.75.75 0 0 0 0 1.5H16a4 4 0 0 0 4-4v-2.25ZM8 7h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm12-3a4 4 0 0 0-4-4h-2.25a.75.75 0 0 0 0 1.5H16A2.5 2.5 0 0 1 18.5 4v2.25a.75.75 0 0 0 1.5 0V4Z"
            fill={Colors.themeColor}
        />
    </Svg>
)

export default InstagramStory
