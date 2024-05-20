import './NumberContainer.css'
import PropTypes from 'prop-types'
function NumberContainer({text, onClick}){
    return(
        <>
            <button className='number-button' onClick={onClick}>
                <h1>{text}</h1>
            </button>
        </>
    )
}

NumberContainer.PropTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default NumberContainer;