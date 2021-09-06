import { AddChild } from './AddChild';
import { useState } from 'react'
import { ChildList } from './ChildList'
import { ChildFilter } from './ChildFilter'

const Family = ({ children }) => {
    const [filterText, setFilterText] = useState('');
    const [savedChildren, setSavedChildren] = useState(children);
    const [filteredChildren, setFilteredChildren] = useState(savedChildren);

    const childUpdatedHandler = (newChild) => {
        console.log('Adding new child')
        console.log(newChild);
        setSavedChildren((currentChildren) => [...currentChildren, newChild])
        filterChangedHandler(filterText);
    }

    const filterChangedHandler = (newFilterText) => {
        console.log(`User trying to set filter to ${newFilterText}`)
        setFilterText(newFilterText);
        if (newFilterText.length === 0) {
            setFilteredChildren(savedChildren)
        } else {
            setFilteredChildren(savedChildren.filter(c => 
                c.name.toLocaleLowerCase().indexOf(newFilterText.toLocaleLowerCase()) !== -1)
            )
        }
    }

    return (
        <div>
            <ChildFilter filterChanged={filterChangedHandler} initialFilterValue={filterText} />

            <ChildList children={filteredChildren} />

            <AddChild childUpdated={childUpdatedHandler} />
        </div>
    );
}

export { Family }