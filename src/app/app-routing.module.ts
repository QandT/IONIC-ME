import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'vehicle-info', loadChildren: './vehicle-info/vehicle-info.module#VehicleInfoPageModule' },
  { path: 'maintenance-record', loadChildren: './maintenance-record/maintenance-record.module#MaintenanceRecordPageModule' },  { path: 'add-maintenance-record', loadChildren: './add-maintenance-record/add-maintenance-record.module#AddMaintenanceRecordPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
