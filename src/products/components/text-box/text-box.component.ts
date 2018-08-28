
import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'text-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['text-box.component.scss'],
  templateUrl: 'text-box.component.html',
})

export class TextBoxComponent {

}
