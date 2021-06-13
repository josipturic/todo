export interface IAdminDashboardData {
    numOfServiceProviders: number
    numOfServices: number
    serviceWithMostViewsId : number
    serviceWithMostViewsTtile: string
    numOfViews : number
    serviceProviderWihtMostServicesId: string
    serviceProviderWihtMostServicesName: string
    numofServices: number
}

export const InitialAdminDashboardData: IAdminDashboardData = {
    numOfServiceProviders: 0,
    numOfServices: 0,
    serviceWithMostViewsId: 0,
    serviceWithMostViewsTtile: "",
    numOfViews: 0,
    serviceProviderWihtMostServicesId: "",
    serviceProviderWihtMostServicesName: "",
    numofServices: 0
}