console.log("Hello React 👋!");

// JSX - Javascript XML
// A javascript syntax extension. Provided by React. 

const app = {
    title: "🧠 Indecision App",
    subtitle: "Let's not make a descision",
    options: []
}

const handleFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        render()
    }
}

const removeAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNumber = Math.random();
    const processNumber = randomNumber * app.options.length;
    const floorNumber = Math.floor(processNumber);

    const option = app.options[floorNumber];
    alert(option);
}

const root = document.getElementById("root");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((value, index) => <li key={index}>{value}</li>)
                }
            </ol>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, root);
}

render()