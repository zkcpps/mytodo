import  React  from 'react';
import './index.css'
import NoData from '../NoData/index'

function List(props) {
    const { data, view, edit, changeCompleted,deleteData } = props;


    return (
        <div className="list-wrap">
            <ul className="list-group">
            {
                data.map(item =>{
                    return <li className="list-group-item" key={item.id}>
                        <div className="check-box">
                            <input
                               type="checkbox"
                               checked={item.completed}
                               onChange={(e)=>changeCompleted(item.id,e.target.checked)}
                            />
                        </div>
                        <span
                            style={{textDecoration: item.completed ? 'line-through': 'none'}}
                            className="left-content"
                            title={item.content}
                        >{item.content}</span>
                        <span className="right-button">
                            <button className="btn btn-primary" type="button" onClick={()=>view(item.id)}>查看</button>&nbsp;
                            <button className="btn btn-warning" type="button" onClick={()=>edit(item.id)}>修改</button>&nbsp;
                            <button className="btn btn-danger"  type="button" onClick={()=>deleteData(item.id)}>删除</button>
                        </span>
                    </li>
                })
            }
            </ul>
            {
                data.length === 0 && (
                    <NoData/>
                )
            }
        </div>
    );
}

export default List;