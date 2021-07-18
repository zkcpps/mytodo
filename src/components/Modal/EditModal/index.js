import  React, { useRef } from 'react';
import './index.css'
import {changeTime} from "../../../libs/common";
import Modal from "../index";

function EditModel(props) {

    const { isShowModal, data, changeData } = props;
    const contentRef = useRef();
    const checkRef = useRef();

    const changeDatas = () => {
        const content = contentRef.current.value;
        const checked = checkRef.current.checked;
        if(content === '') {  return ; }
        const newData = {
            id: data.id,
            content: content,
            completed: checked
        }
        changeData(newData)

    }

    return (
        <Modal
            isShowModal={ isShowModal }
            modalTitle="编辑事件"
        >
            <p>时间：{ changeTime(data.id) }</p>
            <p>内容：
                <div className="modal-tarea">
                     <textarea
                         ref={ contentRef }
                         defaultValue={data.content}
                     />
                </div>
            </p>
            <p>状态：
                <input
                    ref={ checkRef }
                    type="checkbox"
                    defaultChecked={data.completed}
                   />
            </p>
            <button
                className="btn btn-primary confirm-btn"
                onClick={ changeDatas }
            >
                修改
            </button>
        </Modal>
    );
}

export default EditModel;