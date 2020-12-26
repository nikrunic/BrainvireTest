import React, { useEffect, useState } from "react";
import "./Users.css";
import {
  Table,
  Tag,
  Space,
  Modal,
  Input,
  Checkbox,
  Row,
  Col,
  Card,
} from "antd";
import axios from "axios";

export const Users = () => {
  const [userData, setUserData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTagList, setIsTagList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  // const [indeterminate, setIndeterminate] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        setUserData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  const onRowClick = (record) => {
    setSelectedUser(record.id);
    setIsModalVisible(true);
  };
  const handleOk = () => {
    const users = [...userData];
    const index = users.findIndex((data) => data.id === selectedUser);
    if (index !== -1) {
      users[index].tags = [...selectedTags];
      setUserData([...users]);
    }
    setIsModalVisible(false);
    setSelectedUser("");
    setIsTagList([]);
    // setIndeterminate(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleLoginKeyUp = (Event) => {
    // setIsModalVisible(false);
    console.log(Event.target.value);
    // const tags = tagDetail.map(tag => tag.name)
    const filtered = tagDetail.filter(
      (entry) =>
        entry.name.toLowerCase().includes(Event.target.value) ||
        entry.email.toLowerCase().includes(Event.target.value) ||
        entry.tag.toLowerCase().includes(Event.target.value)
    );
    setIsTagList(filtered);
    console.log(isTagList);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Tag",
      dataIndex: "tags",
      key: "tag",
      render: (tags) => (
        <>
          {tags &&
            tags.map((tagDetail) => {
              return <Tag key={tagDetail}>{tagDetail}</Tag>;
            })}
        </>
      ),
    },
  ];
  const tagDetail = [
    {
      name: "Nick",
      email: "Nick@demo.com",
      role: "Agent",
      tag: "1101-Agent",
    },
    {
      name: "Vlad",
      email: "Vlad@demo.com",
      role: "Agent",
      tag: "1101-Owner",
    },
    {
      name: "Nasta",
      email: "Nasta@demo.com",
      role: "Agent",
      tag: "1101-Alter",
    },
    {
      name: "Kostya",
      email: "Kostya@demo.com",
      role: "Agent",
      tag: "Owner",
    },
    {
      name: "Andrey",
      email: "Andrey@demo.com",
      role: "Agent",
      tag: "1101-Argento",
    },
  ];
  function onChecked(checkedValues) {
    setSelectedTags([...checkedValues]);
  }
  return (
    <div className="userList p-3">
      <Table
        columns={columns}
        dataSource={userData}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => onRowClick(record),
          };
        }}
      />
      <Modal
        title="Select Tag"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="row">
          <div className="col-12">
            <Input placeholder="Search Tag" onKeyUp={handleLoginKeyUp} />
          </div>
          <div className="col-12 selectTag">
            <Checkbox.Group style={{ width: "100%" }} onChange={onChecked}>
              <Row>
                {isTagList.map((data) => (
                  <Col span={24}>
                    <Card>
                      <Checkbox value={data.tag}>{data.tag}</Checkbox>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </div>
      </Modal>
    </div>
  );
};
