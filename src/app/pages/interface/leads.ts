export interface leads{
    totalDocuments: number;
    totalPages: number;
    currentPage: number;
    leads:Lead[];

}
interface Lead {
    type: {
      enum: [];
    };
    projects: Project[];
    viewCount: number;
    _id: string;
    name: string;
    email: string;
    contactNumber: string;
    budget: string;
    location: string;
    status: string;
    createdBy: string;
    assignedTo: null | string;
    activities: [];
    clientActivities: ClientActivity[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    clientStatus?: string;
    updatedOn?: string;
    remark?: string;
  }
  
  interface Project {
    propertyTypes: string[];
    _id: string;
    projectName: string;
    state: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
    tat: number;
    cpl: number;
    priceCostFrom: number;
    totalLeadsToBeDeliverd: number;
    projectType: string;
    totalLeadstillDeliverd: number;
    projectId: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  interface ClientActivity {
    _id: string;
    name: string;
    remark: string;
    activity: string;
    date:string;
}
