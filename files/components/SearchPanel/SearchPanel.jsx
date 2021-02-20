import React from 'react'
import style from './../../App.module.css';
import TagsContainer from './Tags/TagsContainer';

const SearchPanel = ({inputValue, getInfo}) => {


    return (
        <div className={style.search_panel}>
            <input type='text' className={style.input_panel} onChange={getInfo} value={inputValue}/>
            <TagsContainer />
        </div>
    )
}

export default SearchPanel