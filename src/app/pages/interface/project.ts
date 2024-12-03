export interface Project {
    propertyTypes: string[];
    _id: string;
    projectName: string;
    state: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
    tat: number | null;
    cpl: number;
    priceCostFrom: number;
    totalLeadsToBeDeliverd: number;
    totalLeadstillDeliverd: number;
    projectType: string;
    projectId: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface ProjectData {
    totalDocuments: number;
    totalPages: number;
    currentPage: number;
    projects: Project[];
  }
  