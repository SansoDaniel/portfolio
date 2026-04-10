import {type JSX, type ReactNode, useState} from "react";
import "./carousel.css"

type CarouselItem = {
    icon: ReactNode;
    title: string;
}

type CarouselProps = {
    items: Array<CarouselItem>;

}

const Carousel = (props: CarouselProps): JSX.Element => {

    const items = props.items;

    const [currentIndex, setCurrentIndex] = useState(0);


    const onCarouselBtnPressed = (value: number) => {
        console.log(value);
        console.log(currentIndex);
        if (currentIndex > items.length) {
            return setCurrentIndex(0)
        }

        return setCurrentIndex(currentIndex + value);
    }

    return (
        <div className="carousel-wrap">
            <div className="carousel-track" id="track" style={{transform: `translate(-${currentIndex * 100}px)`}}>
                {items.map((value, index) => (
                    <div className="skill-pill" key={`${value.title}_${index}`}>
                        {value.icon}
                        <span className="skill-label">{value.title}</span>
                    </div>
                ))}
            </div>
            <div aria-hidden className="carousel-track" id="track" style={{transform: `translate(-${currentIndex * 100}px)`}}>
                {items.map((value, index) => (
                    <div className="skill-pill" key={`${value.title}_${index}`}>
                        {value.icon}
                        <span className="skill-label">{value.title}</span>
                    </div>
                ))}
            </div>
            <div className="carousel-nav">
                <button className="c-btn" onClick={() => onCarouselBtnPressed(-1)}>←</button>
                <button className="c-btn" onClick={() => onCarouselBtnPressed(1)}>→</button>
            </div>
        </div>
    )
}

export default Carousel;