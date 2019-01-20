
class AnimalShelter{
    constructor(arr){
      this.pets =arr;
      this.front = this.pets[0];
      this.last = this.pets[this.pets.length];
    }
    enqueue(obj){
      this.pets.push(obj);
      // console.log(this.pets);
    }
    
    dequeue(pref){
      if (pref != 'dog'&&'cat'){
        console.log('trues')
        return null;
      }
      let value = 0;
      let idx = 0;
    
      for(let i = 0; i<this.pets.length; i++){    
    
        if(this.pets[i]==pref){
          // console.log('true')
          idx = i;
          value = this.pets[i];
          // return value;
    
        }
      }

    for(let i =idx; i<this.pets.length; i++){
      this.pets[idx]=this.pets[i+1];
      idx ++;
    }
    this.pets[this.pets.length-1]=null;
    this.pets.length = this.pets.length -1;
    return value;
    
    }
    
    }
    let obj = 'dog';
    

 
    module.exports = AnimalShelter;
    
    