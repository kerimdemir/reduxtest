import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
class BookList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[{ key: "a" }, { key: "b" }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state);
};

export default connect(mapStatetoProps)(BookList);
