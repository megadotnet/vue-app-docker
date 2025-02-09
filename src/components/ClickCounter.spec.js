import { mount } from '@vue/test-utils';
import ClickCounter from './ClickCounter.vue';

describe('ClickCounter.vue', () => {
    it('renders correctly', () => {
      // 使用 mount 方法挂载组件
      const wrapper = mount(ClickCounter);
  
      // 断言组件是否正确渲染
      expect(wrapper.html()).toContain('<button>Click me</button>');
      expect(wrapper.html()).toContain('<p>You have clicked the button 0 times.</p>');
    });
  });
  
  describe('ClickCounter.vue', () => {
    it('increments counter when button is clicked', async () => {
      const wrapper = mount(ClickCounter);
  
      // 模拟按钮点击事件
      await wrapper.find('button').trigger('click');
  
      // 断言点击后，点击次数是否正确更新
      expect(wrapper.html()).toContain('<p>You have clicked the button 1 times.</p>');
  
      // 再次点击
      await wrapper.find('button').trigger('click');
  
      // 断言点击后，点击次数是否正确更新
      expect(wrapper.html()).toContain('<p>You have clicked the button 2 times.</p>');
    });
  });