// 导入路由核心组件
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// 导入三个页面组件
import Home from './Home';
import TodoList from './TodoList';
import FormExample from './FormExample';

function App() {
  return (
    <Router>
      {/* 导航栏：所有页面共享 */}
      <nav style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        marginBottom: '20px',
        display: 'flex', // 横向排列导航项
        gap: '20px', // 导航项之间的间距
        alignItems: 'center'
      }}>
        {/* 首页链接 */}
        <Link to="/" style={{
          textDecoration: 'none',
          color: '#333',
          fontSize: '16px'
        }}>
          首页
        </Link>

        {/* 待办列表链接 */}
        <Link to="/todos" style={{
          textDecoration: 'none',
          color: '#333',
          fontSize: '16px'
        }}>
          待办列表
        </Link>

        {/* 表单示例链接 */}
        <Link to="/form" style={{
          textDecoration: 'none',
          color: '#333',
          fontSize: '16px'
        }}>
          表单示例
        </Link>
      </nav>

      {/* 页面内容区域：根据路由显示不同组件 */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <Routes>
          {/* 根路径 → 首页 */}
          <Route path="/" element={<Home />} />
          {/* /todos 路径 → 待办列表 */}
          <Route path="/todos" element={<TodoList />} />
          {/* /form 路径 → 表单示例 */}
          <Route path="/form" element={<FormExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;