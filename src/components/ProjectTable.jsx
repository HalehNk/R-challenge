/* eslint-disable react/prop-types */

function ProjectTable({ projects }) {
  return (
    <div className="w-full mx-auto">
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="px-4 pt-2 pb-1">#</th>
            <th className="px-4 pt-2 pb-1">عنوان پروژه</th>
            <th className="px-4 pt-2 pb-1">بودجه</th>
            <th className="px-4 pt-2 pb-1">ددلاین</th>
            <th className="px-4 pt-2 pb-1">وضعیت</th>
            <th className="px-4 pt-2 pb-1">عملیات</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((item) => (
            <tr key={item._id} className="bg-white border-b-2">
              <td className="px-4 pt-3 pb-2">{item._id}</td>
              <td className="px-4 pt-3 pb-2">{item.title}</td>
              <td className="px-4 pt-3 pb-2">{item.budget}</td>
              <td className="px-4 pt-3 pb-2">
                {new Date(item.deadline).toLocaleDateString("fa-IR")}
              </td>
              <td className="px-4 pt-3 pb-2">
                <span
                  className={`rounded-full px-2 pt-1 text-white ${
                    item.status === "OPEN" ? "bg-lime-500" : "bg-pink-400"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 pt-3 pb-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
