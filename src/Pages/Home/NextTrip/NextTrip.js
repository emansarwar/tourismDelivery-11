import React from 'react';
import './NextTrip.css'
import { Col, Container, Row } from 'react-bootstrap';



const NextTrip = () => {
    return (
        <div>
            <Container>
                <hr/>
                <h3>Inspiration For Next Trip</h3>
                <div className="trip">
                    <Row>
                        <Col>
                            <figure className="position-realtive">
                                <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Finland.jpg" alt="" className="img-fluid" />
                                <>
                                    <figcaption>
                                        <h5>NORTHERN LIGHTS</h5>
                                        <p>
                                            The mosque is locally known as the 'Shat Gombuj Masjid', which in Bengali means Sixty Domed Mosque
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                        <Col>
                            <figure className="">
                                <img src="https://www.planetware.com/photos-large/I/italy-venice-canals.jpg" alt="" className="" />
                                <>
                                    <figcaption className="trip-content">
                                        <h5>COLOSSEUM</h5>
                                        <p>
                                            Ahsan Manzil, an architectural treasure, is a witness to many historical events of Bangladesh.
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                        <Col>
                            <figure className="">
                                <img src="https://www.planetware.com/photos-large/ENG/uk-best-places-london.jpg" alt="" className="" />
                                <>
                                    <figcaption>
                                        <h5>Big Ben and the Houses of Parliament</h5>
                                        <p>
                                            Kantanagar Temple, commonly known as Kantaji Temple at Kantanagar,is a late-medieval Hindu temple in Dinajpur, Bangladesh.
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default NextTrip;