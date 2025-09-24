import React from 'react';

const SelectedCard = ({ player, removePlayer}) => {
    console.log(player);

    const handleRemove = () => {
        removePlayer(player)
    }


    return (
        <div className='border-2 border-gray-300 p-3 flex justify-between items-center rounded-xl mt-5'>
            <div className='flex items-center'>
                <img src={player.player_image} className='h-[50px] w-[50px] object-cover rounded-xl' alt="" />
                <div className='ml-3'>
                    <h1 className='font-semibold text-lg'>{player.player_name}</h1>
                    <p className='text-xs'>{player.playing_role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img src="https://i.ibb.co.com/ht7CRR1/Frame.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;