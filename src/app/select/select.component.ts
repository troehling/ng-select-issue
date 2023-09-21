import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // This is not required. The Problem stays the same with "Default"
})
export class SelectComponent {

  items = [
    { value: 1, label: 'Eins' },
    { value: 2, label: 'Zwei' },
    { value: 3, label: 'Drei' },
    { value: 4, label: 'Vier' },
  ];

  @ViewChild(NgSelectComponent, { static: true })
  ngSelect!: NgSelectComponent;

  constructor(private cdRef: ChangeDetectorRef) {}

  model: any = 2;

  ngOnInit() {
    /*setTimeout(() => {
      console.log('Interval starting');
      setInterval(() => {
        this.model = getRandomInt(4) + 1;
        console.log(`Changing value to ${this.model}`);
        this.cdRef.markForCheck();
      }, 2000);
    }, 10000);*/
  }

  onClick(): void {
    // this.ngSelect.handleClearClick(); // Potential workaround with some issues (see issue in github)
    this.model = getRandomInt(4) + 1;
    console.log(`Changing value to ${this.model}`);
    // this.cdRef.markForCheck();
  }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
