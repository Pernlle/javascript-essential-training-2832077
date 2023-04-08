class Mouse {
  constructor(
    length,
    bredth,
    colour,
    rightClick,
    leftClick,
    backClick,
    middleRollerClick,
    batteries
  ) {
    this.length = length;
    this.bredth = bredth;
    this.colour = colour;
    this.rightClick = rightClick;
    this.leftClick = leftClick;
    this.backClick = backClick;
    this.middleRollerClick = middleRollerClick;
    this.batteries = batteries;
  }
  click(clicked) {
    this.rightClick = clicked;
    this.leftClick = clicked;
    this.backClick = clicked;
    this.middleRollerClick = clicked;
  }
}

export default Mouse;
