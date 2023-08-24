"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  quantity: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "_id",
    header: "Order ID",
    cell: (props) => {
      return <>{props.getValue()}</>;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "city",
    header: "City",
  },
];
