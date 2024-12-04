import classNames from 'classnames/bind';
import styles from './StaffTypeInformation.module.scss';

const cx = classNames.bind(styles);

function StaffTypeInformation({ className, data = undefined, isEditing = false }) {
    return (
        <div className={cx('wrapper') + ' ' + className}>
            {data === undefined && (
                <>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Mã loại nhân viên: </span>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Tên loại nhân viên: </span>
                            <input type="text" />
                        </div>
                    </div>
                </>
            )}
            {data !== undefined && (
                <>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Mã loại nhân viên: </span>
                            <input
                                type="text"
                                value={data.id}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Tên loại nhân viên: </span>
                            <input
                                type="text"
                                value={data.staffTypeText}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default StaffTypeInformation;
