import { Child } from './Child'

const Family = ({ children }) => {
    return (
        <div>
            <Child child={children[0]} />
            <Child child={children[1]} />
            <Child child={children[2]} />
            <Child child={children[3]} />
        </div>
    );
}

export { Family }