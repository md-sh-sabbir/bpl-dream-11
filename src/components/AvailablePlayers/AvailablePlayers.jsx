import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {

    const playerData = use(playersPromise)
    // console.log(playerData);

    return (
        <div className='max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 place-content-center gap-10'>
            {
                playerData.map(player => <PlayerCard key={player.player_name} player={player} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></PlayerCard>)
            }



            {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img
                        className='rounded-b-xl'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex'>
                        <img src={userImg} alt="" /><h2 className="card-title ml-2">Viral Kohli</h2>
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 border-gray-300 pb-2'>
                        <div className='flex items-center'>
                            <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                            <span className='ml-2'>India</span>
                        </div>

                        <button className='btn'>All rounder</button>
                    </div>
                    <div className='flex justify-between font-bold'>
                        <span>Rating</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <span className='font-bold'>Left-Hand-Bat</span>
                        <span>Right-hand-bowl</span>
                    </div>


                    <div className="card-actions mt-4 flex justify-between items-center">
                        <p className='font-bold'>Price: $1500000</p>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AvailablePlayers;