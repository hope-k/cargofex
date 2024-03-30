export const variantParent = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.167,
        type: "spring",
        duration: 1.2,
      },
    },
  };

export const variant = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0, duration: 0.8 } },
    
  };