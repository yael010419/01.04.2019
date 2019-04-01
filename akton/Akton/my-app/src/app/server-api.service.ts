import { User } from './Modoles.js/User';
import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/Router';
import { AuthenticationService } from './AuthenticationService';




/* the serve is singelton */
@Injectable()
export class ServerAPIService implements CanActivate, CanActivateChild  {

  constructor(private _http: HttpClient, private authService: AuthenticationService, private router: Router) {
    console.log('server');

  }
  private url ='';

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.isAuthenticated()
    .then(
        (authenticated: boolean) => {
            if (authenticated) {
                 return authenticated;
             } else {
                this.router.navigate(['/']);
                return authenticated;
             }
        }
    ).catch(
        (reason: string) => {
            alert(reason);
            this.router.navigate(['/']);
            return false;
        }
    );
   }

   canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

   getAllAudio(): Observable<User[]> {
    return this._http.get<User[]>(this.url);
  }
 
  getIdUser(id: string): Observable<User> {
    return this._http.get<User>(this.url + id);
  }
  postUser(user: User): Observable<Response> {
    return this._http.post<Response>(this.url, user);
  }
  putUser(user: User): Observable<string>  {
    return this._http.put<string>(this.url + user.id, user);
  }

  deletUser(id: number): Observable<string> {
    return this._http.delete<string>(this.url + id);
  }
}
