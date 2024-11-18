/* eslint-disable react/prop-types */

function ProjectHeader({ children }) {
  return (
    <div className="flex justify-between mb-12">
      <p className="font-bold text-lg text-right text-black">لیست پروژه ها</p>
      <div className="flex">
        {children}
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ProjectHeader;
