export class Satellite {
    name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;
needsWarning: boolean;
// shouldShowWarning: 

shouldShowWarning(){
    
    if (this.type.toUpperCase() === 'SPACE DEBRIS') {
        return true;

    } else {
        return false;
    }
}


constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name;
    this.type = type;
    this.orbitType = orbitType;
    this.operational = operational
    this.launchDate = launchDate;
    this.needsWarning = this.shouldShowWarning();
    // this.shouldShowWarning();

}
}

