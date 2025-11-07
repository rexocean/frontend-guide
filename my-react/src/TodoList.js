// src/TodoList.js
import { useState } from 'react';

// 独立的 TodoList 组件
function TodoList() {
    // 存储待办事项的状态（组件内部管理）
    const [todos, setTodos] = useState([]);
    // 存储输入框的值
    const [inputText, setInputText] = useState('');

    // 处理输入框内容变化
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    // 添加待办事项
    const addTodo = () => {
        if (inputText.trim()) { // 避免添加空内容
            // 复制原数组并添加新项（不可直接修改原数组）
            setTodos([...todos, inputText]);
            setInputText(''); // 清空输入框
        }
    };

    // 删除待办事项（根据索引删除）
    const deleteTodo = (index) => {
        // 过滤掉要删除的项，生成新数组
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    // 按回车键也能添加待办
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <h2>待办事项列表</h2>
            <div style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // 监听回车键
                    placeholder="输入待办事项，按回车或点击添加"
                    style={{
                        width: '300px',
                        padding: '8px',
                        marginRight: '10px'
                    }}
                />
                <button onClick={addTodo} style={{ padding: '8px 15px' }}>
                    添加
                </button>
            </div>
            {todos.length === 0 ? (
                <p style={{ color: '#666' }}>暂无待办事项，添加一个吧！</p>
            ) : (
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            style={{
                                padding: '10px',
                                margin: '5px 0',
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <span>{todo}</span>
                            <button
                                onClick={() => deleteTodo(index)}
                                style={{
                                    backgroundColor: '#ff4444',
                                    color: 'white',
                                    border: 'none',
                                    padding: '5px 10px',
                                    borderRadius: '3px',
                                    cursor: 'pointer'
                                }}
                            >
                                删除
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoList; // 导出组件