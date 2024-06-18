import './index.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Contact = () => {
    const MailComponent = () => {
        const emailAddress = 'mediathings.pr@gmail.com';
        const mailtoLink = `mailto:${emailAddress}`;
        return (
          <a href={mailtoLink} className='email-href'>mediathings.pr@gmail.com</a>
        );
    };

    return (
        <>
            <div className='specialEffect'>
                <Navbar />
                <div className='empty-div'>
                    <h1 className='serviceHeading1'>Contact Us</h1>
                </div>
            </div>
            <div className='structure'>
                <div className='contact-email'>
                    <p className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                    </p>
                    <h3>Email Address</h3>
                    {MailComponent()}
                </div>
                <div className='contact-email'>
                    <p className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </p>
                    <h3>Office Location</h3>
                    <p>
                        Conwood Paragon, 612, 6th Floor, Near Cama Industrial Estate, Opp Indian Oil Petrol Pump, Goregaon (East), Mumbai - 400063
                    </p>
                </div>
                <div className='contact-email'>
                    <p className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                    </p>
                    <h3>Phone number</h3>
                    <p>+91 9987423546</p>
                </div>
            </div>
            <div className='mapContainer'>
                <Link target='_blank' to="https://www.google.com/maps?q=5V44+QJ4+Conwood+Paragon,+Opp+Indian+Oil+Petrol+Pump,+Near,+Cama+Industrial+Estate,+Goregaon,+Mumbai,+Maharashtra+400063&ftid=0x3be7b792c5915d07:0x7d3846fa3a474b14&entry=gps&lucs=,47071704,47069508,94212614,47084304&g_ep=CAISDTYuMTA1LjIuNDYzMzAYACCenQoqJCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxMjYxNCw0NzA4NDMwNEICSU4%3D&g_st=iw">
                    <img src="/mapImage.png" alt="mapImage" className='mapImage' />
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default Contact;