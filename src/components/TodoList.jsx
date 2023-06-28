import React, { useState, useEffect } from 'react';
import { List, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { axiosTodo } from './AxiosInstance';
import TodoItem from './TodoItem';
import Loading from './Loading';
import Error from './Error';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [err, setErr] = useState({ state: false, msg: "" });
    const [loading, setLoading] = useState(false);
    const url = '/todo';

    const fetchTodos = async () => {
        try {
            setLoading(true);
            await axiosTodo.get(url).then(res => setTodos(res.data));
        }
        catch (error) {
            setErr({ state: true, msg: error.message });
        }
        finally {
            setLoading(false);
        }
    }

    const handleTodoChange = (e) => {
        const job = e.currentTarget.value;
        setNewTodo({
            id: todos.length + 1,
            job: job,
            description: ""
        });

    };

    const handleAddTodo = async () => {
        await axiosTodo.post(url + '/create', newTodo)
        .then(res => {
            console.log(res.data);
            fetchTodos();
        })
        .catch(error => setErr({ state: true, msg: error.message }));
    };

    const handleTodoDelete = async (id) => {
        await axiosTodo.delete(url + `/${id}`)
        .then(res => {
            console.log(res.data);
            fetchTodos();
        })
        .catch(error => setErr({ state: true, msg: error.message }));
    };

    useEffect(() => {
        fetchTodos();
    }, [])

    if (err.state) {
        return <Error message={err.msg} setError={setErr}/>
    }

    return (
        <>
            {
                loading ? <Loading />
                    :
                    (
                        <div>
                            <Input
                                value={newTodo.job}
                                onChange={handleTodoChange}
                                placeholder="Enter a new task"
                                style={{ marginBottom: 16 }}
                            />
                            <Button type="primary" onClick={handleAddTodo} icon={<PlusOutlined />}>
                                Add Todo
                            </Button>
                            <List
                                dataSource={todos}
                                renderItem={(todo) => (
                                    <TodoItem
                                        todo={todo}
                                        handleTodoDelete={handleTodoDelete}
                                    />
                                )}
                            />
                        </div>
                    )
            }
        </>
    );
};

export default TodoList;
