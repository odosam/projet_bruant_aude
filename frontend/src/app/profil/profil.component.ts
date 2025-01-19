import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardFormComponent } from '../card/card-form/card-form.component';
import { DisplayCardComponent } from '../card/display-card/display-card.component';
import { ApiService } from '../api.service';
import { Store } from '@ngxs/store';
import { UpdateUsername } from '../actions/user.actions';

@Component({
  selector: 'app-profil',
  standalone: true, // Configuration standalone
  imports: [
    CommonModule,
    FormsModule,
    CardFormComponent, // Importation du composant formulaire
    DisplayCardComponent // Importation du composant d'affichage
  ],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  email = '';
  username = '';
  isEditing = false;

  constructor(private apiService: ApiService, private store: Store) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.apiService.getCurrentUser().subscribe(
      (user: any) => {
        this.email = user.email;
        this.username = user.username;
      },
      (error) => console.error('Error loading user info:', error)
    );
  }

  saveChanges() {
    const updatedUser = { email: this.email, username: this.username };
    this.apiService.updateUser(updatedUser).subscribe(
      (response) => {
        console.log('User updated successfully:', response);
        alert('User information updated!');
        this.isEditing = false;
        this.store.dispatch(new UpdateUsername(this.username));
      },
      (error) => console.error('Error updating user info:', error)
    );
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
