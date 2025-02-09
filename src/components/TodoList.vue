<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="input-group">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="Add new todo"
      />
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input 
          type="checkbox" 
          v-model="todo.completed"
          @change="toggleTodo(index)"
        />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(index)" class="delete-btn">×</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const newTodo = ref('')
const todos = reactive([])

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.push({
      text: newTodo.value.trim(),
      completed: false
    })
    newTodo.value = ''
  }
}

const toggleTodo = (index) => {
  todos[index].completed = !todos[index].completed
}

const removeTodo = (index) => {
  todos.splice(index, 1)
}
</script>

<style scoped>
.todo-list {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #3aa876;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 10px;
  background: #f8f9fa;
  margin-bottom: 8px;
  border-radius: 4px;
}

.completed {
  text-decoration: line-through;
  color: #666;
}

.delete-btn {
  margin-left: auto;
  background: #ff4757;
  padding: 4px 8px;
}

.delete-btn:hover {
  background: #ff2d3b;
}
</style>
