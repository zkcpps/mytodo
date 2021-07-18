import  React ,{ Fragment,useRef } from 'react';
import './index.css';

function AddInput(props) {

    const { isShow,add } = props;

    const contentRef = useRef();

    const handleSumbit = () => {
        //console.log(contentRef.current.value)
        add(contentRef.current.value);
    }

    return (
        <Fragment>
        {
         isShow &&
         <div className="input-group">
            <input ref={contentRef} type="text" className="form-control" placeholder="请输入代办事项" />
            <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={handleSumbit}>添加</button>
            </span>
          </div>
        }
        </Fragment>
    );
}

export default AddInput;