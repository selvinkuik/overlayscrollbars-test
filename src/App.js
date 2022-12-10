import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

function App() {
  return (
    <OverlayScrollbarsComponent defer>
      <div style={{whiteSpace: 'nowrap'}}>
        <img src="https://dummyimage.com/530x441" />
        <img src="https://dummyimage.com/530x441" />
        <img src="https://dummyimage.com/530x441" />
        <img src="https://dummyimage.com/530x441" />
        <img src="https://dummyimage.com/530x441" />
        <img src="https://dummyimage.com/530x441" />
        <img src="https://dummyimage.com/530x441" />
        <img src="https://dummyimage.com/530x441" />
      </div>
    </OverlayScrollbarsComponent>
  );
}

export default App;
