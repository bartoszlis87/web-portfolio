import React from 'react';
import './Hero.scss';



function Hero() {
    return (
        <>
            <section id="about">
                {/*<div className="info">*/}

                {/*    /!*<div className="boxSize"></div>*!/*/}
                {/*</div>*/}

                <div className="content">
                    <div className="box1">
                        <div className="avatar">
                            <div className="description">
                                <br/>
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
             error iusto, natus, ea possimus laborum soluta maxime officia unde
           </span>
                            </div>

                        </div>
                    </div>
                    <div className="box2">
                        <div className="descriptionRight">
                            <div className="nameSizes">I'm Bartek</div>
                            <div className="contentSizes">Frontend Developer</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;