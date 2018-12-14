import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Card } from "./common";
import * as actions from "../actions";

class BookItem extends Component {
  onPressed() {
    // console.log("onPressed")
     console.log(this.props)
    const { book, selected } = this.props;

    !selected 
    ? this.props.selectBook(book) 
    : this.props.deselectBook(book);
  }

  render() {
    const { titleStyle, authorStyle, descriptionStyle } = styles;
    const { book, selected } = this.props;
    const descriptionField = selected ? (
      <Text style={descriptionStyle}>{book.description}</Text>
    ) : null;

    //console.log(this.props)
    return (
      <TouchableOpacity onPress={this.onPressed.bind(this)}>
        <Card>
          <Text style={titleStyle}>{book.title}</Text>
          <Text style={authorStyle}>{book.author}</Text>
          <Text style={authorStyle}>{book.pages}</Text>
        </Card>
        {descriptionField}
      </TouchableOpacity>
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
  },
  descriptionStyle: {
    margin: 10,
    fontSize: 13,
    color: "gray"
  }
});

const mapStateToProps = (state, props) => {
  //console.log("bookitem mapstatetoprops")
  //console.log(state)
  const selected =
    state.selectedBook && state.selectedBook.isbn === props.book.isbn;
  return {
    selected
  };
};

export default connect(
  mapStateToProps,
  actions
)(BookItem);
