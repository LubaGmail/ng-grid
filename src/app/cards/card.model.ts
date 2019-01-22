export class Card {
   
    constructor(
        public cardId: number,
        public htmlId: string,
        public title: string,
        public icon: string,
        public headerClass: string,
        public footerClass: string,
        public pillboxClass: string,
        public items: number,
        public summary: string

    ){}
}
