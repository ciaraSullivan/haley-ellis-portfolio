import React from "react";

function HomePage(props) {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <picture>
                        <source media="(min-width: 900px)" srcset={props.ART.homePictureBig.image} />
                        <img className="img-fluid" src={props.ART.homePictureSmall.image} alt={props.ART.homePictureSmall.alt} />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default HomePage;