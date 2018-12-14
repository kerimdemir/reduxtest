import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { Card } from "./common";
import BookItem from "./BookItem";
class BookList extends Component {
  constructor(props) {
    super(props);
    state = {};
  }

  _renderItem = ({item}) => (
    <BookItem
     book={item}
    />
  );

  componentWillMount(){
   //console.log("componentWillMount")
  }
  componentDidMount(){
    //console.log("componentDidMount")
  }

  render() {
    
    const { books } = this.props;
    return (
      <View>
        <FlatList
          data={books}
          renderItem={this._renderItem}
          keyExtractor={item => item.isbn}
        />
      </View>
    );
  }
}

const mapStatetoProps = state => { 

  return {
    books: state.books
  };
};

export default connect(mapStatetoProps)(BookList);
