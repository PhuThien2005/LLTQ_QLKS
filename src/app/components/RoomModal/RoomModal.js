import classNames from 'classnames/bind';
import styles from './roomModal.module.scss';
import { RoomSizeIcon, BedIcon } from '../Icons';
import '../../styles/grid.scss';
import { TYPE_CHECKIN, TYPE_CHECKOUT, TYPE_ROOM_TYPE } from '../../pages/Home/partials/Room';

const cx = classNames.bind(styles);

let mainHeading;

function RoomModal({ className, type }) {
    if (type === TYPE_ROOM_TYPE) {
        mainHeading = 'ĐẶT PHÒNG';
    } else if (type === TYPE_CHECKIN) {
        mainHeading = 'CHECK-IN';
    } else if (type === TYPE_CHECKOUT) {
        mainHeading = 'CHECK-OUT';
    }
    return (
        <div className={cx('wrapper') + ' grid ' + className}>
            <h2 className={cx('main-heading')}>{mainHeading}</h2>
            <div className={cx('room-wrapper')}>
                <div className={cx('room-image')} />
                <div className={cx('room-body')}>
                    <div>
                        <p className={cx('room-name')}>Phòng Executive Suite</p>
                        <div className={cx('room-body-container')}>
                            <span className={cx('room-size')}>
                                <RoomSizeIcon className={cx('icon')} />
                                60m²
                            </span>
                            <span className={cx('bed-detail')}>
                                <BedIcon className={cx('icon')} />1 giường sofa đơn, 1 giường king size
                            </span>
                        </div>
                    </div>
                    <span className={cx('room-price')}>Giá phòng: 1,125,000đ</span>
                </div>
            </div>

            <h3 className={cx('heading')}>Thông tin đặt phòng</h3>
            <div className={cx('reservation-information')}>
                <div className="row">
                    <div className="col c-8 m-8 l-8">
                        <select name="room" required="">
                            <option value="" disabled="" selected="">
                                Chọn Phòng
                            </option>
                            <option value="101">Phòng 101</option>
                            <option value="102">Phòng 102</option>
                        </select>
                    </div>
                    <p className={cx('room-state-wrapper') + ' col c-3 m-3 l-3'}>
                        Tình trạng:
                        <span className={cx('room-state')}>Còn trống</span>
                    </p>
                </div>
                <div className="row">
                    <div className="col c-6 m-6 l-6">
                        <span>Ngày nhận phòng: </span>
                        <input type="date" />
                    </div>
                    <div className="col c-6 m-6 l-6">
                        <span>Ngày trả phòng: </span>
                        <input type="date" />
                    </div>
                </div>
            </div>

            <h3 className={cx('heading')}>Thông tin người đặt</h3>
            <div className={cx('booker-information')}>
                <div className="row">
                    <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                        <span>CCCD: </span>
                        <input type="text" />
                    </div>
                    <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                        <span>Họ tên: </span>
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                        <span>Điện thoại: </span>
                        <input type="tel" />
                    </div>
                    <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                        <span>Email: </span>
                        <input type="email" />
                    </div>
                </div>
                <div className="row">
                    <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                        <span>Ngày sinh: </span>
                        <input type="date" />
                    </div>
                    <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                        <span>Giới tính: </span>
                        <select name="room" required="">
                            <option value="" disabled="" selected="">
                                Chọn giới tính
                            </option>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                        <span>Địa chỉ: </span>
                        <input type="text" />
                    </div>
                </div>
                <button className={cx('btn')}>Đặt phòng</button>
                <div className="clear" />
            </div>
        </div>
    );
}

export default RoomModal;