import { useParams,useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs"
import style from './Listas.module.css'
function Project() {
  let { id } = useParams()
  const [project, setProject] = useState([])
  const [services, setServices] = useState([])
  useEffect(() => { setTimeout( () => fetch(`http://localhost:5000/historico/${id}`,{
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
        fetch('http://localhost:5000/historico',{
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
        fetch('http://localhost:5000/historico',{
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
    fetch(`http://localhost:5000/historico/${id}`, {
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
              name={project.name}
              texto={project.texto}
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
  function createPost(project) {fetch('http://localhost:5000/historico', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(project)})
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
      <button onClick={subButton}>{text}</button>
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
function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={submit} >
      <ul>
        <li><Textarea text="Texto" name="texto" placeholder="O que está acontecendo?" handleOnChange={handleChange} value={project.texto}/></li>
      </ul>
      <SubmitButton handleOnChange={handleChange} id="SB" text={btnText} />
    </form>
  )
}
function ProjectCard({ id, handleRemove,texto }) {
    const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
    }
    // Estilo do corpo
    return (
        <div>
        <br />
        <BsThreeDots onClick={remove}/>
        <div>
        <p className={style.ListItem}>{texto} </p>  
        </div>
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