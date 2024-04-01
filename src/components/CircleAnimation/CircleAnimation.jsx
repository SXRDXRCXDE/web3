import React from 'react';
import './CircleAnimation.css'; // Подключаем стили

const Circle = ({ fillPercentage }) => {

    const circleStyle = {
        strokeDasharray: `${fillPercentage}, 100`,
        transition: 'stroke-dasharray 1s ease-out'
    };

    const rotatePosition = fillPercentage > 18 ? 260 : 210;

    const rotationAngle = fillPercentage * 2.4 - rotatePosition; // При fillPercentage = 0, угол будет -210deg

    return (
        <div style={{transform:`rotate(${rotationAngle}deg)`}} className="w-full  h-full content-around transition-all duration-500 ">
            <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path className="circle-bg"
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                      style={circleStyle}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
        </div>
    );
};

export default Circle;
