import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Lista} from "../utils/types/lista";

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  public tareas: Lista[] = [];
  public error: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((r) => {
      this.tareas = r;
    }, error => this.error = error);
  }

  actualizarVista() {
    this.apiService.getData().subscribe((r) => {
      this.tareas = r;
    });
  }

  guardarDatos(value: any) {
    this.apiService.postData(value).subscribe((r) => {
      this.actualizarVista();
    });
  }
}
