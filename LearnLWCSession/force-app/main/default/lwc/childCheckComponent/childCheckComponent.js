import { LightningElement,api, track} from 'lwc';

export default class ChildCheckComponent extends LightningElement {
    @track value = ['red'];
    options = [
        {label:'Red Color',value:'Red'},
        {label:'Blue Color',value:'Blue'},
        {label:'Green Color',value:'Green'},
        {label:'Yellow Color',value:'Yellow'}
    ];
    @api
    onCheckboxChange(checkValue){
        const selectedCheckbox = this.options.find( checkbox =>{
            return checkValue === checkbox.value;
        })
        //alert(selectedCheckbox.labe);
        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "Successfully checked";
        }

    }
}