export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {"Built by "}
          <span className="text-foreground font-medium">Murali</span>
          {" with passion for data."}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {"// 2026"}
        </p>
      </div>
    </footer>
  )
}
