import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MainContainer } from './main-container/mainContainer.component';
import { ThemeService } from './services/theme/theme.servce';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContainer],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
}
