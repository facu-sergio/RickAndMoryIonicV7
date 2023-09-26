import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rickMortySerivice';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  characters:any[]=[];
  params = {} as any;

  constructor(private rickMortyService:RickMortyService) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?:any){
    this.params.page +=1;
    this.rickMortyService.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results)
        console.log(this.characters);
        if(event) event.target.complete();
      },
      error: (error:any) =>{
        console.log(error);
        if(event) event.target.complete();
      }
    })
  }

  searchCharacters(){
    this.params.page =1;
    this.rickMortyService.getCharacters(this.params).subscribe({
      next: (res: any) => {
      this.characters = res.results;
      },
      error: (error:any) =>{
        console.log(error);
      }
    })

  }
}
