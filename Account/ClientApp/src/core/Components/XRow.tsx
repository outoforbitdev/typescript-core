import '../Styles/XRow.css';
import { Button } from './Button';

export function XRow() {
    return (
        <div className={"OODCoreXRow"}>
            <div className={"OODCoreXRowMargin"}></div>
            <div className={"OODCoreXRowButton"}><Button text={"X"} /></div>
        </div>
    );
}