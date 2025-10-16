import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from './services/theme/theme.servce';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
}
