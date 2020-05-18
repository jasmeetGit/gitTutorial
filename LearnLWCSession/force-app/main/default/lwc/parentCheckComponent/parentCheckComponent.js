import { LightningElement,track } from 'lwc';

export default class ParentCheckComponent extends LightningElement {
    @track
    selectedValue ; 

    selectChecheckboxSelectHandlerckbox(){
        const childComp = this.template.querySelector('c-child-check-component');
        childComp.onCheckboxChange(this.selectedValue);
    }
    onInputChangeHandler(event){
        this.selectedValue = event.target.value;
    }
}