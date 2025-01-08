import React from "react";
import { Select, Button, Form } from "antd";
import styles from "./Filters.module.css";

const { Option } = Select;

const Filters = () => {
  const handleFilterSubmit = (values) => {
    console.log("Filters applied:", values);
  };

  return (
    <aside className={styles.filters}>
      <h2>Фильтрация работы</h2>
      <Form onFinish={handleFilterSubmit} layout="vertical">
        <Form.Item name="region" label="Регионы">
          <Select placeholder="Выберите регион">
            <Option value="all">Все Регионы</Option>
            <Option value="center">Талас</Option>
            <Option value="suburb">Чуй</Option>
            <Option value="suburb">Нарын</Option>
            <Option value="suburb">Иссык-Куль</Option>
            <Option value="suburb">Жалал-Абад</Option>
            <Option value="suburb">Ош</Option>
            <Option value="suburb">Баткен</Option>
          </Select>
        </Form.Item>

        <Form.Item name="district" label="Районы">
          <Select placeholder="Выберите район">
            <Option value="all">Все районы</Option>
            <Option value="center">Бакай-Ата</Option>
            <Option value="suburb">Ленинский</Option>
            <Option value="suburb">Тон</Option>
            <Option value="suburb">Озгон</Option>
            <Option value="suburb">Алай</Option>
          </Select>
        </Form.Item>

        <Form.Item name="jobType" label="Тип работы">
          <Select placeholder="Выберите тип работы">
            <Option value="all">All</Option>
            <Option value="fulltime">Full-time</Option>
            <Option value="parttime">Part-time</Option>
          </Select>
        </Form.Item>

        <Form.Item name="JobCategory" label="Тип вакансии">
          <Select placeholder="Выберите тип вакансии">
            <Option value="all">Все</Option>
            <Option value="it">IT</Option>
            <Option value="teacher">Учитель</Option>
            <Option value="electrician">Электрик</Option>
            <Option value="waiter">Официант</Option>
            <Option value="driver">Водитель</Option>
            <Option value="doctor">Врач</Option>
            <Option value="nurse">Медсестра</Option>
            <Option value="engineer">Инженер</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Apply Filters
          </Button>
        </Form.Item>
      </Form>
    </aside>
  );
};

export default Filters;
