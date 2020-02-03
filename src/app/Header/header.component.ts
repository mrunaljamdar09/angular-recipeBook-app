
import {Component, EventEmitter, Output} from '@angular/core'

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'

})

export class HeaderComponent{
    // from child to listen to parent component(app.component.html). 
   @Output() featureSelected =  new EventEmitter<string>();  

    
    onSelect(feature:string){
        this.featureSelected.emit(feature)

    }

}