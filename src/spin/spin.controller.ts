import { Body, Controller, Post } from '@nestjs/common';

@Controller('spin')
export class SpinController {

  @Post()
  spin(@Body() body) {
    const coefficient = Math.floor(Math.random() * (37));
    let totalAmount = 0;
    const {activeBalance, fullAmount} = body;

    if (body) {
      body.betInfo.map(bet => {
        if (bet.betType === coefficient) {
          totalAmount += bet.betAmount * 36;
        } else if (
          (bet.betType === 'even' && coefficient % 2 === 0)
          ||
          (bet.betType === 'odd' && coefficient % 2 !== 0)
        ) {
          totalAmount += bet.betAmount * 2;
        }
      });
    }

    console.log(body.betInfo);
    return {totalAmount, coefficient, newBalance: activeBalance-fullAmount+totalAmount};
  }
}
