import React from "react";
import axios from "axios";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "ec2 link here"
    : "http://localhost:3000";

async function getData(): Promise<Payment[]> {
  try {
    const res = await axios.get(`${BASE_URL}/api/orders/allorders`);

    console.log("res from orders - ", res);
    return res.data.orders;
  } catch (error) {
    console.log("getData error - ", error);
  }
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
