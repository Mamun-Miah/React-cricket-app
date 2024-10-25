import Playercardshow from './Playercardshow';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
const Playercard = ({ isPlayerCardVisible, handleChoosePlayer }) => {
    const [players, Setplayer] = useState([])

    useEffect(() => {
        fetch('players_data.json')
            .then(res => res.json())
            .then(data => Setplayer(data))
    }, [])
    return (
        <div className={isPlayerCardVisible ? '' : 'hidden'}>
            <div className='grid grid-cols-3'>
                {
                    players.map(player => <Playercardshow key={player.playerId} player={player} handleChoosePlayer={handleChoosePlayer}></Playercardshow>)
                }


            </div>
        </div>
    );
};
Playercard.propTypes = {
    isPlayerCardVisible: PropTypes.bool,
    handleChoosePlayer: PropTypes.func
};
export default Playercard;