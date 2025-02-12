<template>
  <div class="dashboard-container">
    <!-- 顶部数据卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div 
        v-for="(card, index) in cards" 
        :key="index"
        class="bg-white p-6 rounded-xl shadow-sm">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-gray-500 text-sm">{{ card.title }}</p>
            <p class="text-2xl font-bold mt-2">{{ card.value }}</p>
          </div>
          <div 
            :class="`p-3 rounded-lg ${card.trendColor} bg-opacity-10`">
            <span :class="`text-sm ${card.trendColor}`">{{ card.trend }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-4">积分趋势图</h3>
        <LineChart :chart-data="lineChartData" />
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="text-lg font-semibold mb-4">积分分布雷达图</h3>
        <RadarChart :chart-data="radarChartData" />
      </div>
    </div>

    <!-- Excel上传区域 -->
    <div class="mt-8 bg-white p-6 rounded-xl shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-semibold">Excel数据导入</h3>
          <p class="text-gray-500 text-sm mt-1">请上传积分明细Excel文件</p>
        </div>
        <input 
          type="file" 
          class="hidden" 
          ref="fileInput"
          accept=".xlsx, .xls" 
          @change="handleFileUpload">
        <button 
          @click="$refs.fileInput.click()"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          <ArrowUpTrayIcon class="w-5 h-5 mr-2" />
          上传文件
        </button>
      </div>
    </div>

    <!-- 系统消息 -->
    <div class="mt-6 bg-blue-50 p-4 rounded-lg flex items-center justify-between">
      <div class="flex items-center">
        <BellAlertIcon class="w-5 h-5 text-blue-600 mr-3" />
        <span class="text-blue-600">您有新的积分明细EXCEL上传导入</span>
      </div>
      <a href="#" class="text-blue-600 hover:underline">查看更多 &rarr;</a>
    </div>
  </div>
</template>

<script>
import { Line as LineChart, Radar as RadarChart } from 'vue-chartjs'
import { ArrowUpTrayIcon, BellAlertIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    LineChart,
    RadarChart,
    ArrowUpTrayIcon,
    BellAlertIcon
  },
  data() {
    return {
      cards: [
        { title: '会员', value: '123', trend: '较昨日 -15%', trendColor: 'text-red-500' },
        { title: '积分', value: '123', trend: '较昨日 +66', trendColor: 'text-green-500' },
        { title: '明细', value: '123', trend: '较昨日 -88', trendColor: 'text-red-500' },
        { title: '列表', value: '123', trend: '较昨日 +25%', trendColor: 'text-green-500' }
      ],
      lineChartData: {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [{
          label: '积分变化',
          data: [65, 59, 80, 81, 56],
          borderColor: '#3B82F6',
          tension: 0.4
        }]
      },
      radarChartData: {
        labels: ['1月', '2月', '3月', '4月', '5月'],
        datasets: [{
          label: '积分分布',
          data: [65, 59, 90, 81, 56],
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: '#3B82F6'
        }]
      }
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        // 处理文件上传逻辑
        console.log('Selected file:', file)
      }
    }
  }
}
