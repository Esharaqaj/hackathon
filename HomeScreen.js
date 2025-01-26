import Constants from 'expo-constants';
import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router/stack';


// Main screen (Explore Page)
export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ flex: 1, alignItems: 'left', padding: 8, fontSize: 18, fontWeight: 'bold' }}>
        Welcome to the Explore Page!
      </Text>

      <SafeAreaView style={styles.bottomBar}>
        {/* Navigate to Tasks Page */}
        <AntDesign.Button
          name="checksquareo"
          backgroundColor="white"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Tasks')}
        />
        {/* Navigate to Personal Page */}
        <FontAwesome.Button
          name="user"
          backgroundColor="white"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Personal')}
        />
        {/* Navigate to Feed Page */}
        <Entypo.Button
          name="news"
          backgroundColor="white"
          size={30}
          color="black"
          onPress={() => navigation.navigate('Feed')}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
  },
  bottomBar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
  },
});
