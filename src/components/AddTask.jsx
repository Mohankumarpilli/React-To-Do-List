export const AddTask = ({ tasks, handleEdit, handleDelete }) => {
  
  return (
    <>
      {tasks.map((ele, index) => {
        return <li key={index} id={index} className="flex justify-between bg-white rounded-2xl h-10 items-center pl-4 pr-4 m-5">  
          <p className="font-bold">{ele}</p>
          <div className="flex flex-row gap-5 ml-5">
            <button className="bg-green-700 w-15 text-white rounded-2xl" onClick={(e) => handleEdit(e)}>edit</button>
            <button className="bg-red-700 w-15 text-white rounded-2xl" onClick={(e) => handleDelete(e)}>delete</button>
          </div>
        </li>
      })}
    </>
  );
};