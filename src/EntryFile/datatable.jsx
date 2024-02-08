/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from "react";
import { Table } from "antd";
import "./antd.css";
import { itemRender, onShowSizeChange } from "../components/pagination";

const Datatable = ({ props, columns, dataSource, rowKey, handelSelectedKey }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys,selectedRow) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    console.log("selectedRow changed: ",selectedRow)
    handelSelectedKey?.(newSelectedRowKeys, selectedRow);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      key={props}
      className="table datanew dataTable no-footer"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        total: dataSource.length,
        showTotal: (total, range) =>
          ` ${range[0]} to ${range[1]} of ${total} items`,
        showSizeChanger: true,
        onShowSizeChange: onShowSizeChange,
      }}
      rowKey={rowKey}
    />
  );
};

export default Datatable;
