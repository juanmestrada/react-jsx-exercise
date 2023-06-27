const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Juan"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));