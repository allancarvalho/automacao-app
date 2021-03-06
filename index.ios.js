/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, TextInput } from "react-native";
import { Button, Icon, Text } from "react-native-elements";

export default class automacaoapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "60"
    };
  }

  handlePress(action) {
    if (action === "ligar") {
      fetch("http://191.165.220.102/LED=ON");
    }

    if (action === "desligar") {
      fetch("http://191.165.220.102/LED=OFF");
    }
  }

  renderHello() {
    const d = new Date();
    const hour = d.getHours();

    return (
      <Text h2 style={styles.head}>
        {`Painel da televisão`}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.renderHello()}
        </View>

        <Button
          large
          raised={true}
          onPress={() => this.handlePress("ligar")}
          buttonStyle={{ backgroundColor: "green" }}
          icon={{ name: "power-off", type: "font-awesome" }}
          title="Ligar"
        />

        <Button
          large
          onPress={() => this.handlePress("desligar")}
          raised={true}
          buttonStyle={{ backgroundColor: "#f00", marginTop: 10 }}
          icon={{ name: "power-off", type: "font-awesome" }}
          title="Desligar"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60
  },
  head: {
    textAlign: "center",
    marginBottom: 30
  },
  footer: {
    flex: 1,
    marginTop: 20,
    alignItems: "center"
  },
  status: {
    textAlign: "center",
    marginTop: 30
  }
});

AppRegistry.registerComponent("automacaoapp", () => automacaoapp);
