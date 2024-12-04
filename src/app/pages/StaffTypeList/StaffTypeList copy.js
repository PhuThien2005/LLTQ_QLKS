import classNames from 'classnames/bind';
import styles from './StaffTypeList.module.scss';
import { SearchIcon } from '../../components/Icons';
import { useEffect, useState } from 'react';
import { sCurrentPage } from '../../layouts/DefaultLayout/Sidebar/sidebarStore';
import { get } from '../../modules/lib/httpHandle';
import { signify } from 'react-signify';
import { removeVietnameseTones } from '../../modules/lib/removeVietnameseTones';
import StaffTypeItem from './partials/StaffTypeItem';
import StaffTypeModal from '../../components/StaffTypeModal';

const cx = classNames.bind(styles);

const sShowModal = signify({
    isShowing: false,
    data: undefined,
});

let staffTypes = [];

function StaffTypeList() {
    const [filteredStaffTypes, setFilteredStaffTypes] = useState([]);

    useEffect(() => {
        sCurrentPage.set('/danh-sach-loai-nhan-vien');

        // Lấy dữ liệu "staff-types"
        get(
            'staff-types/',
            (data) => {
                staffTypes = data;
                setFilteredStaffTypes(data);
            },
            () => {
                alert('Không tìm thấy danh sách loại nhân viên!');
            },
        );
    }, []);

    const handleSearchInput = (e) => {
        const value = e.target.value.toLowerCase();
        const searchingStaffTypes = staffTypes.filter((item) => {
            return (
                item.id.toString().includes(value) || // Tìm theo ID
                removeVietnameseTones(item.staffTypeText).toLowerCase().includes(value) // Tìm theo tên loại nhân viên
            );
        });
        setFilteredStaffTypes(searchingStaffTypes);
    };

    return (
        <div className={cx('wrapper') + ' grid'}>
            {/* Header */}
            <div className={cx('header')}>
                <div className={cx('search-wrapper')}>
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Tìm kiếm loại nhân viên..."
                        onInput={handleSearchInput}
                    />
                </div>
                <button
                    className={cx('add-button')}
                    onClick={() => {
                        sShowModal.set({
                            isShowing: true,
                            data: null, 
                        });
                    }}
                >
                    Thêm
                </button>
            </div>
            <div className={'row ' + cx('list-header')}>
                <p className="col c-3 m-4 l-3">Mã loại</p>
                <p className="col c-9 m-8 l-9">Tên loại nhân viên</p>
            </div>

            {/* List Items */}
            {filteredStaffTypes.map((item, index) => (
                <StaffTypeItem
                    key={index}
                    data={item}
                    onClick={() => {
                        sShowModal.set({
                            isShowing: true,
                            data: item,
                        });
                    }}
                />
            ))}

            {/* Modal */}
            <sShowModal.HardWrap>
                {(value) => {
                    if (value.isShowing) {
                        return (
                            <div id="chi-tiet-loai-nhan-vien" className="modal">
                                <a
                                    href="/danh-sach-loai-nhan-vien#"
                                    className="modal-overlay"
                                    // onClick={() => sShowModal.set({ isShowing: false })}
                                ></a>
                                <StaffTypeModal
                                    className="modal-body"
                                    type="staff-type-detail"
                                    data={value.data}
                                />
                            </div>
                        );
                    }
                    return null;
                }}
            </sShowModal.HardWrap>
        </div>
    );
}

export default StaffTypeList;
