import { Component,
             Input,
            // Output,
      // EventEmitter,
          OnInit
          /*, ViewChild, Renderer*/} from '@angular/core';


@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() helpPopOverMsg:any;
  @Input() isRequired:string;
  @Input() formModel: any;
  @Input() inputType: string;
  @Input() inputLabel: string;
  @Input() inputName: string;
  @Input() toolTipLocation: string; // ["top","right","bottom","left"]

  // @Output() ngModelChange:EventEmitter<String> = new EventEmitter<String>();

  stateColor: string = "primary";

  hintLabel: any;

  // hasMDHint: boolean;
  // minCharCount: number;
  // maxCharCount: number;
  ngModel:any;


  //@ViewChild('mdInput') mdInput; //if renderer && templatevar is needed

  chkStateColor(obj:any, isRequired:any){
    let tempState:any;
    if(isRequired && obj.invalid && obj.dirty){
      tempState = "warn"
    }
    else{
      tempState = "primary"
    }

    return tempState;

  }






  constructor() {
    console.log(this.isRequired);
    console.log(" Creating the  input-text instance ");
    //this.myInputChange = new EventEmitter<String>();
    // this.hasMDHint = true;
    // this.minCharCount = 10;
    // this.maxCharCount = 10;
    this.inputType = "myLabel";
//console.log(this.inputType);
  }

  ngOnInit() {

    //console.log("app input text");
    //console.log(this.formModel);
  }

  /*
   ngAfterViewInit() {

   // Another way to set attribute value to element
   // this.renderer.setElementAttribute(this.player, 'src', this.src);
   }*/

  /*
   updateValue(ev) {
   this.formModel = ev;
   this.myInputChange.emit(ev);
   }*/

}
