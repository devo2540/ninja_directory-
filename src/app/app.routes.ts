// ALL OF OUR ROUTES

import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';


// create routes
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'directory', component: DirectoryComponent}
];

// export routes
export const Routing = RouterModule.forRoot(routes);


