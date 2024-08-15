import { KeycloakService } from "keycloak-angular";

export function initializeKeyCloak(keycloak: KeycloakService){
    return ()=>
        keycloak.init({
            config:{
                url:'https://localhost:8080',
                realm:'master',
                clientId:'sample-id'
            },
            enableBearerInterceptor:true,
            bearerPrefix:'Bearer',
            bearerExcludedUrls:['/assets'],
            initOptions:{
                onLoad:'check-sso',
                silentCheckSsoRedirectUri:
                window.location.origin + '/assets/silent-check-sso.html',
            }
        })
}