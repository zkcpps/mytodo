import  React  from 'react';
import './index.css'
import  Modal from '../index'
import {changeTime} from "../../../libs/common";

function ViewModal(props) {

    const { isShowModal, data, closeModal } = props;

    return (
        <Modal
            isShowModal={ isShowModal }
            modalTitle="查看事件"
        >
            <p>时间：{ changeTime(data.id) }</p>
            <p>内容：{ data.content }</p>
            <p>状态：{ data.completed ? '完成': '未完成'}</p>
            <button
              className="btn btn-primary confirm-btn"
              onClick={ closeModal }
            >
                确定
            </button>
        </Modal>
    );
}

export default ViewModal;