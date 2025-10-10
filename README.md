# YouTube Premium Phishing Page

![YouTube Premium](https://brandlogos.net/wp-content/uploads/2022/08/youtube_premium-logo_brandlogos.net_lmczv-512x512.png)

## ⚠️ Educational Purpose Only

This project is created **strictly for educational and security research purposes**. It demonstrates how phishing attacks work to help people recognize and protect themselves from such threats.

**WARNING:** Using this for actual phishing or unauthorized data collection is illegal and unethical. This repository is meant to:
- Educate about phishing techniques
- Help security professionals understand attack vectors
- Train users to recognize fake login pages
- Demonstrate web security vulnerabilities

## 📋 Project Overview

A realistic replica of YouTube Premium's subscription pages, including:
- Landing page with Premium features
- Google sign-in page
- Payment information page
- Responsive design for mobile and desktop

## ✨ Features Demonstrated

### YouTube Premium Features (2025)
- **Ad-Free Viewing** - No interruptions across all devices
- **Background Play** - Listen with screen off or while using other apps
- **Offline Downloads** - Save videos and music for offline viewing
- **YouTube Music Premium** - Full access to ad-free music streaming
- **Picture-in-Picture** - Watch in a floating window while multitasking
- **High-Quality Audio** - 256kbps audio on music videos
- **Jump Ahead** - Skip to the most popular parts of videos
- **1080p Premium** - Enhanced bitrate for sharper video quality

### Current Pricing (2025)
- **Individual Plan**: $13.99/month
- **Family Plan**: $22.99/month (up to 6 accounts)
- **Student Plan**: $7.99/month (with verification)
- **Premium Lite**: $7.99/month (ad-free only, no downloads)

## 🛠️ Technical Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling and animations
- **JavaScript** - Interactive elements and form handling
- **Bootstrap 4** - Responsive grid system
- **Firebase** - Backend data storage (for demonstration)
- **Google Fonts** - Roboto and Open Sans typography

## 📁 File Structure

```
youtube-phishing-page/
├── index.html          # Main landing page
├── signin.html         # Google account sign-in page
├── payment.html        # Payment information page
├── style.css           # Main stylesheet
├── main.js             # JavaScript functionality
├── img/                # Image assets
│   ├── googlePNG.png
│   ├── ytr_lp2_logo_premium_desktop_552x71.png
│   ├── G_pay.png
│   └── [other images]
└── README.md           # This file
```

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/pinkythegawd/youtube-phishing-page.git
   cd youtube-phishing-page
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Configure Firebase (Optional)**
   - Replace Firebase config in `signin.html` and `payment.html`
   - Set up your own Firebase project for testing

## 🎨 Customization

### Update Images
Replace images in the `img/` folder with your own:
- Premium feature screenshots
- Logo variations
- Background images
- Payment method icons

### Modify Styling
Edit `style.css` to change:
- Color schemes
- Typography
- Layout and spacing
- Animations and transitions

### Update Content
Modify HTML files to update:
- Feature descriptions
- Pricing information
- Terms and conditions
- FAQ sections

## 🔒 Security Considerations

This project demonstrates several security vulnerabilities:

1. **Fake SSL/HTTPS** - Phishing sites often use similar-looking URLs
2. **Form Data Collection** - Credentials sent to unauthorized servers
3. **Social Engineering** - Mimicking trusted brands to gain trust
4. **Redirect Chains** - Multiple pages to appear legitimate

### How to Protect Yourself:
- ✅ Always check the URL carefully (look for https://www.youtube.com)
- ✅ Verify SSL certificates
- ✅ Use password managers that auto-fill only on legitimate sites
- ✅ Enable two-factor authentication
- ✅ Be suspicious of unsolicited emails with links

## 📊 Latest Updates (2025)

### New Features Added:
- High-quality 256kbps audio for music videos
- Picture-in-Picture for YouTube Shorts on iOS
- Smart Downloads for Shorts
- Jump Ahead feature on web browsers
- Faster playback speeds up to 4x on mobile
- Google One Premium bundle option

### Pricing Changes:
- Individual plan: $13.99/month (or $139.99/year)
- New two-person plan pilot: $7.99/month
- Premium Lite expansion to more countries
- Student verification now required annually

## 🤝 Contributing

Contributions are welcome for educational improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add educational content'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is provided for educational purposes only. Use responsibly and ethically.

## 👨‍💻 Author

**MikePinku** <3

## 🙏 Acknowledgments

- YouTube for the original design inspiration
- Security researchers who help identify and prevent phishing attacks
- The cybersecurity community for ongoing education efforts

## 📚 Educational Resources

Learn more about phishing and online security:
- [Google's Phishing Quiz](https://phishingquiz.withgoogle.com/)
- [Anti-Phishing Working Group](https://apwg.org/)
- [OWASP Security Guidelines](https://owasp.org/)
- [FTC Consumer Information](https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams)

---

**Remember:** This is for educational purposes only. Never use this for malicious activities. Stay ethical, stay legal.

[![Built with Love](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
