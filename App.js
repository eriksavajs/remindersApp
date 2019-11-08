import React from 'react'
import {StyleSheet, View, FlatList, Text, Modal} from 'react-native'
import Item from './Item'
import Datos from './Datos'
import Button from './Button'
import Input from './Input'


export default class App extends React.Component{

  state={
    data: Datos,
    isVisible: false,
    text: ''
  }

  handlePress = () => {  
    this.setState({
      isVisible: true
    })
  }

  handleChange = text => this.setState({text})

  
  handleSave = () => {

    const {text, data} = this.state

    const datos = [{ key: Math.random().toString(), title: text}].concat(data)
    this.setState({
      data: datos,
      isVisible: false,
      text: ''
    })

  }


  render(){

    const {data} = this.state

    return(
      <View style={[styles.container, styles.gray]}>
        <View style={styles.header}>  
          <Text style={styles.title}> Reminders</Text>
        </View>

        <View style={styles.view}>
           <Button title='Agregar' onPress={this.handlePress}/>
        </View>

        <FlatList data={data} renderItem={Item}/>
        <Modal animationType='slide' visible={this.state.isVisible}>
          <View style={[styles.container, styles.center]}>
            <Text style={styles.modalTitle}>INGRESE RECORDATORIO</Text>
            <Input 
              placeholder='Recordatorio'
              onChangeText={this.handleChange}
              value={this.state.text}
            />
            <Button title='Guardar' onPress={this.handleSave}/>
            
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  center: {
    
    justifyContent: 'center',
    alignItems: 'center'

  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    

  },
  title:{
    
    textAlign: 'center',
    fontSize: 28,
    marginTop: 50

  },
  view: {
    margin: 15,   
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
},
gray: {
  backgroundColor: '#eee'
},
modalTitle: {
  fontSize: 25
}



})