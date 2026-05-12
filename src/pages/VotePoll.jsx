import { Card, Col, Row, Button, Radio, message } from "antd";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPoll, votePoll } from "../api/api";

export default function VotePoll() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [poll, setPoll] = useState(null);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    getPoll(id).then((res) => setPoll(res.data));
  }, [id]);

  const vote = async () => {
    if (!selected) {
      message.error("Please select an option");
      return;
    }

    try {
      await votePoll(id, selected);

      message.success("Voted!");

      setTimeout(() => {
        navigate(`/poll/${id}/results`);
      }, 500);
    } catch (err) {
      message.error("Vote failed");
    }
  };

  if (!poll) return <div>Loading...</div>;

  return (
    <Row justify="center" style={{ padding: "14px" }}>
      <Col xs={24} md={12}>
        <Card title={poll.question}>
          <Radio.Group
            onChange={(e) => setSelected(e.target.value)}
            value={selected}
          >
            {poll.options.map((o) => (
              <Radio
                key={o.id}
                value={o.id}
                style={{ display: "block", marginBottom: "10px" }}
              >
                {o.text}
              </Radio>
            ))}
          </Radio.Group>

          <br />

          <Button type="primary" onClick={vote}>
            Vote
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
