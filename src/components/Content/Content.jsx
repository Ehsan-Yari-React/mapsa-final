import { Layout } from "antd";

const Content = ({ children }) => {
  const { Content } = Layout;
  return (
    <Content
      style={{
        margin: "24px auto",
        padding: 24,
        height: "100vh",
      }}
    >
      {children}
    </Content>
  );
};

export default Content;
