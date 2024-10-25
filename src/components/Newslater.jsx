import ba from '../assets/bg.jpg'

const Newslater = () => {
    return (
        <div
            className="hero min-h-[300px] rounded-[15px] mt-8 relative border-8 border-base-100"
            style={{
                backgroundImage: `url(${ba})`,
                marginBottom: `-200px`

            }}>

            <div className="hero-content text-neutral-content text-center">
                <div className="m-auto">
                    <p className="mb-3 text-3xl bold text-black">
                        Subscribe to our Newsletter
                    </p>
                    <p className='text-black'>Get the latest updates and news right in your inbox!</p>
                    <div className=" mt-4">
                        <input className="input input-bordered" placeholder="Enter your Email" />
                        <button className="btn btn-primary rounded-md ms-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslater;