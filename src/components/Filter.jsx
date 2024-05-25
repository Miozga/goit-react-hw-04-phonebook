const Filter = ({ filter, onFilterChange }) => (
  <div className="filter">
    <input
      type="text"
      name="filter"
      placeholder="Search contacts"
      value={filter}
      onChange={onFilterChange}
    />
  </div>
);

export default Filter;
