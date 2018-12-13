import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Card } from "./common";
class BookList extends Component {
  constructor(props) {
    super(props);
    state = {};
  }

  renderItem({ item }) {
    const { titleStyle, authorStyle } = styles;
    return (
      <Card>
        <Text style={titleStyle}>{item.title}</Text>
        <Text style={authorStyle}>{item.author}</Text>
      </Card>
    );
  }

  render() {
    console.log(this.props);
    const { books } = this.props;
    return (
      <View>
        <FlatList
          data={books}
          renderItem={this.renderItem}
          keyExtractor={item => item.isbn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    color: "black"
  },
  authorStyle: {
    fontSize: 13,
    color: "gray"
  }
});
const mapStatetoProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStatetoProps)(BookList);
