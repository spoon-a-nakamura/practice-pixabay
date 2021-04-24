import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')
  const onFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }
  return (
    <form className='ui form' onSubmit={onFormSubmit}>
      <div className='field'>
        <label>Search Image</label>
        <input
          type='text'
          name='search'
          placeholder='Input Keyword'
          value={term}
          onChange={(event) => {
            setTerm(event.target.value)
          }}
        />
      </div>
    </form>
  )
}

export default SearchBar
