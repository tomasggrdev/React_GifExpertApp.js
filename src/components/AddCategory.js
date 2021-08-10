import PropTypes from 'prop-types'
import { useState } from 'react'

export const AddCategory = ({setCategory,categories}) => {
    const [inputValue,setInputValue] = useState("")
    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2) {
        setCategory( (categories) => [inputValue,...categories])
        setInputValue("")
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="  search..."
                type="search"
                value={inputValue}
                onChange={handleInputChange}
            ></input>
            <button onClick={handleSubmit}>Submit</button>
            <h2 className={"animate__flash"}>{categories[0]}</h2>
        </form>
    )
}

AddCategory.propTypes ={
    setCategory: PropTypes.func.isRequired
}

