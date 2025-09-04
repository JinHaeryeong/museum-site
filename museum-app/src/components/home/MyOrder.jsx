import { useEffect, useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FiAlertCircle } from 'react-icons/fi';
import { useAuthStore } from '../../stores/authStore';
import { apiGetReservations, apiCancelReservation } from '../../api/reservationApi';
import Modal from '../Modal';
import '../../assets/styles/MyOrder.css';
import Cancle from '../reservation/Cancle';

export default function MyOrder() {
    const authUser = useAuthStore((s) => s.authUser);
    const [reservations, setReservations] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    const [isOpenModal, setIsModalOpen] = useState(false);
    const openCancleModal = () => {
        setIsModalOpen(true);
    };
    const closeCancleModal = () => {
        setIsModalOpen(false);
    };

    const perPage = 5;
    const [sp] = useSearchParams();
    const navigate = useNavigate();
    const page = Math.max(1, Number(sp.get('page') || 1));

    useEffect(() => {
        const fetchData = async () => {
            if (!authUser?.id) {
                setLoading(false);
                return;
            }
            try {
                const res = await apiGetReservations({ userId: authUser.id, page, perPage });

                if (res?.result === 'success') {
                    setReservations(res.data.items || []);
                    setTotalItems(Number(res.data.total || 0));
                } else {
                    alert(res?.message || '예약 내역을 불러올 수 없습니다.');
                }
            } catch (err) {
                console.error(err);
                alert('예약 내역 불러오기 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [authUser, page]);

    const pageCount = Math.max(1, Math.ceil(totalItems / perPage));

    const sliced = useMemo(() => {
        return reservations;
    }, [reservations]);

    if (loading) return <p>로딩 중...</p>;
    if (!authUser) {
        return <p>로그인 후 예약 내역을 확인할 수 있습니다.</p>;
    }

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
                    <li>관람일시</li>
                    <li>신청일</li>
                    <li>상태</li>
                    <li>인원</li>
                    <li>취소</li>
                </ul>
            </div>

            <div className="board">
                {sliced.length === 0 && (
                    <ul className="board-row">
                        <li className="text-left" style={{ gridColumn: '1 / -1' }}>
                            예약 내역이 없습니다.
                        </li>
                    </ul>
                )}
                {sliced.map((r) => (
                    <ul className="board-row" key={r.id}>
                        <li>{r.id}</li>
                        <li className="text-left">{r.title}</li>
                        <li>{r.visitAt}</li>
                        <li>{r.appliedAt}</li>
                        <li className="status">{r.status}</li>
                        <li>{r.guests}</li>
                        <li>
                            <button className="cancle-button" onClick={openCancleModal}>
                                취소
                            </button>
                        </li>
                    </ul>
                ))}
            </div>
            {isOpenModal && (
                <Modal isOpen={isOpenModal} onClose={closeCancleModal} title="취소할거니!!">
                    <Cancle onClose={closeCancleModal} />
                </Modal>
            )}

            <ReactPaginate
                previousLabel="‹"
                nextLabel="›"
                breakLabel="…"
                pageCount={pageCount}
                forcePage={Math.min(page - 1, pageCount - 1)}
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
