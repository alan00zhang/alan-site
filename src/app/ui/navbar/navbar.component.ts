import { state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @Input() tabs: string[] = [];
  @Input() selectedTab: string;
  tabElement: HTMLElement;
  underlineStyle = {
    width: "",
    marginLeft: "5px",
    transform: "",
    transition: ".3s ease-in-out"
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.selectTab(this.tabs[0]);
    document.getElementById(`navbar-underline`).style.width = this.tabElement.offsetWidth + 4 + "px";
  }

  selectTab(tab: any) {
    this.selectedTab = tab;
    this.moveUnderline(tab);
  }

  moveUnderline(tab: any) {
    // Remove transition delay
    this.underlineStyle.transition = ".3s ease-in-out";

    this.underlineStyle.transform = "translateX(0%)";
    // Set the width of the underline to the width of the selected tab
    this.tabElement = document.getElementById(`navtab-${this.tabs.indexOf(tab) + 1}`);
    this.underlineStyle.width = this.tabElement.offsetWidth + 4 + "px";

    // Set the left position of the underline to the left relative position of the selected tab
    this.underlineStyle.marginLeft = this.tabElement.offsetLeft + "px";
  }

  removeUnderline() {
    // Set transition delay so the underline doesn't immediately disappear
    this.underlineStyle.transition = ".3s ease-in-out 100ms";
    this.underlineStyle.marginLeft = "0px";
    this.underlineStyle.transform = "translateX(-100%)";
  }

}
