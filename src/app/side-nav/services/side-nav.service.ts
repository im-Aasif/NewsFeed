import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private sideNav: MatSidenav;

  constructor() { }

  public setSideNav(sideNav: MatSidenav) {
    this.sideNav = sideNav;
  }

  public open(): Promise<MatDrawerToggleResult> {
    return this.sideNav.open();
  }

  public close(): Promise<MatDrawerToggleResult> {
    return this.sideNav.close();
  }

  public toggle(isOpen?: boolean): Promise<MatDrawerToggleResult> {
    return this.sideNav.toggle(isOpen);
  }



}
