interface WelcomeProps {
    name: string
}


const Welcome = ({name}: WelcomeProps) => {
  return (
    <h1>
        Welcome, {name}
    </h1>
  )
}

export default Welcome