import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLouded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('URL Property is Required');
  }

  onLoad(){
    setTimeout(() => {
      this.hasLouded = true;
    }, 1000);
  }

}
