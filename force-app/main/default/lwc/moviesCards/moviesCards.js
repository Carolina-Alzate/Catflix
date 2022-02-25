import Description from '@salesforce/schema/Account.Description';
import { LightningElement } from 'lwc';

export default class MoviesCards extends LightningElement {
    
    movie = {
        Name:'Uncharted',
        // Description__c:"Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sully Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.",
        Format__c:"Digital Copy",
        Image_Url__c:"https://pics.filmaffinity.com/Uncharted-668430180-large.jpg"
    };
}