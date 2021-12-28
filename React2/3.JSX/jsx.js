const heading=<h1>Fighters</h1>

let fighter=['MikeTyson','MuhammadAli','McConor','Khabib']

let fighters=<div className="flex-container">
    {
        fighter.map((value,index)=>{
            return  <div key={value+index} className="flex-item">{value}</div>
        })
    }
</div>

let all= React.createElement('div',null,heading,fighters)
ReactDOM.render(all,document.getElementById('part'))