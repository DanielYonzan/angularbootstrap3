import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthunticated = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService) {
    }

    ngOnInit() {
       this.userSub = this.authService.user.subscribe(user => {
           this.isAuthunticated = !!user;
           console.log(user);
           console.log(!!user);
       });
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    ngOnDestroy(): void {
        this.authService.user.unsubscribe();
    }

    onLogout() {
        this.authService.logout();
    }
}
