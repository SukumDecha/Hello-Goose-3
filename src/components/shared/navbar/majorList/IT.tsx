import { Link } from "react-router-dom";

type Props = {
  setSidebarOpen: (b: boolean) => void
  setFaculty: (s: string) => void
  setMajor: (s: string) => void
  setCategory: (s: string) => void
}

const IT = (props:Props) => {
  const onClickHandler = (faculty: string, major: string, category: string) => {
    props.setFaculty(faculty)
    props.setMajor(major)
    props.setCategory(category)
    props.setSidebarOpen(false)
  }
  return (
    <div className="flex flex-col ml-10 text-xl gap-5 mt-4">
      <Link to={"/category"} onClick={()=>onClickHandler("SIT", "IT", "ALL")}>IT</Link>
      <Link to={"/category"} onClick={()=>onClickHandler("SIT", "DSI", "ALL")}>DSI</Link>
      <Link to={"/category"} onClick={()=>onClickHandler("SIT", "CS", "ALL")}>CS</Link>
    </div>
  );
};

export default IT;
