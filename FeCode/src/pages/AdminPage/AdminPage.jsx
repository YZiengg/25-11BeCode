import React, { useState } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  ProductOutlined,
  HarmonyOSOutlined,
} from "@ant-design/icons"; // Icons
import { getItem } from "../../untils"; // Đường dẫn tới file utils
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";

const AdminPage = () => {
  const items = [
    getItem("Người dùng", "user", <UserOutlined />),
    getItem("Sản phẩm ", "product", <ProductOutlined />),
  ];

  const [keySelected, setKeySelected] = useState("");
  const renderPage = (key) => {
    switch (key) {
      case "user":
        return <AdminUser />; // Trả về trang AdminUser khi chọn 'user'
      case "product":
        return <AdminProduct />; // Trả về trang AdminProduct khi chọn 'product'
      default:
        return <></>; // Trả về một fragment rỗng nếu không khớp với bất kỳ case nào
    }
  };

  const handleOnclick = ({ key }) => {
    setKeySelected(key);
  };
  console.log("keySelected", keySelected);
  return (
    <>
      <HeaderComponent isHiddenSearch isHiddenCart />
      <div style={{ display: "flex" }}>
        <Menu
          mode="inline"
          style={{
            width: 256,
            boxShadow: "1px 1px 2px #ccc",
            height: "100vh",
          }}
          items={items}
          onClick={handleOnclick}
        />
        <div style={{ flex: 1, padding: "15px" }}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  );
};
export default AdminPage;