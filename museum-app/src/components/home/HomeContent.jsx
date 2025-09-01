import { useRef, useState, useEffect } from "react";
import "../../assets/styles/main.css";
import { Clock, Pause, TicketsIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { ResizeObserver } from "@juggle/resize-observer";

const carouselImgName = "carousel_img";
const exhibitionImgName = "exhibition_img";
export default function HomeContent() {
    // carousel 관련
    const [counter, setCounter] = useState(0);

    const slideRef = useRef(null);
    const imageRefs = useRef([]);
    const size = useRef(0);
    const slideIntervalRef = useRef(null);

    const updateSlideSize = () => {
        if (imageRefs.current.length > 0) {
            size.current = imageRefs.current[0].clientWidth;
        }
        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(${-size.current * counter}px)`;
        }
    };

    const handleCarouselPrev = () => {
        setCounter((prevCounter) => (prevCounter <= 0 ? 3 : prevCounter - 1));
    };

    const handleCarouselNext = () => {
        setCounter((prevCounter) => (prevCounter >= 3 ? 0 : prevCounter + 1));
    };

    const startAutoSlide = () => {
        slideIntervalRef.current = setInterval(handleCarouselNext, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(slideIntervalRef.current);
    };

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(${-size.current * counter}px)`;
            slideRef.current.style.transition = "transform 0.4s ease-in-out";
        }
    }, [counter]);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            updateSlideSize();
        });

        if (slideRef.current) {
            resizeObserver.observe(slideRef.current);
        }

        startAutoSlide();

        return () => {
            stopAutoSlide();
            if (slideRef.current) {
                resizeObserver.unobserve(slideRef.current);
            }
        };
    }, []);
    return (
        <div>
            <div className='carousel'>
                <div
                    className='carousel-slides'
                    ref={slideRef}
                    onMouseEnter={stopAutoSlide}
                    onMouseLeave={startAutoSlide}
                >
                    {Array(4)
                        .fill(0)
                        .map((_, index) => (
                            <img
                                src={`/images/${carouselImgName + (index + 1)}.jpg`}
                                alt={`${carouselImgName + (index + 1)}`}
                                ref={(el) => (imageRefs.current[index] = el)}
                            />
                        ))}
                </div>
                <div className='carousel-button prev' onClick={handleCarouselPrev}>
                    <ArrowLeftCircleIcon size={42} />
                </div>
                <div className='carousel-button next' onClick={handleCarouselNext}>
                    <ArrowRightCircleIcon size={42} />
                </div>
                <div className='carousel-button stop' onClick={stopAutoSlide}>
                    <Pause />
                </div>
            </div>
            <div className='main-info'>
                <div className='main-info-left'>
                    <ul className='main-info-content'>
                        <li className='main-info-first'>
                            <div className='main-info-first-icon'>
                                <Clock />
                            </div>
                            <div>관람시간</div>
                        </li>
                        <li className='main-info-think'>월/화/목/금/일</li>
                        <li className='main-info-light'>10:00 ~ 18:00</li>
                        <li className='main-info-think'>수/토</li>
                        <li className='main-info-light'>10:00 ~ 21:00</li>
                        <li>* 입장 마감은 폐관 30분 전까지</li>
                    </ul>
                    <ul className='main-info-content'>
                        <li className='main-info-first'>
                            <div className='main-info-first-icon'>
                                <TicketsIcon />
                            </div>
                            <div>관람료</div>
                        </li>
                        <li className='main-info-think'>무료</li>
                        <li className='main-info-light'>특별 전시는 유료</li>
                    </ul>
                    <hr size='5' color='black' />
                </div>
                <div className='main-info-right'>
                    <div className='main-info-right-item'>오시는길</div>
                    <div className='main-info-right-item'>예약하기</div>
                </div>
            </div>
            <div className='main-exhibition'>
                <h1>전시</h1>
                <div className='main-exhibition-content'>
                    <ul className='main-exhibition-list'>
                        {Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <li className='main-exhibition-list-item'>
                                    <div className='main-exhibition-item-img-container'>
                                        <img
                                            className='main-exhibition-item-img'
                                            src={`/images/${exhibitionImgName + (index + 1)}${
                                                index + 1 == 2 ? ".png" : ".jpg"
                                            }`}
                                            alt={`${exhibitionImgName + (index + 1)}`}
                                        />
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <div>
                <h1>메인 알립니다 영역</h1>
            </div>
            <div></div>
        </div>
    );
}
