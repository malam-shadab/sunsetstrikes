import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <!-- Animated Background -->
      <div class="animated-bg">
        <div class="floating-particles">
          <div class="particle" *ngFor="let particle of particles; let i = index" 
               [style.animation-delay.s]="i * 0.3"></div>
        </div>
      </div>
      
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="glitch-text" data-text="SUNSET STRIKES">SUNSET STRIKES</span>
          </h1>
          <p class="hero-subtitle">Mysterious. Rare. Legendary.</p>
          <div class="hero-description">
            <p>Enter the world of Singapore's most enigmatic coins</p>
          </div>
          <button class="cta-button" (click)="navigateToAbout()">
            <span>DISCOVER THE MYSTERY</span>
            <div class="button-glow"></div>
          </button>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="features-section">
        <div class="feature-card" *ngFor="let feature of features; let i = index"
             [style.animation-delay.s]="i * 0.2">
          <div class="card-inner">
            <div class="card-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      position: relative;
      min-height: 100vh;
      overflow: hidden;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #002D5A 100%);
    }

    /* Animated Background */
    .animated-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .floating-particles {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #FF8C00;
      border-radius: 50%;
      animation: float 6s infinite ease-in-out;
      box-shadow: 0 0 10px #FF8C00, 0 0 20px #FF8C00, 0 0 30px #FF8C00;
    }

    .particle:nth-child(1) { top: 20%; left: 20%; animation-duration: 4s; }
    .particle:nth-child(2) { top: 60%; left: 70%; animation-duration: 5s; }
    .particle:nth-child(3) { top: 40%; left: 40%; animation-duration: 6s; }
    .particle:nth-child(4) { top: 80%; left: 20%; animation-duration: 7s; }
    .particle:nth-child(5) { top: 30%; left: 80%; animation-duration: 4.5s; }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
      50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      animation: fadeInUp 1s ease-out;
    }

    .hero-title {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 900;
      margin-bottom: 1rem;
      letter-spacing: 0.1em;
    }

    .glitch-text {
      position: relative;
      color: #FF8C00;
      text-shadow: 0 0 10px #FF8C00, 0 0 20px #FF8C00, 0 0 40px #FF8C00;
      animation: glow 2s ease-in-out infinite alternate;
    }

    .glitch-text::before,
    .glitch-text::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      animation: glitch 3s infinite;
    }

    .glitch-text::before {
      color: #00ff41;
      animation-delay: -0.1s;
    }

    .glitch-text::after {
      color: #ff0040;
      animation-delay: -0.2s;
    }

    @keyframes glitch {
      0%, 90%, 100% { transform: translate(0); }
      10% { transform: translate(-2px, 2px); }
      20% { transform: translate(2px, -2px); }
      30% { transform: translate(-2px, -2px); }
      40% { transform: translate(2px, 2px); }
      50% { transform: translate(-2px, 2px); }
      60% { transform: translate(2px, -2px); }
      70% { transform: translate(-2px, -2px); }
      80% { transform: translate(2px, 2px); }
    }

    @keyframes glow {
      from { text-shadow: 0 0 10px #FF8C00, 0 0 20px #FF8C00, 0 0 40px #FF8C00; }
      to { text-shadow: 0 0 20px #FF8C00, 0 0 30px #FF8C00, 0 0 60px #FF8C00; }
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: #ffffff;
      margin-bottom: 2rem;
      opacity: 0.9;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      animation: fadeInUp 1s ease-out 0.3s both;
    }

    .hero-description {
      margin-bottom: 3rem;
      animation: fadeInUp 1s ease-out 0.6s both;
    }

    .hero-description p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.8;
    }

    /* CTA Button */
    .cta-button {
      position: relative;
      padding: 1.2rem 3rem;
      background: linear-gradient(45deg, #FF8C00, #FF6B00);
      border: none;
      border-radius: 50px;
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease;
      animation: fadeInUp 1s ease-out 0.9s both;
      box-shadow: 0 8px 25px rgba(255, 140, 0, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(255, 140, 0, 0.5);
    }

    .button-glow {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s;
    }

    .cta-button:hover .button-glow {
      left: 100%;
    }

    /* Features Section */
    .features-section {
      position: relative;
      z-index: 10;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      animation: slideInUp 0.8s ease-out both;
      position: relative;
      overflow: hidden;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent, rgba(255, 140, 0, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .feature-card:hover::before {
      opacity: 1;
    }

    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 140, 0, 0.3);
    }

    .card-inner {
      position: relative;
      z-index: 2;
    }

    .card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #FF8C00;
      text-shadow: 0 0 20px #FF8C00;
    }

    .feature-card h3 {
      color: #ffffff;
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .feature-card p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    /* Scroll Indicator */
    .scroll-indicator {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      animation: bounce 2s infinite;
    }

    .scroll-arrow {
      width: 30px;
      height: 30px;
      border-right: 3px solid #FF8C00;
      border-bottom: 3px solid #FF8C00;
      transform: rotate(45deg);
      box-shadow: 0 0 10px #FF8C00;
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
      40% { transform: translateX(-50%) translateY(-10px); }
      60% { transform: translateX(-50%) translateY(-5px); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content {
        padding: 1rem;
      }
      
      .features-section {
        grid-template-columns: 1fr;
        padding: 2rem 1rem;
      }
      
      .cta-button {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  `],
  standalone: false
})
export class HomeComponent implements OnInit {
  particles = Array(5).fill(0);
  
  features = [
    {
      icon: '🏛️',
      title: 'Royal Heritage',
      description: 'Connected to the prestigious Royal Mint and Singapore Mint traditions'
    },
    {
      icon: '🔍',
      title: 'Ultra Rare',
      description: 'Spanning 1967-1981, these mysterious coins defy conventional minting'
    },
    {
      icon: '⚡',
      title: 'Off-Metal Strikes',
      description: 'Struck in unexpected metals, each piece rewrites numismatic rules'
    }
  ];

  ngOnInit() {
    // Add any initialization logic here
  }

  navigateToAbout() {
    // Navigation will be handled by router
    window.location.href = '/about';
  }
}