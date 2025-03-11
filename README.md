# Spotify by the Numbers

A sleek, interactive dashboard for visualizing your Spotify listening history. Upload your Spotify data and get beautiful visualizations of your listening habits.

![Spotify by the Numbers](https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🚀 Features

- 📊 Interactive visualizations of your Spotify listening data
- 🎧 View your top artists and tracks
- 📅 See listening patterns by hour and month
- 🔍 Zoom and pan through your listening history with interactive sliders
- 🌓 Light/Dark theme toggle
- 📱 Fully responsive design

## 📋 Prerequisites

- Node.js (v16.x or later)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/spotify-by-the-numbers.git
cd spotify-by-the-numbers
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 🧪 How to Use

1. Export your Spotify data:
   - Go to your [Spotify Account](https://www.spotify.com/account/privacy/) page
   - Click on "Download your data"
   - Wait for the email (this can take up to 30 days)
   - Download and extract the ZIP file

2. Upload your data to the app:
   - Look for JSON files in the `MyData` folder, particularly files named like `StreamingHistory*.json`
   - Click the upload button in the app and select one of these files

3. Explore your listening data:
   - View your top artists and tracks
   - Use the time sliders to zoom in on specific periods
   - Toggle between light and dark themes as needed

## 🧰 Tech Stack

- ⚛️ React
- 📊 Recharts for data visualization
- 🎨 TailwindCSS for styling
- 🔄 Framer Motion for animations
- 📦 Vite for fast development and building

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/spotify-by-the-numbers/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgements

- [Spotify](https://www.spotify.com/) for providing user data export
- [Recharts](https://recharts.org/) for the excellent charting library
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the animation library 