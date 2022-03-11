import React from 'react';
import { IsMobile } from '../Library/Devices';
import '../Styles/InfoBox.css';
import { Button } from './Button';
import { IComponentProps } from './IComponentProps';

export interface IInfoBoxLine {
    label: string;
    value: any;
}

interface IInfoBoxSection {
    header: string;
    lines: IInfoBoxLine[];
}

interface IInfoBoxProps extends IComponentProps {
    title: string;
    imageUrl?: string;
    editMode: boolean;
    toggleEdit: () => void;
}

export function InfoBox(props: IInfoBoxProps) {
    const componentName = "";
    const mobileClass = IsMobile() ? "" : " desktop";
    const classNames = props.className + " " + componentName;
    return (
        <table className={classNames + mobileClass}>
            <thead><tr>
                <th className="OODCoreComponentsInfoBox title"
                    colSpan={2}>
                    {props.title}
                </th></tr></thead>
            <tbody>
                {
                    props.children
                }
            </tbody>
            <tfoot>
                <tr><td colSpan={2}>
                    <Button text={"Edit"} onClick={props.toggleEdit} />
                </td></tr>
            </tfoot>
        </table>
    );
}