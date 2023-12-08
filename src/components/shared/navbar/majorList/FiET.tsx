import { Link } from "react-router-dom"

type Props = {
  setSidebarOpen: (b: boolean) => void
  setFaculty: (s: string) => void
  setMajor: (s: string) => void
  setCategory: (s: string) => void

}

const FiET = (props: Props) => {
  const onClickHandler = (faculty: string, major: string, category: string) => {
    props.setFaculty(faculty)
    props.setMajor(major)
    props.setCategory(category)
    props.setSidebarOpen(false)
  }
  return (
    <div className='flex flex-col ml-10 text-xl gap-5 mt-4'>
        <Link to={"/category"} onClick={()=>onClickHandler("FiET", "CSM", "ALL")}>Computer science-multimedia</Link>
        <Link to={"/category"} onClick={()=>onClickHandler("FiET", "PPT", "ALL")}>Packaging and printing technology</Link>
        <Link to={"/category"} onClick={()=>onClickHandler("FiET", "IT", "ALL")}>Industrial technology</Link>
    </div>
  )
}

export default FiET