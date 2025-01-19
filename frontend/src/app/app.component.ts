import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TetiereComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp05_BRUANT_Aude';
}
