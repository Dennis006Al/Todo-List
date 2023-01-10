import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacterComponent } from '@characters/character.component';
import { MatIconModule } from '@angular/material/icon';

const myComponents = [
  CharacterDetailsComponent,
  CharacterListComponent,
  CharacterComponent,
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule, InfiniteScrollModule, MatIconModule],
  exports: [...myComponents],
})
export class CharactersModule {}
