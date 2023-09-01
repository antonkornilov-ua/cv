import Link from 'next/link';
import React, { ReactNode } from 'react';



interface IntroButtonProps {
    link: string;
    className: string;
    children: ReactNode;
    downloadable?: boolean;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}


const IntroButton: React.FC<IntroButtonProps> = ({ downloadable, onClick, target, link,  children, className }) => {
    return (
        <Link download={downloadable} className={className} href={link} target={target} onClick={onClick}>
            {children}
        </Link>
    );
};

export default IntroButton;
