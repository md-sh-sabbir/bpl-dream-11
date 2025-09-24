import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  const data = res.json()
  return data
}

const playersPromise = fetchPlayers()

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(6000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  // console.log(purchasedPlayers);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(ply => ply.player_name !== p.player_name)
    console.log(filteredData);
    setPurchasedPlayers(filteredData)

    const cancelPlayerRefundPrice = parseInt(p.price.split('USD').join('').split(',').join(''))

    setAvailableBalance(availableBalance + cancelPlayerRefundPrice)
  }
  
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='max-w-[1280px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{toggle ? 'Available Players' : `Selected Player (${purchasedPlayers.length}/6)`}</h1>

        <div className='font-semibold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-6 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle && 'bg-[#E7FE29]'}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-5 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle || 'bg-[#E7FE29]'}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<div className='text-center'><span className="loading loading-spinner loading-xl"></span></div>}>
          <AvailablePlayers playersPromise={playersPromise} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></AvailablePlayers>
        </Suspense> : <SelectedPlayers setToggle={setToggle} removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }

      <ToastContainer/>

    </>
  )
}

export default App
