import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

let locationsOfInterest = [
  {
    title: "Ash",
    location: {
      latitude: 40.433447,
      longitude: -86.912656,
    },
    image: require('./assets/20201116_115229.png'),
    description: "posted 1h ago",
  },
  {
    title: "Second",
    location: {
      latitude: 37.170509,
      longitude: -80.114453,
    },
    image: require('./assets/20201116_115229.png'),
    description: "My Second Marker",
  },
];

export default function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = useRef();

  // Fetch Current Location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Location permission is required to show your current location.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => (
      <Marker key={index} coordinate={item.location} title={item.title} description={item.description}>
        <View image={styles.image}></View> 
        {/* Custom Icon */}
        <AntDesign name="star" size={24} color="gold" />
      </Marker>
    ));
  };

  if (!currentLocation) {
    return (
      <View style={styles.container}>
        <Text>Fetching Current Location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        initialRegion={currentLocation}
      >
        {/* Render Locations of Interest */}
        {showLocationsOfInterest()}

        {/* Current Location Marker */}
        <Marker coordinate={currentLocation} title="You are here" description="This is your current location">
          {/* Custom Icon */}
          <Ionicons name="location-sharp" size={24} color="red" />
        </Marker>
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },

  image:
  {
    width: 40,
    height: 40,

  }
});
