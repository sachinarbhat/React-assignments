function Todo() {
    const [info, setinfo] = React.useState(['Breakfast at 8am', 'Lunch at 1:30pm','Watching movie at 6pm'])
    const [val, setval] = React.useState("")
    let createvalue = (event) => {
        setval(event.target.value)
    }
    console.log(val);
    let create = (data) => {
        if (data != "") {
            info.push(data)
            setinfo(
                [...info]
            )
            setval("")
        }
    }


    let remove = (id) => {
        if (id >= 0) {
            info.splice(id, 1)
            setinfo(
                [...info]
            )
        }
    }


    return <div>
        <h1>ToDo List</h1>
    <table className="table table-striped table-dark table-hover">
        <thead className="table-light">
            <br />
            <div class="input-group mb-3">
                <input className="form-control" type="text" value={val} onChange={(event) => { createvalue(event) }} placeholder="Enter your task here......" />
                <button className="btn btn-info" onClick={() => { create(val) }}>Create</button>
            </div>
        </thead>
        <tbody>
            {
                info.map((item, index) => {
                    return <tr className="table-active">
                        <td key={index}>{item}</td>
                        <td><input className="form-check-input" type="checkbox" value="Done" id="flexCheckDefault" /></td>
                        <td><button className="btn btn-danger" onClick={() => { remove(index) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" /></svg>
                        </button>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>

}

ReactDOM.render(<Todo />, document.getElementById('part'))