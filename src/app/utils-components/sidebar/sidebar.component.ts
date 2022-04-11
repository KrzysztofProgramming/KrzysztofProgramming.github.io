import { skipLocationChange } from './../../globals';
import { NavItem, NavIcon } from './../../router-components/nav/nav.component';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger("slideEntry", [
      state("void", style({transform: 'translateX(-100%)'})),
      state("*", style('*')),
      transition("void <=> *", animate("300ms ease"))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  

  private _visibility: boolean = false;
  @Input("icons") navIcons: NavIcon[] = [];
  @Input("items") navItems: NavItem[] = [];
  
  @Input("visibility")
  public set visibilityInput(value: boolean){
    this._visibility = value;
    this.cd.markForCheck();
  }

  @Output()
  public visibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public set visibility(value: boolean){
    this._visibility = value;
    this.visibilityChange.emit(value);
    this.cd.markForCheck();
  }
  public get visibility(): boolean{
    return this._visibility;
  }

  constructor(private cd: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {

  }

  public hideSidebar(){
    this.visibility = false;
  }

  public navigateToLink(link?: string){
    if(!link) return;
    this.router.navigate([link], {skipLocationChange: skipLocationChange});
  }

}
