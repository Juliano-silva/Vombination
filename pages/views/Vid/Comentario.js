import { useParams,useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs"
function Projects () {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setTimeout(
      () =>
        fetch('http://localhost:5000/comentario',{
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
        fetch('http://localhost:5000/comentario',{
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
    fetch(`http://localhost:5000/comentario/${id}`, {
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
  function createPost(project) {fetch('http://localhost:5000/comentario', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(project)})
      .then((resp) => resp.json())
      .then(() => {history.push('/Home')})}
  return (
    <div >
      <ProjectForm handleSubmit={createPost} btnText="Enviar" />
    </div>
  )
}
function subButton(){
  document.location.reload(true);
}
function SubmitButton({ text }) {
  return (
    <div>
      <button  onClick={subButton}>{text}</button>
    </div>
  )
}
function Textarea({name, placeholder, handleOnChange, value}){
  return(
    <div>
    <textarea name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></textarea>
    </div>
  )
}
function Data(name,handleOnChange, value){
  return(
    <div>
      <input type="datetime" name={name} id={name} onChange={handleOnChange} value={value} />
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
        <li><Textarea text="Texto" name="texto" placeholder="O que está acontecendo?" handleOnChange={handleChange} value={project.texto}/></li>
        <li><Data name="deta" handleChange={handleChange} value={project.deta=Horário}/></li>
      </ul>
      <SubmitButton handleOnChange={handleChange} id="SB" text={btnText} />
    </form>
  )
}
function ProjectCard({ id, handleRemove,texto,deta,color }) {
    const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
    }
    return (
      <div>
       <h1>{deta}</h1>
        <BsThreeDots onClick={remove}/>
        <div>
        <p>{texto} </p>  
        </div>
      </div>
    )
  }
export default function Comentario(){
    return(
        <div>
            <NewProject/>
            <Projects/>
        </div> 
    )
}