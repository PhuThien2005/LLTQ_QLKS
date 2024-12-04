import classNames from 'classnames/bind';
import styles from './BedDetailItem.module.scss';

const cx = classNames.bind(styles);

function BedDetailItem({ className, data, onClick }) {
    return (
        <a
            href="#chi-tiet-giuong"
            className={className + ' ' + cx('wrapper') + ' row'}
            onClick={onClick}
        >
            <p className="col c-3 m-4 l-3">{data.id}</p>
            <p className="col c-9 m-8 l-9">{data.bedDetailText}</p>
        </a>
    );
}

export default BedDetailItem;
