import { useRef, useState, useEffect } from "react";
import "../../assets/styles/main.css";
import {
    Clock,
    Pause,
    TicketsIcon,
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
    Play,
    CalendarCheck,
    PlusSquareIcon,
    PartyPopper,
    SkipBack,
    SkipForward,
} from "lucide-react";
import { ResizeObserver } from "@juggle/resize-observer";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { apiCalendar } from "../../api/calendarApi";

const carouselImgName = "carousel_img";
const exhibitionImgName = "exhibition_img";
const carouselImgs = [`${carouselImgName}1`, `${carouselImgName}2`, `${carouselImgName}3`, `${carouselImgName}4`];
export default function HomeContent() {
    //calendar 관련 -> 메인에서만 쓰니까 전역관리 필요 X
    const [exhibitions, setExhibitinos] = useState([]);

    // carousel 관련
    const [counter, setCounter] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);

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
        if (!slideIntervalRef.current) {
            slideIntervalRef.current = setInterval(handleCarouselNext, 3000);
        }
    };

    const stopAutoSlide = () => {
        clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = null;
    };

    const loadCalendar = async () => {
        const response = await apiCalendar();
        //확인해보기

        setExhibitinos(response.data);

        return;
    };

    const handleCarouselSlide = (index) => {
        setCounter(index);
    };

    useEffect(() => {
        if (autoPlay) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    }, [autoPlay]);
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
        loadCalendar();

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
                <div className='carousel-slides' ref={slideRef}>
                    {carouselImgs.map((image, index) => (
                        <img
                            key={image}
                            src={`/images/${image}.jpg`}
                            alt={`${carouselImgName + (index + 1)}`}
                            ref={(el) => (imageRefs.current[index] = el)}
                        />
                    ))}
                </div>
                <div className='carousel-button prev' onClick={handleCarouselPrev}>
                    <SkipBack size={42} />
                </div>
                <div className='carousel-button next' onClick={handleCarouselNext}>
                    <SkipForward size={42} />
                </div>
                <div className='carousel-button stop' onClick={() => setAutoPlay(!autoPlay)}>
                    {autoPlay ? <Play /> : <Pause />}
                </div>
                <div className='carousel-nav'>
                    {carouselImgs.map((_, index) => (
                        <div
                            className={`carousel-nav-btn ${counter === index ? "current-slide" : ""}`}
                            onClick={() => handleCarouselSlide(index)}
                        ></div>
                    ))}
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
                    <div className='main-info-right-item'>
                        <Link to='/location'>
                            <div>오시는길</div>
                        </Link>
                        <hr size='5' color='black' />
                    </div>
                    <div className='main-info-right-item'>
                        <Link to='/exhibitions'>
                            <div>예약하기</div>
                        </Link>
                        <hr size='5' color='black' />
                    </div>
                </div>
            </div>
            <div className='main-exhibition'>
                <h1>전시</h1>
                <div className='main-exhibition-content'>
                    <ul className='main-exhibition-list'>
                        {Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <li className='main-exhibition-list-item' key={`exhibition_${index}`}>
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
            <div className='main-attention'>
                <div className='main-press-container'>
                    <div className='main-attention-press'>
                        <h1>
                            알립니다
                            <PartyPopper size={30} />
                            {/* <Mic size={30} /> */}
                        </h1>
                        <ul className='main-attention-list'>
                            <li className='main-attention-list-item'>
                                <h3>관련 뉴스</h3>
                            </li>
                            <hr size={2} color='black' />
                            <li className='main-attention-list-item'>
                                <a href='https://www.newsis.com/view/NISX20250902_0003311919'>
                                    뮷즈 '까치호랑이' 구하나요?…'박물관·미술관 박람회'서 日 100개 풀린다
                                </a>
                                <div>2025.09.02</div>
                            </li>
                            <li className='main-attention-list-item'>
                                <a href='https://news.mt.co.kr/mtview.php?no=2025082709524536411'>
                                    "'단청 키보드' 대박 터졌다"…국립중앙박물관 '필수 굿즈' 외국인들 싹쓸이
                                </a>
                                <div>2025.08.27</div>
                            </li>
                            <li className='main-attention-list-item'>
                                <a href='https://www.news1.kr/photos/7463601'>국립중앙박물관 '오픈런'</a>
                                <div>2025.08.27</div>
                            </li>
                            <li className='main-attention-list-item'>
                                <a href='https://www.yna.co.kr/view/AKR20250826067200005'>
                                    국립중앙박물관 올해 관람객, 역대 최다…500만명 돌파 기대
                                </a>
                                <div>2025.08.26</div>
                            </li>
                            <li className='main-attention-list-item'>
                                <a href='https://search.naver.com/search.naver?ssc=tab.news.all&where=news&sm=tab_jum&query=%EA%B5%AD%EB%A6%BD%EC%A4%91%EC%95%99%EB%B0%95%EB%AC%BC%EA%B4%80'>
                                    더보기 <PlusSquareIcon size={16} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='main-attention-imgs'>
                        <div className='main-attention-left-img'>
                            <img id='attention1' src='./images/attention_img1.jpg' alt='아하!발견과공감' />
                        </div>

                        <div className='main-attention-right-imgs'>
                            <div>
                                <img id='attention2' src='./images/attention_img2.jpg' alt='박물관' />
                            </div>
                            <div className='main-attnetion-right-img2'>
                                <img id='attention3' src='./images/attention_img4.jpg' alt='제주' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-schedules'>
                    <h1>
                        주요일정 <CalendarCheck size={32} />
                    </h1>
                    {/* <div className='main-calendar-container'> */}
                    {exhibitions ? (
                        <FullCalendar
                            className='calendar'
                            plugins={[dayGridPlugin]}
                            initialView='dayGridMonth'
                            events={exhibitions}
                            eventColor='rgb(0, 0, 0)'
                            displayEventTime={false}
                            locale='ko'
                        />
                    ) : (
                        "로딩중..."
                    )}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
