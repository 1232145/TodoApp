import React from "react";
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { List, Space, Button } from 'antd';

const TodoItem = ({ todo, handleTodoDelete }) => {

    return (
        <div>
            <List.Item
                actions={[
                    <Space>
                        <Button
                            type="text"
                            onClick={() => handleTodoDelete(todo.job)}
                            icon={<DeleteOutlined />}
                        />
                    </Space>
                ]}
            >
                <ExclamationCircleOutlined style={{marginRight: '10px'}}/>
                <List.Item.Meta
                    title={<span>{todo.job}</span>}
                    description={todo.description}
                />
            </List.Item>
        </div>
    )
}

export default TodoItem;