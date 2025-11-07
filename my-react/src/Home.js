// 首页组件：无复杂逻辑，仅展示欢迎信息和跳转引导
function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1 style={{ color: '#333' }}>欢迎来到 React 入门页面！</h1>
            <p style={{ fontSize: '18px', marginTop: '20px', color: '#666' }}>
                这是通过 React Router 实现的多页面应用
            </p>
            <p style={{ fontSize: '16px', color: '#999', marginTop: '10px' }}>
                点击导航栏的「待办列表」，查看功能页面
            </p>
        </div>
    );
}

export default Home;