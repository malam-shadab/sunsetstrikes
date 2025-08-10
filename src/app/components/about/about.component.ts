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
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #002D5A 100%);
      padding-top: 2rem;
      position: relative;
    }

    .about-container::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 20%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 40% 60%, rgba(255, 0, 128, 0.05) 0%, transparent 50%);
      z-index: 1;
      pointer-events: none;
    }

    .main-title {
      position: relative;
      z-index: 10;
      text-align: center;
      color: #FF8C00;
      font-size: clamp(2rem, 5vw, 4rem);
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 3rem;
      text-shadow: 
        0 0 10px #FF8C00,
        0 0 20px #FF8C00,
        0 0 40px #FF8C00,
        0 0 80px #FF8C00;
      animation: titlePulse 3s ease-in-out infinite;
    }

    @keyframes titlePulse {
      0%, 100% { 
        text-shadow: 
          0 0 10px #FF8C00,
          0 0 20px #FF8C00,
          0 0 40px #FF8C00;
      }
      50% { 
        text-shadow: 
          0 0 20px #FF8C00,
          0 0 30px #FF8C00,
          0 0 60px #FF8C00,
          0 0 100px #FF8C00;
      }
    }

    .video-wrapper {
      position: relative;
      z-index: 10;
      width: 90%;
      max-width: 1000px;
      position: relative;
      padding-bottom: 50.625%;
      background: #000;
      margin: 0 auto 3rem auto;
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.8),
        0 0 0 1px rgba(255, 140, 0, 0.2),
        inset 0 0 0 1px rgba(255, 140, 0, 0.1);
      border-radius: 20px;
      overflow: hidden;
      animation: videoFloat 6s ease-in-out infinite;
    }

    @keyframes videoFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .video-wrapper::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #FF8C00, transparent, #FF8C00);
      border-radius: 20px;
      z-index: -1;
      animation: borderGlow 3s linear infinite;
    }

    @keyframes borderGlow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 18px;
    }

    .content {
      position: relative;
      z-index: 10;
      width: 85%;
      max-width: 900px;
      padding: 3rem;
      text-align: center;
      margin: 0 auto 3rem auto;
      background: 
        linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
      backdrop-filter: blur(20px);
      border-radius: 25px;
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 0 0 1px rgba(255, 140, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.95);
      animation: contentSlide 1s ease-out;
      position: relative;
      overflow: hidden;
    }

    .content::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.1), transparent);
      animation: shimmer 3s infinite;
    }

    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    @keyframes contentSlide {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    h2 {
      position: relative;
      z-index: 2;
      color: #FF8C00;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-bottom: 2rem;
      font-weight: 800;
      text-shadow: 
        0 0 10px #FF8C00,
        0 0 20px #FF8C00;
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      animation: textGlow 2s ease-in-out infinite alternate;
    }

    @keyframes textGlow {
      from { text-shadow: 0 0 10px #FF8C00, 0 0 20px #FF8C00; }
      to { text-shadow: 0 0 20px #FF8C00, 0 0 30px #FF8C00, 0 0 40px #FF8C00; }
    }

    p {
      position: relative;
      z-index: 2;
      line-height: 2;
      font-size: clamp(1rem, 2.5vw, 1.2rem);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
    }

    .image-wrapper {
      position: relative;
      z-index: 10;
      width: 85%;
      max-width: 700px;
      margin: 3rem auto;
      background: 
        linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
      backdrop-filter: blur(20px);
      border-radius: 25px;
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 140, 0, 0.2);
      overflow: hidden;
      padding: 2rem;
      animation: imageFloat 8s ease-in-out infinite;
    }

    @keyframes imageFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-5px) rotate(0.5deg); }
      50% { transform: translateY(0px) rotate(0deg); }
      75% { transform: translateY(-3px) rotate(-0.5deg); }
    }

    .coin-image {
      width: 100%;
      height: auto;
      border-radius: 15px;
      display: block;
      transition: transform 0.5s ease;
      filter: drop-shadow(0 10px 30px rgba(255, 140, 0, 0.3));
    }

    .image-wrapper:hover .coin-image {
      transform: scale(1.05) rotate(5deg);
      filter: drop-shadow(0 15px 40px rgba(255, 140, 0, 0.5));
    }

    /* Navigation enhancement */
    .nav-container {
      position: fixed;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(20px);
      border-radius: 50px;
      padding: 1rem 2rem;
      border: 1px solid rgba(255, 140, 0, 0.2);
    }

    .nav-link {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      border-radius: 25px;
      transition: all 0.3s ease;
      font-weight: 500;
      letter-spacing: 0.05em;
    }

    .nav-link:hover {
      color: #FF8C00;
      background: rgba(255, 140, 0, 0.1);
      transform: translateY(-2px);
    }

    /* Responsive enhancements */
    @media (max-width: 768px) {
      .content {
        width: 95%;
        padding: 2rem 1.5rem;
      }
      
      .image-wrapper {
        width: 95%;
        padding: 1.5rem;
      }
      
      .video-wrapper {
        width: 95%;
        margin-bottom: 2rem;
      }
      
      .main-title {
        margin-bottom: 2rem;
      }
    }

    @media (max-width: 480px) {
      .content {
        padding: 1.5rem 1rem;
      }
      
      .image-wrapper {
        padding: 1rem;
      }
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