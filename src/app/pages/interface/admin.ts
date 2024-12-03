export interface Admin {
    totalProjects: number,
    leadsStatus: leadsStatus[],
    accepted: number,
    siteVist: number,
    followUp: number,
    locationIssue: number,
    verificationPending: number,
    budgetIssue: number,
    lostToCompetitor: number,
    notConnected: number,
    other: number,
    recentLeads: recentLeads[],
    deliverdleadsStatus: number

}
export interface leadsStatus {
    _id?: string|null,
    pendingLeads: number,
}
export interface recentLeads {
    type :{ enum: []}
    projects:string[],
    viewCount: number,
    _id: string,
    name: string,
    email: string,
    contactNumber: number,
    budget: string,
    location: string,
    status: string,
    createdBy: string,
    assignedTo: string,
    activities: any[],
    clientActivities: clientActivities[],
    createdAt: number,
    updatedAt: number,
    __v: number
    clientStatus: string,
    remark: string,
    updatedOn: string
}

export interface clientActivities {
    _id: string,
    name: string,
    remark: string,
    activity: string,
    date: number
}