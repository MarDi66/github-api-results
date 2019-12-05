import React from 'react'
import { Input } from 'semantic-ui-react'

import './index.sass'

const Search = ({updateInputValue, updateSearch, value, load}) => (
    <form onKeyUp={(event) => updateSearch(event)} className="form">
    <Input className="form-input" onChange={(event) => updateInputValue(event)} className="searchInput" value={value} loading={value != '' ? load : false} icon='search' placeholder='Tapez un mot clé ici' id='search-input' />
    </form>
)

export default Search
