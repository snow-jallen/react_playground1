const Child = ({ child, removeChild }) => {
    
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-4">
            <div className="card h-100" >
                <div className="card-body">
                    <h5 className="card-title">{child.name}</h5>
                    <div className="card-text">{child.birthdate.toLocaleString('en-US', { dateStyle: 'medium' })}</div>
                    <div className="card-text">{child.gender}</div>
                </div>
                
                <button className="btn btn-danger" onClick={()=>removeChild(child)}>❌</button>                
            </div>
        </div>
    );
}

export { Child }