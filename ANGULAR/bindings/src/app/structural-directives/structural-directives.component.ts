import { Component,Input,Output} from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
    <h2>Child Component</h2>
    <p>{{ inputProperty }}</p>
  `,
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  @Input() inputProperty: string | undefined;
  public colors = ["red","blue","green"]
}
