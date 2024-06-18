import './index.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const About = () => {
    const imageNames = ['bombaytimes', 'cosmopolitan', 'healthshots', 'healthsite', 'Mid-Day', 'pinkvilla', 'thestatesman', 'vouge']
    return (
        <>
            <div className='specialEffect'>
            <Navbar />
                <div className='empty-div'>
                    <h1 className='serviceHeading1'>About Us</h1>
                </div>
            </div>
            <div className='whatWeOffer'>
                <div className='aboutText'>
                        {/* <h1>Little Story About Us</h1> */}
                        {/* <h3 className='aboutHeading'>Little Story About Us</h3> */}
                        <p className='aboutDescript'>
                            Anshu Ahuja established Media Things  with an aim to bring her proactive attitude and innate affinity for everything "media" to the forefront of the public relations
                            landscape. She commenced her career working with various PR agencies, handling a diverse range of clients. Today, with over 12 years of experience, Anshu and her team are dedicated to
                            providing innovative and effective PR solutions. <br/><br/> Clients across various industries, including lifestyle, hospitality, pharmaceuticals, healthcare, logistics, and entertainment, recognize
                            her strengths in understanding their requirements and delivering creative and strategic PR approaches. With an unwavering commitment to excellence, Anshu, as a co-founder of Media Things,
                            effectively manages and facilitates clients' communication needs.
                        </p>
                </div>
            </div>
            <div className='getFeaturedOn'>
                <h1 className='heading'>So Many Brands Trust Us</h1>
                    <div className='featuredImages'>
                        {
                            imageNames.map(eachImage => (
                                <img src={process.env.PUBLIC_URL + `/getFeaturedImages/${eachImage}.png.webp`} alt="eachImage" className='featured-image' />
                            ))
                        }
                    </div>
            </div>
            <div className='redirection about-redirection'>
                <div className='redirectionAboutStructure'>
                    <h1>LET'S MEET</h1>
                    <p className='redirection-descript'>Book a free 15-minute session where we will discuss your project, your issues and how to solve them.</p>
                    <Link to='/contactUs' className='redirectionButton'>
                        <button type='button' className='button'>Let's Start a Project</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About