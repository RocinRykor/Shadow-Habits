import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

const ChoreList = () => {
  const [lists, setLists] = useState([]);
  const [taskName, setTaskName] = useState('');

  const addTask = (newTask) => {
    setLists([...lists, newTask]);
    setTaskName('');
  };

  const handleTaskToggle = (index) => {
    const updatedLists = [...lists];
    updatedLists[index].completed = !updatedLists[index].completed;
    setLists(updatedLists);
  };

  return (
      <View style={styles.container}>
        <FlatList
            style={styles.listsContainer}
            data={lists}
            renderItem={({item, index}) =>
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => handleTaskToggle(index)}
                  activeOpacity={0.7}
                >
                  <Text style={item.completed ? styles.listItemTextCompleted : styles.listItemText}>
                    {item.name}
                  </Text>
                  <View style={styles.checkBox}>
                    {item.completed && <Text style={styles.check}>✓</Text>}
                  </View>
                </TouchableOpacity>
            }
        />
        <View style={styles.listForm}>
          <TextInput
              style={styles.listName}
              placeholder="Task Name"
              value={taskName}
              onChangeText={setTaskName}
          />
          <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                const newTask = {
                  name: taskName,
                  completed: false,
                };
                addTask(newTask);
              }}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {Platform.OS === 'ios'
            ? <KeyboardAvoidingView behavior="padding"/>
            : null}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    height: 70,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#AAA",
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  listItemText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    textDecorationLine: "none"
  },
  listItemTextCompleted: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    textDecorationLine: "line-through"
  },
  checkBox: {
    marginRight: 20,
    borderRadius: 5,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  checkBoxCompleted: {
    marginRight: 20,
    borderRadius: 5,
    width: 20,
    height: 20,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  listForm: {
    flexBasis: 275,
    flex: 0,
    margin: 15,
    padding: 15,
    backgroundColor: "#CCC"
  },
  listName: {
    height: 50,
    padding: 15,
    fontWeight: "600",
    marginRight: 50,
    marginBottom: 15,
    borderColor: "#555",
    borderWidth: 2
  },
  item: {
    height: 50,
    padding: 15,
    marginLeft: 50,
    marginBottom: 15,
    borderColor: "#555",
    borderWidth: 2
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#000",
    color: "#FFF"
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 20
  }
});

export default ChoreList;
