import * as React from 'react';
import {
    useState
} from 'react';
import '../Styles/Input.css';
import { Button } from './Button';
import { defaultValidator, IInputProps, onBlur, onKeyDown, onValueChange } from './InputField';

interface IPasswordFieldProps extends IInputProps<string> {
    showable?: boolean;
}

export function PasswordField(props: IPasswordFieldProps): JSX.Element {
    const onQuickValidate = props.onQuickValidate ?
        props.onQuickValidate : defaultValidator;
    const onFullValidate = props.onFullValidate ?
        props.onFullValidate : defaultValidator;
    const onChange = props.onValueChange ?
        props.onValueChange : (_val: string) => { };
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);
    const [visible, setVisible] = useState(false);

    return (
        <div className={"OODCoreComponentInputField"}>
            <input type={visible ? "text": "password"}
                inputMode={"text"}
                value={props.defaultValue}
                className={"OODCoreComponentPasswordField"}
                onBlur={onBlur(onQuickValidate, onFullValidate)}
                onChange={onValueChange(onQuickValidate, onChange, setValue)}
                onKeyDown={onKeyDown(setValue, defaultValue)}
            />
            {
                props.showable ? <Button text={visible ? "Hide" : "Show"} onClick={toggleVisible(setVisible, visible)} /> : null
            }
        </div>
    );
}

function toggleVisible(setVisible: React.Dispatch<React.SetStateAction<boolean>>, visible: boolean) {
    return () => setVisible(!visible);
}