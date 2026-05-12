import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

export default function AppFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      <Text type="secondary">Mazen Poll System ©2026</Text>
    </Footer>
  );
}
