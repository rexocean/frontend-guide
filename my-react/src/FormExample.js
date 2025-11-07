import { useState } from 'react';

function FormExample() {
    // 1. 用 useState 管理所有表单字段（核心：受控组件）
    const [formData, setFormData] = useState({
        username: '',       // 用户名（文本输入）
        email: '',          // 邮箱（文本输入）
        gender: 'male',     // 性别（单选框，默认男）
        hobbies: [],        // 爱好（复选框，数组存选中项）
        city: 'beijing'     // 城市（下拉选择，默认北京）
    });

    // 2. 管理表单验证错误信息
    const [errors, setErrors] = useState({});

    // 3. 处理单个输入框变化（通用方法，适配所有字段）
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // 根据输入类型处理值（复选框特殊：checked 是布尔值）
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ?
                (checked ? [...prev[name], value] : prev[name].filter(item => item !== value)) :
                value
        }));
    };

    // 4. 表单验证（提交前检查）
    const validateForm = () => {
        const newErrors = {};
        // 用户名不能为空
        if (!formData.username.trim()) {
            newErrors.username = '用户名不能为空';
        }
        // 邮箱格式简单验证（包含 @）
        if (!formData.email.includes('@')) {
            newErrors.email = '请输入有效的邮箱';
        }
        // 爱好至少选一个
        if (formData.hobbies.length === 0) {
            newErrors.hobbies = '至少选择一个爱好';
        }
        // 更新错误信息
        setErrors(newErrors);
        // 如果没有错误，返回 true（允许提交）
        return Object.keys(newErrors).length === 0;
    };

    // 5. 处理表单提交
    const handleSubmit = (e) => {
        e.preventDefault(); // 阻止浏览器默认刷新行为
        // 先验证表单
        const isvalid = validateForm();
        if (isvalid) {
            // 验证通过：可以提交到后端（这里用 console 模拟）
            console.log('表单提交成功！', formData);
            alert('提交成功！可在控制台查看数据');
            // 可选：提交后重置表单
            // setFormData({ username: '', email: '', gender: 'male', hobbies: [], city: 'beijing' });
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>用户信息表单</h2>
            {/* 表单标签：通过 onSubmit 绑定提交事件 */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                {/* 1. 用户名输入框 */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                        用户名：
                    </label>
                    <input
                        type="text"
                        name="username" // 必须和 formData 中的键名一致
                        value={formData.username}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: errors.username ? '1px solid red' : '1px solid #ddd',
                            borderRadius: '4px'
                        }}
                    />
                    {/* 错误提示（如果有错误） */}
                    {errors.username && <p style={{ color: 'red', margin: '5px 0 0 0' }}>{errors.username}</p>}
                </div>

                {/* 2. 邮箱输入框 */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                        邮箱：
                    </label>
                    <input
                        type="email"
                        name="email" // 和 formData 中的 email 对应
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: errors.email ? '1px solid red' : '1px solid #ddd',
                            borderRadius: '4px'
                        }}
                    />
                    {errors.email && <p style={{ color: 'red', margin: '5px 0 0 0' }}>{errors.email}</p>}
                </div>

                {/* 3. 性别单选框 */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                        性别：
                    </label>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <label>
                            <input
                                type="radio"
                                name="gender" // 所有单选框 name 相同，才能互斥
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                            />
                            男
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                            />
                            女
                        </label>
                    </div>
                </div>

                {/* 4. 爱好复选框 */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                        爱好：
                    </label>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies" // 所有复选框 name 相同
                                value="reading"
                                checked={formData.hobbies.includes('reading')}
                                onChange={handleChange}
                            />
                            阅读
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="sports"
                                checked={formData.hobbies.includes('sports')}
                                onChange={handleChange}
                            />
                            运动
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="coding"
                                checked={formData.hobbies.includes('coding')}
                                onChange={handleChange}
                            />
                            编程
                        </label>
                    </div>
                    {errors.hobbies && <p style={{ color: 'red', margin: '5px 0 0 0' }}>{errors.hobbies}</p>}
                </div>

                {/* 5. 城市下拉选择器 */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                        城市：
                    </label>
                    <select
                        name="city" // 和 formData 中的 city 对应
                        value={formData.city}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ddd',
                            borderRadius: '4px'
                        }}
                    >
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="guangzhou">广州</option>
                        <option value="shenzhen">深圳</option>
                    </select>
                </div>

                {/* 提交按钮 */}
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#42b983',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100px'
                    }}
                >
                    提交
                </button>
            </form>
        </div>
    );
}

export default FormExample;