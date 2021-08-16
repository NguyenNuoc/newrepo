
type Guid = string & { isGuid: true};
//import { Guid } from "guid-typescript";

export interface Medlem {
  medlem_Id: Guid;
  fornavn: string;
  etternavn: string;
  //kontingent?: Kontingent;
  bosted?: string;
  mobilTlf: number;  
  email: string;
  fodselsdato: Date;  
  currentKontiId?: number;
}   

     