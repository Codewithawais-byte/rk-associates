import React, { useState, useEffect, useRef } from "react";

/* ─── GOOGLE FONT IMPORT ─── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');
 
    :root {
      --navy:   #0B1628;
      --navy2:  #111E35;
      --navy3:  #1A2B47;
      --gold:   #C9A84C;
      --gold2:  #E2C27D;
      --gold3:  #F5E6C0;
      --white:  #F8F6F1;
      --muted:  #8B99B5;
      --card:   #141F34;
    }
 
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background: var(--navy); color: var(--white); font-family: 'Montserrat', sans-serif; }
 
    .font-display { font-family: 'Cormorant Garamond', serif; }
 
    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes pulse-ring {
      0%   { transform: scale(1);   opacity: .6; }
      100% { transform: scale(1.6); opacity: 0; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-10px); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
 
    .fade-up { animation: fadeUp .8s ease forwards; }
    .fade-up-delay-1 { animation: fadeUp .8s .2s ease both; }
    .fade-up-delay-2 { animation: fadeUp .8s .4s ease both; }
    .fade-up-delay-3 { animation: fadeUp .8s .6s ease both; }
    .fade-up-delay-4 { animation: fadeUp .8s .8s ease both; }
 
    .gold-shimmer {
      background: linear-gradient(90deg, var(--gold), var(--gold2), var(--gold), var(--gold2));
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 4s linear infinite;
    }
 
    /* ── Nav ── */
    .nav-glass {
      backdrop-filter: blur(16px);
      background: rgba(11, 22, 40, 0.88);
      border-bottom: 1px solid rgba(201,168,76,.15);
    }
    .nav-link {
      position: relative;
      color: var(--muted);
      text-decoration: none;
      font-size: .75rem;
      font-weight: 500;
      letter-spacing: .12em;
      text-transform: uppercase;
      transition: color .3s;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px; left: 0;
      width: 0; height: 1px;
      background: var(--gold);
      transition: width .3s;
    }
    .nav-link:hover { color: var(--gold2); }
    .nav-link:hover::after { width: 100%; }
 
    /* ── Hero ── */
    .hero-bg {
      background:
        radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,.08) 0%, transparent 65%),
        radial-gradient(ellipse 60% 80% at 20% 80%, rgba(26,43,71,.9) 0%, transparent 60%),
        linear-gradient(160deg, #0B1628 0%, #111E35 50%, #0B1628 100%);
    }
    .hero-grid {
      background-image:
        linear-gradient(rgba(201,168,76,.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201,168,76,.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .stat-card {
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(201,168,76,.12);
      transition: border-color .3s, background .3s;
    }
    .stat-card:hover {
      border-color: rgba(201,168,76,.4);
      background: rgba(201,168,76,.06);
    }
 
    /* ── Buttons ── */
    .btn-gold {
      background: linear-gradient(135deg, var(--gold) 0%, var(--gold2) 100%);
      color: var(--navy);
      font-family: 'Montserrat', sans-serif;
      font-size: .7rem;
      font-weight: 700;
      letter-spacing: .15em;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      transition: transform .2s, box-shadow .3s, opacity .2s;
      box-shadow: 0 4px 24px rgba(201,168,76,.25);
    }
    .btn-gold:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(201,168,76,.4);
    }
    .btn-outline {
      background: transparent;
      color: var(--gold);
      font-family: 'Montserrat', sans-serif;
      font-size: .7rem;
      font-weight: 600;
      letter-spacing: .15em;
      text-transform: uppercase;
      border: 1px solid rgba(201,168,76,.5);
      cursor: pointer;
      transition: all .3s;
    }
    .btn-outline:hover {
      background: rgba(201,168,76,.1);
      border-color: var(--gold);
    }
 
    /* ── Property Cards ── */
    .prop-card {
      background: var(--card);
      border: 1px solid rgba(201,168,76,.1);
      transition: transform .35s, box-shadow .35s, border-color .35s;
      overflow: hidden;
    }
    .prop-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 48px rgba(0,0,0,.4);
      border-color: rgba(201,168,76,.35);
    }
    .prop-img {
      overflow: hidden;
      position: relative;
    }
    .prop-img img { transition: transform .5s ease; width: 100%; display: block; }
    .prop-card:hover .prop-img img { transform: scale(1.06); }
    .prop-badge {
      font-size: .6rem;
      font-weight: 700;
      letter-spacing: .12em;
      text-transform: uppercase;
    }
 
    /* ── Plot Cards ── */
    .plot-card {
      background: var(--card);
      border: 1px solid rgba(201,168,76,.1);
      position: relative;
      transition: all .3s;
    }
    .plot-card:hover {
      border-color: rgba(201,168,76,.4);
      box-shadow: 0 12px 40px rgba(0,0,0,.3);
    }
    .plot-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      opacity: 0;
      transition: opacity .3s;
    }
    .plot-card:hover::before { opacity: 1; }
 
    /* ── Section Headers ── */
    .section-tag {
      font-size: .65rem;
      font-weight: 700;
      letter-spacing: .25em;
      text-transform: uppercase;
      color: var(--gold);
    }
    .divider-gold {
      width: 48px; height: 2px;
      background: linear-gradient(90deg, var(--gold), var(--gold2));
    }
 
    /* ── Contact ── */
    .input-field {
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(201,168,76,.15);
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
      font-size: .8rem;
      outline: none;
      transition: border-color .3s, background .3s;
      width: 100%;
    }
    .input-field::placeholder { color: var(--muted); }
    .input-field:focus {
      border-color: var(--gold);
      background: rgba(201,168,76,.05);
    }
 
    /* ── Footer line ── */
    .footer-border { border-top: 1px solid rgba(201,168,76,.12); }
 
    /* ── Scroll reveal ── */
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
 
    /* ── Mobile menu ── */
    .mobile-menu {
      background: rgba(11,22,40,.98);
      border-top: 1px solid rgba(201,168,76,.12);
    }
  `}</style>
);

export default FontLink;
