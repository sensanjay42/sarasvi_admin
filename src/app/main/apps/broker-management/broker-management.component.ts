import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { UserService } from '../../../_services/user.service';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config/config';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../_services';
import { Router } from '@angular/router';

export interface UserData {
    id: string;
    Name: string;
    mobileno: string;
    email: string;
    company: string;
    
}




@Component({
    selector: 'broker-management',
    templateUrl: './broker-management.component.html',
    styleUrls: ['./broker-management.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class BrokerManagementComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['id', 'name', 'mobileno', 'email', 'company',  'action'];
    dialogRef: any;
    hasSelectedContacts: boolean;
    searchInput: FormControl;
    showModalStatus = false;
    dataSource: MatTableDataSource<UserData>;
    showModaldeleteStatus = false;
    roleListRes: any;
    roleListData: any;
    roleName: string;
    name: string;
    mobileno: string; 
    email: string; 
    company: string;  
    userRole: string;
    
    userListRes: any;
    userListData: any;

    roleId: any;
    deleteRoleRes: any;

    status = 'Y';
    


    filterValue: string;
    userRoleId: any;
    tempUserListData: any;
    // Private

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    /**
     * Constructor
     *
     * @param {ContactsService} _contactsService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {MatDialog} _matDialog
     */
    constructor(
        // private _contactsService: ContactsService,
        private _userService: UserService,
        private _fuseSidebarService: FuseSidebarService,
        private http: HttpClient, 
        private alertService: AlertService,
        private router: Router
    ) {
        // Set the defaults
        this.filterValue = '';
        this.userListData = [];
        this.roleListData = [];
        this.userRoleId = '';
        this.dataSource = new MatTableDataSource(this.userListData);

        let userToken = localStorage.getItem('userToken')
        if(userToken==undefined){
            this.router.navigate(['/']);
        }
    }
   
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
        this.brokerList();
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

    showModal(): void {
        this.showModalStatus = !this.showModalStatus;
        // console.log(this.showModalStatus);
    }

    applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    editRole(id): void {
        console.log(id);       
        localStorage.setItem('brokerId', id);
        this.router.navigate(['/apps/broker-management/edit-broker']);
    }

    brokerList(): void {
        try {
            this._userService.getbrokererList()
            .pipe(first())
            .subscribe((res) => {
                this.userListRes = res;
                if (this.userListRes.success === true) {
                    this.tempUserListData = this.userListRes.data;
                    this.userListData = this.userListRes.data;
                    this.dataSource = new MatTableDataSource(this.userListData);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
            },
            err => {
                console.log(err);
            });
            
        } catch (err) {
            console.log(err);
        }
    }
    
    // Delete Role
    deletebroker(id): void {
        const req = {
            isDelete: 'Y',      
            id: this.userRoleId,
        };
        try {
            this.http
                .post(`${config.baseUrl}/BrokerDelete`, req, {})
                .subscribe(
                    res => {
                        console.log(res);
                        this.deleteRoleRes = res;
                        if (this.deleteRoleRes.success === true) {
                            this.alertService.success('Successfully Deleted', 'Success');
                            this.brokerList();
                            this.showModaldeleteStatus = false;
                        } else {
                            this.alertService.error(this.deleteRoleRes.message, 'Error');
                        }
                    },
                    err => {
                        console.log(err);
                        this.alertService.error(err.message, 'Error');
                    }
                );
        } catch (err) {
            console.log(err);
        }
    } 
    changeRole(event): void {
        console.log(event.target.value);
        this.userRoleId = event.target.value;
    }
    showDeleteModal(id): void {
        this.userRoleId = id;
        this.showModaldeleteStatus = !this.showModaldeleteStatus;
    }
    hideDeleteModal(): void {
        this.showModaldeleteStatus = !this.showModaldeleteStatus;
    }
}
