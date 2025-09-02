import { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FiAlertCircle } from 'react-icons/fi';
import '../../assets/styles/MyOrder.css';

export default function MyOrder() {
    const data = [
        {
            id: '1',
            title: '마나 모아나-신성한 바다의 예술',
            visitAt: '2025-09-10 10:00',
            appliedAt: '2025-09-01',
            status: '예약완료',
            guests: '1',
        },
        {
            id: '2',
            title: '두3432esdfsdf다',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '예약완료',
            guests: '3',
        },
        {
            id: '3',
            title: '33333333333333333333333333',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '예약완료',
            guests: '1',
        },
        {
            id: '4',
            title: '아님',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '예약완료',
            guests: '1',
        },
        {
            id: '5',
            title: '55555555555',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '예약완료',
            guests: '1',
        },
        {
            id: '6',
            title: '6666666666666',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '취소',
            guests: '7',
        },
        {
            id: '7',
            title: '77777777777777',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '취소',
            guests: '10',
        },
        {
            id: '8',
            title: '888888888888',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '예약완료',
            guests: '1',
        },
        {
            id: '9',
            title: '999999999999',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '취소',
            guests: '1',
        },
        {
            id: '10',
            title: '010101010',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '예약완료',
            guests: '1',
        },
        {
            id: '11',
            title: '010101010',
            visitAt: '2025-09-13 16:00',
            appliedAt: '2025-09-05',
            status: '예약완료',
            guests: '100',
        },
    ];

    const perPage = 5;
    const totalItems = data.length;

    const [sp] = useSearchParams();
    const navigate = useNavigate();
    const page = Math.max(1, Number(sp.get('page') || 1));

    const sliced = useMemo(() => {
        const start = (page - 1) * perPage;
        return data.slice(start, start + perPage);
    }, [data, page]);

    const pageCount = Math.max(1, Math.ceil(totalItems / perPage));

    return (
        <div>
            <h2>전체 예약 현황</h2>

            <div className="online-info">
                <div className="online-info-header">
                    <FiAlertCircle /> <br />
                    예약 이용 안내
                </div>
                <div className="list">
                    <ul>
                        <li>회원님의 예약 내역을 조회하고 취소하실 수 있습니다.</li>
                        <li>예약취소는 예약취소를 누르시면 됩니다.</li>
                        <li>예약취소하실 때는 다른 이용객들이 예약할 수 있도록 미리 취소해주시기 바랍니다.</li>
                        <li>[출력]을 누르시면 접수증(예약확인증)을 출력하실 수 있습니다.</li>
                        <li>접수된 후 프로그램 불참 시에는 불이익을 당하실 수 있습니다.</li>
                    </ul>
                </div>
            </div>

            <h2>예약 현황</h2>
            <p className="board-list-total">총 {totalItems}건이 검색되었습니다.</p>

            <div className="board">
                <ul className="board-header">
                    <li>예약번호</li>
                    <li>예약명</li>
                    <li>참가일/관람일</li>
                    <li>신청일</li>
                    <li>상태</li>
                    <li>인원</li>
                </ul>
            </div>

            <div className="board">
                {sliced.length === 0 && (
                    <ul className="board-row">
                        <li className="text-left" style={{ gridColumn: '1 / -1' }}>
                            데이터가 없습니다.
                        </li>
                    </ul>
                )}
                {sliced.map((r) => (
                    <ul className="board-row" key={r.id}>
                        <li>{r.id}</li>
                        <li className="text-left">{r.title}</li>
                        <li>{r.visitAt}</li>
                        <li>{r.appliedAt}</li>
                        <li>{r.status}</li>
                        <li>{r.guests}</li>
                    </ul>
                ))}
            </div>

            <ReactPaginate
                previousLabel="‹"
                nextLabel="›"
                breakLabel="…"
                pageCount={pageCount}
                forcePage={page - 1}
                onPageChange={(e) => navigate(`?page=${e.selected + 1}`)}
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="active"
                disabledClassName="disabled"
                previousClassName="prev"
                nextClassName="next"
                breakClassName="break"
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
            />
        </div>
    );
}
