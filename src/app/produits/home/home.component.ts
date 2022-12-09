import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allproduits: Produits[]=[];
  deleteModal:any;
  idTodelete :number = 0;


  constructor(private produitService: ProduitsService) { }

  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );


    this.get();
  }
  get(){
    this.produitService.get().subscribe((data) =>{
      this.allproduits=data;
    });
  }

  openDeleteModal(id: number){
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete(){
    this.produitService.delete(this.idTodelete).subscribe({
      next : (data) =>{
        this.allproduits = this.allproduits.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }

}
