/**
 * The purpose of this function is to return the corresponding description according to the input traffic signal light state.
 * You need to use the enum of TypeScript to define the status of the traffic signal light and return the corresponding description in the function.
 * ENUM should contain three states: Red, Yellow and Green, and correspond to the three string of 'Red', 'YELLOW' and 'Green'.
 *
 * Example:
 * Enter: trafficlight.red.red
 * Output: 'The Traffic Light is Red'
 */

// * 這個函式的目的是根據輸入的交通信號燈狀態返回對應的描述。
// * 你需要使用 TypeScript 的 Enum 來定義交通信號燈的狀態，並在函式中返回對應的描述。
// * Enum 應該包含 Red、Yellow 和 Green 三種狀態，並分別對應到 'Red'、'Yellow' 和 'Green' 三個字串。
// *
// * 範例:
// * 輸入: TrafficLight.Red
// * 輸出: 'The traffic light is Red'

export enum TrafficLight {
  Red = "Red",
  Yellow = "Yellow",
  Green = "Green",
}
export function getTrafficLightStatus(light: String) {
  switch (light) {
    case TrafficLight.Red:
      return "The traffic light is Red";
    case TrafficLight.Yellow:
      return "The traffic light is Yellow";
    case TrafficLight.Green:
      return "The traffic light is Green";
    default:
      return "Red means, STOP. Green means, GO. Yellow means, DRIVE VERY SLOW.";
  }
}
