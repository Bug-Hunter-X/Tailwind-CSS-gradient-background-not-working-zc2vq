```javascript
// in your component file
import '../styles/globals.css';

function MyComponent() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
      <h1>This is a gradient background</h1>
    </div>
  );
}

export default MyComponent;
```
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```