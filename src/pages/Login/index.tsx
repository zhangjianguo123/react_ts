import styled from "styled-components"
import BackgroundLogoImg from '../../assets/image/bgc.webp'
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
const LoginStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_input {
        width: 550px;
        height: 350px;
        background-color: #23574255;
        color: #fff;
    }
    .title {
        text-align: center;
        font-size: 26px;
        margin: 30px 0 50px;
    }
    .ant-btn-primary {
        width: 65%;
        height: 45px;
        border-radius: 5px;
        margin-top: 20px;
    }
    
`

interface formRules {
    username: string,
    password: string
}


function Login() {
    let router = useNavigate()
    const onFinish = (values: formRules) => {
        const { username, password } = values
        router('/home')
        console.log('Success:', username, password);

    };

    return <>
        <LoginStyle style={{ backgroundImage: `url(${BackgroundLogoImg})` }}>
            <div className="login_input">
                <div className="title">管理系统</div>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 12 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </LoginStyle>
    </>
}

export default Login