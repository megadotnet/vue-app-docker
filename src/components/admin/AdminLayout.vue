<template>
  <div class="admin-container">
    <aside class="sidebar">
      <div class="logo">Points Admin</div>
      <nav class="menu">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path"
          class="menu-item"
          active-class="active">
          <component :is="item.icon" class="icon" />
          {{ item.name }}
        </router-link>
      </nav>
    </aside>
    
    <main class="content">
      <div class="content-header">
        <h1>{{ $route.meta.title }}</h1>
      </div>
      <router-view />
    </main>
  </div>
</template>

<script>
import { UserIcon, ChartBarIcon, ShoppingCartIcon, GiftIcon } from '@heroicons/vue/outline'

export default {
  components: { UserIcon, ChartBarIcon, ShoppingCartIcon, GiftIcon },
  data() {
    return {
      menuItems: [
        { name: '会员积分明细', path: '/points', icon: 'ChartBarIcon' },
        { name: '订单管理', path: '/orders', icon: 'ShoppingCartIcon' },
        { name: '商品管理', path: '/products', icon: 'GiftIcon' },
        { name: '会员管理', path: '/members', icon: 'UserIcon' }
      ]
    }
  }
}
</script>

<style scoped>
.admin-container {
  @apply flex min-h-screen bg-gray-100;
}

.sidebar {
  @apply w-64 bg-white shadow-lg fixed h-full flex flex-col;
}

.logo {
  @apply text-xl font-bold p-6 border-b;
}

.menu {
  @apply flex-1 p-4;
}

.menu-item {
  @apply flex items-center p-3 rounded-lg mb-2 text-gray-700 hover:bg-blue-50 transition-colors;
}

.menu-item.active {
  @apply bg-blue-100 text-blue-600;
}

.icon {
  @apply w-5 h-5 mr-3;
}

.content {
  @apply flex-1 ml-64 p-8;
}

.content-header {
  @apply mb-8;
}
</style>
