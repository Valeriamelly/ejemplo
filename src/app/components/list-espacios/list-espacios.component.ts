import { Espacio } from '../../models/espacio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EspacioService } from 'src/app/services/espacio.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-espacios',
  templateUrl: './list-espacios.component.html',
  styleUrls: ['./list-espacios.component.css'],
})
export class ListEspaciosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'estacionamiento', 'piso', 'numero', 'estado', 'actions'];
  dataSource = new MatTableDataSource<Espacio>();

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private espacioService: EspacioService,
    private snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.getEspacios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEspacios() {
    this.espacioService.getEspacios().subscribe((data: Espacio[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }


  deleteEspacio(id:number){
    this.espacioService.deleteEspacio(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((e:Espacio)=>{
        this.snackBar.open("Empleado eliminado",'',{
          duration:3000,
        })
        return e.id!=id?e:false
      })
    })
  }
   

    

}
