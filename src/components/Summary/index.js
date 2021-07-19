import  React  from 'react';
import './index.css'

function Summary(props) {
  const {data} = props;
    return (
        <div className="summary-wrap">
             <div className="summary-item">
               <span>代办</span>
               <span>{data.length}</span>
             </div>
             <div className="summary-item">
               <span>已办</span>
               <span>{data.filter(item => item.completed).length}</span>
             </div>
        </div>
    );
}

export default Summary;