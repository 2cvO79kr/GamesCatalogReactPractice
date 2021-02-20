import React from 'react'
import style from './../../../App.module.css';

const Tags = (props) => {
    return (
        <div className={style.tag_list}>
            {
                props.tags.map(item => <div 
                    key={item.tag}
                    onClick={props.setTag}
                    className={item.choosen
                    ? style.active
                    : style.tag
                }>
                    {item.tag}
                </div>)
            }
        </div>
    )
}

export default Tags