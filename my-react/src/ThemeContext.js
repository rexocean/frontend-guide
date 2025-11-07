// 导入需要的 Hook：createContext 用于创建容器，useContext 用于读取数据，useState 用于管理主题状态
import { createContext, useContext, useState } from 'react';

// 1. 创建一个 Context（数据容器），默认值设为 'light'（浅色模式）
// Context 就像一个“公共公告栏”，所有组件都能在这里读/写共享数据
const ThemeContext = createContext('light');

// 2. 创建 ThemeProvider 组件（公告栏管理员）
// 作用：包裹所有子组件，提供共享数据和操作方法
export function ThemeProvider({ children }) {
    // 管理主题状态：默认是浅色模式（light），setTheme 用来切换主题
    const [theme, setTheme] = useState('light');

    // 切换主题的方法：点击按钮时触发，在浅色/深色之间切换
    const toggleTheme = () => {
        // prev 是上一次的主题状态，这里用箭头函数简化写法
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // 准备要共享给所有子组件的数据（可以是数据 + 方法）
    const sharedData = {
        currentTheme: theme, // 当前主题（light/dark）
        switchTheme: toggleTheme // 切换主题的方法
    };

    // 用 Provider 把共享数据“广播”给所有子组件
    return (
        <ThemeContext.Provider value={sharedData}>
            {children} {/* children 就是被包裹的子组件（比如 Header、Button） */}
        </ThemeContext.Provider>
    );
}

// 3. 封装一个自定义 Hook（简化子组件使用）
// 子组件不用重复写 useContext(ThemeContext)，直接调用 useTheme() 即可
export function useTheme() {
    return useContext(ThemeContext);
}