import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'


export default ({placeholder, onChangeText, value}) => (

    <View style={styles.view}>
        <TextInput 
            onChangeText={onChangeText}
            style={styles.input}
            placeholder={placeholder}
            value={value}
        />
    </View>

    )

const styles = StyleSheet.create({

    view: {
        margin: 15,   
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15
      
      }
})