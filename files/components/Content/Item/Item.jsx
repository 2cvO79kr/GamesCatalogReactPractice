import React from 'react'
import style from './Item.module.css'
import { NavLink } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className={style.item_container} key={props.data.id}>
            <div className={style.short_data}>
                <NavLink to='/game'>
                    <h2 className={style.link} value={props.data.id} onClick={props.setId}>{props.data.title}</h2>
                </NavLink>
                <div className={style.image}>
                    <img src={props.data.thumbnail} />
                </div>
                <div className={style.description}>
                    <ul className={style.info_list}>
                        <li>{props.data.genre}</li>
                        <li>{props.data.platform}</li>
                        <li>{props.data.developer}</li>
                        <li>{props.data.publisher}</li>
                        <li>{props.data.release_date}</li>
                    </ul>
                    <p>{props.data.short_description}</p>
                </div>
            </div>

        </div>
    )
}

export default Item
