import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  produitForm: Produits={
    id: 0,
    nom: '',
    qantite: '',
    price: '',
    image: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitservice: ProduitsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number){
    this.produitservice.getById(id).subscribe((data)=>{
      this.produitForm = data;
    });
  }

  update(){
    this.produitservice.update(this.produitForm)
    .subscribe({
      next: (data) => {
        this.router.navigate(["/produits/home"]);
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

}
