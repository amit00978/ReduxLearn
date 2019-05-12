import React, { Component } from 'react';
import { CardSection } from './common';
import { Text,
         View,
         TouchableWithoutFeedback,
         LayoutAnimation
         } from 'react-native';
import * as actions from '../actions/index';
import { connect } from 'react-redux';


class ListItem extends Component {


    renderDesciption(){
        if(this.props.expended){
          return(
              <CardSection>
            <Text style={{flex:1,padding:10}}>
            {this.props.library.item.description}
            </Text>
            </CardSection>
          )
        }
    }
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    render() {
        LayoutAnimation.spring();
        const { titleStyle } = styles;
        const { id ,title } =  this.props.library.item;
        return (
            <TouchableWithoutFeedback
            onPress={()=> this.props.selectLibraray(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDesciption()}
                </View>

            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 16,
    }
}


const stateToProps = (state ,ownProps) => {

    const expended= state.SelectedLibraryId == ownProps.library.item.id ;
    return{
        expended
    };
}
export default connect( stateToProps, actions )(ListItem);
