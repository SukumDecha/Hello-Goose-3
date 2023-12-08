import { Link } from "react-router-dom"

type Props = {
  setSidebarOpen: (b: boolean) => void
  setFaculty: (s: string) => void
  setMajor: (s: string) => void
  setCategory: (s: string) => void

}

const Engineering = (props: Props) => {
  const onClickHandler = (faculty: string, major: string, category: string) => {
    props.setFaculty(faculty)
    props.setMajor(major)
    props.setCategory(category)
    props.setSidebarOpen(false)
  }
  return (
<div className='flex flex-col ml-10 text-xl gap-5 mr-8 mt-4'>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Chemical Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Civil Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Computer Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Control System and Instrumentation Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Electrical Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Electronics and telecommunications Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>environmental Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Production Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Mechanical Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Tool and materials Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Food Engineering</Link>
    <Link to={"/category"} onClick={()=>onClickHandler("ENGINEER", "ALL", "ALL")}>Biological Engineering</Link>
  </div>
  )
}

export default Engineering