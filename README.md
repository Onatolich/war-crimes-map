## War crime map

Visualization of Russian war crimes in Ukraine over time.

## Highlights

- Rendered as HTML and optimized for maximum runtime performance. Interactions should feel smooth even while dragging timeline slider fast;
- Responsive design with CSS only. All positioning (dots, slider etc.) is percentage relative
- Entire timeline is clickable and draggable (not just slider);
- Data source agnostic. Right now it accepts events from static json file as a parameter but can be easily changed to any other source;
- [Left], [Right], [End], [Home] - navigate timeline, [Space] - play/pause;
- Internationalization for date/time and number formatting;

## Dev env setup

Install dependencies
```bash
$ npm install
```

Start local dev server
```bash
$ npm start
```

Build for production
```bash
$ npm run build
```

Run dev server from production build
```bash
$ npx http-server
```
