import { Injectable, ElementRef , EventEmitter} from "@angular/core";

declare const bj: any;
@Injectable()
export class BlueJeans {
  init(sourElem: ElementRef, remoteElem: ElementRef,bandWidth:Number=4096) {
    bj.initialize({
      localVideoEl: sourElem.nativeElement,
      remoteVideoEl: remoteElem.nativeElement,
      bandWidth: bandWidth,
      devices: bj.BJN.localDevices,
      evtVideoUnmute: null,
      evtRemoteConnectionStateChange:null, 
      evtLocalConnectionStateChange:null, 
      evtOnError:null
    });
  }
  startLocalStream(){
    bj.startLocalStream();
  }
  joinMeeting(params){
    bj.joinMeeting(params);
  }


}