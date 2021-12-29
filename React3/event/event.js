function Fun(){
    const data=()=>{
        alert("It is Function event")
    }
    return(
        <div>
            <button onClick={()=>data()}>Click me</button>
        </div>
    )
}

class Cls extends React.Component{
    render(){
    return<div>
         <button onClick={()=>{this.info()}}>Click me</button>
    </div>
    }
    info(){
        alert("It is Class event")
    }
}

ReactDOM.render(
    <div>
        <Fun/>
        <Cls/>
    </div>,document.getElementById('part')
)