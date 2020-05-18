import { LightningElement, track } from 'lwc';
import Unslected_LOGO from '@salesforce/resourceUrl/unslected_logo';
import Selected_LOGO from '@salesforce/resourceUrl/selected_logo';
import Reserved_LOGO from '@salesforce/resourceUrl/reserved_logo';
import Movie_LOGO from '@salesforce/resourceUrl/Avengers';
export default class App extends LightningElement {
    /**
     * @track indicates that if this object changes,
     * the UI should update to reflect those changes.
     */
    @track rowNumber = [1,2,3];
    @track seatNumber = ['seat1','seat2','seat3','seat4','seat5','seat6','seat7','seat8','seat8','seat8','seat8'];
    @track totalAmount = 'Pay 100';
    movieLogo = Movie_LOGO;
    selectedLogo= Selected_LOGO;
    unselectedLogo = Unslected_LOGO;
    reservedLogo = Reserved_LOGO;
    //seatIcon = 
    @track
    cssClass = 'slds-card-div-unselected';

    handleToggleClick(event) {
      console.log('1');
      if(event.target.parentElement.classList.contains("slds-card-div-unselected")){
        console.log('2');
        event.target.parentElement.classList.remove('slds-card-div-unselected');
        event.target.parentElement.classList.add('slds-card-div-selected');
      }
      else if(event.target.parentElement.classList.contains('slds-card-div-selected')){
        console.log('3');
        event.target.parentElement.classList.remove('slds-card-div-selected');
        event.target.parentElement.classList.add('slds-card-div-unselected');
      }  
    }    
}
