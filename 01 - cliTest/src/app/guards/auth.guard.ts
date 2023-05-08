import {Injectable} from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment,
ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return true;
    }

    canLoad(
      route: Route,
      segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;
    }

  }
