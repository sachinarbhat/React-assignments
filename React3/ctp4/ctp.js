class Hen extends React.Component{
    state={
        sound:""
    }
    render(){
        return <div>
            <h1>Hen: CLUCK CLUCK CLUCK</h1>
            <h2>Chick:  {this.state.sound}</h2>
            <Chick action={this.fun.bind(this)}/>
        </div>
    }
    fun(msg){
        this.setState(
            {sound:msg}
        )
    }
}

function Chick(props){
    let msg="cluck";
    return<div>
        <button onClick={()=>{props.action(msg)}}>How Chicken sounds</button>
    </div>
}
ReactDOM.render(<Hen/>,document.getElementById('part'))