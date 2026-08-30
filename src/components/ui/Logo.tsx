interface LogoProps {
  variant?: 'primary' | 'secondary' | 'monochrome-navy' | 'monochrome-ivory';
  className?: string;
}

export default function Logo({ variant = 'secondary', className = '' }: LogoProps) {
  const baseStyle = "font-head text-[22px] font-semibold tracking-[0.5px] inline-flex items-center";
  
  const getThemeStyles = () => {
    switch (variant) {
      case 'primary':
        return { text: 'text-navy', oia: 'bg-[linear-gradient(269.2deg,#C16C3E_2.69%,#F0D197_124.67%)] bg-clip-text text-transparent' };
      case 'secondary':
        return { text: 'text-white', oia: 'bg-[linear-gradient(269.2deg,#C16C3E_2.69%,#F0D197_124.67%)] bg-clip-text text-transparent' };
      case 'monochrome-navy':
        return { text: 'text-navy', oia: 'text-navy' };
      case 'monochrome-ivory':
        return { text: 'text-ivory', oia: 'text-ivory' };
    }
  };

  const styles = getThemeStyles();

  return (
    <div className={`${baseStyle} ${className}`}>
      <span className={styles.text}>theun</span>
      <span className={styles.oia}>oia</span>
    </div>
  );
}
