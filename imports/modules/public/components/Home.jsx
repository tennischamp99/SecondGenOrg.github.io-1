import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';
import { Link } from 'react-router';
export default class Home extends React.Component {
    constructor() {
        super();

        const styles = {
            subscribeText: {
                fontWeight: '200',
            },
        };

        this.state = { styles };
    }

    render() {
        const { styles } = this.state;
        return (
            <div id="home-wrapper" className="page-wrapper">
                <section id="section-splash">
                    <div className="valign-wrapper">
                        <div id="splash-content" className="valign" style={{
                            display: 'block'
                        }}>
                            <h1>SecondGen</h1>
                            <h2>We are an entrepreneurship club for <div><span style={{
                                fontWeight: 700
                            }} id="splash-typed" >students.</span></div></h2>
                            <Link to="/start-chapter" style={{
                                marginTop: '6vh',
                                display: 'block',
                                width: '60%',
                                margin: window.innerWidth > 600 ? 'initial' : 'auto'
                            }}>
                                <RaisedButton
                                    label="Start a Chapter"
                                    backgroundColor={Colors.blue500}
                                    labelStyle={{
                                        color: 'white'
                                    }}
                                    style={{
                                        display: 'block',
                                        marginTop: '20px'
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="section-what-we-do" className="content-section">
                <h1 id="what-we-do-header" className="section-header">What We Do</h1>
                    <div className="row">
                        <a className="col-md-3 what-we-do-panel">
                            <div className="img-wrapper">
                                <img src="/img/assets/club.png"/>
                            </div>
                            <h3>Chapters</h3>
                            <p>We create community hubs in which students get together and learn from workshops, activities, and speakers while also developing and creating their own projects with like minded individuals at schools and public spaces.</p>
                        </a>
                        <a className="col-md-3 what-we-do-panel">
                            <div className="img-wrapper">
                                <img src="/img/assets/eaglehacks.png"/>
                            </div>
                            <h3>Events</h3>
                            <p>We run many in-person opportunities through the year from student-run, 24-hour hackathons to international film festivals in which participants collaborate on impactful projects to gain experience, network, and find new opportunities!</p>
                        </a>
                        <a className="col-md-3 what-we-do-panel">
                            <div className="img-wrapper">
                                <img src="/img/assets/canhacks.png"/>
                            </div>
                            <h3>Mentors</h3>
                            <p>Members have access to an array of mentors to ask questions about very specific and experience related questions to guide students into the right path when it comes to entrepreneurship.</p>
                        </a>
                        <a className="col-md-3 what-we-do-panel">
                            <div className="img-wrapper">
                                <img src="/img/assets/ted.png"/>
                            </div>
                            <h3>Resources</h3>
                            <p>We offer an ever growing array of resources from a guide to topic related video series, so that students can access information and support anywhere they are at any time of day.</p>
                        </a>
                    </div>
                </section>{/*}
                <div id="subscribe-banner">
                    <div className="row" style={{
                        width: '75%',
                        margin: 'auto'
                    }}>
                        <div className="col-md-8 col-xs-12">
                            <TextField
                                id="email-field"
                                fullWidth={true}
                                inputStyle={{color: 'white'}}
                                underlineFocusStyle={{borderColor: 'white'}}
                                hintText="you@example.com"
                            />
                        </div>
                        <FlatButton
                            label="Subscribe for Updates"
                            className="col-md-4 col-xs-12"
                            primary={true}
                            backgroundColor="#ffffff"
                            hoverColor="#dddddd"
                        />
                    </div>
                </div>*/}

                <section id="section-get-involved" class="content-section">
                <h1 id="get-involved-header" className="section-header">Get Involved</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <h2>Start a Chapter</h2>
                            <p>SecondGen chapters can be new clubs or can be integrated into existing clubs. If you believe we can make a difference in your community, we encourage you to start a local chapter.</p>
                            <Link to="/start-chapter" style={{
                                width: '50%'
                            }}>
                                <RaisedButton
                                    label="Start a Chapter!"
                                    backgroundColor={Colors.blue500}
                                    labelStyle={{
                                        color: 'white'
                                    }}
                                    style={{
                                        display: 'block',
                                        marginTop: '20px'
                                    }}
                                />
                            </Link>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <h2>Partner</h2>
                            <p>Are you a big company, investor or curious supporter? Fill out this form for any inquiries on other ways to get involved with SecondGen.</p>
                            <Link to="/partner" style={{
                                width: '50%'
                            }}>
                                <RaisedButton
                                    label="Contact Us!"
                                    backgroundColor={Colors.blue500}
                                    labelStyle={{
                                        color: 'white'
                                    }}
                                    style={{
                                        display: 'block',
                                        marginTop: '20px'
                                    }}
                                />
                            </Link>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <h2>Join Our Team</h2>
                            <p>SecondGen is always looking for amazing students to help contribute to our community from local chapter leaders to global directors. Fill out this form to get involved today!</p>
                            <Link to="/join-team" style={{
                                width: '50%'
                            }}>
                                <RaisedButton
                                    label="Join Us!"
                                    backgroundColor={Colors.blue500}
                                    labelStyle={{
                                        color: 'white'
                                    }}
                                    style={{
                                        display: 'block',
                                        marginTop: '20px'
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="section-partners" className="content-section">
                    <h1 id="partners-header" className="section-header">Partners</h1>
                    <div className="row">
                        <div className="col-md-3 col-xs-12 img-wrapper valign-wrapper">
                            <img 
                                className="valign" 
                                src="img/logos/partners/googleforentrepreneurs.png"
                            />
                        </div>
                        <div className="col-md-3 col-xs-12 img-wrapper valign-wrapper">
                            <img 
                                className="valign" 
                                src="img/logos/partners/hpe.png"
                            />
                        </div>
                        <div className="col-md-3 col-xs-12 img-wrapper valign-wrapper">
                            <img 
                                className="valign" 
                                src="img/logos/partners/makeschool.png"
                            />
                        </div>
                        <div className="col-md-3 col-xs-12 img-wrapper valign-wrapper">
                            <img 
                                className="valign" 
                                src="img/logos/partners/rogerwilco.png"
                                style={{
                                    width: '75%',
                                    margin: 'auto'
                                }}
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}