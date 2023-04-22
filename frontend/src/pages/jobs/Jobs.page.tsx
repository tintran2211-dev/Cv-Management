import { useEffect, useState } from "react";
import "./job.scss";
import httpModule from "../../helpers/http.module";
import { ICompany, IJob } from "../../types/global.typing";
import { error } from "console";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import JobsGrid from "../../component/jobs/JobsGrid.component";
// import CompaniesGrid from "../../component/companies/CompaniesGrid.component";

const Companies = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<IJob[]>("/Job/Get")
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  // console.log(companies);
  return (
    <div className="content companies">
      <div className="heading">
        <h2>Jobs</h2>
        <Button variant="outlined" onClick={() => redirect("/jobs/add")}>
          <Add></Add>
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : jobs.length === 0 ? (
        <h1>No Job</h1>
      ) : (
        <JobsGrid data={jobs} />
      )}
    </div>
  );
};

export default Companies;
