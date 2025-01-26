import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const PersonalProfile = () => {
  // Store profile picture in state
  const [profilePic, setProfilePic] = useState(
    'https://example.com/default-profile.png'
  );

  // Sample user info (could come from an API, Context, Redux, etc.)
  const userInfo = {
    accountName: 'John Doe',
    totalPoints: 1200,
    eventsAttended: 8,
    dailyStreak: 5,
  };

  // Sample posts (could be fetched from an API)
  const userPosts = [
    { id: '1', title: 'BeBoilers', content: 'Winners' },
    {
      id: '2',
      title: 'Cool squirrel',
      content: 'noice',
    },
    {
      id: '3',
      title: 'train',
      content: 'points',
    },
  ];

  // Function to handle picking an image from the library
  const pickImageFromLibrary = async () => {
    // Options for the image picker
    const options = {
      mediaType: 'photo',
      maxWidth: 1024,
      maxHeight: 1024,
      quality: 1,
    };

    // Launch image library
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User canceled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        // Get the selected image's URI
        const selectedImage = response.assets[0].uri;
        setProfilePic(selectedImage);
      }
    });
  };

  // Render function for each post item
  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postContent}>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture and Name */}
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImageFromLibrary}>
          <Image source={{ uri: profilePic }} style={styles.profilePic} />
        </TouchableOpacity>
        <Text style={styles.accountName}>{userInfo.accountName}</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Total Points</Text>
          <Text style={styles.statValue}>{userInfo.totalPoints}</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Events Attended</Text>
          <Text style={styles.statValue}>{userInfo.eventsAttended}</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Daily Streak</Text>
          <Text style={styles.statValue}>{userInfo.dailyStreak}</Text>
        </View>
      </View>

      {/* Posts Section */}
      <View style={styles.postsContainer}>
        <Text style={styles.postsHeader}>My Posts</Text>
        <FlatList
          data={userPosts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default PersonalProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  accountName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    width: 100,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Android shadow
    elevation: 2,
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  postsContainer: {
    flex: 1,
    marginTop: 10,
  },
  postsHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Android shadow
    elevation: 2,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  postContent: {
    fontSize: 14,
    color: '#555',
  },
});
