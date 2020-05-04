import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule',
    },
    // {
    //     path        : 'dashboards/project',
    //     loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    // },
    {
        path: 'role-management',
        loadChildren: './role-management/role-management.module#RoleManagementModule',
       
    },
    {
        path: 'change-password',
        loadChildren:
            './change-password/change-password.module#ChangePasswordModule',
       
    },
    {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule',
        
    },
    {
        path: 'role-access-management',
        loadChildren: './role-access-management/role-access-management.module#RoleAccessManagementModule',
      
    },
    {
        path: 'broker-management',
        loadChildren: './broker-management/broker-management.module#BrokerManagementModule',
       
    },

    {
        path: 'master/company-management',
        loadChildren: './company-management/company-management.module#CompanyManagementModule',
       
    },
    {
        path: 'charterer-management',
        loadChildren: './charterer-management/charterer-management.module#ChartererManagementModule',
      
    },
   
    {
        path: 'master/company-admin',
        loadChildren: './company-admin/company-admin.module#CompanyAdminModule',
      
    },
    {
        path: 'alert-management',
        loadChildren: './alert-management/alert-management.module#AlertManagementModule',
      
    },
    {
        path: 'vessel-management',
        loadChildren: './vessel-management/vessel-management.module#VesselManagementModule',
      
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), FuseSharedModule],
   
})
export class AppsModule {}
