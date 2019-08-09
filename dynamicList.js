import React from 'react';

class Dynamico extends React.Component{

  constructor(){
    super();
    this.state={
      object :[
        {
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        }
      ]
    } 
  }

 adding(){
   const data = document.getElementsByClassName('myInput')[0].value;
   console.log(data);

   const data1 = document.getElementsByClassName('myInput1')[0].value;
   console.log(data1);

   const data2 = document.getElementsByClassName('myInput2')[0].value;
   console.log(data2);

   const data3 = document.getElementsByClassName('myInput3')[0].value;
   console.log(data3);


   const object2 = {
     id : data,
     description : data1,
     deadline : data2,
     done : data3
   }
   console.log(object2)

   this.setState({
     object : this.state.object.concat(object2)
   })

 }


removing(index){
  console.log(index)
  const datas = this.state.object.filter(v => v.id !== index);
  console.log(index)
  this.setState({
    object : datas
  })
  
}


render(){
  

  return(
    <div>
      {this.state.object.map((dataIt,index)=>
      <div >
        <div>
        {dataIt.id} {index}<br />
        {dataIt.description}<br />
        {dataIt.deadline}<br />
        <button type='button' onClick={()=> this.removing(dataIt.id)} key={index}>removing</button>
      </div><br/>
      </div>)}

      <button type='button' onClick={this.adding.bind(this)}>adding</button>
        <input type="text" className="myInput" placeholder='ID' />
        <input type="text" className="myInput1" placeholder='description' />
        <input type="text" className="myInput2" placeholder='deadline' />
        <input type="text" className="myInput3" placeholder='done' />

    </div>
  )
}
}



export default Dynamico

