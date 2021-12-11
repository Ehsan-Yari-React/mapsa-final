import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const Sidebar = ({ users }) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <Sider>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        style={{ height: "100vh" }}
      >
        <Menu.Item key={0}>
          <Link to="/">home</Link>
        </Menu.Item>
        {users.map((user) => (
          <SubMenu key={`sub${user.id}`} title={user.name}>
            <Menu.Item key={user.id}>
              <Link to={user.route}>home</Link>
            </Menu.Item>
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
