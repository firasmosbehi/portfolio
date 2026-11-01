const stats = [
  { value: '70%', label: 'fewer critical vulns reaching prod' },
  { value: '99.95%', label: 'uptime across EKS environments' },
  { value: '50+', label: 'services rotated onto Vault' },
  { value: '−60%', label: 'mean time to detect incidents' },
];

export default function StatsSection() {
  return (
    <section aria-label="Impact" className="max-w-6xl mx-auto px-4 sm:px-6">
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border-y border-line">
        {stats.map((s) => (
          <div key={s.label} className="bg-bg py-7 px-4 sm:px-6 flex flex-col-reverse">
            <dt className="mt-1.5 text-sm text-muted">{s.label}</dt>
            <dd className="text-4xl sm:text-[2.5rem] font-semibold tracking-[-0.03em]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
