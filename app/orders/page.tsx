import React, { useState } from "react";
import axios from "axios";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  const res = await axios.get("http://localhost:3000/api/orders/allorders");

  if (!res) throw Error("Error while getting orders");
  return res.data.orders;
  // return data;
}

export default async function OrdersPage() {
  const data = await getData();
  // console.log("data - ", data);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
