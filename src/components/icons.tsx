import React, { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

type IconProps = {
  className?: string;
};

const IconWrapper = ({ children, className = "" }: IconWrapperProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

export const Sprout = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="M7 20v-7a5 5 0 0 1 10 0v7" />
    <path d="M12 13V3" />
    <path d="M12 8l3-3" />
    <path d="M12 11l-3-3" />
  </IconWrapper>
);

export const Users = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconWrapper>
);

export const MapPin = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconWrapper>
);

export const Leaf = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 7 17 12 14 17c-1 2-3 3-5 3" />
    <path d="M11 20v-7" />
  </IconWrapper>
);

export const Briefcase = (props: IconProps) => (
  <IconWrapper {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </IconWrapper>
);

export const Package = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="m7.5 4.27 9 5.11a2 2 0 0 1 1.17 2.32l-1.5 8a2 2 0 0 1-1.99 1.73H6.5a2 2 0 0 1-1.99-1.73l-1.5-8a2 2 0 0 1 1.17-2.32l9-5.11" />
    <path d="m12 14 3-3" />
    <path d="m12 14-3-3" />
    <path d="M12 14V4" />
  </IconWrapper>
);

export const Home = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </IconWrapper>
);

export const UserCheck = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </IconWrapper>
);

export const Landmark = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="M3 21h18" />
    <path d="M5 21V10" />
    <path d="M19 21V10" />
    <path d="M9 21V10" />
    <path d="M15 21V10" />
    <path d="M3 10h18" />
    <path d="M12 10V3" />
    <path d="M8 3h8" />
    <path d="M12 3v7" />
  </IconWrapper>
);

export const Utensils = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4" />
    <path d="M7 11v6" />
    <path d="M12 15V3" />
    <path d="M17 2v8a2 2 0 0 1-2 2h-2" />
  </IconWrapper>
);

export const GraduationCap = (props: IconProps) => (
  <IconWrapper {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </IconWrapper>
);

export const Smartphone = (props: IconProps) => (
  <IconWrapper {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </IconWrapper>
);

export const Globe = (props: IconProps) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.9 15.9 0 0 1 0 20" />
    <path d="M5 12a7 7 0 0 1 14 0" />
  </IconWrapper>
);
