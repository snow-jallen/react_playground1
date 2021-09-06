import { ChildCounter } from './ChildCounter';
import { AddChild } from './AddChild';
import { useState } from 'react'
import { Child } from './Child'
import {ChildFilter} from './ChildFilter'

const Family = ({ children }) => {
    const [childCount, setChildCount] = useState(1);
    const [childFilter, setChildFilter] = useState('M');

    const incrementChildHandler = () => {
        setChildCount(childCount + 1);
        console.log(`updating childCount from ${childCount}`)
    }

    const childUpdatedHandler = (newChild) => {
        console.log('Adding new child')
        console.log(newChild);
    }

    const filterChangedHandler = (filterValue) => {
        console.log(`User trying to set filter to ${filterValue}`)
        setChildFilter(filterValue);
    }


    return (
        <div>
            <ChildFilter filterChanged={filterChangedHandler} initialFilterValue={childFilter}/>
            <Child child={children[0]} />
            <Child child={children[1]} />
            <Child child={children[2]} />
            <Child child={children[3]} />
            <Child child={children[4]} />
            <Child child={children[5]} />
            <Child child={children[6]} />
            <Child child={children[7]} />
            <Child child={children[8]} />
            <ChildCounter childCount={childCount} incrementChildHandler={incrementChildHandler} />
            <AddChild childUpdated={childUpdatedHandler} />
        </div>
    );
}

export { Family }