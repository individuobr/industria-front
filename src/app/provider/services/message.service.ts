import { Injectable } from '@angular/core';
import { StompService, StompConfig, StompState } from "@stomp/ng2-stompjs";
import { Message } from "@stomp/stompjs";
import { Observable, BehaviorSubject } from "rxjs";
import { EndPoint } from '../util/end-point';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Observable<Message>;
  private stompService: StompService;

  constructor(streamUrl: string) {
    // Create Stomp Configuration
    let stompConfig: StompConfig = {
      url: EndPoint.SOCKET,
      headers: {
        login: "",
        passcode: ""
      },
      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: true
    };

    // Create Stomp Service
    this.stompService = new StompService(stompConfig);

    // Connect to a Stream
    this.messages = this.stompService.subscribe(streamUrl);
  }

  public stream(): Observable<Message> {
    return this.messages;
  }

  public send(url: string, message: any) {
    return this.stompService.publish(url, JSON.stringify(message));
  }

  public state(): BehaviorSubject<StompState> {
    return this.stompService.state;
  }
}
