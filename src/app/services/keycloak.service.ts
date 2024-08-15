import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Injectable({
    providedIn:'root'
})
export class keyCloakOperationService{
    constructor(private readonly keycloak:KeycloakService) {
        
    }

    isLoggedIn():boolean{
        return this.keycloak.isLoggedIn();
    }

    logOut():void{
        this.keycloak.logout();
    }

    getUserProfile():any{
        return this.keycloak.loadUserProfile();
    }
}