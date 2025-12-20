// Reusable bullet list item with custom arrow icon
export function BulletListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 mb-2">
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        <span className="bg-muted rounded-full flex items-center justify-center" style={{ width: 18, height: 18 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" className="block" aria-hidden="true">
            <circle cx="6" cy="6" r="6" fill="currentColor" className="text-muted" />
            <text x="6" y="9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">&#8594;</text>
          </svg>
        </span>
      </span>
      <span className="align-middle">{children}</span>
    </li>
  );
}
