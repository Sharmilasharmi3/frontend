import React from 'react';

const SortOptions = ({ sortOption, setSortOption }) => (
  <div className="mt-4">
    <label className="mr-2">Sort by:</label>
    <select
      value={sortOption}
      onChange={e => setSortOption(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">None</option>
      <option value="name">Name</option>
      <option value="username">Username</option>
    </select>
  </div>
);

export default SortOptions;
