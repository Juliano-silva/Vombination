import { useParams,useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs"
import Image from 'next/image'
import Autor from '../../Img/Autor.png'
import style from './Vid.module.css'
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
      <ProjectForm handleSubmit={createPost} btnText="Publicar" />
    </div>
  )
}
function subButton(){
  document.location.reload(true);
}
function SubmitButton({ text }) {
  return (
    <div>
      <button className={style.BtnCom}  onClick={subButton}>{text}</button>
    </div>
  )
}
function Textarea({name, placeholder, handleOnChange, value}){
  return(
    <div>
    <textarea className={style.Comentario} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></textarea>
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
        <li><Textarea text="Texto" name="texto" placeholder="Adicione um comentário..." handleOnChange={handleChange} value={project.texto}/></li>
      </ul>
      <SubmitButton handleOnChange={handleChange} id="SB" text={btnText} />
    </form>
  )
}
function ProjectCard({texto}) {
    return (
      <div>
        <div>
        <p className={style.comeTexto}>{texto} </p>  
        </div>
      </div>
    )
  }
export default function Comentario(){
    return(
        <div>
          <hr className={style.hr}/>
           <div className={style.project}>
           <NewProject/>
            <Projects/>
           </div>
        </div> 
    )
}