import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import ExploreScreen from './ExploreScreen';
import FeedScreen from './FeedScreen';
import PersonalScreen from './PersonalScreen';
import TasksScreen from './TasksScreen';
import HomeS from './components/HomeS';
// Screens for the bottom tab navigation

// Home Screen (Launch Page)
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Icon */}
      <View style={styles.topIconContainer}>
        <View style={styles.circle}>
          <AntDesign name="staro" size={28} color="#512DA8" />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.paragraph}>Great Day to Boiler Up!</Text>
        <View style={styles.card}>
          <Image
            source={require('./assets/BeBoiler_sq.png')}
            style={styles.cardImage}
          />
        </View>
      </View>

      {/* Start Button */}
      <Button
        onPress={() => navigation.navigate('MainTabs')}
        title="Start"
        color="#e8c270"
      />
    </SafeAreaView>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tasks') {
            iconName = 'checksquare';
            return <AntDesign name="checksquare" size={24} color="black" />
            } else if (route.name === 'Explore') {
              iconName = 'search';
              return <FontAwesome6 name="map-location-dot" size={24} color="black" />
            } else if (route.name === 'Feed') {
              iconName = 'news';
              return <FontAwesome5 name="user-friends" size={24} color="black" />
            } else if (route.name === 'Personal') {
              iconName = 'check-square';
              return <AntDesign name="profile" size={24} color="black" />
          }
        },
        tabBarStyle: {
          backgroundColor: '#C4BFC0', // Change the bottom tab bar background color
         },
        tabBarActiveTintColor: '#FFFFFF', // Active tab icon/text color
        tabBarInactiveTintColor: '#C4BFC0', // Inactive tab icon/text color
      })}
    >
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Personal" component={PersonalScreen} />
    </Tab.Navigator>
  );
}
// Main App Component with Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome', headerShown: false }} // Hide header for Home
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }} // Hide header for MainTabs
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 20,
  },
  topIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    color: '#e8c270',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
  },
  cardImage: {
    width: 300,
    height: 200,
    resizeMode: 'fill',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  screenText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});
