import React from 'react';
import './Hero.scss';

import logo from "../images/logo.png";
import bg from "../images/bg.jpg";

function Hero() {
    return (
        <>
            <section id="about">
                <div className="info">
                    <h2>About me</h2>
                    <img src={bg} className="bgSizes" alt="Bartosz Lis"/>
                </div>

                <div className="content">
                    <div className="box2">
                        <div className="avatar">
                            <div className="description">
                                <br/>
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
             error iusto, natus, ea possimus laborum soluta maxime officia unde
             doloremque cumque quos pariatur. Distinctio beatae qui sed, quas
             saepe laudantium.
           </span>
                            </div>

                        </div>
                    </div>
                    <div className="box2">
                        <div className="description">
                            <h2>I'm Bartek</h2>
                            <br/>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;