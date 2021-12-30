function App(){
    const [fighters, setfighters] = React.useState(['Mike Tyson', 'Kabib','Mohamadh Ali','Mc Conor'])
    const [user, setuser] = React.useState({
        userid:"sachin@gmail.com",
        password:"hello"
    })
    return<div>
        <h1>UseState Array</h1>
        {
                fighters.map((player,id)=>{
                    return<li key={id}>{player}</li>
                })    
        }
        <h1>UseState Object</h1>
        <p>User ID: {user.userid}</p>
        <p>Password: {user.password}</p>
    </div>
}

ReactDOM.render(<App/>,document.getElementById('part'))