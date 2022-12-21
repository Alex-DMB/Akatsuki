import React, { useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'

export const PlayersContext = createContext()
const PlayersContextProvider = ({children}) => {

    let [player1Selecting,setPlayer1Selecting] = useState('')
    let [player1Selected,setPlayer1Selected] = useState('')

    let [player2Selecting,setPlayer2Selecting] = useState('')
    let [player2Selected,setPlayer2Selected] = useState('')

    let [transitionCharacterP1,setTransitionCharacterP1] = useState(true)
    let [positionP1, setPositionP1] = useState(100);
    let [opacityP1, setOpacityP1] = useState(0);

    let [transitionCharacterP2,setTransitionCharacterP2] = useState(true)
    let [positionP2, setPositionP2] = useState(100);
    let [opacityP2, setOpacityP2] = useState(0);


    useEffect(() => {
        
        if(player1Selected){
            setTransitionCharacterP1(false)
            setPositionP1(0)
            setOpacityP1(1)
        }

        if(player2Selected){
            setTransitionCharacterP2(false)
            setPositionP2(0)
            setOpacityP2(1)
        }


        if(positionP1 === 100){

            setTimeout(() => {
                setTransitionCharacterP1(true)
                setPositionP1(0)
                setOpacityP1(1)
            }, 100);
            
        }

        if(positionP2 === 100){

            setTimeout(() => {
                setTransitionCharacterP2(true)
                setPositionP2(0)
                setOpacityP2(1)
            }, 100);
        }


    }, [positionP1,positionP2]);


    return (
        <PlayersContext.Provider value={{
            player1Selecting, setPlayer1Selecting,
            player1Selected, setPlayer1Selected,
            positionP1, setPositionP1,
            opacityP1, setOpacityP1,


            player2Selecting, setPlayer2Selecting,
            player2Selected, setPlayer2Selected,
            positionP2, setPositionP2,
            opacityP2, setOpacityP2,


            transitionCharacterP1,setTransitionCharacterP1,
            transitionCharacterP2,setTransitionCharacterP2,

    }}>
            {children}
        </PlayersContext.Provider>
    )
}

export default PlayersContextProvider

