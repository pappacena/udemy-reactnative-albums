import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Album = (props) => {
  const data = props.data;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={{ uri: data.thumbnail_image }} />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{data.title}</Text>
          <Text>{data.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.image} source={{ uri: data.image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(data.url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  header: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitle: {
    fontSize: 18
  },
  thumbnailContainer: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  image: {
    height: 300,
    width: null,
    flex: 1
  }
};

export default Album;
