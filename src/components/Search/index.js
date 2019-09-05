import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = ({updateInputValue, updateSearch, value}) => (
    <form onSubmit={(event) => updateSearch(event)} className="form">
    <Input className="form-input" onChange={(event) => updateInputValue(event)} className="searchInput" value={value} loading icon='user' placeholder='Search...' />
    </form>
)

export default Search
