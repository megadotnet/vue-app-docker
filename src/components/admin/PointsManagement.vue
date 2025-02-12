<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a href="#">会员积分明细</a></li>
          <li><a href="#">订单管理</a></li>
          <li><a href="#">商品管理</a></li>
          <li><a href="#">会员管理</a></li>
        </ul>
      </nav>
    </aside>
    <main class="main-content">
      <div class="dashboard-cards">
        <div class="card">
          <h3>会员</h3>
          <div class="card-value">123 <span class="trend down">-15%</span></div>
        </div>
        <div class="card">
          <h3>积分</h3>
          <div class="card-value">123 <span class="trend up">+66</span></div>
        </div>
        <div class="card">
          <h3>明细</h3>
          <div class="card-value">123 <span class="trend down">-88</span></div>
        </div>
        <div class="card">
          <h3>列表</h3>
          <div class="card-value">123 <span class="trend up">+25%</span></div>
        </div>
      </div>

      <div class="chart-section">
        <h2>积分明细筛选图 (1月-5月)</h2>
        <div class="line-chart">
          {/* Placeholder for Line Chart */}
          折线图占位符
        </div>
      </div>

      <div class="chart-section">
        <h2>积分分布雷达图 (1月-5月)</h2>
        <div class="radar-chart">
          {/* Placeholder for Radar Chart */}
          雷达图占位符
        </div>
      </div>

      <div class="upload-section">
        <button class="upload-button">EXCEL上传导入</button>
        <p class="upload-description">上传积分明细</p>
      </div>

      <div class="message-section">
        <div class="message-item">
          系统消息: 您有新的积分明细EXCEL上传导入 <a href="#">查看更多</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PointsManagement',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin-bottom: 10px;
}

.sidebar nav ul li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.dashboard-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.card {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
}

.card h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.card-value {
  font-size: 24px;
  font-weight: bold;
}

.trend {
  font-size: 14px;
  margin-left: 5px;
}

.up {
  color: green;
}

.down {
  color: red;
}

.chart-section {
  margin-bottom: 20px;
}

.line-chart, .radar-chart {
  height: 300px; /* Placeholder height */
  border: 1px solid #ccc;
  text-align: center;
  line-height: 300px;
  color: #999;
}

.upload-section {
  margin-bottom: 20px;
}

.upload-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.upload-description {
  margin-top: 5px;
  font-size: 14px;
  color: #666;
}

.message-section {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.message-item {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.message-item:last-child {
  border-bottom: none;
}
</style>
