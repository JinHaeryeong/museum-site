import React from 'react';

export default function AboutInfo() {
    const styles = {
        wrapper: {
            maxWidth: '1200px',
            margin: '40px auto',
            padding: '40px',
        },
        header: {
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '24px',
            lineHeight: 1.5,
            textAlign: 'center',
        },
        highlight: {
            fontWeight: '800',
            color: '#222',
        },
        layout: {
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '40px',
            alignItems: 'flex-start',
        },
        image: {
            width: '100%',
            maxWidth: '100%',
            borderRadius: '8px',
            objectFit: 'cover',
        },
        text: {
            fontSize: '16px',
            lineHeight: 1.75,
            color: '#333',
        },
        title: {
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '8px',
        },
        thanks: {
            fontWeight: 'bold',
            marginTop: '24px',
        },
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.header}>
                역사와 문화가 살아 숨쉬고, 과거와 현재, 미래가 공존하는 감동의 공간인{' '}
                <span style={styles.highlight}>국립중앙박물관</span>에 오신 것을 환영합니다.
            </div>

            <div style={styles.layout}>
                <img src="../public/images/aboutinfo_director.jpg" alt="국립중앙박물관장" style={styles.image} />

                <div style={styles.text}>
                    <div style={styles.title}>안녕하십니까? 국립중앙박물관장 유홍준입니다.</div>

                    <p>
                        역사와 문화는 단순히 과거의 유산이 아닌 오늘의 우리가 살아가는 삶의 기반이며, 미래 세대에게
                        물려주어야 할 소중한 자산입니다. 국립중앙박물관은 국가의 문화유산을 체계적으로 보존 관리하고
                        연구하면서 전시와 교육을 통해 그 가치를 국내외에 널리 알리는 문화기관으로서의 소명을
                        다해왔습니다.
                    </p>
                    <p>
                        박물관은 오랜 시간 대한민국의 역사적 흐름 속에서 성장해왔습니다. 1960년대 덕수궁 석조전 건물부터
                        70년대 국립민속박물관 건물, 80년대 조선총독부 건물, 2000년대 국립고궁박물관 건물을 거쳐 2005년
                        용산으로 이전하여 국민 여러분의 관심과 사랑을 받으며 명실공히 대한민국 역사 문화의 상징적 공간이
                        되었습니다.
                    </p>
                    <p>
                        박물관의 3대 구성요소는 유물, 건물, 사람입니다. 국립중앙박물관은 유물, 건물, 관람객 모두
                        세계에서 열 손가락 안에 꼽히는 자랑스러운 규모입니다. 시대와 주제별로 구성된 7개의 상설전시관,
                        다양한 내용을 선보이는 특별전시관, 관람의 이해를 돕는 전시해설 프로그램, 오감으로 즐기고 배우는
                        어린이박물관, 다채로운 교육 프로그램, 첨단기술을 활용한 실감콘텐츠 등은 누구나 쉽게 역사와
                        문화를 보고, 듣고, 배우고, 느낄 수 있도록 설계되어 있습니다.
                    </p>
                    <p>
                        또한 접근성 개선 등의 노력을 통해 모든 세대와 계층이 누릴 수 있는 열린 문화공간으로 거듭나고
                        있습니다. 앞으로도 국민 여러분께서 마음껏 누리고 즐길 수 있도록 더욱 최선을 다하겠습니다.
                    </p>
                    <p>
                        시대가 변화함에 따라 박물관의 역할도 더욱 확대되고 있습니다. 국립중앙박물관은 K-컬쳐의 뿌리가
                        바로 우리 문화유산에 있음을 국민 여러분과 함께 재확인하며, 이를 바탕으로 세계 속에 K-문화강국의
                        위상을 높이는 데 앞장서겠습니다.
                    </p>

                    <div style={styles.thanks}>감사합니다.</div>
                </div>
            </div>
        </div>
    );
}
