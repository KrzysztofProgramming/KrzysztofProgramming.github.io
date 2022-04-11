import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface NavItem{
  name: string;
  routerLink?: string;
}

export interface NavIcon{
  name: string;
  link: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  
  navItems: NavItem[] = [
    {
      name: "Home",
      routerLink: ""
    },
    {
      name: "Projects",
      routerLink: "projects"
    },
    {
      name: "About me",
      routerLink: "about"
    }
  ]

  navIcons: NavIcon[] = [
    {
      name: "pi-github",
      link: 'https://github.com'
    },
    {
      name: "pi-linkedin",
      link: 'https://linkedIn.com'
    }
  ]

  public sidebarVisibility: boolean = false;

  constructor(private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public navigateToRoute(link?: string){
    if(!link) return;
    this.router.navigate([link], {skipLocationChange: true});
  }

  public openSidebar(){
    this.sidebarVisibility = true;
    this.cd.markForCheck();
  }

}
