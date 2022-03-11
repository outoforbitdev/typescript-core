import React, { Fragment } from 'react';
import '../Styles/InfoBox.css';
import { IComponentProps } from './IComponentProps';

interface IInfoBoxSectionProps extends IComponentProps {
    header: string;
    editMode: boolean;
}

export function InfoBoxSection(props: IInfoBoxSectionProps) {
    return (
        <Fragment>
            <tr>
                <th className="OODCoreComponentsInfoBox header"
                    colSpan={2}>
                    {props.header}
                </th>
            </tr>{
                props.children
            }
        </Fragment>
    );
}