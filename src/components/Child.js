const Child = ({ child }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{child.name}</h2>
                <div className="card-text">
                    <div>{child.dob.toLocaleString('en-US')}</div>
                    <div>{child.gender}</div>
                </div>
            </div>
        </div>
    );
}

export { Child }