class Checking extends React.Component{
    state={
        islogin:false
    }
    render(){
        let{islogin}=this.state;
        let data=null;
        if(islogin){
            data=<div>
                <h1>You are successfully Loged IN</h1>
                </div>
        }
        else{
            data=<div>
                <h1>Loged out GOOD BYE</h1>
            </div>
        }
        return<div>
            {data}
            <button onClick={()=>{this.change()}}>{islogin ? "Log Out":"Log In"}</button>
        </div>
    }
    change(){
        this.setState({
            islogin: !this.state.islogin
        })
    }
}
ReactDOM.render(<Checking/>,document.getElementById('part'))