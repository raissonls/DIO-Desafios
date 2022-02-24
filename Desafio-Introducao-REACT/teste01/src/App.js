import Button from './Button';
import './App.css';

const hascostumers = true;
const clientname = 'Raisson Leal Silva'

const listcustumer = [
  
{
  id:1,
  name:'Raisson Leal Silva', 
  skills:['fullstack','HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'NODE', 'SQL']
},
{
  id:2,
  name:'Joyce Adriane Marques Vieira',
  skills:['Front-end','HTML5', 'CSS3', 'JAVASCRIPT']
},
{
  id:3,
  name:'Raissa Leal Silva',
  skills:['medicina']
},
{
  id:4,
  name:'Rubenita Oliveira Leal',
  skills:[]
},
{
  id:5,
  name:'Luiz carlos',
  skills:[]
}
]

const ShowEvent = (e) =>{
    console.log('ola');
    console.log(e);
}
const HandleChange = (e) =>{
  const {value} = e.target;
    console.log(value);
}





function App() {

  const RenderShowHistory = () => {
    return(
      <div>
        <p>Clique no botão abaixo para acessar o historico dos clientes</p>
        <Button onClick = {() => alert('historico do cliente')} name= "Historico dos Clientes"/>
      </div>
    )

  }

  const RenderAddCustumer = () => {
    return (
      <div>
        <p>Clique no botão abaixo para cadastrar o cliente clientes</p>
        <Button onClick = {() => alert('cadastrar cliente')} name= "Cadastro de clientes"/>
      </div>
    )
  }

  const ShowCustumer = ()=>{
    if(!hascostumers) return null

    return(
      <div>
        <h1>Nome do Cliente: {clientname}</h1>
      </div>
    )
  }

  const RenderCustumers = (custumer, index) =>{
    return(
      <div key={`custumer - ${index}`}>
        <li  >{custumer.name}</li>
        {custumer.skills.map(RenderSkills)}
      </div>
    )
  }
  const RenderSkills = (skills, index) =>{
    return(
        <li style={ {marginLeft: '30px'}} key={`skill - ${index}`}>{skills}</li>
    )
  }



  return (
    <div className="App">
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D</p>
      <br/>
      {hascostumers ? RenderShowHistory() : RenderAddCustumer()}
      {ShowCustumer()}

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D</p>
      <br/>
      <div>
        <ul>
        {listcustumer.map(RenderCustumers)}
        </ul>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D</p>
      <br/>
      <div>
        <p>clique no botão a baixo</p>
        <Button onClick={ShowEvent} name={'Clique Aqui'}/>
      </div>
      <div>
        <p>Altere o valor</p>
        <input onChange={HandleChange}/>
      </div>

    </div>
  );
}

export default App;
