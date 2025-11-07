// 导入自定义 Hook：useTheme（从 ThemeContext.js 中获取）
import { useTheme } from './ThemeContext';

// 子组件：显示当前主题，并有切换主题的按钮
function ThemeButton() {
    // 直接通过自定义 Hook 获取共享数据和方法
    const { currentTheme, switchTheme } = useTheme();

    // 根据当前主题设置按钮样式（浅色/深色模式区分）
    const buttonStyle = {
        padding: '12px 24px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        margin: '10px',
        // 浅色模式：黑字白底；深色模式：白字黑底
        backgroundColor: currentTheme === 'light' ? '#ffffff' : '#333333',
        color: currentTheme === 'light' ? '#333333' : '#ffffff',
        boxShadow: currentTheme === 'light' ? '0 2px 4px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.3)'
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* 显示当前主题模式 */}
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                当前主题：{currentTheme === 'light' ? '浅色模式' : '深色模式'}
            </p>
            {/* 切换主题的按钮：点击时调用共享的 switchTheme 方法 */}
            <button style={buttonStyle} onClick={switchTheme}>
                切换主题
            </button>
        </div>
    );
}

// 导出组件，供 App.js 使用
export default ThemeButton;