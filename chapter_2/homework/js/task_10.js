let elavator = {
    floor: 1,
    minFloor: 1,
    maxFloor: 16,

    printFloor: function(){
        console.log(`elevator on ${this.floor})floor`)
    },

    upOneFloor: function( floor) {
        if(this.floor < this.maxFloor){
            this.floor++
            this.printFloor();
        }else {
            console.log('Error');
        }
    },
    downOneFloor: function() {
        if(this.floor > this.minFloor){
            this.floor -- 
            this.printFloor();
        }else {
            console.log('Error');
        }
    },
    toFloor: function(floor) {
     if(floor < this.minFloor || floor > this.maxFloor)
        console.log('Error');
         }else {
             if(floor < this.floor){
                while(floor !== this.floor) {
                    this.downOneFloor();
                }
            }else if (floor > this.floor){
                while(floor !== this.floor)
            }
        
        }
    
}




}