import { Table as TableAnt, TableProps } from 'antd';
import React from 'react';

const Table: React.FC<TableProps<any>> = ({ columns, dataSource, ...props }) => {
  return (
    <TableAnt
      dataSource={dataSource}
      columns={columns}
      {...props}
    />
  );
}

export default Table;