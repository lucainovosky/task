export class AddWork {

  constructor(
    public taskName : string,
    public employes : string,
    public dateStart : Date,
    public dateEnd : Date,
    public priority : string,
    public involvedPeople : number,
    public state : string,
    public progress : number,
  ) { }

}
