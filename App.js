import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ modelIsVisible, setModelIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModelIsVisible(true);
  }

  function endAddGoalHandler(){
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals( prev => [...prev, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler(false);
  }

  function deleteGoalHandler(id){
    setCourseGoals(prev => {
      return prev.filter((goal) => goal.id !== id)
    })
  }

  return (<>
  <View style={styles.appContainer}>
      <Button title="Add New Goals" color="#fff" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modelIsVisible} onCancel={endAddGoalHandler}/>
      <View style={styles.goals}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
        }
  }
          keyExtractor={(item, index) => {
            return item.id;
          }} />
          
       </View>
      </View>
</>)
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    margin: 0,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goals: {
    flex: 3
  },
  
});
