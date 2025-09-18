import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInput } from "@angular/material/input";


@Component({
  selector: 'app-form-client',
  imports: [FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule, MatInput, MatButtonModule],
  templateUrl: './form-client.html',
  styleUrl: './form-client.css'
})
export class FormClient implements OnInit{
  title:string=''
  group!:FormGroup

  constructor(private reference:MatDialogRef<FormClient>,
    @Inject(MAT_DIALOG_DATA) public data:any ){
      this.title=data ? "EDITAR" : "NUEVO"
  }
  ngOnInit(): void {
    this.loadForm()
  }

  loadForm(){
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      dni: new FormControl(this.data?.dni, Validators.required),
      firstname: new FormControl(this.data?.firstname, Validators.required),
      lastname: new FormControl(this.data?.lastname, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.data?.email, [Validators.required, Validators.email]),
    })
  }

  save(){}
}
