import Content from "../../components/Content/Content";
import { Empty } from "antd";

const Index = () => {
  return (
    <Content>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 240,
        }}
        description={
          <span style={{ fontSize: 24 }}>
            Created by{" "}
            <a href="https://github.com/Ehsan-Yari-React" target="_blank">
              Ehsan Yari
            </a>
          </span>
        }
      />
    </Content>
  );
};

export default Index;
