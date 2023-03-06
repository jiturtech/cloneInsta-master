import React, { Component } from 'react';
import { View, Animated, StyleSheet, TextInput, Image, TouchableOpacity,Appearance } from 'react-native';
import { Colors } from '../Resource/Colors';
import { strings } from '../Resource/Strings';
import { images } from '../Resource/Images';
const colorScheme = Appearance.getColorScheme();
import PropTypes,{ViewPropTypes} from 'deprecated-react-native-prop-types';

export class FloatingTextInput extends Component {
  static propTypes = {
    attrName:PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    updateMasterState:PropTypes.func,
    keyboardType:PropTypes.string,
    titleActiveSize: PropTypes.number, // to control size of title when field is active
    titleInActiveSize:PropTypes.number, // to control size of title when field is inactive
    titleActiveColor:PropTypes.string, // to control color of title when field is active
    titleInactiveColor:PropTypes.string, // to control color of title when field is active
    textInputStyles:PropTypes.object,
    otherTextInputProps: PropTypes.object,
  }


  static defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 11.5,
    titleInActiveSize: 15,
    titleActiveColor: 'black',
    titleInactiveColor: 'dimgrey',
    textInputStyles: {},
    otherTextInputAttributes: {},
  }

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
      isEyeOff: false
    }
  }

  _handleFocus = () => {
    if (!this.state.isFieldActive) {
      this.setState({ isFieldActive: true });
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
      }).start();
    }
  }

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({ isFieldActive: false });
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
      }).start();
    }
  }

  _onChangeText = (updatedValue) => {
    const { attrName, updateMasterState } = this.props;
    updateMasterState(attrName, updatedValue);
  }

  _returnAnimatedTitleStyles = () => {
    const { isFieldActive } = this.state;
    const {
      titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveSize
    } = this.props;

    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 5],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor,
    }
  }
  _clickOnEyePress = () => {
    const { attrName, updateMasterState } = this.props;
    if (attrName === strings.attrNamePass)
      this.setState({ isEyeOff: !this.state.isEyeOff })
    else {
      updateMasterState(attrName, "");

    }
  }
  render() {
    return (
      <View style={[Styles.container, { borderColor: this.state.isFieldActive ? Colors.borderActive : Colors.borderInActive }]}>
        <Animated.Text
          style={[Styles.titleStyles, this._returnAnimatedTitleStyles()]}
        >
          {this.props.title}
        </Animated.Text>
        <TextInput
          value={this.props.value}
          style={[Styles.textInput, this.props.textInputStyles]}
          underlineColorAndroid='transparent'
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onChangeText={this._onChangeText}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.attrName === strings.attrNamePass ? !this.state.isEyeOff : false}
          {...this.props.otherTextInputProps}
        />
        {(this.state.isFieldActive && this.props.value.length != 0) && < TouchableOpacity onPress={this._clickOnEyePress} style={{ flex: 0.2, alignSelf: "center" }}>
          {this.props.attrName === strings.attrNamePass ?
            <Image source={this.state.isEyeOff ? images.viewEye : images.hiddenEye}
              style={Styles.imgRight} /> :
            <Image source={images.closeIcon}
              style={Styles.imgRight} />}
        </TouchableOpacity>}
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 0.5,
    height: 60,
    marginVertical: 5,
    backgroundColor:colorScheme=="dark"?'rgba(255,255,255,0.1)' :'#FAFAFA',
    flexDirection: "row"
  },
  textInput: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Avenir-Medium',
    color:Colors.themeColor,
    flex: 0.8,
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 3,
    left: 10,
  },
  imgRight: { tintColor: Colors.white, height: 20, width: 20, alignSelf: "center" }
})