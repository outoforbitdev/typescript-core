import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function UniqueKey(componentName: string) {
    return componentName + uuidv4();
}
