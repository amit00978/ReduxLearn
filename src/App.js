import React from 'react';
import { View ,Text } from 'react-native' ;
import {  Provider } from 'react-redux';
import {createStore} from 'redux';
import { Header } from './components/common/index'
import reducers from './reducers';
import LibraryList from './components/LibraryList'

const App = () =>{
return(
    <Provider store={createStore(reducers)}>
    <View style={{flex:1}}>
    <Header>
        Redux
      
    </Header>
    <LibraryList /> 
    </View>
    </Provider>
)
}
export default App;
