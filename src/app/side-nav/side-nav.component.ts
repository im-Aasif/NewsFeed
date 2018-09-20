import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideNavService } from './services/side-nav.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { NewsService } from '../core/services/news.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {

  @ViewChild('sideNav')
  public sideNav: MatSidenav;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 10 }, (_, i) => `${i + 1} Lorem ipsum dolor sit amet,`);

  fillerContent = Array.from({ length: 10 }, (_, i) =>
    `${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. `);

  private _mobileQueryListener: () => void;


  constructor(
    private service: SideNavService,
    private newsService: NewsService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.service.setSideNav(this.sideNav);
    this.newsService.getSources('technology').subscribe(
      (response: any) => {
        console.log(JSON.stringify(response, null, 2));
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleSideNav() {
    this.service.toggle();
  }
}
