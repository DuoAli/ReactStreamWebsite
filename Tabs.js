import React, { useState } from 'react';
import team from '../images/the-team.png';

export default function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
        <>
        <div className="team-icon">
        <img 
            src={'https://image.flaticon.com/icons/png/32/528/528076.png'} 
            alt="content Tab"
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
            ></img>

            <img 
            src={'https://image.flaticon.com/icons/png/32/528/528111.png'} 
            alt="content Tab"
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
            ></img>

            <img 
            src={'https://image.flaticon.com/icons/png/32/2946/2946177.png'} 
            alt="content Tab"
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
            ></img>

            <img 
            src={'https://image.flaticon.com/icons/png/32/705/705890.png'} 
            alt="content Tab"
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
            ></img>

        </div>
            <div className="teamHeroSection">
                <div>  
                    <div className="teamHero">
                    <div
                        className={toggleState === 1 ? "tab-content  active-tab-content" : "tab-content"}
                        >
                        <h2>TEAM <img  src={'https://image.flaticon.com/icons/png/32/528/528076.png'} 
                                         alt="content Tab" /></h2>
                        <h1>Muhammad Ali</h1>                 
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                            vel voluptatum?
                        </p>
                            <div>
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733579.png'} 
                                         alt="content Tab" />
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733547.png'} 
                                         alt="content Tab" />  
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733633.png'} 
                                         alt="content Tab" />  
                            </div>
                        </div>

                        <div
                        className={toggleState === 2 ? "tab-content  active-tab-content" : "tab-content"}
                        >
                        <h2>TEAM <img  src={'https://image.flaticon.com/icons/png/32/528/528111.png'} 
                                         alt="content Tab" /></h2>
                        <h1>Fawad</h1>                 
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                             <div>
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733579.png'} 
                                         alt="content Tab" />
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733547.png'} 
                                         alt="content Tab" />  
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733633.png'} 
                                         alt="content Tab" />  
                            </div>
                        </div>

                        <div
                        className={toggleState === 3 ? "tab-content  active-tab-content" : "tab-content"}
                        >
                        <h2>TEAM <img  src={'https://image.flaticon.com/icons/png/32/2946/2946177.png'} 
                                        alt="content Tab" /></h2>
                        <h1>Ahmed</h1> 
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium
                        </p>
                           <div>
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733579.png'} 
                                         alt="content Tab" />
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733547.png'} 
                                         alt="content Tab" />  
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733633.png'} 
                                         alt="content Tab" />  
                            </div>
                        </div>

                        <div
                        className={toggleState === 4 ? "tab-content  active-tab-content" : "tab-content"}
                        >
                        <h2>TEAM <img  src={'https://image.flaticon.com/icons/png/32/705/705890.png'} 
                                         alt="content Tab" /></h2>
                        <h1>Muhammad Ali Jamali</h1>                 
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        </p>
                             <div>
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733579.png'} 
                                         alt="content Tab" />
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733547.png'} 
                                         alt="content Tab" />  
                                <img  src={'https://image.flaticon.com/icons/png/16/733/733633.png'} 
                                         alt="content Tab" />  
                            </div>
                        </div>

                    </div>                 
                </div>
                <div className="teamHeroSectionImg">
                    <img src={team} alt="team members"/>
                </div>
            </div>
        </>
    )
}
