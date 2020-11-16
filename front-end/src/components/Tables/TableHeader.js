import React from 'react';

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((header, index) => {
        return <th key={index}>{header}</th>;
      })}
    </tr>
  </thead>
);

export default TableHeader;
