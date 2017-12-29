import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import { INCREMENT_COUNT, DECREMENT_COUNT } from '../../actions/temp.actions';
import { NavigationActions } from 'react-navigation';

const Setup = ({increment, decrement, next, count}) => {
    return (
        <View> 
            <Text> This is the Setup Page! </Text>
            <Text> Temp count is: {count} </Text>
            <Button
                onPress={increment}
                title="Increment"
                color="#841584"
            />  
            <Button
                onPress={decrement}
                title="Decrement"
                color="#841584"
            />   
            <Button
                onPress={next}
                title="Start Game"
                color="#841584"
            />       
          </View>
    );
}

export default connect(
    state => ({ count: state.count }), 
    dispatch => ({ 
        increment: () => dispatch({type: INCREMENT_COUNT}),
        decrement: () => dispatch({type: DECREMENT_COUNT}),
        next: () => dispatch(NavigationActions.navigate({routeName:'Scoring'})),
    }))(Setup);