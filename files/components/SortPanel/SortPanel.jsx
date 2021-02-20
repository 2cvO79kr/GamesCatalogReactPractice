import React from 'react'
import style from './../../App.module.css'


const SortPanel = (props) => {
    return (
        <div className={style.sort_panel}>
            <div className={style.sort_list}>
                {
                    props.sortBy.map(item => <div
                        className={item.choosen
                            ? style.active
                            : style.sort_item
                        }
                        onClick={props.getSort}
                    >
                        {item.type}
                    </div>)
                }
            </div>
            <div className={style.platform_list}>
                {
                    props.platforms.map(item => <div
                        className={item.choosen
                            ? style.active
                            : style.platform_item
                        }
                        key={item.platform}
                        onClick={props.getPlatform}>
                        {item.platform}
                    </div>)
                }
            </div>
        </div>
    )
}

export default SortPanel