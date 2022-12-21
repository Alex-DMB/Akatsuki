import { useContext } from 'react'
import { PlayersContext } from '../context/PlayersContext'
import Akatsuki from '../data/data'
import styles from '../styles/Characters.module.sass'

const Characters = () => {

    const {
      setPlayer1Selecting, player1Selected, setPlayer1Selected,

      setPlayer2Selecting, player2Selected, setPlayer2Selected,

      setTransitionCharacterP1, setTransitionCharacterP2,
      
      setOpacityP1, setOpacityP2,
      setPositionP1, setPositionP2
    } = useContext(PlayersContext)


    const borderInCharacterSelected = (member) => {
        if(player1Selected === member) {
            return (styles.characterSelected)
        }
        else if(player2Selected === member) {
            return (styles.characterSelected)
        }
    }
    
return (
    <div className={styles.characters__Container}>

      {Akatsuki.map((member)=>{

        return (
            <>
                <div 
                    onClick={()=>{

                        if(player1Selected) {

                          if((player1Selected) && (player2Selected)){
                            return player1Selected && player2Selected
                          }

                          setPlayer2Selected(member)

                        }

                        else setPlayer1Selected(member)

                    }}
                    onMouseOver={()=> {

                        if (player1Selected) {
                            setPlayer2Selecting(member)
                            setTransitionCharacterP2(false)
                            setOpacityP2(0)
                            setPositionP2(100)
                        }
                        else {
                            setPlayer1Selecting(member)
                            setTransitionCharacterP1(false)
                            setOpacityP1(0)
                            setPositionP1(100)
                        }

                    }}

                    onMouseLeave={()=>{
                        setPlayer1Selecting('')
                        setPlayer2Selecting('')
                    }}
                    className={[
                        borderInCharacterSelected(member)
                    ]}
                    >
                    <img 
                        src={member.portrait}/>

                </div>
            </>
        )

      })}


        
    </div>
  )
}

export default Characters