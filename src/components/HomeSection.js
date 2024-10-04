import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeSection() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carousel-container"> {/* Add this div to apply CSS */}
            <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
                <Carousel.Item >
                    <img src="Assets/images/RewaqGalleryD.png" alt="Image 1" className="home__img" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="Assets/images/RewaqGalleryD.png" alt="Image 2" className="home__img" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="Assets/images/RewaqGalleryD.png" alt="Image 3" className="home__img" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomeSection;
