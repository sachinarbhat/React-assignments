class Dad extends React.Component{
    state={
        data:""
    }
    render(){
        return <div>
            <h1>Dad: What you want?</h1>
            <h2>Boy:{this.state.data} </h2>
            <Boy action={this.fun.bind(this)}/>
        </div>
    }
    fun(msg){
        this.setState(
            {data:msg}
        )
    }
}

function Boy(props){
    let ms="I want 2000 as pocket money";
    return<div>
        <button onClick={()=>{props.action(ms)}}>What I want</button>
    </div>
}
ReactDOM.render(<Dad/>,document.getElementById('part'))