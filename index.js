
class Driver {
  
   constructor(name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate);
   }
   


   yearsExperienceFromBeginningOf(year) {
    
     let answer=parseInt(year)-this.startDate.getFullYear();
      return answer;  
   }
}
   class Route {
     
     constructor(beginningLocation, endLocation){
       this.beginningLocation = beginningLocation;
       this.endLocation = endLocation;
       
     }
     
     blocksTravelled(){
       let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
       this.beginningLocation.horizontal
     }
       
    
   }
