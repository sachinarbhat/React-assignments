let url= 'https://jsonplaceholder.typicode.com/posts'

async function fetchPosts(){
    let response = await fetch(url)
    let data = await response.json();
let result= data.map((value,index)=>{
    return value.title
})
let head="These are the Titles of API"
let title=
        result.map((value,index)=>{
             return React.createElement('li',{key:value+index},value)
        })
    let all= React.createElement('div',null,head,title)
    ReactDOM.render(all,document.getElementById('part'))
}


fetchPosts();