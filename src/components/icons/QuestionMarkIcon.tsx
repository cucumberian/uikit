import React from 'react';

import {a11yHiddenSvgProps} from '../utils/svg';

export function QuestionMarkIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="none"
            {...a11yHiddenSvgProps}
            {...props}
        >
            <path
                d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                stroke="currentColor"
                strokeOpacity="0.15"
            />
            <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.46436 9.92432H7.09473C7.09115 9.72738 7.08936 9.60742 7.08936 9.56445C7.08936 9.12044 7.16276 8.75521 7.30957 8.46875C7.45638 8.18229 7.75 7.86003 8.19043 7.50195C8.63086 7.14388 8.89404 6.90934 8.97998 6.79834C9.11247 6.62288 9.17871 6.42953 9.17871 6.21826C9.17871 5.92464 9.06144 5.6731 8.8269 5.46362C8.59237 5.25415 8.27637 5.14941 7.87891 5.14941C7.49577 5.14941 7.17529 5.25863 6.91748 5.47705C6.65967 5.69548 6.48242 6.02848 6.38574 6.47607L5 6.3042C5.03939 5.66325 5.31242 5.11898 5.81909 4.67139C6.32577 4.22379 6.99088 4 7.81445 4C8.68099 4 9.37028 4.22648 9.88232 4.67944C10.3944 5.13241 10.6504 5.65966 10.6504 6.26123C10.6504 6.59424 10.5564 6.90934 10.3684 7.20654C10.1804 7.50375 9.77849 7.90836 9.1626 8.42041C8.84391 8.68539 8.64608 8.89844 8.56909 9.05957C8.49211 9.2207 8.45719 9.50895 8.46436 9.92432ZM7.09473 11.9546V10.4453H8.604V11.9546H7.09473Z"
                fill="currentColor"
            />
        </svg>
    );
}
