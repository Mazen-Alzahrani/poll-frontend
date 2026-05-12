import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, Layout, theme } from "antd";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppRoutes from "./routes/AppRoutes";

const { Content } = Layout;

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const themeMode = localStorage.getItem("theme") || "light";

  return (
    <ConfigProvider
      theme={{
        algorithm: themeMode === "dark" ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: "#15514F",
        },
      }}
    >
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <AppHeader />
          <Content style={{ padding: "20px" }}>
            <AppRoutes />
          </Content>
          <AppFooter />
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
