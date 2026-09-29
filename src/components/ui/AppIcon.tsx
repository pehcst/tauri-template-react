type AppIconProps = {
  className?: string;
};

export function AppIcon({ className }: AppIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="16" fill="var(--color-icon-background)" />
      <path
        d="M19 23h26M32 23v21"
        stroke="var(--color-icon-foreground)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
