import { useState } from "react";
import "./App.css";
import ProjectHeader from "./components/ProjectHeader";
import ProjectTable from "./components/ProjectTable";
import "./index.css";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 3,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "CLOSED",
    category: {
      id: 4,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  const [open, setOpen] = useState(false);
  const projectsClone = projects.slice();
  const [showData, setShowData] = useState(projectsClone);
  const [activeTab, setActiveTab] = useState("all");

  function handleOpen() {
    setOpen((o) => !o);
  }

  const tabsFunc = (btnStatus) => {
    switch (btnStatus) {
      case "open": {
        const filteredOpenProjects = projectsClone.filter(
          (item) => item.status.toLowerCase() === "open"
        );
        setShowData(filteredOpenProjects);
        break;
      }
      case "closed": {
        const filteredClosedProjects = projectsClone.filter(
          (item) => item.status.toLowerCase() === "closed"
        );
        setShowData(filteredClosedProjects);
        break;
      }
      default: {
        setShowData(projectsClone);
      }
    }
    // if (btnStatus === "all") {
    //   setShowData(projectsClone);
    // } else if (btnStatus === "open") {
    //   const filteredOpenProjects = projectsClone.filter(
    //     (item) => item.status.toLowerCase() === btnStatus
    //   );
    //   setShowData(filteredOpenProjects);
    // } else {
    //   const filteredClosedProjects = projectsClone.filter(
    //     (item) => item.status.toLowerCase() === btnStatus
    //   );
    //   setShowData(filteredClosedProjects);
    // }
  };

  const handleBtnClick = (btnStatus) => {
    tabsFunc(btnStatus);
    setActiveTab(btnStatus);
  };

  return (
    <div dir="rtl">
      {!open ? (
        <div>
          <p className="font-bold text-lg text-right text-gray-500">
            لیست پروژه ها
          </p>
          <button
            className="bg-blue-600 text-white text-xl py-3 px-12 rounded-lg mt-52"
            onClick={() => handleOpen()}
          >
            نشان دادن پروژه ها
          </button>
        </div>
      ) : (
        <div>
          <ProjectHeader>
            <div className="flex items-center justify-center">
              <p className="text-base font-light text-slate-600">
                وضعیت &nbsp;
              </p>
              <div className="bg-white flex font-medium rounded-lg p-2 gap-5">
                <button
                  onClick={() => handleBtnClick("all")}
                  className={`rounded-md px-3 py-1 ${
                    activeTab === "all" ? "bg-blue-600 text-white " : ""
                  }`}
                >
                  همه
                </button>
                <button
                  onClick={() => handleBtnClick("open")}
                  className={`rounded-md px-3 py-1 ${
                    activeTab === "open" ? "bg-blue-600 text-white " : ""
                  }`}
                >
                  باز
                </button>
                <button
                  onClick={() => handleBtnClick("closed")}
                  className={`rounded-md px-3 py-1 ${
                    activeTab === "closed" ? "bg-blue-600 text-white " : ""
                  }`}
                >
                  بسته
                </button>
              </div>
            </div>
          </ProjectHeader>
          <ProjectTable projects={showData} />
        </div>
      )}
    </div>
  );
}

export default App;
