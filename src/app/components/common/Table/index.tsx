import React from "react";

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface ReusableTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  rowKey: (item: T, index: number) => string | number;
}

export function Table<T>({ columns, data, rowKey }: ReusableTableProps<T>) {
  return (
    <div className="noScrollbar overflow-x-auto w-full">
      <table className="min-w-full text-[13px] text-left whitespace-nowrap">
        <thead className="text-secondary/70 bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="py-3 px-2 font-medium whitespace-nowrap">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={rowKey(item, index)}
              className="border-b last:border-b-0 whitespace-nowrap border-gray-200 hover:bg-gray-50 transition"
            >
              {columns.map((col, idx) => (
                <td
                  key={idx}
                  className="px-2 py-3 text-secondary/70 text-nowrap whitespace-nowrap"
                >
                  {col.render
                    ? col.render(item)
                    : (item[col.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
