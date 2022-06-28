import React from 'react'

import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    /*
        Lifecycle Methods Documentation:
        https://reactjs.org/docs/react-component.html
    */
    // gets called when component is mounted to the DOM
    componentDidMount = () => {
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
    componentDidUpdate = (previousProps, previousState) => {
        if (previousState.options.length === this.state.options.length) return
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((previous) => ({ options: previous.options.filter(option => option !== optionToRemove) }))
    }

    handlePick = () => {
        const randomNumber = Math.random();
        const processNumber = randomNumber * this.state.options.length;
        const floorNumber = Math.floor(processNumber);

        const option = this.state.options[floorNumber];
        this.setState(() => ({ selectedOption: option }))
    }

    handleModalClose = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleAddOption = (option) => {
        if (!option) return 'Enter valid to add item'
        if (this.state.options.indexOf(option) > -1) return 'Item already exists in list'

        this.setState((previous) => ({ options: previous.options.concat([option]) }))
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action disabled={this.state.options.length == 0} onClick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleModalClose={this.handleModalClose} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp