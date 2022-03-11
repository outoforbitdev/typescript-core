import '../Styles/Modal.css';
import { Button } from './Button';
import { IComponentProps } from './IComponentProps';
import { XRow } from './XRow';

interface IModalProps extends IComponentProps {
    closable?: boolean;
    accept?: string;
    cancel?: string;
}

export function Modal(props: IModalProps) {

    return (
        <div className={"OODCoreModalContainer"}>
            <div className={"OODCoreModalColumn OODCoreModalMargin"}></div>
            <div className={"OODCoreModalColumn"}>
                <div className={"OODCoreModalMargin"}></div>
                <div className={"OODCoreModalFrame"}>
                    {props.closable ? <XRow /> : null}
                    <div className={"OODCoreModalContent"}>
                        {props.children ? props.children : null}
                    </div>
                    <div className={"OODCoreModalButtons"}>
                        <div className={"OODCoreModalMargin"}></div>
                        <div className={"OODCoreModalButtonsDiv"}>
                            {props.accept ? <Button text={props.accept} /> : null}
                            {props.cancel ? <Button text={props.cancel} /> : null}
                        </div>
                    </div>
                </div>
                <div className={"OODCoreModalMargin"}></div>
            </div>
            <div className={"OODCoreModalColumn OODCoreModalMargin"}></div>
        </div>

    );
}