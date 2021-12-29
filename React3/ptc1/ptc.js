function Humanparent(){
    return<div>
        <h1>Parent to Child Relationship</h1> 
        <Humanchild parents="Monkey" children="Human"/> 
    </div>
}

function Humanchild(props){
    return<div>
        <h1>Parent:{props.parents}</h1>
        <h1>Child:{props.children}</h1>
    </div>
}

ReactDOM.render(<Humanparent/>,document.getElementById('part'))