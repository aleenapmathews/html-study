import { useRef, useState } from "react"
import styles from "./form.module.css"
function Form(){

    const formRef=useRef()

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    function handleSubmitBadMethod(e){
        e.preventDefault()
        const form=document.getElementById('form')
        const name=form.name.value
        const email=form.email.value
    }
    function handleSubmitUseRef(e){
        e.preventDefault()
        const form=formRef.current
        const name=form.name.value
        const email=form.email.value
    }

    function onNameChange(e){
        setName(e.target.value)
    }
    function onEmailChange(e){
        setEmail(e.target.value)
    }
    function handleSubmitUseState(e){
        e.preventDefault()
        console.log(name,email)
    }
    return (
        
        <form className={styles["form"]} onSubmit={handleSubmitUseState}>
            <input type="text"  name="name" placeholder="enter your name" required value={name} onChange={onNameChange}/>
            <input type="email" name="email" placeholder="enter your email" required value={email} onChange={onEmailChange}/>
            <button type="submit">Submit</button>
        </form>
        
    )
}



export default Form


// <form ref={formRef} id="form" className={styles["form"]} onSubmit={handleSubmitUseRef}>
//     <input  type="text" id="name" name="name" placeholder="enter your name" required/>
//     <input type="email" name="email" placeholder="enter your email" required/>
//     <button type="submit">Submit</button>
// </form>