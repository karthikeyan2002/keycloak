import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import { KeycloakAuthGuard,KeycloakService } from "keycloak-angular";

@Injectable({
    providedIn: 'root',
})

export class AuthGuard extends KeycloakAuthGuard{
    constructor(
        protected readonly route: Router,
        protected readonly keycloak: KeycloakService
    ){
        super(route,keycloak);
    }   

    public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if(!this.authenticated){
            await this.keycloak.login({
                redirectUri: window.location.origin + state.url;
            });
        }
        const requiredRoles = route.data['roles'];
        if(!Array.isArray(requiredRoles) || requiredRoles.length === 0){
            return true;
        }
        return requiredRoles.every((role)=>this.roles.includes(role))
    }

    

}
    
