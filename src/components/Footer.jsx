import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <>
            <div className="m-auto footer footer-center bg-slate-900 pt-56">
                <aside>
                    <img src={logo} alt="" className='w-[100px] h-[100]' />
                </aside>
            </div>
            <footer className="footer bg-slate-900 text-base-100 p-10 ">
                <nav className="">
                    <h6 className="footer-title">About Us</h6>
                    <p>We are a passionate team dedicated to <br></br>providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <form>
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="text-base-300">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </footer>
            <div className="bg-slate-900 items center py-5 border-t ">

                <p className="text-center text-base-300">@2024 Your Company All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Footer;