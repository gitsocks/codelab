import React from 'react'

class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const option = event.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        event.target.elements.option.value = ''
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleOnSubmit}>
                    <input className="add-option__input" id="option" name="option" placeholder="Add Option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption