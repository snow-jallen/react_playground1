import { ChildCounter } from './ChildCounter';
import { AddChild } from './AddChild';
import { useState } from 'react'
import { Child } from './Child'
import { ChildFilter } from './ChildFilter'

const Family = ({ children }) => {
    const [childCount, setChildCount] = useState(1);
    const [childFilter, setChildFilter] = useState('M');
    const [savedChildren, setSavedChildren] = useState(children);
    const [filteredChildren, setFilteredChildren] = useState(savedChildren);

    const incrementChildHandler = () => {
        setChildCount(childCount + 1);
        console.log(`updating childCount from ${childCount}`)
    }

    const childUpdatedHandler = (newChild) => {
        console.log('Adding new child')
        console.log(newChild);
        setSavedChildren((currentChildren) => [...currentChildren, newChild])
        filterChangedHandler(childFilter);
    }

    const filterChangedHandler = (filterValue) => {
        console.log(`User trying to set filter to ${filterValue}`)
        setChildFilter(filterValue);
        if (filterValue.length === 0) {
            setFilteredChildren(savedChildren)
        } else {
            setFilteredChildren(savedChildren.filter(c => c.gender.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) !== -1))
        }
    }

    let displayedChildren = <div>No matches found for filter {childFilter}</div>;
    if (filteredChildren.length !== 0) {
        displayedChildren = filteredChildren.map((c) => <Child child={c} key={c.id} />)
    }

    return (
        <div>
            <ChildFilter filterChanged={filterChangedHandler} initialFilterValue={childFilter} />

            <div className="container">
                <div className="row">
                    {displayedChildren}
                </div>
            </div>

            <ChildCounter childCount={childCount} incrementChildHandler={incrementChildHandler} />
            <AddChild childUpdated={childUpdatedHandler} />
        </div>
    );
}

export { Family }