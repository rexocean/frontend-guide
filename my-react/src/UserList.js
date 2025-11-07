import { useState, useEffect } from 'react';

function UserList() {
    // 状态管理：用户数据、加载状态、错误信息
    const [users, setUsers] = useState([]); // 存储用户列表
    const [loading, setLoading] = useState(true); // 是否正在加载
    const [error, setError] = useState(null); // 错误信息

    // 用 useEffect 处理数据请求（副作用）
    useEffect(() => {
        // 定义请求数据的函数（因为 useEffect 里不能直接写 async，所以包一层）
        const fetchUsers = async () => {
            try {
                // 模拟接口请求（实际项目中用 fetch 或 axios）
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('请求失败！'); // 抛出自定义错误
                }
                const data = await response.json(); // 解析数据
                setUsers(data); // 保存数据到状态
                setError(null); // 清空错误
            } catch (err) {
                setError(err.message); // 保存错误信息
                setUsers([]); // 清空数据
            } finally {
                setLoading(false); // 无论成功失败，都结束加载
            }
        };

        // 执行请求
        fetchUsers();

        // 清理函数：组件卸载时执行（这里模拟清理操作）
        return () => {
            console.log('组件要卸载了，清理资源...');
            // 实际场景：如果有未完成的请求，可以取消（比如用 AbortController）
        };
    }, []); // 空依赖数组：只在首次渲染后请求一次


    // 根据状态渲染不同内容
    if (loading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>错误：{error}</div>;
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>用户列表</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {users.map(user => (
                    <li key={user.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                        <p>姓名：{user.name}</p>
                        <p>邮箱：{user.email}</p>
                        <p>地址：{user.address.street}, {user.address.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;