import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  term = ''

  @Input() data = [];

  recipes = [
    // {
    //   title: 'Ham Persillade with Mustard Potato Salad and Mashed Peas',
    //   rating: 2.5
    // },
    // {
    //   title: 'Yams Braised with Cream, Rosemary and Nutmeg',
    //   rating: 5
    // },
    // {
    //   title: 'Asian Pear and Watercress Salad with Sesame Dressing',
    //   rating: 3
    // }
  ]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.recipes = this.data.filter(r => {
      if (r.calories < this.userService.calories) {
        return r
      }
    })

    console.log(this.recipes)
  }

  onChange($event) {
    this.term = $event.target.value;
  }
}
