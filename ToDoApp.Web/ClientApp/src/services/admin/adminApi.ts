import { IAdminDashboardData } from './../../types/IAdminDashboardData';
import { api } from '../api';
import { API } from '../../constants/apiRoutes';


export default
    {
        getDashboardData(): Promise<IAdminDashboardData> {
            return api.get(API.ADMIN.GET_DASHBOARD_DATA);
        },
    };
