declare module '*.svg' {
    import { ReactComponent } from 'react';
    const content: ReactComponent;
    export default content;
}

declare module '*.svg?url' {
    const content: string;
    export default content;
}