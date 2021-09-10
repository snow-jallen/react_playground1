import {Child} from './Child'

const ChildList = ({children, removeChild}) => {

    if (children.length === 0)
        return <div>No matches found.</div>;

    return (
        <div className="container">
            <div className="row">
                {children.map((c) => <Child child={c} key={c.id} removeChild={removeChild} />)}
            </div>
        </div>
    );
}

export { ChildList }