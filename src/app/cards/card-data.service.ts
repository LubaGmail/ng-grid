import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() { }
  
  cards = [
    {
      cardId: 1,
      htmlId: 'one',
      title: 'Processing_Orders',
      icon: '../assets/images/t-box.png',
      headerClass: 'card-header text-center bg-info text-white',
      footerClass: 'card-footer text-center bg-info text-white au-footer ',
      pillboxClass: 'badge badge-pill bg-info text-white',
      items: 15,
      summary: 'NCI-supplied agents may be requested by the Principal Investigator (or their authorized designee) '
      + ' Pharmaceutical Management Branch (PMB) policy requires that agent be shipped directly to the institution where the patient is to be treated. '
 
    },
    {
      cardId: 2,
      htmlId: 'two',
      title: 'Shipped_Orders',
      icon: '<i class="fa fa-truck" aria-hidden="true"></i>',
      headerClass: 'card-header text-center bg-success text-white',
      footerClass: 'card-footer text-center bg-success text-white au-footer',
      pillboxClass: 'badge badge-pill bg-success text-white',
      items: 2,
      summary: 'Investigational agents are supplied by the Division of Cancer Treatment and Diagnosis (DCTD) of NCI through the Pharmaceutical '
      + 'Management Branch (PMB). '
    },
    {
      cardId: 3,
      htmlId: 'three',
      title: 'Agent Transfers',
      icon: '../assets/images/t-transfer.png',
      headerClass: 'card-header text-center bg-secondary text-white',
      footerClass: 'card-footer text-center bg-secondary text-white au-footer',
      pillboxClass: 'badge badge-pill bg-secondary text-white',
      items: 5,
      summary: 'PMB-supplied agents may be transferred from a DCTD sponsored protocol to another DCTDsponsored protocol for the same ' 
      + 'investigator or between eligible investigators within the same institution, also called an intra-institutional transfer. '
      + 'Transferring agents is not the same as transporting, which is moving agents back and forth between the control dispensing area and '
      + 'the satellite dispensing area, which does not require a formal transfer request.'
    },
    {
      cardId: 4,
      htmlId: 'four',
      title: 'Agent returns',
      icon: '',
      headerClass: 'card-header text-center bg-primary text-white',
      footerClass: 'card-footer text-center bg-primary text-white au-footer',
      pillboxClass: 'badge badge-pill bg-primary text-white',
      items: 5,
      summary: ' If the excess supply cannot be transferred, it must be returned to the NCI Clinical Repository. ' 
    }
  ];
  
  getCardData(x) {
    console.log(x + ' Get data from dB');
  }
}
