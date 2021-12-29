class Dad extends React.Component{
    state={
        data:"",
        girl:""
    }
    render(){
        return <div>
            <h1>Dad: What you guys want?</h1>
            <h2>Boy:{this.state.data} </h2>
            <h2>Girl: {this.state.girl}</h2>
            <Children action={this.fun.bind(this)}/>
        </div>
    }
    fun(bmsg,gmsg){
        this.setState(
            {data:bmsg, girl:gmsg}
        )
    }
}

function Children(props){
    let boy="I want Car";
    let girl="I want Barbie"
    return<div>
        <button onClick={()=>{props.action(boy,girl)}}>What we want</button>
    </div>
}
ReactDOM.render(<Dad/>,document.getElementById('part'))