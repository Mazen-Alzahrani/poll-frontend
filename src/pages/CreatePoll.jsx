import { Button, Card, Col, Form, Input, Row, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPoll } from "../api/api";

export default function CreatePoll() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const options = [values.option1, values.option2, values.option3].filter(
        Boolean,
      );

      const res = await createPoll({
        question: values.question,
        options,
      });

      message.success("Poll created!");

      form.resetFields();

      setTimeout(() => {
        navigate(`/poll/${res.data.id}`);
      }, 500);
    } catch (err) {
      message.error("Failed to create poll");
    }

    setLoading(false);
  };

  return (
    <Row justify="center" style={{ padding: "14px" }}>
      <Col xs={24} md={12}>
        <Card title="Create Poll">
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              name="question"
              label="Question"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="option1"
              label="Option 1"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="option2"
              label="Option 2"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="option3" label="Option 3 (optional)">
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={loading}>
              Create Poll
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
