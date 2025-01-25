import React from "react";
import FeaturedIcon from "./assets/featured.png"; 
import JobTitleIcon from "./assets/location.png"; 
import CompanyIcon from "./assets/time.png"; 
import RightArrowIcon from "./assets/applyIcon.png"; 

const Featured = () => {
  const jobs = [
    { id: 1, tag: "Promoted", title: "Seattle, USA (Remote)", company: "1 day ago  |  22 applicants" },
    { id: 2, tag: "Promoted", title: "Seattle, USA (Remote)", company: "1 day ago  |  22 applicants" },
    { id: 3, tag: "Promoted", title: "Seattle, USA (Remote)", company: "1 day ago  |  22 applicants" },
    { id: 4, tag: "Promoted", title: "Seattle, USA (Remote)", company: "1 day ago  |  22 applicants" },
    { id: 5, tag: "Promoted", title: "Seattle, USA (Remote)", company: "1 day ago  |  22 applicants" },
  ];

  return (
    <div className="bg-secondary py-6">
      <h2 className="text-dark text-xl mb-4">
        Featured Jobs 
        <span 
    className="text-primary pl-2 text-[14px] underline decoration-primary underline-offset-4"
    href="#"
  >See Featured Jobs</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-lg rounded-lg px-4 py-2 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between text-[10px]">
              <span>{job.tag}</span>
            </div>

            <div className="flex items-center mt-2">
              <div className="p-2 text-white mr-2">
                <img src={FeaturedIcon} alt="Featured Icon" />
              </div>
              <div>
                <p className="text-sm font-medium text-dark">UI/UX Designer</p>
                <p className="text-xs text-dark">Teams</p>
              </div>
            </div>

            <div className="flex items-center mt-2 justify-between">
              <div className="flex items-center">
                <img src={JobTitleIcon} alt="Job Title Icon" className="w-3 h-3 mr-2" />
                <p className="text-[12px] text-dark">{job.title}</p>
              </div>
            
            </div>

            <div className="flex items-center mt-1 justify-between">
              <div className="flex items-center">
                <img src={CompanyIcon} alt="Company Icon" className="w-3 h-3 mr-2" />
                <p className="text-[11px] text-dark">{job.company}</p>
              </div>
            
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="bg-primary text-white text-[12px] py-2 px-6 rounded-lg hover:bg-primary-dark transition">
                Apply Now
              </button>
              <img src={RightArrowIcon} alt="Right Arrow Icon" className="w-4 h-4 ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
