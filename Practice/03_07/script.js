/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const mouse = {
  length: 10,
  bredth: 7,
  color: "black",
  rightClick: true,
  leftClick: true,
  backClick: true,
  middleRollerClick: false,
  batteries: {
    aaBatteries: true,
  },
};
console.log(mouse);
