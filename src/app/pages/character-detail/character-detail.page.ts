import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from 'src/app/services/rickMortySerivice';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  characterId: string = "";
  character = null as any;
  episodes: any[] = [];
  constructor(private acRoute: ActivatedRoute, private rickAndMortySvc: RickMortyService) {
    this.characterId = this.acRoute.snapshot.paramMap.get('id') as string;
    console.log(this.characterId)
   }

  
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getCharacter();
  }

  getCharacter(){
    this.rickAndMortySvc.getCharactersById(this.characterId).subscribe({
      next: (res: any) => {
        this.character = res;
        this.getEpisodes();
      },
      error: (error:any) =>{
    
      }
    })
  }

  getEpisodes(){
   for(let url of this.character.episode){
    this.rickAndMortySvc.getByUrl(url).subscribe({
      next: (res: any) => {
        console.log(res);
        this.episodes.push(res);
      },
      error: (error:any) =>{
    
      }
    })
   }
   
  }
}
