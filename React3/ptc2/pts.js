class Parent extends React.Component{
state={
    Lshout:"Roarrrrrrrr",
    Cshout:"Roar"
}
render(){
    return <div>
        <h1>Roaring Style</h1>
        <Child Lion={this.state.Lshout} Cub={this.state.Cshout}/>
    </div>
}
}

function Child(props){
    return(
        <div>
            <h2>Lion:{props.Lion}</h2>
            <h3>Cub:{props.Cub}</h3>
        </div>
    )
}

ReactDOM.render(<Parent/>,document.getElementById('part'))