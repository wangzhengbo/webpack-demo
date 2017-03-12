import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LoginControl, { Page } from '../../components/conditional-rendering'
import NumberList from '../../components/NumberList'
import Forms, { EssayForm, FlavorForm, Reservation } from '../../components/Forms'
import Calculator from '../../components/Lifting'
import CustomTextInput, { CustomTextInput2 } from '../../components/Refs'
import NameForm from '../../components/UncontrolledComponents'
import CounterButton, { WordAdder } from '../../components/optimizing-performance'
import TickTock from '../../components/Mixins'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            propName: "aaa"
        };
        setTimeout(() => this.setState({propName: "bbb"}), 2000);
    }
    render() {
        return (
            <div className="app">
                <Header />
                <LoginControl />
                <Page />
                <NumberList numbers={[1, 2, 3, 4, 5, 10]} />
                <Forms />
                <EssayForm />
                <FlavorForm />
                <Reservation />
                <Calculator />
                <CustomTextInput />
                <NameForm />
                <CustomTextInput2 propName={this.state.propName} />
                <CounterButton />
                <WordAdder />
                <TickTock />
                <Footer />
            </div>
        )
    }
}



export default App