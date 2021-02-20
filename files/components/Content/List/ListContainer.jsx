import React, { useContext } from 'react'
import style from './../../../App.module.css'
import { Context } from '../../../context'
import List from './List'
import PageNumBlock from './PageNumBlock'

const ListContaniner = (props) => {

    const { listParametrs, changePage } = useContext(Context)

    return (
        <div className={style.list_container}>
            <List data={props.data}
                listParametrs={listParametrs} />
            <PageNumBlock data={props.data}
                listParametrs={listParametrs}
                changePage={changePage} />
        </div>
    )
}

export default ListContaniner