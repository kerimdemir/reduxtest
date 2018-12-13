import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { CreateStore, createStore } from 'redux'
import reducers from './reducers'
import Header from './components/common/Header'
import BookList from './components/BookList'

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText="Book List"/>  
                    <BookList/>
                </View>
            </Provider>

        )
    }
}