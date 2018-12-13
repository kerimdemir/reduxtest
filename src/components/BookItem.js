import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "./common";

class BookItem extends Component {
  render() {
      
    const { titleStyle, authorStyle } = styles;
    //const { book } = this.props;
    return (
      <Card>
        <Text style={titleStyle}>{this.props.book.title}</Text>
        <Text style={authorStyle}>{this.props.book.author}</Text>
      </Card>
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

export default BookItem;
