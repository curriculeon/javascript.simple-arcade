import { RobotWarGround } from "../main/RobotWarGround.mjs";

export function testWar() {
    // given
    let warGround = new RobotWarGround();

    // when    
    warGround.war();

    // then
    console.log(warGround.env)
}