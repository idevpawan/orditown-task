
export default function Footer() {
  return (
    <div className="text-center bg-black absolute w-full bottom-0 py-8 border-t border-secondary">
        <p className="text-white font-spaced text-2xl max-sm:text-xs px-5">Copyright © {new Date().getFullYear()} Orditown. All Rights Reserved.</p>
    </div>
  )
}
