import React from 'react'
import style from './../../../App.module.css'
import ItemContainer from './../Item/ItemContent'

const List = (props) => {
    return (
        <div className={style.items_block}>
            {
                props.data.map(item => {
                    if (props.data.indexOf(item) >= props.listParametrs.pageSize * (props.listParametrs.currentPage - 1)
                        && props.data.indexOf(item) < props.listParametrs.pageSize * props.listParametrs.currentPage) {
                        return <ItemContainer data={item} />
                    }
                })
            }
        </div>
    )
}

export default List