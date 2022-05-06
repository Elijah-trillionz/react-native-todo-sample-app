import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';
import TodoItem from './comopnents/TodoItem';
import {useState} from 'react';

export default function App() {
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([
    {id: 1, title: 'All the same'},
    {id: 2, title: 'Meet John Doe'},
    {id: 3, title: 'Fix the bug'},
    {id: 4, title: 'Sleep'},
    {id: 5, title: 'Test the new project'},
  ]);

  const addTodo = () => {
    const alreadyExists = todos.find(todo => todo.title === title);
    if (alreadyExists) return setError('Todo already exists');

    setError(false);
    setTodos(_todos => [..._todos, {id: todos.length + 1, title}]);
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TextInput
        placeholder="Enter new todo"
        value={title}
        onChangeText={setTitle}
      />
      <Button onPress={addTodo} title="Submit" />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      <StatusBar style="auto" />
      {error && <Text>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
