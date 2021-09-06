import {useState} from 'react'

const ChildFilter = ({filterChanged, initialFilterValue}) => {
    const [filterValue, setFilterValue] = useState(initialFilterValue);
    const changeHandler = (event) => {
        console.log(`Setting filter to ${event.target.value}`)
        setFilterValue(event.target.value);
        filterChanged(event.target.value)
    }

    return (
    <div>
        Filter Name: <input type='text' onChange={changeHandler} value={filterValue} />
    </div>);
}

export {ChildFilter}