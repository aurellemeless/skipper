# Skipper

Skipper is a simple Chrome extension that allows you to control the playback speed of HTML5 videos on any webpage. With just a few clicks, you can easily speed up or slow down videos to suit your needs, whether you're watching educational content or entertainment.

## Features

- Adjust video playback speed directly from the popup interface.
- Supports multiple speed options: 1x and 16x,
- Works on any webpage containing HTML5 videos, including popular platforms like YouTube, Vimeo, and more.
- Easy to install and use.

## Installation

To install and use Skipper on your Chrome browser, follow these steps:

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click on **Load unpacked** and select the folder containing this project.
5. The Skipper extension will appear in your toolbar, and you're ready to use it.

## Usage

1. Open any webpage containing an HTML5 video (e.g., YouTube, Vimeo, or any other video platform).
2. Click on the Skipper icon in the toolbar.
3. In the popup window, select the desired playback speed:
   - **Normal (1x)** for regular playback.
   - **Very Fast (16x)** for double-speed playback.
4. The speed will be instantly applied to all HTML5 videos on the page.

## Project Structure

- **manifest.json**: Configuration file for the Chrome extension.
- **popup.html**: The HTML file for the extension's popup interface.
- **popup.js**: JavaScript logic for the popup, responsible for sending speed change messages to the content script.
- **content.js**: The script injected into web pages to modify video playback speeds.

## Contributing

Feel free to fork this repository and make improvements. If you have suggestions or find bugs, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
