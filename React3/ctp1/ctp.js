class Parent extends React.Component{
    state={
        text:""
    }
    render(){
        return <div>
            <h1>This is Parent</h1>
            <h2>Child: {this.state.text}</h2>
            <Child action={this.getmsg.bind(this)}/>
        </div>
    }
    getmsg(data){
        this.setState({
            text:data
        })
    }
}

function Child(props){
    let info="I have your DNA";
    return<div>
        <h3>This is Child Component</h3>
        <button onClick={()=>{props.action(info)}}>Send message to Parent</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('part'))