import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { UserModel } from 'src/app/@core/models/user.model';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {

  @Input() menuOpen: boolean;
  @ViewChildren('ulOpenable', { read: ElementRef }) openable: QueryList<ElementRef>;

  public hasFixedProfile = false;
  public menuRh = false;
  public menuOperation = false;
  public menuAdministration = false;
  public user: UserModel = new UserModel();
  public notify: number;
  public email: number;

  constructor() { }

  ngOnInit() {
    this.user.name = 'Everton Roberto';
    this.user.email = 'everton_roliveira@outlook.com';
    this.notify = 12;
    this.email = 100;
  }

  public fixedProfile() {
    this.hasFixedProfile = !this.hasFixedProfile;
  }
}
