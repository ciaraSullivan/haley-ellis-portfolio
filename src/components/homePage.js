import React from "react";

function HomePage(props) {
    return (
        <div className="container">
            <div className="row my-5 my-lg-1">
                <div className="col">
                    <picture>
                        <source media="(min-width: 900px)" srcset={props.ART.homePictureBig.image} />
                        <img className="img-fluid" src={props.ART.homePictureSmall.image} alt="Haley Ellis Portfolio Home Page" />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default HomePage;