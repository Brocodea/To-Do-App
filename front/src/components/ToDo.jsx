import axios from 'axios';
import React from 'react'
import { CiEdit } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from '../utils/constant';

const ToDo = ({text, id, setUpdateUI, setShowPopup, setPopupContent}) => {

const deleteTodo=()=>{
    axios.delete(`${baseURL}/delete/${id}`)
    .then((res)=>{
        console.log(res.data);
        setUpdateUI((prevState)=>!prevState);
    });
};

const updateToDo=()=>{
    setPopupContent({text, id});
    setShowPopup(true);
}


    return (
        <div className='toDo'>
        {text}
            <div className='icons'>
                <CiEdit className='icon' onClick={updateToDo} />
                <RxCross1 className='icon' onClick={deleteTodo}/>
            </div>

        </div>
    )
}

export default ToDo
