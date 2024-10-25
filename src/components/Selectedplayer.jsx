import PropTypes from 'prop-types';
import SelectedPlayerShow from './SelectedPlayerShow';
const Selectedplayer = ({isPlayerCardVisible, toggleAvailablePlayer, choosePlayers, removePlayer}) => {

    return (
        <>
        <div className={isPlayerCardVisible? 'hidden' :'visible'}>
            <div className='pb-4'>
                {
                    choosePlayers.map(choosePlayer => <SelectedPlayerShow key={choosePlayer.playerId} choosePlayer={choosePlayer} removePlayer={removePlayer}></SelectedPlayerShow>)
                }


                <button onClick={toggleAvailablePlayer} className='btn btn-primary mx-4'>Add More Player</button>
            </div>
        </div>
            
        </>
    );
};
Selectedplayer.propTypes = {
    isPlayerCardVisible: PropTypes.bool,
    toggleAvailablePlayer: PropTypes.func,
    choosePlayers: PropTypes.array,
    removePlayer: PropTypes.func
    
};

export default Selectedplayer;