
interface WelcomeLayoutProps {
  children: React.ReactNode
}

const WelcomeLayout = ({children}: WelcomeLayoutProps) => {
  return (
    <div className="p-5">
      {children}
    </div>
  )
}

export default WelcomeLayout