import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  if (localStorage.getItem('token') !== null ) { // if logged in, navigate to seafarers
    router.navigate(['/seafarers'])
    return false;
  }
  else{
    return true;
  }
};
