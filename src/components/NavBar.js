

const Navbar = () => {
    return (
      <nav style={styles.container}>
            <h1> toDos App</h1>
            <ul>
                <li>Home</li>
                <li>toDos</li>
            </ul>
      </nav>
    )
  }

  const styles = {
    container: {
        display: "flex",
        justifyContent: "space-around",
        border: "solid red 2px"
    }
  };
  
  export default Navbar