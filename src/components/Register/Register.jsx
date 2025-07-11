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
      // серверге запрос кылуу фунциясы
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
        setTimeout(() => navigate("/login"), 1500); // ийгиликтуу болсо регистрация жазайт
      } else {
        // катталууу болбой калса бизге кат келет
        message.error(data?.message || t("registrationFailed"));
      }
    } catch (err) {
      // Логирование и сообщение об ошибке при сбое запроса
      console.error("Error:", err);
      message.error(t("registrationError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>{t("auth.registration")}</h1>
      <Form
        name="register"
        onFinish={handleRegister}
        layout="vertical"
        className={styles.registerForm}
      >
        <Form.Item
          label={t("auth.name")}
          name="name"
          rules={[
            { required: true, message: t("enterName") },
            { min: 2, message: t("nameMinLength") },
          ]}
        >
          <Input placeholder={t("auth.name")} autoComplete="name" />
        </Form.Item>

        <Form.Item
          label={t("auth.email")}
          name="email"
          rules={[
            { required: true, message: t("auth.email") },
            { type: "email", message: t("validEmail") },
          ]}
        >
          <Input placeholder={t("auth.email")} autoComplete="email" />
        </Form.Item>

        <Form.Item
          label={t("auth.password")}
          name="password"
          rules={[
            { required: true, message: t("auth.password") },
            { min: 6, message: t("passwordMinLength") },
          ]}
        >
          <Input.Password
            placeholder={t("auth.password")}
            autoComplete="new-password"
          />
        </Form.Item>

        <Form.Item
          label={t("auth.passwordAgain")}
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: t("auth.passwordAgain") },
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
            placeholder={t("auth.passwordAgain")}
            autoComplete="new-password"
          />
        </Form.Item>

        <Form.Item
          label={t("auth.role")}
          name="role"
          rules={[{ required: true, message: t("selectRole") }]}
        >
          <Select placeholder={t("auth.role")}>
            <Select.Option value="jobseeker">
              {t("role.jobseeker")}
            </Select.Option>
            <Select.Option value="employer">{t("role.employer")}</Select.Option>
            <Select.Option value="admin">{t("role.admin")}</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {t("auth.registration")}
          </Button>
        </Form.Item>
      </Form>
      <p className={styles.loginLink}>
        {t("auth.alreadyHaveAccount")} <a href="/login">{t("auth.login")}</a>
      </p>
    </div>
  );
};

export default Register;
