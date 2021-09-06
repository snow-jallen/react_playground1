import {Child} from './Child'

const ChildList = ({children}) => {

    if (children.length === 0)
        return <div>No matches found.</div>;

    return (
        <div className="container">
            <div className="row">
                {children.map((c) => <Child child={c} key={c.id} />)}
            </div>
        </div>
    );
}

export { ChildList }