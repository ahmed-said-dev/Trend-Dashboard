import React from "react";
import { Button, Img, Text } from "components";
import { useState, useEffect } from "react";

const ProjectDetails = () => {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:3001/0");
        const data = await response.json();
        setProjects(data);
        console.log(data);
        projects = data;
        console.log(projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div>
      <div className="flex md:flex-col flex-row gap-6 items-center justify-end w-full">
        <div className="flex flex-1 flex-col gap-2 items-end justify-start w-full sm:items-center md:items-center">
          <Text
            className="text-gray-900 text-right text-xl w-auto"
            size="PLArSemiBold20"
          >
            {projects.projectName}
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-end w-auto md:w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="bg-light_green-50 border border-green-A100 border-solid justify-center pt-1 px-2.5 rounded-[12px] text-center text-sm text-teal-800 w-auto"
                size="PlexMedium14"
              >
                {projects.status}
              </Text>
            </div>
            <Text
              className="text-gray-900_01 text-right text-sm w-auto"
              size="PlexRegular14"
            >
              أخر تحديث : {projects.lastUpdate}
            </Text>
            <Text
              className="text-gray-900_01 text-right text-sm w-auto"
              size="PlexRegular14"
            >
              نهاية العقد : {projects.projectEndDate}
            </Text>
            <Text
              className="text-gray-900 text-right text-sm w-auto"
              size="PlexRegular14Gray900"
            >
              بداية العقد : {projects.projectStartDate}
            </Text>
            <Text
              className="text-base text-gray-900 text-right w-auto"
              size="PlexRegular16"
            >
              {projects.projectOwner}
            </Text>
          </div>
        </div>
        <Button className="border border-gray-900_61 border-solid flex h-16 items-center justify-center p-4 rounded-[50%] w-16">
          <Img className="h-8" src="images/img_user01.svg" alt="userOne_One" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;
