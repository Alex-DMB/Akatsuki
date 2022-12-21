import styles from '../styles/Player.module.sass'
import { PlayersContext } from '../context/PlayersContext'
import { useContext } from 'react'
import '../styles/PositionRenders.sass'


const Player1 = () => {

    const {player1Selecting,player1Selected,transitionCharacterP1,positionP1,opacityP1} = useContext(PlayersContext)
    
    return (
        <div className={styles.player}>
            <div className={player1Selected && styles.redLight}></div>
            <img 
                src={ player1Selected ? player1Selected.render : player1Selecting.render }

                className={ player1Selected ? player1Selected.name : player1Selecting.name} 

                style={{
                    transition: transitionCharacterP1 && "transform 0.5s, opacity 0.5s",
                    opacity: `${opacityP1}`,
                    transform: `translateY(${positionP1}px)`
                }}
                />

            <div className={styles.name}>
                <h3
                    style={{
                        transition: transitionCharacterP1 && "opacity 0.5s",
                        opacity: `${opacityP1}`,
                    }}
                    >{player1Selected ? player1Selected.clan : player1Selecting.clan}</h3>
                <h1
                    style={{
                        transition: transitionCharacterP1 && "opacity 1s",
                        opacity: `${opacityP1}`,
                    }}
                    >{player1Selected ? player1Selected.name : player1Selecting.name}</h1>
            </div>
        </div>
    )
}

export default Player1