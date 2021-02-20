import React, { useContext, useEffect } from 'react'
import { gamesAPI } from '../../../api/api'
import { Context } from '../../../context'
import GameCard from './GameCard'

const GameCardContainer = () => {

    const { gameData, currentId, setCurrentGame } = useContext(Context)

    useEffect(() => {
        gamesAPI.getCurrentGame(currentId)
            .then(result => setCurrentGame(result))
            .catch(err => console.log(err))
    }, [currentId])

    return (
        <GameCard gameData={gameData} />
    )
}

export default GameCardContainer

