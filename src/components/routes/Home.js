import { useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Container, Card } from "react-bootstrap"; 

import IamcWorld1 from '../../img/iamc-world_1.png'; 
import IamcWorld2 from '../../img/iamc-world_2.png'; 
import IamcWorld3 from '../../img/iamc-world_3.png'; 
import IamcWorld4 from '../../img/iamc-world_4.png'; 
import IamcWorld5 from '../../img/iamc-world_5.png'; 

export default function Home() {
    const worldImgs = [IamcWorld1, IamcWorld2, IamcWorld3, IamcWorld4, IamcWorld5]; 
    let imgIndex = 0; 
    const homepageCarousel = useRef(); 

    useEffect(() => {
        worldImgs.forEach(picture => {
            const img = new Image(); 
            img.src = picture.fileName; 
        }); 

        const imageCycleInterval = setInterval(() => {
            if (imgIndex !== 4) {
                imgIndex += 1; 
            } else {
                imgIndex = 0; 
            }
            homepageCarousel.current.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${worldImgs[imgIndex]}) no-repeat`; 
            homepageCarousel.current.style.backgroundSize = 'cover'; 
            // console.log("Image cycled. ", imgIndex); 
        }, 5000); 

        return function cleanUp() {
            clearInterval(imageCycleInterval); 
        }
    }, [imgIndex]); 

    return (
        <div>
            <div className="position-relative">
                <Container fluid style={{ height: "calc(100vh - 72px)", background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${worldImgs[imgIndex]})` }} className="text-center d-flex w-100 p-3 mx-auto flex-column justify-content-center align-items-center position-relative" id="homepageCarousel" ref={homepageCarousel}> 
                </Container>
                <main className="text-center px-3 overflow-auto position-absolute top-50 start-0 end-0">
                    <h1 className="gradient-text">Welcome to the IA Minecraft server! </h1>
                </main>
            </div>
            {/* <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={IamcWorld1} alt="" /> 
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={IamcWorld2} alt="" /> 
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={IamcWorld3} alt="" /> 
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={IamcWorld4} alt="" /> 
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={IamcWorld5} alt="" /> 
                </Carousel.Item>
            </Carousel> */} 
            <Container className="p-5">
                <p className="lead">
                    Welcome to the IA Minecraft website, here you can find all the info you need about 
                    the unofficial IA Minecraft server. We have a process to whitelist new members, so if 
                    you're not a part of this great community already, click <Link to="/how-to-join" className="text-info link">here</Link> to 
                    get started. On this website, we have lots of useful info about the server including, 
                    but not limited to: the hardware and people who run it, and announcements and rules 
                    in case you are unable to access the <a href="https://discord.gg/CRA67HVUJG" target="_blank" className="text-info link">Discord server</a> (click the link to join!). 
                    We also have an about us and donation page to give credit to those who work on the server, 
                    and to allow others to aid in development through monetary donations. All proceeds WILL 
                    go towards improving the server in one way or another (don’t worry, we’re not taking a 
                    trip to Vegas). With that said, feel free to explore the website and, hopefully later on, the server!
                </p>
            </Container>
            <Card bg="info" text="light" className="text-center mx-auto mb-5 donation-card">
                {/* <Card.Header>Donate!</Card.Header> */}
                <Card.Img variant="top" src="https://i0.wp.com/nintendosoup.com/wp-content/uploads/2017/08/paypal_logo_1.jpg?fit=895%2C543&ssl=1 cap" /> 
                <Card.Body>
                    <Card.Title>Wanna support the server?</Card.Title>
                    <Card.Text>Donate to help pay for costs related to the IA Minecraft server! </Card.Text>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="E346CY3TZQQ9W" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>

                    {/* <a href="#"><img width="auto" height="75px" src="https://i0.wp.com/sccsc.org/wp-content/uploads/2019/01/paypal-donate-button-transparent-3.png?ssl=1" /></a> */}
                </Card.Body>
            </Card>
        </div>
    ); 
}