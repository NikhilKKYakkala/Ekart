import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = 'Mens wear';

  updateSearch(event: any) {
    this.searchText = event.target.value;
  }
}
