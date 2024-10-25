import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Toggle from './components/Toggle'
import Playercard from './components/Playercard'
import Newslater from './components/Newslater'
import Footer from './components/Footer'
import Selectedplayer from './components/Selectedplayer'
import { useState } from 'react'

function App() {
  const [addMoney, setMoney] = useState(0)
  const [isPlayerCardVisible, setPlayerCardVisible] = useState(true)
  const [toogleText, setToogletext] = useState(true)
  const [choosePlayers, setChoosePlayer] = useState([])
  const [selectedPlayerCount, setSelectedPlayerCount] = useState(0)

  const handleCoinAdd = () => {
    setMoney(addMoney + 6000000)
  }
// toggle button to hide ui
  const togglePlayerCard = () => {
    setPlayerCardVisible(false)
    setToogletext(false)
  }
  const toggleAvailablePlayer = () => {
    setPlayerCardVisible(true)
    setToogletext(true)
  }

//choose player

  const handleChoosePlayer = (player) => {
    
    const isPlayerAlreadyChosen = choosePlayers.some(
      (chosenPlayer) => chosenPlayer.playerId === player.playerId
    );
  
    if (isPlayerAlreadyChosen) {
      return alert('Player is already selected!');
    }
    const lessMoney = addMoney - player.biddingPrice
    
    if (addMoney === 0) {
      return alert('Please add free credit')
    } else if (addMoney < 0) {
      return alert('Please add money')

    } else if (lessMoney < 0) {
      return alert('Please add more money')
      
      
    }

    setMoney(lessMoney)
    
    if (selectedPlayerCount === 6) {
      return alert('You Have Choosed Maxium Player')
    }
    const newChooseplayer = [...choosePlayers, player]
    setChoosePlayer(newChooseplayer)
    setSelectedPlayerCount(selectedPlayerCount + 1)
    // duplicate warning
  }


  //remove player
  const removePlayer = (playerId) => {
    const newRemoveChooseplayer = choosePlayers.filter(choosePlayer =>  choosePlayer.playerId !== playerId)
    setChoosePlayer(newRemoveChooseplayer)
    setSelectedPlayerCount(selectedPlayerCount - 1)
  }
//already selecte player

  return (
    <>
      <header>
        <Header addMoney={addMoney}></Header>
      </header>
      <main className=''>
        <Hero handleCoinAdd={handleCoinAdd}></Hero>
        <Toggle togglePlayerCard={togglePlayerCard} toogleText={toogleText} toggleAvailablePlayer={toggleAvailablePlayer} selectedPlayerCount={selectedPlayerCount}></Toggle>
        <Playercard isPlayerCardVisible={isPlayerCardVisible} handleChoosePlayer={handleChoosePlayer}></Playercard>
        <Selectedplayer isPlayerCardVisible={isPlayerCardVisible} toggleAvailablePlayer={toggleAvailablePlayer} choosePlayers={choosePlayers} removePlayer={removePlayer}></Selectedplayer>
        <Newslater></Newslater>

      </main>

      <Footer></Footer>


    </>
  )
}

export default App
