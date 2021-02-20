import React, { useContext } from 'react'
import { Context } from '../../../context'
import Item from './Item'

const ItemContainer = (props) => {
    const {setId} = useContext(Context)
    return (
        <Item data={props.data}
            setId={setId} />
    )
}

export default ItemContainer