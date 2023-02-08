import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent{

  @Output() private toggleMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  isMenuOpen = false;

  onMenuClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleMenu.emit(this.isMenuOpen)
  }
}
