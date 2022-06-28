const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button disabled={props.disabled} onClick={props.onClick}>What Should I Do</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option</p>}
            {props.options.map((value, index) => (
                <Option
                    key={index}
                    option={value}
                    handleDeleteOption={props.handleDeleteOption} />
            ))}
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={() => props.handleDeleteOption(props.option)}>remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)

        this.handleOnSubmit = this.handleOnSubmit.bind(this)

        this.state = {
            error: undefined
        }
    }

    handleOnSubmit(event) {
        event.preventDefault()
        const option = event.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        event.target.elements.option.value = ''
    }

    clearError() {
        this.setState(() => ({ error: undefined }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input id="option" name="option" placeholder="Add Option" />
                    <button>Add Option</button>
                </form>
                {this.state.error && <p>{this.state.error} <span onClick={this.clearError}>Clear</span></p>}
            </div>
        )
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)

        this.state = {
            options: props.options
        }
    }

    /*
        Lifecycle Methods Documentation:
        https://reactjs.org/docs/react-component.html
    */
    // gets called when component is mounted to the DOM
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) this.setState(() => ({ options: options }))
        } catch (error) {
            console.error('Error happened when trying to read from localStorage')
        }
    }

    // fires after component updates like state or prop value change
    // this method has access to previous props or previous states
    componentDidUpdate(previousProps, previousState) {
        if (previousState.options.length === this.state.options.length) return
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((previous) =>  ({ options: previous.options.filter(option => option !== optionToRemove)}))
    }

    handlePick() {
        const randomNumber = Math.random();
        const processNumber = randomNumber * this.state.options.length;
        const floorNumber = Math.floor(processNumber);

        const option = this.state.options[floorNumber];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) return 'Enter valid to add item'
        if (this.state.options.indexOf(option) > -1) return 'Item already exists in list'

        this.setState((previous) => ({ options: previous.options.concat([option]) }))
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action disabled={this.state.options.length == 0} onClick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"))