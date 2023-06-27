const Person = (props) => {
    return (
    <div className="col">
        <div className="card h-100">
            <img src="https://img.freepik.com/free-icon/user_318-563642.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name.length > 8 ? props.name.slice(0,6) : props.name}, {props.age}</h5>
                <div className="card-text">
                    <p className="m-0"><strong>Hobbies:</strong></p>
                    <ul>{props.hobbies.map(el => <li>{el}</li>)}</ul>
                    <div className="text-center">{props.age > 18 ? <a href="https://www.vote.org/" className="btn btn-primary w-100">Go vote!</a> : "You must be 18."}</div>
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted">Learn some information about this person</small>
            </div>
        </div>
    </div>
)}