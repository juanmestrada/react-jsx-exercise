const Tweet = (props) => (
    <div className="tweet-container">
        <div className="header">
            <span>{props.name}</span>
            <span>@{props.username}</span>
            <span>·</span>
            <span>{props.date}</span>
        </div>
        <div className="message">
            <p>{props.message}</p>
        </div>
    </div>
)