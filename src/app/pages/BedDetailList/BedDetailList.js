import classNames from 'classnames/bind';
import styles from './BedDetailList.module.scss';
import { SearchIcon } from '../../components/Icons';
import { useEffect, useState } from 'react';
import { sCurrentPage } from '../../layouts/DefaultLayout/Sidebar/sidebarStore';
import { get } from '../../modules/lib/httpHandle'; // Thêm `del` để hỗ trợ xóa
import { signify } from 'react-signify';
import { removeVietnameseTones } from '../../modules/lib/removeVietnameseTones';
import BedDetailItem from './partials/BedDetailItem';
import BedDetailModal from '../../components/BedDetailModal';
import AddBedDetailModal from '../../components/AddBedDetailModal';

const cx = classNames.bind(styles);

const sShowModal = signify({
    isShowing: false,
    data: undefined,
});

let bedDetails = [];

function BedDetailList() {
    const [filteredBedDetails, setFilteredBedDetails] = useState([]);

    useEffect(() => {
        sCurrentPage.set('/danh-sach-chi-tiet-giuong');

        get(
            'bed-details/',
            (data) => {
                bedDetails = data;
                setFilteredBedDetails(data);
            },
            () => {
                alert('Không tìm thấy danh sách chi tiết giường!');
            },
        );
    }, []);

    const handleSearchInput = (e) => {
        const value = e.target.value.toLowerCase();
        const searchingBedDetails = bedDetails.filter((item) => {
            return (
                item.id.toString().includes(value) ||
                removeVietnameseTones(item.bedDetailText).toLowerCase().includes(removeVietnameseTones(value))
            );
        });
        setFilteredBedDetails(searchingBedDetails);
    };

    return (
        <div className={cx('wrapper') + ' grid'}>
            {/* Header */}
            <div className={cx('header')}>
                <div className={cx('search-wrapper')}>
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Tìm kiếm chi tiết giường..."
                        onInput={handleSearchInput}
                    />
                </div>
                <button
                    className={cx('add-button')}
                    onClick={() => {
                        console.log('Nút Thêm được nhấn'); // Kiểm tra sự kiện
                        sShowModal.set({
                            isShowing: true,
                            type: 'add', // Thêm mới
                            data: null,
                        });
                        // console.log('Modal state:', sShowModal.get());
                    }}
                >
                    Thêm
                </button>
            </div>
    
            {/* List Header */}
            <div className={'row ' + cx('list-header')}>
                <p className="col c-3 m-4 l-3">Mã giường</p>
                <p className="col c-9 m-8 l-9">Chi tiết loại giường</p>
            </div>
    
            {/* List Items */}
            {filteredBedDetails.map((item, index) => (
                <BedDetailItem
                    key={index}
                    data={item}
                    onClick={() => {
                        sShowModal.set({
                            isShowing: true,
                            type: 'edit', // Chỉnh sửa
                            data: item,
                        });
                        // console.log('Modal state:', sShowModal.get());
                    }}
                />
            ))}
    
            {/* Modal */}
            <sShowModal.HardWrap>
                {(value) => {
                    if (value.isShowing) {
                        return (
                            <div id="chi-tiet-giuong" className="modal">
                                <a
                                    href="/danh-sach-chi-tiet-giuong#"
                                    className="modal-overlay"
                                    onClick={() => sShowModal.set({ isShowing: false })}
                                ></a>
                                {value.type === 'add' ? (
                                    <AddBedDetailModal
                                        onSave={(newData) => {
                                            const newBedDetails = [...bedDetails, newData];
                                            setFilteredBedDetails(newBedDetails);
                                            bedDetails = newBedDetails;
                                        }}
                                        onClose={() => sShowModal.set({ isShowing: false })}
                                        className="modal-body"
                                        type="bed-detail"
                                        data={value.data}
                                    />
                                ) : (
                                    <BedDetailModal
                                        className="modal-body"
                                        type="bed-detail"
                                        data={value.data}
                                    />
                                )}
                            </div>
                        );
                    }
                    return null;
                }}
            </sShowModal.HardWrap>
        </div>
    );
    
}

export default BedDetailList;
