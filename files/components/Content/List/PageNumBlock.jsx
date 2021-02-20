import React from 'react'
import style from './../../../App.module.css'

const PageNumBlock = (props) => {

    let pages = Math.ceil(props.data.length / props.listParametrs.pageSize)
    let pageBtns = []
    for (let i = 1; i <= pages; i++) {
        pageBtns.push(i)
    }

    return (
        <div className={style.page_position}>
            {pageBtns.map(item => <div key={item}
                className={item == props.listParametrs.currentPage
                    ? style.page_num_active
                    : style.page_num}
                onClick={props.changePage}>{item}</div>)}
        </div>
    )
}

export default PageNumBlock