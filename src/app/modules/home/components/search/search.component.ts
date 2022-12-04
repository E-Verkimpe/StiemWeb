import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((v) => this.router.navigate(["/home/search/" + v]))
    ).subscribe();
  }
}
