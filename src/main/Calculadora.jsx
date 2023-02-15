import React, { Component } from "react";

import Button from "../components/Button.jsx";
import Display from "../components/Display.jsx";

const inicialEstado = {
    displayValue: "",
    limpaDisplayValue: false,
    operacao: null,
    values: [0, 0],
    current: 0
}

export default class Calculadora extends Component {

    state = { ...inicialEstado };
    constructor(props) {
        super(props);
        this.limpar = this.limpaDisplay.bind(this);
        this.numero = this.adicinarDigito.bind(this);
        this.calculo = this.operationCalculadora.bind(this);
    }

    limpaDisplay() {
        this.setState({ ...inicialEstado });
    }

    operationCalculadora(operacao) {
        if (this.state.current === 0) {
            this.setState({ operacao, current: 1, limpaDisplayValue: true })
        } else {
            
            const equals = operacao === "=";
            const currentOp = this.state.operacao;
            const values = [...this.state.values];

            try {

                values[0] = eval(`${values[0]} ${currentOp} ${values[1]}`);
            }
            catch (e) {
                // values[0] = this.state.values[0];
            }
            values[1] = 0;
            this.setState({
                displayValue: values[0],
                operacao: equals ? null : operacao,
                current: equals ? 0 : 1,
                limpaDisplayValue: !equals,
                values
            })

        }
    }
    adicinarDigito(numeroDigito) {
        if (numeroDigito === "." && this.state.displayValue.includes(".")) {
            return
        }
                
        const clearDisplay = this.state.displayValue === "0"
            || this.state.limpaDisplayValue
        const correntVal = clearDisplay ? "" : this.state.displayValue;
       
        const displayValue = numeroDigito === "<=" ? correntVal.slice(0,-1) : correntVal + numeroDigito
       
        this.setState({ displayValue, limpaDisplayValue: false })

        if (numeroDigito !== "." ) {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue
            this.setState({ values });

        }
    }


    render() {

        return (

            <div className="w-50 bg-dark d-flex flex-wrap justify-content-center py-3 px-1 rounded">
                <Display value={this.state.displayValue} />
                <Button numero="7" click={this.numero} />
                <Button numero="8" click={this.numero} />
                <Button numero="9" click={this.numero} />
                <Button numero="6" click={this.numero} />
                <Button numero="5" click={this.numero} />
                <Button numero="4" click={this.numero} />
                <Button numero="3" click={this.numero} />
                <Button numero="2" click={this.numero} />
                <Button numero="1" click={this.numero} />
                <Button numero="0" click={this.numero} />
                <Button numero="-" click={this.calculo} />
                <Button numero="+" click={this.calculo} />
                <Button numero="/" click={this.calculo} />
                <Button numero="*" click={this.calculo} />
                <Button numero="." click={this.numero} />
                <Button numero="=" click={this.calculo} />
                <Button numero="<=" click={this.numero} />
                <Button numero="AC" click={this.limpar} />
            </div>
        )
    }


}
