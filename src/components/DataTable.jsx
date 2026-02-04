const DataTable = ({ title, columns, rows, actionLabel }) => (
  <section className="table-card">
    <header className="table-card__header">
      <div>
        <h2>{title}</h2>
        <p className="muted">
          {rows.length} records · updated just now
        </p>
      </div>
      {actionLabel ? (
        <button type="button" className="button button--ghost">
          {actionLabel}
        </button>
      ) : null}
    </header>
    <div className="table-card__table">
      <div className="table-card__row table-card__row--head">
        {columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      {rows.map((row) => (
        <div className="table-card__row" key={row.id}>
          {row.cells.map((cell, index) => (
            <span key={`${row.id}-${index}`}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default DataTable;
