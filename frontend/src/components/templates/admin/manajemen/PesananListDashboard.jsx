import React from "react";
import PesananSidebar from "../../../sidebars/PesananSidebar";
import PesananTable from "../../../tables/PesananTable";

const PesananListDashboard = () => {
  return (
    <div className="flex flex-row">
      <div>
        <PesananSidebar />
      </div>
      <div className="w-full h-[50rem] bg-neutral-200">
        <div className="mt-24 absolute pl-[2.3rem] lg:pl-[15rem]">
          <h1 className="text-black text-2xl font-bold mb-5">Daftar Pesanan</h1>

          <div className="mt-8">
            <PesananTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesananListDashboard;
