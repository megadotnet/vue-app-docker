<template>
    <div>
      <button @click="increment">Click me</button>
      <p>You have clicked the button {{ count }} times.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClickCounter',
    data() {
      return {
        count: 0
      };
    },
    methods: {
      increment() {
        this.count += 1;
      }
    }
  };
  </script>
  