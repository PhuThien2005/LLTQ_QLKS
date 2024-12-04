import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '../Button';
import BedDetailInformation from '../BedDetailInformation';
import { CancelIcon, CheckIcon, EditIcon } from '../Icons';
import styles from './AddBedDetailModal.module.scss'; 

const cx = classNames.bind(styles);

function AddBedDetailModal({ onClose, onSave, onClick , className, data}) {
    const [newBedDetail, setNewBedDetail] = useState({
        id: '',
        bedDetailText: '',
    });

    const handleSave = () => {
        onSave(newBedDetail);
        onClose();
    };

    return (
        <a
            href="#chi-tiet-giuong"
            className={className + ' ' + cx('wrapper') + ' row'}
            onClick={onClick}
        >
        <div className="add-bed-detail-modal">
            <h2>Thêm Chi Tiết Giường Mới</h2>
            <form>
                <label>
                    Mã giường:
                    <input
                        type="text"
                        value={newBedDetail.id}
                        onChange={(e) => setNewBedDetail({ ...newBedDetail, id: e.target.value })}
                    />
                </label>
                <label>
                    Chi tiết giường:
                    <textarea
                        value={newBedDetail.bedDetailText}
                        onChange={(e) => setNewBedDetail({ ...newBedDetail, bedDetailText: e.target.value })}
                    ></textarea>
                </label>
                <button type="button" onClick={handleSave}>
                    Lưu
                </button>
                <button type="button" onClick={onClose}>
                    Hủy
                </button>
            </form>
        </div>
        </a>
    );
}

export default AddBedDetailModal;

