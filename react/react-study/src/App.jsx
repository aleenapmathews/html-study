import Form from "./components/Form"
import styles from "./app.module.css"
import Users from "./components/Users"
function App() {

  return (
    <div className={styles["body"]}>
      <Form/>
      <Users/>
    </div>    
  )
}

export default App
