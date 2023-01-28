import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {};
export default function FooterBottom({ className = "", ...props }: Props) {
  return (
    <div {...props} className={twMerge("text-center pt-12 text-muted footer-credit  text-xs sm:text-base", className)}>
      © 2021 austeread. All rights reserved. Use of this site constitutes acceptance of our User Agreement and Privacy <br />
      Policy and Cookie Statement and Your Indonesia Privacy Rights.
    </div>
  );
}
