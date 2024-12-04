import classNames from 'classnames/bind';
import styles from './StaffTypeItem.module.scss';

const cx = classNames.bind(styles);

function StaffTypeItem({ className, data, onClick }) {
    return (
        <a
            href="#chi-tiet-loai-nhan-vien"
            className={className + ' ' + cx('wrapper') + ' row'}
            onClick={onClick}
        >
            <p className="col c-3 m-4 l-3">{data.id}</p>
            <p className="col c-9 m-8 l-9">{data.staffTypeText}</p>
        </a>
    );
}

export default StaffTypeItem;
