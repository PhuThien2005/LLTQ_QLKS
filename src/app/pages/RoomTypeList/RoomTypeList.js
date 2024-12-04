import classNames from 'classnames/bind';
import styles from './RoomTypeList.module.scss';
import { SearchIcon } from '../../components/Icons';
import { useEffect, useState } from 'react';
import { sCurrentPage } from '../../layouts/DefaultLayout/Sidebar/sidebarStore';
import { get } from '../../modules/lib/httpHandle';
import { signify } from 'react-signify';
import { removeVietnameseTones } from '../../modules/lib/removeVietnameseTones';
import RoomTypeItem from './partials/RoomTypeItem';
import RoomModal from '../../components/RoomTypeModal';

const cx = classNames.bind(styles);

const sShowModal = signify({
    isShowing: false,
    data: undefined,
});

let roomtypes = [];

function RoomTypeList() {
    const [filteredRoomTypes, setFilteredRoomTypes] = useState([]);

    useEffect(() => {
        sCurrentPage.set('/danh-sach-loai-phong');

        get(
            'room-types/',
            (data) => {
                roomtypes = data;
                setFilteredRoomTypes(data);
            },
            () => {
                alert('Không tìm thấy danh sách loại phòng!');
            },
        );
    }, []);

    const handleSearchInput = (e) => {
        const value = e.target.value.toLowerCase();
        const searchingRoomTypes = roomtypes.filter((item) => {
            return (
                item.id.includes(value) ||
                removeVietnameseTones(item.roomTypeText).toLowerCase().includes(value) ||
                item.size.toString().includes(value) ||
                removeVietnameseTones(item.bedDetailText).toLowerCase().includes(value) ||
                item.price.toString().includes(value)
            );
        });
        setFilteredRoomTypes(searchingRoomTypes);
    };

    return (
        <div className={cx('wrapper') + ' grid'}>
            <div className={cx('header')}>
                <div className={cx('search-wrapper')}>
                    <SearchIcon />
                    <input type="text" placeholder="Tìm kiếm loại phòng..." onInput={handleSearchInput} />
                </div>
            </div>
            <div className={'row ' + cx('list-header')}>
                <p className="col c-3 m-3 l-3">Tên loại phòng</p>
                <p className="col c-2 m-2 l-2">Kích thước (m²)</p>
                <p className="col c-4 m-4 l-4">Chi tiết giường</p>
                <p className="col c-3 m-3 l-3">Giá (VNĐ)</p>
            </div>
            {filteredRoomTypes.map((item, index) => (
                <RoomTypeItem
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
            <sShowModal.HardWrap>
                {(value) => {
                    if (value.isShowing) {
                        return (
                            <div id="chi-tiet-loai-phong" className="modal">
                                <a href="/danh-sach-loai-phong#" className="modal-overlay"></a>
                                <RoomModal className="modal-body" type="room-detail" data={value.data} />
                            </div>
                        );
                    }
                    return null;
                }}
            </sShowModal.HardWrap>
        </div>
    );
}

export default RoomTypeList;
