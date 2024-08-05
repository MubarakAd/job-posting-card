import Link from "next/link";
import React from "react";
import Navbar from "./component/navbar/navbar"
import data from './data/jobs.json';
import Button from './component/button/button';
import Cards from "./component/cards/cards";
import { JobPosting } from "./component/Interfacedeclaration/Interface.d";
// interface JobCard{
//   jobs:JobPosting

// }

const Page = () => {
  return (
    <div className="justify-center">
      {/* <JobCard /> */}
      <Navbar/>
      {data.job_postings.map((job: JobPosting) => (
      <Link href={`/${job.title}`}>
        <Cards key={job.title} job={job} />
      </Link>
      ))}
   
    </div>
  );
};

export default Page;
