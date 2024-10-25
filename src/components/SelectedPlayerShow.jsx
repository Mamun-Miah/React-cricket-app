
import deleteImg from '../assets/delete.png'
import PropTypes from 'prop-types';
const SelectedPlayerShow = ({choosePlayer, removePlayer}) => {
    const {image, name, role, biddingPrice, playerId} = choosePlayer
    return (
        <div>
            <div className='flex justify-between items-center p-5 border rounded-md my-4 mx-4 py-4 '>
                    <div className='flex items-center '>
                        <img src={image} alt="" className='w-[60px] h-[auto] rounded-md' />
                        <div className='ms-3'>
                            <p className='bold text-lg'>{name}</p>
                            <p>{role}</p>
                            <p>${biddingPrice}</p>
                        </div>
                    </div>
                    <button onClick={() => removePlayer(playerId)}><img src={deleteImg} alt="" className='w-[20px] h-[auto]' /></button>
                </div>
        </div>
    );
};
SelectedPlayerShow.propTypes = {
    choosePlayer: PropTypes.array,
    removePlayer: PropTypes.func
    
};

export default SelectedPlayerShow;