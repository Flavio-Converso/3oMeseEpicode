import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss'],
})
export class RegistrazioneComponent {
  registrazioneForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrazioneForm = this.fb.group({
      nome: [null, [Validators.required]],
      cognome: [null, [Validators.required]],
      authData: this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]],
      }),
      genere: ['selectPlaceholder', [Validators.required]],
      immagine: [null],
      biografia: [
        null,
        [
          Validators.required,
          Validators.minLength(50),
          Validators.maxLength(100),
        ],
      ],
      username: [null, [Validators.required]],
    });
  }

  // Funzione per inviare i dati del form
  invia() {
    this.formSubmitted = true;
    if (this.registrazioneForm.valid) {
      console.log(this.registrazioneForm.value);
    } else {
      console.log('Form non valido');
    }
  }

  // Funzione per controllare se il campo è stato toccato e se è valido
  isTouchedInvalid(fieldName: string) {
    const field = this.registrazioneForm.get(fieldName);
    return field?.invalid && field?.touched;
  }
}
