import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = ({updateInputValue, updateSearch, value, load}) => (
    <form onKeyUp={(event) => updateSearch(event)} className="form">
    <Input className="form-input" onChange={(event) => updateInputValue(event)} className="searchInput" value={value} loading={load} icon='search' placeholder='Search...' />
    </form>
)

export default Search
