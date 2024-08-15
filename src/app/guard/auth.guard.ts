import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import { KeycloakAuthGuard,KeycloakService } from "keycloak-angular";

@Injectable({
    providedIn: 'root',
})

export class AuthGuard extends KeycloakAuthGuard{
    constructor(
        protected readonly router: Router,
        protected readonly keycloak: KeycloakService
    ){
        super(router,keycloak);
    }   

    isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        // Implement your access control logic here
        return Promise.resolve(true);
    }
}
    

}