import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isActive = false;
  constructor(private httpClient : HttpClient) { }

  fanFavorites: any[] =[];
  cards: any[] =[];
  ngOnInit(): void {
    this.getFanFavouriteMovies();
    this.getTopMovies();
  }
  getFanFavouriteMovies(){
    this.httpClient.get<any[]>('assets/data/fanFavouriteMovies.json')
    .subscribe({
      next:(data:any[])=>{this.fanFavorites=data},
      error:(error)=>{console.log("Error on fanfavouriteMovies",error);},
      complete:()=>{console.log("Fan Favourites request loaded sucessfully");}
    });
  }
  getTopMovies(){
    this.httpClient.get<any[]>('assets/data/topMovies.json').subscribe((data:any[])=>{this.cards=data});
  }

  
}
