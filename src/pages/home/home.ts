import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlueJeans } from "../../bj";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("localVideo")
  localVideo: ElementRef;
  @ViewChild("remoteVideo")
  remoteVideo: ElementRef;


  constructor(
    public navCtrl: NavController,
    private bj: BlueJeans
  ) {
  }


  start() {
    this.bj.init(this.localVideo, this.remoteVideo);
    this.bj.startLocalStream();
    this.bj.joinMeeting({
      numericMeetingId: 8636602249,
      attendeePasscode: 4191,
      displayName: "Mobile User"
    });
  }

}
