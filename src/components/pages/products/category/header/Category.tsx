import Filter from "./Filter";

const Category = () => {
  return (
    <div className="flex justify-center font-margarine">
      <div className="flex justify-between items-center bg-white/60 rounded-3xl w-[80%] p-4">
        <Filter name="FACULTY: " option="SIT" />
        <Filter name="MAJOR: " option="all" />
        <Filter name="" option="category" />
        <Filter name="" option="filter" />
      </div>
    </div>
  );
};

export default Category;

