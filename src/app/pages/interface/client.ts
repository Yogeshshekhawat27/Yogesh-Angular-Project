export interface Address {
    address1: string;
    address2: string;
    area: string;
    state: string;
    city: string;
    zip: number | null;
  }
  
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
  
  export interface Client {
    _id: string;
    name: string;
    clientType: string;
    contactPerson: string;
    contactNumber: string;
    email: string;
    alternativeEmail: string;
    clientStatus: string;
    sendSMS: boolean;
    imge?: string;
    address?: Address;
    projects: Project[];
    __v: number;
  }
  
  export interface ClientData {
    totalDocuments: number;
    totalPages: number;
    currentPage: number;
    clients: Client[];
  }
  