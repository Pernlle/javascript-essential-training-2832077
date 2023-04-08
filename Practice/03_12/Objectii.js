class Objectii {
    constructor(
      length,
      colour,
      rightClick,
    ){
      this.length = length;
      this.colour = colour;
      this.rightClick = rightClick;
    }
    click(clicked) {
      this.rightClick = clicked;
    }
  }
  
  export default Objectii;
  