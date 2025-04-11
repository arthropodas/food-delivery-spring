import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { topMeals as mealsData } from '../../utils/carousalData';
import CarousalItem from './CarousalItem';
import Carousal from '../schema/Carousal';

const MultipleItems = () => {
    const [topMeals, setTopMeals] = useState<Carousal[]>([]);

    useEffect(() => {
        setTopMeals(mealsData); // Set the data inside useEffect
    }, []); // Empty dependency array means this runs only once

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Updated to a meaningful autoplay speed
    };

    return (
        <div>
            <p>
                hi
            </p>
            <Slider {...settings}>
                {topMeals.length > 0 ? (
                    topMeals.map((meal: Carousal, index: number) => (
                        <CarousalItem key={index} image={meal.image} title={meal.title} />
                    ))
                ) : (
                    "No meals available"
                )}
            </Slider>
        </div>
    );
};

export default MultipleItems;
