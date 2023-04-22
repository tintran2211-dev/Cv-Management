export interface ICompany {
  id: string;
  name: string;
  size: string;
  createdAt: string;
}

export interface ICreateCompanyDto {
  name: string;
  size: string;
}

export interface IJob {
  id: string;
  title: string;
  level: string;
  companyId: string;
  companyName: string;
  createdAt: string;
}

export interface ICreateJobDto {
  title: string;
  level: string;
  companyId: string;
}

export interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl: string;
}

export interface ICreateCandidate{
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  jobId: string;
}
