import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Vérifier si le token JWT existe dans le localStorage
  const token = localStorage.getItem('token');
  
  if (token) {
    // Si le token existe, autoriser l'accès à la route
    return true;
  } else {
    // Sinon, rediriger l'utilisateur vers la page de connexion
    router.navigate(['/connexion']);
    return false;
  }
};
