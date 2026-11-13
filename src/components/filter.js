
import React from "react";

function Filter({ title, setTitle, rating, setRating }) {
  return (
    <div className="filter-container">

      <input
        type="text"
        placeholder="Search movie by title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">All Ratings</option>
        <option value="5">5 stars & above</option>
        <option value="6">6 stars & above</option>
        <option value="7">7 stars & above</option>
        <option value="8">8 stars & above</option>
        <option value="9">9 stars & above</option>
      </select>

    </div>
  );
}

export default Filter;
