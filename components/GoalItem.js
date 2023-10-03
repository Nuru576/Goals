import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props){
    return <View style={styles.goalList}> 
    <Pressable 
    android_ripple={{color: '#210644'}}
    onPress={props.onDeleteItem.bind(this, props.id)}
    style={({pressed}) => pressed && styles.pressedItem}>
    <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
};

export default GoalItem;

const styles = StyleSheet.create({
    goalList: {
        margin: 3,
        padding: 5,
        borderRadius: 6,
      },
      goalText: {
        color: '#fff'
      }, 
    pressedItem: {
      opacity: 0.5
    }
});
