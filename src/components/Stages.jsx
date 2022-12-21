import styles from '../styles/Stages.module.sass'
import stages from '../data/stages'
import { useState } from 'react'

const Stages = () => {


    const [stageSelecting,setStageSelecting] = useState('')
    const [stageSelected,setStageSelected] = useState('')

    return (
    <div className={styles.stage}>
        <h2>Select Stage</h2>

        <div>
        <img 
        
            className={styles.currentStage}
            src={stageSelecting ? stageSelecting.image : stages[0].image} />

        <h3>{stageSelecting ? stageSelecting.name : 'Select Stage'}</h3>
        </div>

        <ul>

            {stages.map((stage) => {

                return (
                    <li 
                        onMouseOver={() => setStageSelecting(stage)}
                        onMouseLeave={() => setStageSelecting('')}
                    >
                        <img src={stage.image}/>
                    </li>
                )
            })}

        </ul>
    </div>
  )
}

export default Stages