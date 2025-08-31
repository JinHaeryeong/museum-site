import "../assets/css/Footer.css";
const logos = ["naver_logo.svg", "twitter_logo.svg", "facebook_logo.svg", "instagram_logo.svg", "youtube_logo.svg"];
const snsLinks = [
    "https://blog.naver.com/100museum",
    "https://twitter.com/The_NMK",
    "https://www.facebook.com/NationalMuseumofKorea/",
    "https://www.instagram.com/nationalmuseumofkorea/",
    "https://www.youtube.com/user/koreanmuseum",
];
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='info-box'>
                    <div className='address'>04383 서울시 용산구 서빙고로 137(용산동6가 168-6)</div>
                    <div>02-2077-9000</div>
                </div>
                <div className='sns-box'>
                    <ul className='sns-list'>
                        {logos.map((logo, index) => (
                            <li>
                                <a key={index} href={snsLinks[index]} target='_blank' rel='noopenr noreferrer'>
                                    <img src={`/images/${logo}`} width='33px' height='33px' alt='블로그' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
