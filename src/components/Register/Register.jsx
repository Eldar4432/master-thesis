import React, { useState } from "react";
import { Form, Input, Button, message, Select } from "antd";
import styles from "./Register.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        message.success(t("registrationSuccess"));
        setTimeout(() => navigate("/login"), 1500); // Перенаправление после небольшой задержки
      } else {
        message.error(data?.message || t("registrationFailed"));
      }
    } catch (err) {
      console.error("Error:", err);
      message.error(t("registrationError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>{t("auth:registration")}</h1>
      <Form
        name="register"
        onFinish={handleRegister}
        layout="vertical"
        className={styles.registerForm}
      >
        <Form.Item
          label={t("name")}
          name="name"
          rules={[
            { required: true, message: t("enterName") },
            { min: 2, message: t("nameMinLength") },
          ]}
        >
          <Input placeholder={t("yourName")} autoComplete="name" />
        </Form.Item>

        <Form.Item
          label={t("email")}
          name="email"
          rules={[
            { required: true, message: t("enterEmail") },
            { type: "email", message: t("validEmail") },
          ]}
        >
          <Input placeholder={t("email")} autoComplete="email" />
        </Form.Item>

        <Form.Item
          label={t("password")}
          name="password"
          rules={[
            { required: true, message: t("enterPassword") },
            { min: 6, message: t("passwordMinLength") },
          ]}
        >
          <Input.Password
            placeholder={t("password")}
            autoComplete="new-password"
          />
        </Form.Item>

        <Form.Item
          label={t("confirmPassword")}
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: t("confirmPassword") },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t("passwordsDontMatch")));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder={t("confirmPassword")}
            autoComplete="new-password"
          />
        </Form.Item>

        <Form.Item
          label={t("role")}
          name="role"
          rules={[{ required: true, message: t("selectRole") }]}
        >
          <Select placeholder={t("selectRole")}>
            <Select.Option value="jobseeker">{t("jobseeker")}</Select.Option>
            <Select.Option value="employer">{t("employer")}</Select.Option>
            <Select.Option value="admin">{t("admin")}</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {t("register")}
          </Button>
        </Form.Item>
      </Form>
      <p className={styles.loginLink}>
        {t("alreadyHaveAccount")} <a href="/login">{t("login")}</a>
      </p>
    </div>
  );
};

export default Register;
