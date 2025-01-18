import { Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { PanierComponent } from './panier/panier.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { authGuard } from './auth.guard';
import { InscriptionComponent } from './inscription/inscription.component';


export const routes: Routes = [
    {path : 'accueil' , component : AccueilComponent},
    {path : 'boutique' , component : BoutiqueComponent},
    {path : 'panier', component : PanierComponent},
    {path : 'connexion', component : ConnexionComponent},
    // {path : 'profil', component : ProfilComponent, canActivate: [authGuard]},
    {path : 'profil', component : ProfilComponent},
    {path : 'inscription', component : InscriptionComponent},


    {path: '**', redirectTo: 'accueil'}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]  
})
export class AppRoutingModule {}