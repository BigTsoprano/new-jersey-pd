
import React, {useState, useMemo} from "react";
import { useTable } from "react-table";



export default function Table({userdata }) {




    const data = useMemo(() => userdata, [userdata]);

    const columns = React.useMemo(
        () => [
          {
            Header: 'title',
            accessor: 'userdata.title', // accessor is the "key" in the data
          },
          {
            Header: 'email',
            accessor: 'userdata.email',
          },
          {
            Header: 'number',
            accessor: 'userdata.number', // accessor is the "key" in the data
          },
        ],
        []
    )
   
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })

    
    return (
        <div>
            <h1>{userdata.title}</h1>
            <table {...getTableProps()}>
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
      </div>
    );  
}
