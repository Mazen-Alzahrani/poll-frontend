import { Card, Col, Row, Table, Button, message, Typography } from "antd";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getResults, sendResults } from "../api/api";

import { QRCodeCanvas } from "qrcode.react";

const { Title, Text } = Typography;

export default function Results() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await getResults(id);

        console.log(res.data);

        setData(res.data);
      } catch (err) {
        console.error(err);

        message.error("Failed to load results");
      }
    };

    fetchResults();
  }, [id]);

  const send = async () => {
    try {
      await sendResults(id);

      message.success("Sent to ClickUp");
    } catch (err) {
      console.error(err);

      message.error("Failed to send");
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const columns = [
    {
      title: "Option",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "Votes",
      dataIndex: "votes",
      key: "votes",
    },
    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
      render: (p) => `${p}%`,
    },
  ];

  const pollUrl = `${window.location.origin}/poll/${id}`;

  return (
    <Row justify="center" style={{ padding: "14px" }}>
      <Col xs={24} md={14}>
        <Card>
          <Title level={3}>{data.question}</Title>

          <Text strong>Total Votes: {data.totalVotes}</Text>

          <br />
          <br />

          <Table
            dataSource={data.results || []}
            columns={columns}
            rowKey="id"
            pagination={false}
          />

          <br />

          <Row justify="center">
            <QRCodeCanvas value={pollUrl} size={150} />
          </Row>

          <br />

          <Row justify="center">
            <Text copyable>{pollUrl}</Text>
          </Row>

          <br />

          <Row justify="center" gutter={12}>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(pollUrl);

                message.success("Link copied");
              }}
            >
              Copy Link
            </Button>

            <Button type="primary" onClick={send}>
              Send to ClickUp
            </Button>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
