import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./Login.module.css";

const Login = () => {
  const handleLogin = (values) => {
    console.log("Login Successful:", values);
    // Здесь будет логика для входа в систему
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Войти</h1>
      <Form
        name="login"
        onFinish={handleLogin}
        layout="vertical"
        className={styles.loginForm}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Пожалуйста, введите ваш email!" },
            { type: "email", message: "Введите корректный email!" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: "Пожалуйста, введите ваш пароль!" },
            { min: 6, message: "Пароль должен содержать минимум 6 символов!" },
          ]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Войти
          </Button>
        </Form.Item>
      </Form>
      <p className={styles.registerLink}>
        Нет аккаунта? <a href="/registration">Зарегистрироваться</a>
      </p>
    </div>
  );
};

export default Login;
