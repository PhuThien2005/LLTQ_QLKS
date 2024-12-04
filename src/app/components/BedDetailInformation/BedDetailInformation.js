import classNames from 'classnames/bind';
import styles from './BedDetailInformation.module.scss';

const cx = classNames.bind(styles);

function BedDetailInformation({ className, data = undefined, isEditing = false }) {
    return (
        <div className={cx('wrapper') + ' ' + className}>
            {data === undefined && (
                <>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Mã giường: </span>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Chi tiết giường: </span>
                            <input type="text" />
                        </div>
                    </div>
                </>
            )}
            {data !== undefined && (
                <>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Mã giường: </span>
                            <input
                                type="text"
                                value={data.id}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className={cx('input-with-label') + ' col c-12 m-12 l-12'}>
                            <span>Chi tiết giường: </span>
                            <input
                                type="text"
                                value={data.bedDetailText}
                                {...{ disabled: !isEditing }}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default BedDetailInformation;
