import React from 'react';
import { Alert, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Error = ({ message, setError }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <Space>
                    <ExclamationCircleOutlined style={{ fontSize: '24px' }} />
                    <Alert type="error" message={message} />
                </Space>
            </div>
            <div>
                <Button type="primary" onClick={() => setError(false)}>
                    Go back
                </Button>
            </div>
        </div>
    );
};

export default Error;
