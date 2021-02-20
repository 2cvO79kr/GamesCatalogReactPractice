import React, { useContext } from 'react'
import SortPanel from './SortPanel'
import { Context } from './../../context'

const SortPanelContainer = () => {

    const { getSort, getPlatform, platforms, sortBy } = useContext(Context)

    return (
        <SortPanel
            sortBy={sortBy}
            platforms={platforms}
            getPlatform={getPlatform}
            getSort={getSort} />
    )
}

export default SortPanelContainer