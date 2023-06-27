const App = () => (
    <div>
        <Tweet name="Juan" username="jestrada" date="6-27-2023" message="This is my first tweet!"/>
        <Tweet name="Benji" username="benjithedog" date="6-27-2023" message="Im a dog. Bark!"/>
        <Tweet name="Drogo" username="drogothecat" date="6-27-2023" message="Im a cat. (judges you silently)"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));