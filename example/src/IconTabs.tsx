import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import PhotoGrid from './shared/PhotoGrid';
import tabBarIcon from './shared/tabBarIcon';

class Album extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('photo-album'),
  };

  render() {
    return <PhotoGrid id="album" />;
  }
}

class Library extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('inbox'),
  };

  render() {
    return <PhotoGrid id="library" />;
  }
}

class Favorites extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('favorite'),
  };

  render() {
    return <PhotoGrid id="favorites" />;
  }
}

class Purchased extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('shop'),
  };

  render() {
    return <PhotoGrid id="purchased" />;
  }
}

export default createMaterialBottomTabNavigator(
  {
    Album,
    Library,
    Favorites,
    Purchased,
  },
  {
    shifting: false,
    labeled: false,
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);
