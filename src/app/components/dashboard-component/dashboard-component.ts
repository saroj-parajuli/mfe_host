import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header-component/header-component';
import { FooterComponent } from '../footer-component/footer-component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    HeaderComponent,
    MatButtonModule,
    RouterOutlet,
    FooterComponent,
    MatCardTitle,
    MatCardModule
  ],
  styleUrls: ['./dashboard-component.scss'],
  templateUrl: './dashboard-component.html',
})
export class DashboardComponent {
  leftSidebarCollapsed = false;
  rightSidebarCollapsed = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 575;
    // Auto-collapse sidebars on mobile for better UX
    if (this.isMobile) {
      this.leftSidebarCollapsed = true;
      this.rightSidebarCollapsed = true;
    } else {
      this.leftSidebarCollapsed = false;
      this.rightSidebarCollapsed = false;
    }
  }

  toggleLeftSidebar() {
    this.leftSidebarCollapsed = !this.leftSidebarCollapsed;
  }

  toggleRightSidebar() {
    this.rightSidebarCollapsed = !this.rightSidebarCollapsed;
  }
}
