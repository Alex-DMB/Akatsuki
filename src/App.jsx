import './styles/main.sass'
import Characters from './components/Characters'
import Background from './components/Background'
import Player1 from './components/Player1'
import Player2 from './components/Player2'
import { useContext } from 'react'
import { PlayersContext } from './context/PlayersContext'
import Stages from './components/Stages'
import OutOfResolution from './components/OutOfResolution'



function App() {

	const {player1Selected,player2Selected} = useContext(PlayersContext)

	if( window.screen.height < 640 || window.screen.width < 1230 ){
		return (
			<OutOfResolution/>
		)
	}

	else return (
    <div>

        {player1Selected && player2Selected && ( <Stages/> )}

        <div className='container'>

        <Player1/>
        <Characters/>
        <Player2/>

        </div>

      <Background/>

    </div>
  )
}

export default App
