import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private _produitForm: Produits = {
    id: 0,
    nom: '',
    qantite: '',
    price: '',
    image: ''
  };
  public get produitForm(): Produits {
    return this._produitForm;
  }
  public set produitForm(value: Produits) {
    this._produitForm = value;
  }

  constructor(private produitservice: ProduitsService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.produitservice.create(this.produitForm)
    .subscribe({
      next : (data) => {
        this.router.navigate(['/produits/home'])
      },
      error:(err) =>{
        console.log(err);
      }

    })
  }

}
