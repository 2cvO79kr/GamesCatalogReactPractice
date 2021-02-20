import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import style from './../../App.module.css'
import ListContaniner from './List/ListContainer'
import GameCardContainer from './GameCard/GameCardContainer'

import image from './../../other/img/3x.gif'

const Content = (props) => {
    return (
        <Switch>
            {props.data.length == 0
                ?
                <div className={style.not_found_message}>
                    <div>Not found. Try other param</div>
                    <img src={image} />
                </div>
                : <div className={style.content}>
                    <NavLink to='/catalog'>
                        <div className={style.title_content} onClick={props.setClearCard}>Catalog</div>
                    </NavLink>
                    <Route path='/catalog' render={() => <ListContaniner data={props.data} />} />
                    <Route path='/game' render={() => <GameCardContainer />} />
                    <Redirect from='/' to='/catalog'/>
                </div>}
                
        </Switch>
    )
}
export default Content