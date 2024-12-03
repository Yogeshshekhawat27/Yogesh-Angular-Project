
export interface Role {
    _id: string;
    name: string;
    permissions: string[];
    __v: number;
  }
  
  export interface User {
    active: boolean;
    isVerified: boolean;
    _id: string;
    firstName: string;
    lastName?: string;
    email: string;
    contactNumber: string;
    otp: string;
    role?: Role | null;
    clientId?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    password?: string;
  }
  
  export interface UserResponse {
    totalDocuments: number;
    totalPages: number;
    currentPage: number;
    users: User[];
  }
  
