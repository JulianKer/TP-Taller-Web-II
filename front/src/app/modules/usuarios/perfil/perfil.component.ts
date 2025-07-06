import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../api/services/perfil.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
   imports: [CommonModule],
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  perfil: any;

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
   const id = localStorage.getItem('usuarioId');
   if (id){

    this.perfilService.obtenerPerfil(+id).subscribe({
      next:(data)=>this.perfil = data,
      error:(error)=>console.error('Error al obtener el perfil:', error)
   });
  }
  }
}
