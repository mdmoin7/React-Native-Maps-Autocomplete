import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import MapContainer from './containers/map-container';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
});
