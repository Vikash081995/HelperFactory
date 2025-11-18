function Table({ data, config, keyFn }) {
  const tableHeaderRow = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });
  const tableBodyRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td key={column.label}>{column.render(rowData)}</td>;
    });
    return <tr key={keyFn(rowData)}>{renderedCells}</tr>;
  });

  return (
    <table>
      <thead>
        <tr>{tableHeaderRow}</tr>
      </thead>
      <tbody>{tableBodyRows}</tbody>
    </table>
  );
}

export default Table;
