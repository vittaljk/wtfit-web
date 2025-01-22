import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="p-5 md:container md:mx-auto md:p-4 md:py-5">
        <div className="flex gap-8 text-sm font-semibold">
          <Link href="/policy">
            <div className="hover:underline hover:text-link">Policy</div>
          </Link>
          <Link href="/terms-and-conditions">
            <div className="hover:underline hover:text-link">Terms Of Use</div>
          </Link>
          <Link href="/contact">
            <div className="hover:underline hover:text-link">Contact</div>
          </Link>
          <Link href="/refund-policy">
            <div className="hover:underline hover:text-link">
              Refund & Billing
            </div>
          </Link>
        </div>
        <div className="text-lg font-bold mt-4 mb-3">WTfit</div>
        <div className="flex flex-wrap gap-3 md:gap-16 text-sm">
          <div>© 2025 WTfit. All rights reserved.</div>
          <div>Bengaluru Karnataka India 560085</div>
          <div>Ph: 7022366007</div>
          <div>@WTfit</div>
          <Link href="mailto:info@wtfit.co.in">
            <div className="hover:underline hover:text-link">
              info@wtfit.co.in
            </div>
          </Link>
          <Link href="www.wtfit.co.in">
            <div className="hover:underline hover:text-link">
              www.wtfit.co.in
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
