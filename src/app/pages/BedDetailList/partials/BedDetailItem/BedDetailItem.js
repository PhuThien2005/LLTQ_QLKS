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

            <p className="col c-2 m-2 l-2">{data.id}</p>
            <p className="col c-10 m-10 l-10">{data.bedDetailText}</p>
        </a>
    );
}

export default BedDetailItem;
