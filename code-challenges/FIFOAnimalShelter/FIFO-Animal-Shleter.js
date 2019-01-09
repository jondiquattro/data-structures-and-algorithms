

class AnimalShelter{
    constructor(){
      this.pets =['fish', 'dog','lamb', 'goat', 'turtle'];
      this.front = this.pets[0];
      this.last = this.pets[this.pets.length];
    }
    enqueue(obj){
      this.pets.push(obj);
      // console.log(this.pets);
    }
    
    dequeue(pref){
      if (pref != 'dog'&&'cat'){
        // console.log('trues')
        return null;
      }
      let value = 0;
      let idx = 0;
    
      for(let i = 0; i<this.pets.length; i++){
        //   console.log(this.pets.length);
        // console.log(this.pets[i]===pref);
        // console.log(this.pets[i], pref)
    
    
        if(this.pets[i]==pref){
          // console.log('true')
          idx = i;
          value = this.pets[i];
          // return value;
    
        }
      }
    for(let i =idx; i<this.pets.length; i++){
      console.log(i);
      this.pets[idx]=this.pets[i];
      idx ++;
    }
    this.pets[this.pets.length]=undefined;
    this.last = this.pets.length -1;
    
    return value;
    
    }
    
    }
    
    let obj = 'dog';
    
    let shelter = new AnimalShelter();
    // shelter.enqueue(obj);
    console.log(shelter.dequeue(obj));
    console.log(shelter.pets)
    
    
    