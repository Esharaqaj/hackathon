import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>
      <Image style={styles.logo} source={require('../assets/BeBoiler_sq.png')} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  paragraph: {
    margin: 50,
    marginTop: 0,
    fontSize: 0,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 300,
    width: 300,
  }
});

