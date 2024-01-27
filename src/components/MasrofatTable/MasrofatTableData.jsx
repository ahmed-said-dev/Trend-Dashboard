import React from "react";
import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MasrofatService } from "./service/MasrofatService";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./flags.css";

const MasrofatTableData = () => {
  const [masrofatData, setMasrofatData] = useState([]);

  useEffect(() => {
    MasrofatService.getProductsMini().then((data) => setMasrofatData(data));
  }, []);

  return (
    <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col items-start justify-start rounded-bl-[12px] rounded-br-[12px] shadow-bs w-full">
      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-center w-full">
        <div className="card" style={{ overflow: "scroll" }}>
          <DataTable
            value={masrofatData}
            showGridlines
            tableStyle={{}}
            style={{ overflow: "scroll" }}
          >
            <Column field="تحميل" header=""></Column>
            <Column field="ملاحظات" header="ملاحظات"></Column>
            <Column field="الإيرادات" header="الإيرادات"></Column>
            <Column field="المصروفات" header="المصروفات"></Column>
            <Column field="اسم الحساب" header="اسم الحساب"></Column>
            <Column field="رقم الحساب" header="رقم الحساب"></Column>
            <Column field="رقم القيد" header="رقم القيد"></Column>
            <Column field="التاريخ" header="التاريخ"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default MasrofatTableData;
