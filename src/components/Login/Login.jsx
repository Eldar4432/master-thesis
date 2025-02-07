import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./Login.module.css";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const handleLogin = (values) => {
    console.log("Login Successful:", values);
    // Здесь будет логика для входа в систему
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>{t("auth.login")}</h1>
      <Form
        name="login"
        onFinish={handleLogin}
        layout="vertical"
        className={styles.loginForm}
      >
        <Form.Item
          label={t("auth.email")}
          name="email"
          rules={[
            { required: true, message: "Пожалуйста, введите ваш email!" },
            { type: "email", message: "Введите корректный email!" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label={t("auth.password")}
          name="password"
          rules={[
            { required: true, message: "Пожалуйста, введите ваш пароль!" },
            { min: 6, message: "Пароль должен содержать минимум 6 символов!" },
          ]}
        >
          <Input.Password placeholder={t("auth.password")} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {t("auth.login")}
          </Button>
        </Form.Item>
      </Form>
      <p className={styles.registerLink}>
        {t("auth.account")} <a href="/register">{t("auth.registration")}</a>
      </p>
    </div>
  );
};

export default Login;
