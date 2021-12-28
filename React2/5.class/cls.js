class Heading extends React.Component{
    render(){
        return <h1>Favorite Cars</h1>
    }
}
class Car extends React.Component{
    render(){
        return<div className="grid-container">
        {
            this.props.products.map((value,index)=>{
                return <div key={value+index}>{value}</div>
            })
        }</div>
    }
}
ReactDOM.render(<div>
    <Heading/>
    <Car products={['Audi','Benz','Lamborgini','BMW']}/>
</div>,document.getElementById("part"))