import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { View,FlatList } from 'react-native';
import ListItem from './ListItem';



class LibraryList extends Component {
renderItem(library){

    console.log("asd",library);

    return <ListItem library={library}/>
}

render(){
    return(
       <FlatList
        data= {this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor ={(library)=>{library.id}}
        key = {(library)=>{library.id}}
       />

    )
}
}

const mapStateToprops = state =>{

    return{
        libraries : state.libraries
    }
}

export default connect(mapStateToprops)(LibraryList);