export interface ActionLog {
  seqID: string ;
  title: string ;
  severity: string ;
  description: string ;
  solution: string ;
}
export interface ActionsByApp {
  AppName: string ;
  ActionNum: string ;
  Def: string ;
}
export interface ActionsBySeverity {
  Severity: string ;
  ActionNum: string ;
  Def: string ;
}
