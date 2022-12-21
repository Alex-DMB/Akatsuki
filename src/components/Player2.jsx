import styles from '../styles/Player.module.sass'
import { PlayersContext } from '../context/PlayersContext'
import { useContext } from 'react'



const Player2 = () => {

    const {player2Selecting,player2Selected,transitionCharacterP2,positionP2,opacityP2} = useContext(PlayersContext)

    return (
        <div className={styles.player}>
            <div className={player2Selected && styles.redLight}></div>
            <img 
                src={ player2Selected ? player2Selected.render : player2Selecting.render } 

                className={ player2Selected ? player2Selected.name : player2Selecting.name}

                style={{
                    transition: transitionCharacterP2 && "transform 0.5s, opacity 0.5s",
                    opacity: `${opacityP2}`,
                    transform: `translateY(${positionP2}px)`
                }}
                />

            <div className={styles.name}>
                <h3
                    style={{
                        transition: transitionCharacterP2 && "opacity 0.5s",
                        opacity: `${opacityP2}`,
                    }}
                    >{player2Selected ? player2Selected.clan : player2Selecting.clan}</h3>
                <h1
                    style={{
                        transition: transitionCharacterP2 && "opacity 1s",
                        opacity: `${opacityP2}`,
                    }}
                    >{player2Selected ? player2Selected.name : player2Selecting.name}</h1>
            </div>
        </div>
  )
}

export default Player2