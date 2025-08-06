import React, { useEffect, useState } from 'react';
import '../css/sectionCSS/Project.css';
import axios from '../config/axiosConfig';
import {FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import {toast} from 'react-toastify'
const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tallCardIndex, setTallCardIndex] = useState(0);
  const [smallCardIndex1,setSmallCardIndex1] = useState(1);
  const [smallCardIndex2,setSmallCardIndex2] = useState(2);
  const changeIndex = ()=>{
    if(tallCardIndex+1 == projectData.length && smallCardIndex1+1 == projectData.length && smallCardIndex2+1 == projectData.length){
      toast.success("No Data Left to Show");
    }
    if(tallCardIndex+1 < projectData.length) setTallCardIndex(tallCardIndex+1);
    if(smallCardIndex1+1 < projectData.length) setSmallCardIndex1(smallCardIndex1+1);
    if(smallCardIndex2+1 < projectData.length)setSmallCardIndex2(smallCardIndex2+1);
  }

  useEffect(() => {
      axios.get('/Project/display')
        .then((res) => {
          setProjectData(res.data.data);
          console.log(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching projects:', err);
          setLoading(false); 
        });
    }, []);


 return (
  <div className="Project_container">
    {loading ? (
      <div className="flex flex-col items-center justify-center gap-2 min-h-[300px]">
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-sm">Loading projects...</p>
      </div>
    ) : (
      projectData.length > 0 && (
        <>
          <div className='TallCard'>
            <img src={projectData[0].projectImageRefId.secureUrl} alt="Project Image" />
            <div className="TextBox">
              <p>{projectData[tallCardIndex].title}</p>
              <p>{projectData[tallCardIndex].projectDescription}</p>
                <div className="TextBoxProjectLink">
                  <a href={projectData[tallCardIndex].url} target='blank'><FaGithub/> </a>
                  <a href={projectData[tallCardIndex].url} target='blank'><FaLinkedin style={{ color: '#0A66C2' }}/> </a>
                  <a href={projectData[tallCardIndex].url} target='blank'><FiExternalLink/> </a>
                </div>
            </div>
          </div>
          <div className='SmallCards'>
            <div className='SmallCard'>
              <img src={projectData[smallCardIndex1].projectImageRefId.secureUrl} alt="Project Image" />
              <div className="TextBox">
                <p>{projectData[smallCardIndex1].title}</p>
                <p>{projectData[smallCardIndex1].projectDescription}</p>
                <div className="TextBoxProjectLink">
                  <a href={projectData[smallCardIndex1].url} target='blank'><FaGithub/> </a>
                  <a href={projectData[smallCardIndex1].url} target='blank'><FaLinkedin style={{ color: '#0A66C2' }}/> </a>
                  <a href={projectData[smallCardIndex1].url} target='blank'><FiExternalLink/> </a>
                </div>
              </div>
            </div>
            <div className='SmallCard'>
              <img src={projectData[smallCardIndex2].projectImageRefId.secureUrl} alt="Project Image" />
              <div className="TextBox">
                <p>{projectData[smallCardIndex2].title}</p>
                <p>{projectData[smallCardIndex2].projectDescription}</p>
                <div className="TextBoxProjectLink">
                  <a href={projectData[smallCardIndex2].url} target='blank'><FaGithub/> </a>
                  <a href={projectData[smallCardIndex2].url} target='blank'><FaLinkedin style={{ color: '#0A66C2' }}/> </a>
                  <a href={projectData[smallCardIndex2].url} target='blank'><FiExternalLink/> </a>
                </div>
              </div>
            </div>
          </div>
          
        </>
      )
    )}
  </div>
);

};

export default Project;
