import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./Register.module.css";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const handleRegister = (values) => {
    console.log("Registration Successful:", values);
    // Логика для регистрации пользователя
  };

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>{t("registration")}</h1>
      <Form
        name="register"
        onFinish={handleRegister}
        layout="vertical"
        className={styles.registerForm}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[
            { required: true, message: "Введите ваше имя!" },
            { min: 2, message: "Имя должно содержать минимум 2 символа!" },
          ]}
        >
          <Input placeholder="Ваше имя" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Введите ваш email!" },
            { type: "email", message: "Введите корректный email!" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: "Введите пароль!" },
            { min: 6, message: "Пароль должен содержать минимум 6 символов!" },
          ]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <Form.Item
          label="Повторите пароль"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Подтвердите ваш пароль!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Повторите пароль" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
      <p className={styles.loginLink}>
        Уже есть аккаунт? <a href="/login">Войти</a>
      </p>
    </div>
  );
};

export default Register;
