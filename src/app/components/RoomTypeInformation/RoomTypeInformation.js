import classNames from 'classnames/bind';
import styles from './RoomTypeInformation.module.scss';

const cx = classNames.bind(styles);

function DetailInformation({ className, data = undefined, isEditing = false }) {
    return (
        <div className={cx('wrapper') + ' ' + className}>
            {data === undefined && (
                <>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                        <span>Mã loại phòng: </span>
                            <input type="text" />
                        </div>
                        <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                            <span>Tên loại phòng: </span>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                            <span>Kích thước: </span>
                            <input type="number" />
                        </div>
                        <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                            <span>Giường: </span>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Giá: </span>
                            <input type="number" />
                        </div>
                    </div>
                </>
            )}
            {data !== undefined && (
                <>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                            <span>Mã loại phòng: </span>
                            <input
                                type="text"
                                value={data.id}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                        <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                            <span>Tên loại phòng: </span>
                            <input
                                type="text"
                                value={data.roomTypeText}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                            <span>Kích thước: </span>
                            <input
                                type="number"
                                value={data.size}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                        <div className={cx('input-with-label') + ' col c-6 m-6 l-6'}>
                            <span>Giường: </span>
                            <input
                                type="text"
                                value={data.bedDetailText}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Giá: </span>
                            <input
                                type="number"
                                value={data.price}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default DetailInformation;

