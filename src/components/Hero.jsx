import backgroundImage from '../assets/bg-shadow.png'
import bannerImg from '../assets/banner-main.png'
import PropTypes from 'prop-types';
const Hero = ({handleCoinAdd}) => {
    return (
        <div
            className="hero min-h-[450px] rounded-[15px] "
            style={{
                backgroundImage: `url(${backgroundImage})`,

            }}>

            <div className="hero-content text-neutral-content text-center">
                <div className="m-auto">
                    <div className='max-w-[30%] m-auto mb-4'>
                        <img src={bannerImg} alt="" className='' />

                    </div>
                    <p className="mb-3 text-3xl bold text-black">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </p>
                    <p className='text-black'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={handleCoinAdd} className="mt-4 btn btn-primary border-4 border-indigo-200">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};
Hero.propTypes = {
    handleCoinAdd: PropTypes.func
    
};

export default Hero;