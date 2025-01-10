import { Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { PanierComponent } from './panier/panier.component';
import { AccueilComponent } from './accueil/accueil.component';
// import { SigninComponent } from './signin/signin.component';
// import { SignupComponent } from './signup/signup.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    {path : 'accueil' , component : AccueilComponent},
    {path : 'boutique' , component : BoutiqueComponent},
    {path : 'panier', component : PanierComponent},
    // {path : 'connexion', component : SigninComponent},
    // {path : 'inscription', component : SignupComponent},
    // {path : 'profile', component : UserProfileComponent},
    {path: '**', redirectTo: 'accueil'}
];
