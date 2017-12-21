import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>2nd!!!!</Text> */}
        <BodyText>What's UPPPPP</BodyText>
      </View>       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
