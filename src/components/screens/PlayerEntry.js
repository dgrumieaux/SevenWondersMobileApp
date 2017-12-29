import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';
import Modal from 'react-native-modal'

import { connect } from 'react-redux';
import { SHOW_PLAYER_ENTRY_MODAL, HIDE_PLAYER_ENTRY_MODAL } from '../../actions/temp.actions';

const _handleOkPress = function(show){
    alert("pressed OK");
    show();
}
const _handleCancelPress = function(hide){
    alert("pressed Cancel");
    hide();
}

const PlayerEntry = ({show, hide}) => {
    return (
        <View style={{ flex:1, backgroundColor: 'blue' }}> 
            <Modal
                style={{
                    flex: 1,
                    backgroundColor: '#797070',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                isVisible={true}>
                <View style={{
                    backgroundColor: '#DCD9D9',
                    padding: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}>
                    <View>
                        <Text
                            style={{
                                fontSize:20
                            }}
                        >Enter Player Name Below:</Text>
                        <TextInput 
                            style={{
                                fontSize:20,
                                height: 45
                            }}
                            placeholder="Name Goes Here"
                        />
                        <View style={{
                            padding:10,
                            flexDirection: 'row'
                        }}>
                            <Button
                                style={{
                                    flex:.5
                                }}
                                title="OK"
                                onPress={() => _handleOkPress(show)} />
                            <View style={{
                                padding:10
                            }} />
                            <Button
                                style={{
                                    flex:.5
                                }}
                                title="Cancel"
                                onPress={() => _handleCancelPress(hide)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default connect(
    state => ({}), 
    dispatch => ({ 
        show: () => dispatch({type: SHOW_PLAYER_ENTRY_MODAL}),
        hide: () => dispatch({type: HIDE_PLAYER_ENTRY_MODAL}),
    }))(PlayerEntry);