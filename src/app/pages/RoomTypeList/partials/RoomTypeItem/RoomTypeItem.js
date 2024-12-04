import classNames from 'classnames/bind';
import styles from './RoomTypeItem.module.scss';

const cx = classNames.bind(styles);

function RoomTypeItem({ className, data, onClick }) {
    return (
        <a
            href="#chi-tiet-loai-phong"
            className={className + ' ' + cx('wrapper') + ' row'}
            onClick={onClick}
        >
            <p className="col c-3 m-3 l-3">{data.roomTypeText}</p>
            <p className="col c-2 m-2 l-2">{data.size} m²</p>
            <p className="col c-4 m-4 l-4">{data.bedDetailText}</p>
            <p className="col c-3 m-3 l-3">{data.price.toLocaleString('de-DE') + 'đ'}</p>
        </a>
    );
}

export default RoomTypeItem;
