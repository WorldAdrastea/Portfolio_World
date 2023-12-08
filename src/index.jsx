import { createRoot } from 'react-dom/client';
import { MainView } from './components/MainView/Main_View';

export const Portfolio = () => {
    return (
        <div>
            <MainView/>
        </div>
    );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<Portfolio/>);