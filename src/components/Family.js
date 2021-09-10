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

        setSavedChildren((currentChildren) => {
            const saved = [...currentChildren, newChild]
            filterChangedHandler(filterText, saved)
            return saved
        })
        //can't filter here because setSavedChildren may not have run yet.
    }

    const filterChangedHandler = (newFilterText, children = savedChildren) => {
        console.log(`User trying to set filter to ${newFilterText}`)
        setFilterText(newFilterText);
        if (newFilterText.length === 0) {
            setFilteredChildren(children)
        } else {
            setFilteredChildren(children.filter(c => 
                c.name.toLocaleLowerCase().indexOf(newFilterText.toLocaleLowerCase()) !== -1)
            )
        }
    }

    const removeChild = (childToRemove) => {
        setSavedChildren((currentChildren) => {
            const children = currentChildren.filter(c => c.id !== childToRemove.id)
            filterChangedHandler(filterText, children)
            return children
        })
    }

    return (
        <div>
            <AddChild childUpdated={childUpdatedHandler} />
            <ChildFilter filterChanged={filterChangedHandler} initialFilterValue={filterText} />
            <ChildList children={filteredChildren} removeChild={removeChild} />
        </div>
    );
}

export { Family }