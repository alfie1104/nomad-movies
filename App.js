import React from 'react';
import { AppLoading, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import TabNavigation from "./navigation/TabNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  }

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  }

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  render() {
    const { loaded } = this.state;

    if (loaded) {
      return (
          <TabNavigation/>
      );
    } else {
      return <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError} />;
    }
  }
}
