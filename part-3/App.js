const App = () => (
    <div className="row">
        <Person name="Juan Estrada" age={32} hobbies={["web development", "cooking", "Vr"]}/>
        <Person name="John" age={20} hobbies={["surfing", "biking", "football"]}/>
        <Person name="Jane" age={17} hobbies={["photography", "camping", "crafting"]}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));