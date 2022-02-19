import {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    useState
} from 'react';
import { Button } from '../Components';
import '../Styles/XRow.css';

export function XRow() {
    return (
        <div className={"OODCoreXRow"}>
            <div className={"OODCoreXRowMargin"}></div>
            <div className={"OODCoreXRowButton"}><Button text={"X"} /></div>
        </div>
    );
}