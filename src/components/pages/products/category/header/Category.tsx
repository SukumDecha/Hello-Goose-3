import Dropdown from "../../../../shared/dropdown/Dropdown";

type Props = {
  faculty: string;
  setFaculty: (s: string) => void;
  major: string;
  setMajor: (s: string) => void;
  category: string;
  setCategory: (s: string) => void;
  filter: string;
  setFilter: (s: string) => void;
};

const major = new Map([
  ["ALL", ["ALL"]],
  ["SIT", ["ALL", "IT", "DSI", "CS"]],
  ["ENGINEER", ["ALL"]],
  ["FiET", ["ALL", "CSM", "PPT", "IT"]],
]);

const Category = (props: Props) => {
  return (
    <div className="flex justify-center font-margarine">
      <div className="flex justify-between items-center bg-white/60 rounded-3xl w-[80%] p-4">
        <Dropdown
          name={"FACULTY"}
          type="faculty"
          selectList={["ALL", "SIT", "ENGINEER", "FiET"]}
          selected={props.faculty}
          setSelect={props.setFaculty}
        />
        <Dropdown
          name={"MAJOR"}
          type="major"
          selectList={major.get(props.faculty)!}
          selected={props.major}
          setSelect={props.setMajor}
        />
        <Dropdown
          name={"CATEGORY"}
          type="category"
          selectList={["ALL", "cloth", "electronic", "book"]}
          selected={props.category}
          setSelect={props.setCategory}
        />
        <Dropdown
          name={"FILTER"}
          type="filter"
          selectList={["ID", "Highest Price", "Lowest Price"]}
          selected={props.filter}
          setSelect={props.setFilter}
        />
      </div>
    </div>
  );
};

export default Category;
