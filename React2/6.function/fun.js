function Heading(){
    return <h1>Welcome</h1>
}
function Greeting(props){
    return <div className="column">
      <div className="card">
        <h3>{props.bmain}{props.lmain}{props.dmain}{props.main}</h3>
        <p>{props.binfo}{props.linfo}{props.dinfo}{props.info}</p>
      </div>
    </div>
  
}

ReactDOM.render(
    <div className="row">
 <Heading/>
 <Greeting bmain="Good Morning" binfo="Your BreakFast is Ready"/>
 <Greeting lmain="Good After Noon" linfo="Your Lunch is Ready"/>
 <Greeting dmain="Good Evening" dinfo="Your Dinner is Ready"/>
 <Greeting main="Good Night" info="Have a Nice SLEEP !!"/>
    </div>
   ,document.getElementById("part")
)