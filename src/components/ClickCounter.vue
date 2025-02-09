<template>
  <div>
    <button @click="increment">Click me</button>
    <p>{{ clickMessage }}</p>
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
  computed: {
    clickMessage() {
      return `You have clicked the button ${this.count} times.`;
    }
  },
  methods: {
    increment() {
      try {
        if (typeof this.count !== 'number' || this.count < 0) {
          throw new Error('Invalid count value');
        }
        this.count += 1;
      } catch (error) {
        console.error('Error incrementing count:', error);
        // 可以根据需求决定是否重置 count 或采取其他措施
      }
    }
  }
};
</script>