import './Input.css';

const Input = props => {
    return <div className='input'>
<label htmlFor="">{props.label}</label>
<input type="text" />
    </div>
}

export default Input