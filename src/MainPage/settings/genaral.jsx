/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ConfigSettingTable from "./ConfigSettingTable";
import { filterData } from "../ReuseFunctions/ReuseFunction";
import useFetch from "../../Hooks/useFetch";
import ReactToast, {
  showToastError,
  showToastMessage,
} from "../../CustomComps/ReactToast";
import { useNavigate } from "react-router-dom";
import {Input} from "antd"

const GenaralSettings = () => {
  let api = useFetch();
  // const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = React.useState(1);
  const defaultSelectedRowKeys = listData
    .filter((row) => row.compSelect === 1)
    .map((row) => row.compCode);

  const [selectedRowKeys, setSelectedRowKeys] = useState(
    defaultSelectedRowKeys
  );

  const navigate = useNavigate();
  const onInputChange = (key, index) => (e) => {
    console.log(index, "indtable");
    const newData = [...listData];
    newData[index][key] = e.target.value;
    setListData(newData);
  };

  console.log('listData',listData)

  let columns = [
    {
      title: "Company Name",
      dataIndex: "compName",
      sorter: (a, b) => a.compName.length - b.compName.length,
    },
    {
      title: "Company Code",
      dataIndex: "compCode",
      sorter: (a, b) => a.compCode.length - b.compCode.length,
    },
    {
      title: "Financial Year",
      dataIndex: "fy",
      // sorter: (a, b) => a.fy.length - b.fy.length,
      render: (text, record, index) => {
        // let ind = (page - 1) * 10 + index;
        // console.log('msdggg', record.msg)
        return (
          <Input
            // size="small"
            value={text}
            onChange={onInputChange("fy", index)}
          />
        );
      },
    },
  ];

  // =========================Config-table===============================
  const getConfigTable = async () => {
    let url = `/Api/GetCompDetails`;
    try {
      setLoading(true);
      let { res, got } = await api(url, "GET", "");
      if (res.status == 200) {
        // console.log("getConfigTable", got.data);
        let list = got.data;
        let filteredData = filterData(list, searchText, [
          "compName",
          "compCode",
          "fy",
        ]);
        setListData(filteredData);
        // setRowData(Vehicle);
        setLoading(false);
      } else {
        setLoading(false);
        showToastError("Something Went Wrong in List loading");
      }
    } catch (err) {
      setLoading(false);
      showToastError(err);
    }
  };

  const onSelectChange = (selectedKeys, selectedRows) => {
    // Update selectedRowKeys state
    setSelectedRowKeys(selectedKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    // Update defaultSelectedRowKeys when listData changes
    const updatedDefaultSelectedRowKeys = listData
      .filter((row) => row.compSelect === 1)
      .map((row) => row.compCode);

    setSelectedRowKeys(updatedDefaultSelectedRowKeys);
  }, [listData]);

  // =============================post-Data===========================
  const saveHandler = async (e) => {
    e.preventDefault();
    const SaveCompany = "/api/SaveCompany";
    const updatedRowsData = listData.map((row) => ({
      ...row,
      compSelect: selectedRowKeys.includes(row.compCode) ? 1 : 0,
    }));

    setListData(updatedRowsData);
    const selectedRows = updatedRowsData.filter((row) => row.compSelect === 1);

    const body = selectedRows.map((selectedRow) => ({
      compCode: selectedRow.compCode,
      compDB: selectedRow.compDB,
      fy: selectedRow.fy,
      compSelect: selectedRow.compSelect,
      CompName:selectedRow.compName
    }));

    console.log("body", JSON.stringify(body));

    try {
      setLoading(true);
      let { res, got } = await api(SaveCompany, "POST", body);
      if (res.status === 200) {
        showToastMessage(got.msg);

        setLoading(false);
        setSelectedRowKeys([]);
        getConfigTable();
        navigate("/delivery/dashboard")
      } else {
        setLoading(false);
        showToastError(got.msg);
      }
    } catch (error) {
      setLoading(false);
      showToastError(error);
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
    getConfigTable(value);
  };

  useEffect(() => {
    getConfigTable();
  }, [searchText]);

  return (
    <React.Fragment>
      <ReactToast />
      <ConfigSettingTable
        loading={loading}
        columns={columns}
        data={listData}
        rowSelection={rowSelection}
        handleSearch={handleSearch}
        saveHandler={saveHandler}
      />
    </React.Fragment>
  );
};

export default GenaralSettings;
