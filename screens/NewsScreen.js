import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={{ fontSize:41}}><b>Congratulations Player 1.</b> </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 160,
    height: 50,
  }
});