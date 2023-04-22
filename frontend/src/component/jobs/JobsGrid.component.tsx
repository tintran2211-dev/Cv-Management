import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";
import moment from "moment";
import "./jobs-grid.scss";
import React from "react";
import { IJob } from "../../types/global.typing";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "title", headerName: "Name", width: 500 },
  { field: "level", headerName: "Level", width: 150 },
  { field: "companyId", headerName: "CompanyId", width: 150 },
  { field: "companyName", headerName: "CompanyName", width: 200 },
  {
    field: "createAt",
    headerName: "Creation Time",
    width: 200,
    renderCell: (param) => moment(param.row.createAt).fromNow(),
  },
];

interface IJobsGridProps {
  data: IJob[];
}

const JobsGrid = ({ data }: IJobsGridProps) => {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="jobs-grid">
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default JobsGrid;