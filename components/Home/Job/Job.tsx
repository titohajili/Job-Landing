import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import JobCard from './JobCard';

const jobs = [
    {
        id:1,
        image: "/images/j1.png",
        title: "Software Engineer",
        Location: "London, UK",
        jobType: "Full Time",
        urgency: "Urgent"
    },
    {
        id:2,
        image: "/images/j2.png",
        title: "Recruiting Coordinator",
        Location: "Manchester, UK",
        jobType: "Part Time",
        urgency: "Urgent"
    },
    {
        id:3,
        image: "/images/j3.png",
        title: "Product Manager, Studio",
        Location: "Birmingham, UK",
        jobType: "Contract",
        urgency: "Urgent"
    },
    {
        id:4,
        image: "/images/j4.png",
        title: "Senior Prouct Designer",
        Location: "Bristol, UK",
        jobType: "Full Time",
        urgency: "Urgent"
    },
    {
        id:5,
        image: "/images/j5.png",
        title: "Product Manager, Risk",
        Location: "Edinburgh, UK",
        jobType: "Contract",
        urgency: "Urgent"
    },
    {
        id:6,
        image: "/images/j6.png",
        title: "Product Designer",
        Location: "Liverpool, UK",
        jobType: "Full Time",
        urgency: "Urgent"
    },
    {
        id:7,
        image: "/images/j7.png",
        title: "Web Developer",
        Location: "Brighton, UK",
        jobType: "Part Time",
        urgency: "Urgent"
    },
    {
        id:8,
        image: "/images/j8.png",
        title: "Senior Product Designer",
        Location: "Glasgow, UK",
        jobType: "Contract",
        urgency: "Private"
    },
    {
        id:9,
        image: "/images/j9.png",
        title: "Senior BI Analyst",
        Location: "Sherwood, UK",
        jobType: "Full Time",
        urgency: "Private"
    }
];

const Job = () => {
  return (
    <div className='pt-16 pb-16'>
      <SectionHeading heading="Featured Jobs" subHeading="Know your worth and find the job that qualify your life"/>
      <div className='w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
        {
            jobs.map((job)=>{
                return <div key={job.id}>
                    <JobCard job={job}/>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Job
