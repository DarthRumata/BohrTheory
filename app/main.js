/**
 * Created by rumata on 3/15/17.
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  Image,
  PixelRatio
} from 'react-native'
import CodePush from 'react-native-code-push';
import Button from 'react-native-button';

export default function setup() {
  return App;
}

class App extends Component {

  componentDidMount() {
    CodePush.sync({updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/logo.png')} style={styles.logo}/>
        <View style={{paddingBottom: PixelRatio.getPixelSizeForLayoutSize(50)}}>
          <Text style={styles.title}>Bohr Theory</Text>
          <Button
            containerStyle={styles.startButton}
            style={styles.startButtonTitle}
            onPress={this.openList}>
            Start!
          </Button>
        </View>
      </View>
    );
  }

  openList() {

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 250,
    height: 250
  },
  title: {
    fontFamily: 'Science Project',
    fontSize: 22
  },
  startButtonTitle: {
    fontFamily: 'Science Project',
    color: 'white',
    lineHeight: 22,
    fontSize: 18
  },
  startButton: {
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#36A6F6',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(25),

  }
});