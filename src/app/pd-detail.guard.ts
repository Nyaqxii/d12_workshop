import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdDetailGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const param = route.params.name;
    if (!param) {
      return true;
    } else {
      this.router.navigate(['/pd-detail/' + name], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
