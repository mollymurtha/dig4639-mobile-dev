class Adder{
    constructor(props){
        this.props = props;
    }

    sum(){
        return (this.props.a + this.props.b);
    }

    render() {
        return `<div><p>The sum of 5 and 10 is 15</p></div>`;
    }

    module.exports = Adder;