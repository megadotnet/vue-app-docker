<template>
  <el-container class="h-screen">
    <!-- 顶部导航栏 -->
    <el-header class="bg-gray-800 text-white flex items-center justify-between px-4 border-b">
      <div class="flex items-center">
        <el-icon class="mr-2"><House /></el-icon>
        <span class="text-lg font-semibold">后台管理系统</span>
      </div>
      <div class="flex items-center">
        <el-avatar :size="30" class="mr-2" />
        <span>未登录</span>
      </div>
    </el-header>

    <el-container>
      <!-- 左侧菜单 -->
      <el-aside width="200px" class="bg-gray-100 border-r">
        <el-menu
          active-text-color="#409EFF"
          class="border-none"
          @select="handleMenuSelect"
        >
          <el-menu-item index="points">
            <el-icon><Coin /></el-icon>
            <span>会员积分明细</span>
          </el-menu-item>
          <el-menu-item index="overview">
            <el-icon><Odometer /></el-icon>
            <span>概览</span>
          </el-menu-item>
          <el-menu-item index="order">
            <el-icon><Tickets /></el-icon>
            <span>订单管理</span>
          </el-menu-item>
          <el-menu-item index="product">
            <el-icon><Goods /></el-icon>
            <span>商品管理</span>
          </el-menu-item>
          <el-menu-item index="member">
            <el-icon><User /></el-icon>
            <span>会员管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 主内容区域 -->
      <el-main class="p-6 bg-gray-50">
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item, index) in stats" :key="index">
            <el-card class="mb-4">
              <div class="flex justify-between items-center">
                <div>
                  <div class="text-2xl font-bold">{{ item.value }}</div>
                  <div class="text-gray-500 text-sm">{{ item.label }}</div>
                </div>
                <div :class="item.change.includes('+') ? 'text-green-500' : 'text-red-500'">
                  {{ item.change }}
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { label: '会员', value: 456, change: '-15%' },
        { label: '积分', value: 7890, change: '+5%' },
        { label: '明细', value: 32, change: '-2%' },
        { label: '列表', value: 156, change: '+10%' }
      ]
    }
  },
  methods: {
    handleMenuSelect(key) {
      console.log('菜单选择:', key)
    }
  }
}
</script>

<style scoped>
.el-aside {
  transition: width 0.3s;
}
.el-menu {
  height: 100%;
}
</style>
