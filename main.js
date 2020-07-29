const Ray = function () {
    const ray = {
        length: 0,

        push: function (value) {
            this[this.length] = value
            //   ✓ increments the length by 1
            this.length = this.length + 1;

        },

        pop: function () {

            const lastIndex = this.length - 1;

            const toBeRemoved = this[lastIndex]
            //      ✓ removes the value at the highest used number key      
            delete this[lastIndex]


            //      ✓ decrements the length by 1
            this.length = this.length - 1;

            return toBeRemoved;

        },

        includes: function (value) {
            //      loop through each key from 0 until this.lenght
            for (let i = 0; i < this.length; i++) {

                //       compare each key's value to the value we're looking for
                //      if we do find the value, return true
                if (this[i] === value) {
                    return true
                }
            }
            //      if we loop thriugh the while way and never find the value/,,,
            //  ...return false
            return false
        },

        indexOf: function (value) {
            //get the index number value
            for (let key = 0; key < this.length; key++) {

                if (value === this[key]) {
                    return key
                }
            }
            return -1
        },
        //      ✓ is a method
        shift: function () {
            const removed = this[0];

            for (let i = 0; i < this.length -1; i ++){
                this[i] = this[i + 1];
            }
            delete this[this.length -1]
            this.length --;

            return removed
        },


        unshift: function (value) {

            for(let i = this.length; i >=1; i --){
                this[i] = this[i -1];
            }
            this[0] = value;

            this.length ++
        }
    }
    return ray;
}





module.exports = Ray


