
import PropTypes from 'prop-types';
import playerImg from '../assets/user.png'
import flag from '../assets/flag.png'
const Playercardshow = ({ player, handleChoosePlayer }) => {
    const { name, country, role, battingType, bowlingType, biddingPrice, image } = player
    return (
        <div  className="card bg-base-100 w-96 shadow-xl mt-5 ">
            <figure className="px-5 pt-5">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-[300px]" />
            </figure>
            <div className='p-5'>

                <div className=' flex my-3 items-center'>
                    <img src={playerImg} alt="" className='w-[20px] h-[20px] me-1' /> <p>{name}</p>

                </div>
                <div className="flex justify-between items-center mb-5 ">
                    <div className='flex items-center'>
                        <img src={flag} alt="" className='w-[16px] h-[16px] me-1' /> <p>{country}</p>

                    </div>
                    <p className='border rounded-md px-6'>{role}</p>
                </div>
                <div className='border-b-2'></div>
                <div className='mt-3'>
                    <p>Rating</p>
                    <div className="flex justify-between items-center my-5 ">
                        <div className='flex items-center'>
                            <p>{battingType}</p>

                        </div>
                        <p className='text-slate-500'>{bowlingType}</p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <div className='flex items-center'>
                            <p>Price: ${biddingPrice}</p>

                        </div>
                        <button onClick={()=>handleChoosePlayer(player)} className='btn btn-sm'>Choose Player</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

Playercardshow.propTypes = {
    player: PropTypes.object,
    handleChoosePlayer: PropTypes.func
    
};

export default Playercardshow;