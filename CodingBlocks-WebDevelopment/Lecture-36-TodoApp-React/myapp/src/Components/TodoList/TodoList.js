import React, {useState} from 'react'
// import styles from './styles.css';

const TodoList = (props) => {
  const [isChecked, setChecked] = useState(false);
  const onDivClick = (ev) => {
    if(ev.target.className == 'check') {
      setChecked(!isChecked);
    }    
    console.log(ev)
  }
  const checkedStyle = {
    textDecoration: 'line-through'
  }
  const s2 = {
    textDecoration: 'none'
  }
  return (
    <div onClick={onDivClick}>
      <li>
        <input className = "check" type = "checkbox" ></input>
        <span style = {isChecked ? checkedStyle: s2 }>yoyo</span>
        <button className='upKey'>⬆</button>
        <button className='downKey'>⬇</button>
        <button className='delete'>❌</button>
      </li>
    </div>
  )
}

export default TodoList