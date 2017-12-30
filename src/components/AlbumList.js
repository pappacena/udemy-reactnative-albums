import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Album from './Album';


class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }));
  }

  getCards() {
    return this.state.albums.map(album => <Album key={album.title} data={album} />);
  }

  render() {
    return (
      <ScrollView>
        {this.getCards()}
      </ScrollView>
    );
  }
}

export default AlbumList;
