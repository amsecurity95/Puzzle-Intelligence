interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "primary";
  showText?: boolean;
  className?: string;
}

export default function Logo({ 
  size = "md", 
  variant = "primary", 
  showText = true, 
  className = "" 
}: LogoProps) {
  
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-10 h-10",
    xl: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  const colorClasses = {
    light: "text-white",
    dark: "text-gray-900",
    primary: "text-blue-600"
  };

  const logoSvg = (
    <svg 
      className={`${sizeClasses[size]} ${colorClasses[variant]}`}
      viewBox="0 0 100 100" 
      fill="currentColor"
    >
      <path d="M25 15 L75 15 Q85 15 85 25 L85 40 L60 40 L60 60 L85 60 L85 75 Q85 85 75 85 L25 85 Q15 85 15 75 L15 25 Q15 15 25 15 Z M35 25 L35 35 L50 35 L50 50 L35 50 L35 75 L75 75 L75 50 L60 50 L60 35 L75 35 L75 25 L35 25 Z"/>
    </svg>
  );

  if (!showText) {
    return <div className={className}>{logoSvg}</div>;
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {logoSvg}
      <span className={`font-bold ${textSizeClasses[size]} ${colorClasses[variant]}`}>
        Puzzle <span className="text-blue-600">Intel</span>
      </span>
    </div>
  );
}