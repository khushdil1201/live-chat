import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/chat')
  @Render('index')
  Home(): string {
    return;
  }

  @Get('/api/chat')
  async getMessages(@Res() res) {
    const messages = await this.appService.getMessages();
    res.json(messages);
  }
}
