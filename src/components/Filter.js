import React from 'react'

const Filter = ( {filterSelection, sortBy} ) => {
  return (
    <div>
      <label>Sort By</label>
      <select onChange={filterSelection} value={sortBy}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Filter