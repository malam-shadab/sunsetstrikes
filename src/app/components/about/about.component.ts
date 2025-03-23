import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,  // Required to prevent NG6008 error
  template: `
    <div class="about-container">
      <h1 class="main-title">Singapore Sunset Strikes</h1>
      <div class="video-wrapper">
        <video #videoPlayer 
               autoplay 
               loop 
               muted 
               playsinline
               preload="auto"
               [muted]="true">
          <source src="assets/videos/sunset.mp4" type="video/mp4">
        </video>
      </div>
      <div class="content">
        <h2 class="text-2xl font-bold mb-4">What are Sunset Strikes</h2>
        <p>No one truly knows. Shrouded in mystery, these off-metal coins are among the most elusive pieces ever associated with the Singapore mint and the Royal mint. Whispers suggest they were never meant to see the light of the day - perhaps trial strikes, or even last minute impressions before dies were destroyed. Some speculate they were part of an inside operation known only to those in the position of highest power. 

Ranging from 1967 to 1981, across denominations from 5 cents to 1 dollar, these coins don't just bend the rules of minting, they re-write them. Struck in unexpected metals each piece holds a weight far beyond its face value. They are not just rare, they are relics of a time, a process, and a secret that no official record dares to confirm.

These are the Sunset Strikes: modern treasure hidden in plain sight.</p>
      </div>
      <div class="image-wrapper">
        <img src="assets/images/sunset-strike.png" alt="Sunset Strike Coin" class="coin-image">
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      width: 100%;
      overflow: hidden;
      min-height: 100vh;
      background: linear-gradient(135deg, #00208A 0%, #001875 50%, #002D5A 100%);
      padding-top: 2rem;
    }
    .main-title {
      text-align: center;
      color: #FF8C00;
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 2rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .video-wrapper {
      width: 90%;
      position: relative;
      padding-bottom: 50.625%;
      background: #000;
      margin: 0 auto 2rem auto;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      border-radius: 8px;
    }
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content {
      width: 85%;  /* Slightly narrower than video-wrapper */
      padding: 2.5rem;
      text-align: center;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border: 1px solid rgba(255, 255, 255, 0.18);
      color: rgba(255, 255, 255, 0.95);
    }
    h2 {
      color: #FF8C00;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 2rem;
      font-weight: 800;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      font-size: 2.5rem;
    }
    p {
      line-height: 2;
      font-size: 1.2rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      letter-spacing: 0.05em;
    }
    .image-wrapper {
      width: 85%;
      margin: 2rem auto;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      padding: 1rem;
    }

    .coin-image {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      display: block;
    }
  `]
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    video.muted = true; // Ensure muted state
    
    const playVideo = () => {
      video.play().catch(error => {
        console.warn('Video autoplay failed:', error);
        // Retry after a short delay
        setTimeout(playVideo, 1000);
      });
    };

    // Start playing with initial delay
    setTimeout(playVideo, 100);
  }
}