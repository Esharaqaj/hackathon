import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import Constants from 'expo-constants';

export default function TasksScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permissions...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera ref={setCamera} style={styles.camera} />
      <Button
        title="Capture"
        onPress={async () => {
          if (camera) {
            const photo = await camera.takePictureAsync();
            console.log(photo.uri); // You can save the image or upload it here
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
  },
  camera: {
    flex: 1,
    margin: 10,
  },
});
