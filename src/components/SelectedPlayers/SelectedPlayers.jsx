import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
    console.log(purchasedPlayers);
    return (
        <div className='max-w-[1280px] mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedCard key={player.player_name} removePlayer={removePlayer} player={player}></SelectedCard>)
            }
            <div className='p-1.5 border-1 inline-block rounded-lg mt-5'>
                <button onClick={() => setToggle(true)} className='btn bg-[#E7FE29]'>Add More Player</button>
            </div>
        </div>
    );
};

export default SelectedPlayers;