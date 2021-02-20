import React, { useContext } from 'react'
import SearchPanel from './SearchPanel'
import { Context } from './../../context'

const SearchPanelContainer = () => {

    const { getInfo, inputValue } = useContext(Context)

    return (
        <SearchPanel getInfo={getInfo}
            inputValue={inputValue} />
    )
}

export default SearchPanelContainer