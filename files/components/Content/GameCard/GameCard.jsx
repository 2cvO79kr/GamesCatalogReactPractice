import React from 'react'
import style from './../../../App.module.css'

const GameCard = (props) => {
    return (
        <div className={style.card_container}>
            <h2>{props.gameData.title}</h2>
            <div>
                <div className={style.top_block}>
                    <div className={style.image_block}>
                        <img src={props.gameData.thumbnail} />
                    </div>
                    <div className={style.top_block_list} >
                        <ul>
                            <li>Platform: {props.gameData.platform}</li>
                            <li>Genre: {props.gameData.genre}</li>
                            <li>Developer: {props.gameData.developer}</li>
                            <li>Publisher: {props.gameData.publisher}</li>
                            <li>Release date: {props.gameData.release_date}</li>
                            <li>Status: {props.gameData.status}</li>
                        </ul>
                    </div>
                </div>
                <div className={style.description_block}>
                    <p>
                        {props.gameData.description}
                    </p>
                    <div className={style.screenshots_block}>
                        {props.gameData.screenshots.map(item => <img src={item.image} className={style.game_screenshots}/>)}
                    </div>
                </div>
                <div className={style.bottom_block}>
                    <ul>MSQ:
                        <li>Graphics:{props.gameData.minimum_system_requirements.graphics}</li>
                        <li>Memory: {props.gameData.minimum_system_requirements.memory}</li>
                        <li>OS:{props.gameData.minimum_system_requirements.os}</li>
                        <li>Processor: {props.gameData.minimum_system_requirements.processor}</li>
                        <li>Storage:{props.gameData.minimum_system_requirements.storage}</li>
                    </ul>
                    <a href={props.gameData.game_url}>Check game</a>
                </div>
            </div>
        </div>
    )
}

export default GameCard
