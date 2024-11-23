import React from "react";
//to create table using cols and rows array passed in props
function Table(props) {
  return (
    <div className="w-[95%]  mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full  text-left rtl:text-right  ">
        <thead className=" text-white uppercase bg-black ">
          <tr>
            {/* generate table header from the col array  */}
            {props.cols.map((col, i) => (
              <th scope="col" className="px-6 py-3" id={"col" + (i + 1)}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* generate table rows from the row array */}
          {props.rows.map((row, i) => (
            <tr
              className="odd:bg-white  even:bg-gray-50  "
              id={"row" + (i + 1)}
            >
              {Object.keys(row).map((key) => (
                <td className="px-6 py-4" id={"row" + (i + 1) + key}>
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
