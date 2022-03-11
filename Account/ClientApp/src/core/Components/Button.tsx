import * as React from 'react';
import { Component } from 'react';
import { UniqueKey } from './Component';
import { getClassName } from './IComponentProps';
import { IComponentProps } from './IComponentProps';
import '../Styles/Button.css';

interface IButtonProps extends IComponentProps {
    text?: string;
    onClick?: () => void;
    seamless?: boolean;
    width?: string;
}

interface IComponentStyle {
    width?: string;
}

export function Button(props: IButtonProps) {
    const uniqueKey = UniqueKey("OODCoreComponentButton");

    let className = "OODCoreComponentButton";
    className = props.seamless ? "OODCoreComponentButtonSeamless " + className : className;
    const style: IComponentStyle = {};
    if (props.width) {
        style.width = props.width;
    }

    return (
        <button onClick={props.onClick}
            className={getClassName(className, props.className, props.theme)}
            style={style}
        >
            {props.text}
        </button>
    );
}