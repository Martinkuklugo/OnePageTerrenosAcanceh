import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    const formulario = {
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono
    };

    // Envío del formulario a través de una solicitud HTTP POST al script PHP
    this.http.post('https://localhots:4200/enviar_correo.php', formulario)
      .subscribe(
        () => {
          console.log('Formulario enviado');
          // Realizar cualquier acción adicional después de enviar el formulario, como mostrar un mensaje de éxito
        },
        error => {
          console.error('Error al enviar el formulario:', error);
          // Realizar cualquier acción adicional en caso de error, como mostrar un mensaje de error
        }
      );
  }
}

