import React from "react";
import { Carousel } from "antd";

const CarouselComp = () => {
    const array = [
        "carousel1_800x300",
        "carousel2_800x300",
        "carousel3_800x300",
        "carousel4_800x300",
        "carousel5_800x300",
    ];

    const contentStyle = {
        height: "300px",
    };

    const images = array.map((image) => {
        return (
            <img
                key={image}
                src={require(`../../images/${image}.jpg`)}
                style={contentStyle}
                className="rounded"
                alt="carousel"
            />
        );
    });

    return (
        <Carousel autoplay nextArrow prevArrow>
            {images}
        </Carousel>
    );
};

export default CarouselComp;
