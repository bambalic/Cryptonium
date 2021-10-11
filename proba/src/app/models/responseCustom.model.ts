export class ResponseCustom{

  public BID:number;
  public BID_SIZE:number;
  public ASK:number;
  public ASK_SIZE:number;
  public DAILY_CHANGE:number;
  public DAILY_CHANGE_RELATIVE:number;
  public LAST_PRICE:number;
  public VOLUME:number;
  public HIGH:number;
  public LOW:number;

constructor(niz:any){
  // console.log(niz);

  this.BID=niz[0];

  this.BID_SIZE=niz[1];
  this.ASK=niz[2];

  this.ASK_SIZE=niz[3];
  this.DAILY_CHANGE=niz[4];
  this.DAILY_CHANGE_RELATIVE=niz[5];
  this.LAST_PRICE=niz[6];
  this.VOLUME=niz[7];
  this.HIGH=niz[8];
  this.LOW=niz[9];

}
}
