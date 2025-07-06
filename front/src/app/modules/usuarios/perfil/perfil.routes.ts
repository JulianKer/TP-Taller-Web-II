import { Routes } from "@angular/router";
import { PerfilComponent } from "./perfil.component";
import { NecesitaLoguearse } from "../../../auth/helper/permitir.acceso";


export const perfilRoutes: Routes = [
  {
    path: '',
    component: PerfilComponent,
    canActivate: [NecesitaLoguearse]
  }
];