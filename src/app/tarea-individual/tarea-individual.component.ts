import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lista} from "../utils/types/lista";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.scss']
})
export class TareaIndividualComponent implements OnInit {
  // @ts-ignore
  @Input() tarea: Lista;
  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();
  // @ts-ignore
  public mostrarContenido: Boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  borrarRegistro(tarea: Lista): void {
    this.apiService.deleteData(tarea._id).subscribe((r) => {
      this.onChange.emit();
    });
  }

  activarEdicion() {
    this.mostrarContenido = true;
  }

  editarRegistro(item: any, tarea: Lista) {
    this.apiService.updateData(item, tarea._id).subscribe((r) => {
      this.onChange.emit();
    });
  }
}
