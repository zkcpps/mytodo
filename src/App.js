import  React, { Fragment, useState, useCallback, useEffect }  from 'react';
import './App.css';

import Header from './components/Header/index'
import AddInput from './components/AddInput/index'
import List from './components/List/index'
import Summary from './components/Summary/index'
import ViewModal from './components/Modal/ViewModal/index'
import EditModal from './components/Modal/EditModal/index'



function App() {
  const [isInputShow,setIsInputShow] = useState(false);
  const [list, setList] = useState([])
  const [checkData, setCheckData] = useState({})
  const [isViewModalShow, setViewModalShow] = useState(false)
  const [isEditModalShow, setEditModalShow] = useState(false)


    useEffect(()=> {
        const sessionList = JSON.parse(localStorage.getItem("list")|| '[]' );
        setList(sessionList);
    },[])

    useEffect(()=> {
        localStorage.setItem("list",JSON.stringify(list));
    },[list])

  const addContent = useCallback((data) => {
      if(data.length === 0 ) return ;
      const newData = {
          id: new Date().getTime(),
          content: data,
          completed: false
      }
      setList((list)=>[...list,newData]);
      setIsInputShow(false);
  },[]);

    const viewModelShow = useCallback((id) => {
         const data = list.filter(item => item.id === id)[0];
         setCheckData(data);
         setViewModalShow(true)
    },[list])


    const editModelShow = useCallback((id) => {
        const data = list.filter(item => item.id === id)[0];
        setCheckData(data);
        setEditModalShow(true)
    },[list])



    const changeStatus = (id, status) => {
        const newList = list.map(item => {
            if(item.id === id) {
                item.completed = status;
            }
            return item;
        })
       setList(newList);
    };

    const changeList = useCallback((data) => {
          const newList = list.map(item => {
              if(item.id === data.id) {
                  item = data;
              }
              return item;
          });
        setList(newList)
        setEditModalShow(false)
    },[list]);

    const deleteDataById = useCallback((id) => {
        setList((list)=> list.filter(item => item.id !== id))
    },[list]);

    return (
      <Fragment>
        <Header title="待办列表" openInput={ ()=> setIsInputShow(!isInputShow)}/>
        <AddInput isShow={isInputShow} add={addContent}/>
          <List
              data={list}
              view={viewModelShow}
              edit={editModelShow}
              deleteData={deleteDataById}
              changeCompleted={changeStatus}/>
          <Summary data={list} />
          <ViewModal isShowModal={ isViewModalShow } data={checkData} closeModal={()=> setViewModalShow(false)}/>
          <EditModal isShowModal={ isEditModalShow } changeData={changeList} data={checkData} />
          
      </Fragment>
  );
}

export default App;
