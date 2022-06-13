import { useParams,useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import style from './Blog.module.css'
import styled from 'styled-components'
function Project() {
  let { id } = useParams()
  const [project, setProject] = useState([])
  const [services, setServices] = useState([])
  useEffect(() => { setTimeout( () => fetch(`http://localhost:5000/projects/${id}`,{
          method: 'GET',headers: {'Content-Type': 'application/json',},})
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
            setServices(data.services)
          }),0,)}, [id])
  function removeService(cost) {
    const projectUpdated = project
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
      .then((resp) => resp.json())}
  return (
    <><div>{services.map((service) => (
                  <div
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  ></div>
                ))}
            </div>
    </>
  )
}
function Projects () {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setTimeout(
      () =>
        fetch('http://localhost:5000/projects',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjects(data)
          })
    )
  }, [])
  useEffect(() => {
    setTimeout(
      () =>
        fetch('http://localhost:5000/projects',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjects(data)
          })
    )
  }, [])
  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))
      })
  }
  return (
    <div>
      <div >
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              bio={project.bio}
              name={project.name}
              texto={project.texto}
              img={project.img}
              titulo={project.titulo}
              color={project.color}
              deta={project.deta}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
      </div>
    </div>
  )
}
function NewProject() {
  const history = useHistory()
  function createPost(project) {fetch('http://localhost:5000/projects', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(project)})
      .then((resp) => resp.json())
      .then(() => {history.push('/Home')})}
  return (
    <div >
      <ProjectForm handleSubmit={createPost} btnText="Enviar" />
      <br />
    </div>
  )
}
function subButton(){
  document.location.reload(true);
}
function SubmitButton({ text }) {
  return (
    <div>
      <button  className={style.btn} onClick={subButton}>{text}</button>
    </div>
  )
}
function Textarea({name, placeholder, handleOnChange, value}){
  return(
    <div>
    <textarea name={name} id={name} className={style.Textareas} placeholder={placeholder} onChange={handleOnChange} value={value}></textarea>
    </div>
  )
}
function Título({name, placeholder, handleOnChange, value}){
  return(
    <div>
    <textarea name={name} id={name} className={style.Textareas} placeholder={placeholder} onChange={handleOnChange} value={value}></textarea>
    </div>
  )
}
function Data(name,handleOnChange, value){
  return(
    <div>
      <input className={style.data} type="datetime" name={name} id={name} onChange={handleOnChange} value={value} />
    </div>
  )
}
function Color({name,handleOnChange,value,type}){
  return(
    <div>
      <input className={style.Cores} type={type} name={name} id={name} onChange={handleOnChange} value={value} />
      <br />
    </div>
  )
}
function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }
  var date = new Date
  var day = date.getDate()
  var hour = date.getHours()
  var min = date.getMinutes()
  var seg = date.getSeconds()
  var Horário =  "Dia:"+day+" "+"Hora: "+hour+":"+min+":"+seg 
  return (
    <form onSubmit={submit} >
      <ul>
        <li><Textarea text="Texto" name="texto" placeholder="O que está Pensado?" handleOnChange={handleChange} value={project.texto}/></li>
        <li><Título name="titulo" id="titulo" placeholder="Digite o Nome do projeto:"handleOnChange={handleChange} value={project.titulo} /></li>
        <li><h4>Escolha a cor de sua caixa</h4></li>
        <li><Data  name="deta" handleChange={handleChange} value={project.deta=Horário}/></li>
        <li><Color type="color" name="color" handleOnChange={handleChange} value={project.color}/></li>
      </ul>
      <SubmitButton handleOnChange={handleChange} id="SB" text={btnText} />
    </form>
  )
}
export const CorpoBK = styled.div`background:${(props) => props.color}`;
function ProjectCard({ id, handleRemove,texto,deta,color,titulo }) {
    const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
    }
    // Estilo do corpo
    var vermelho = `${color}`;
    return (
      <div>
        <CorpoBK className={style.Corpo} color={vermelho}>
        <br />
       <h1 className={style.deta}>{deta}</h1>
       <h1 className={style.Titulo}>{titulo}</h1>
        <AiOutlineClose className={style.remove} onClick={remove}/>
        <div className={style.TextoT}>
        <p>{texto} </p>  
        </div>
        </CorpoBK>
        <br />
      </div>
    )
  }
export default function Api(){
    return(
        <div>
            <NewProject/>
            <Projects/>
        </div> 
    )
}