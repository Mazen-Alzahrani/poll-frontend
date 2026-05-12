import { Layout, Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

export default function AppHeader() {
  const navigate = useNavigate();

  return (
    <Header style={{ background: "#000" }}>
      <Space>
        <Text strong>Poll System</Text>

        <Button onClick={() => navigate("/")}>Create</Button>
      </Space>
    </Header>
  );
}
