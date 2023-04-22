import { useEffect, useState } from "react";
import "./candidate.scss";
import httpModule from "../../helpers/http.module";
import { ICandidate, ICompany } from "../../types/global.typing";
import { error } from "console";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import CandidatesGrid from "../../component/candidates/CandidaresGrid.component";

const Candidates = () => {
  const [candidates, setCandidates] = useState<ICandidate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ICandidate[]>("/Candidate/Get")
      .then((response) => {
        setCandidates(response.data);
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
    <div className="content candidates">
      <div className="heading">
        <h2>Candidate</h2>
        <Button variant="outlined" onClick={() => redirect("/candidates/add")}>
          <Add></Add>
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : candidates.length === 0 ? (
        <h1>No Candidate</h1>
      ) : (
        <CandidatesGrid data={candidates} />
      )}
    </div>
  );
};

export default Candidates;
