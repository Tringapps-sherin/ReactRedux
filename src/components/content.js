import React,{useState}  from 'react'
import { useDispatch } from 'react-redux'
import { updateName } from '../store/counterSlice'

export default function Content() {
  const dispatch = useDispatch()
  const[sendData,setSendData] = useState('');

  function handleSubmit(){
    if(sendData!==''){
      dispatch(updateName(sendData))
    setSendData('');
    }
    
  }
  function onChangetext(event){
    setSendData(event.target.value);
  }
  return (
    <div className='content'>
        <label> NAME </label><input placeholder='Enter your name' value={sendData} onChange={onChangetext} type="text" />
        <button  onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}
