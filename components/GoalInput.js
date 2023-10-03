import { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal, Image } from "react-native";


function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
       }

       function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
       }

    return <Modal visible={props.visible} animationType="slide"> 
    <View style={styles.inputContainer}>
    <Image style={styles.image} source={require('../assets/Images/goal.png')} />
    <TextInput value={enteredGoalText} onChangeText={goalInputHandler} style={styles.textInput} placeholder='Set Goal...' />
    <View style={styles.buttonContainer}>
    <View style={styles.button}><Button onPress={addGoalHandler} title='Add Goal' color={'#5e0acc'}/></View>
    <View style={styles.button}><Button title="Cancel" onPress={props.onCancel} color={'#f31282'}/></View>
    </View>
  </View>
  </Modal>
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#311b6b',
        flex:1,
        padding: 16,
        alignItems: "center",
        justifyContent: 'center',
        borderBottomWidth: 1,  
      },
      textInput: { 
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '3120438',
        width: '100%%',
        borderRadius: 6,
        padding: 16,
        color: "#fff"
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        width: '40%',
        marginHorizontal: 8
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
})