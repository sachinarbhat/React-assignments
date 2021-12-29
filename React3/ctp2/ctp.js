class Mom  extends React.Component{
    state={
        info:""
    }
    render(){
        return <div>
            <h1>Mom: Are you hungry</h1>
            <h2>Child:{this.state.info}</h2>
            <Baby action={this.getinfo.bind(this)}/>
        </div>
    }
    getinfo(msg){
        this.setState(
            {info:msg}
        )
    }
}

function Baby(props){
    let info="I want Pizza to eat";
    return<div>
        <button onClick={()=>{props.action(info)}}>What you want?</button>
    </div>
}
ReactDOM.render(<Mom/>,document.getElementById('part'))