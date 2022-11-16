import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';

@WebSocketGateway({ cors: true })
export class ChatGateWay {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('handleMessage')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('messages', message);
  }
}
