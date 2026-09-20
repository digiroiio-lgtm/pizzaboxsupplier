// Guide-specific inline visual diagrams — server component (no 'use client')
// All diagrams use inline SVG/CSS only. No external libraries. No fabricated data.

function DiagramWrapper({ title, children }) {
  return (
    <div
      style={{ background: 'var(--color-wpb-gray)', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '10px', marginBottom: '32px', padding: '24px' }}
      role="img"
      aria-label={title}
    >
      <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-wpb-navy)', opacity: 0.6, marginBottom: '16px' }}>
        {title}
      </div>
      {children}
    </div>
  )
}

// 1. Size comparison — proportional scale from 8" to 20"
function SizesComparisonDiagram() {
  const sizes = [
    { label: '8"', rel: 0.40 },
    { label: '10"', rel: 0.50 },
    { label: '12"', rel: 0.60 },
    { label: '14"', rel: 0.70 },
    { label: '16"', rel: 0.80 },
    { label: '18"', rel: 0.90 },
    { label: '20"', rel: 1.00 },
  ]
  return (
    <DiagramWrapper title="Standard Pizza Box Sizes — Relative Scale">
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {sizes.map(({ label, rel }) => {
          const size = Math.round(64 * rel)
          return (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  border: '2px solid var(--color-wpb-navy)',
                  background: 'white',
                  borderRadius: '3px',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: '4px', left: 0, right: 0, height: '2px', background: 'var(--color-wpb-navy)', opacity: 0.25 }} />
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-wpb-navy)' }}>{label}</span>
            </div>
          )
        })}
      </div>
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginTop: '14px' }}>
        Boxes shown proportionally relative to each other. Size designation = interior base dimension.
      </p>
    </DiagramWrapper>
  )
}

// 2/3/4. Dimension anatomy — for 12", 14", 16" guides (size label passed as prop)
function DimensionAnatomyDiagram({ sizeLabel }) {
  return (
    <DiagramWrapper title={`${sizeLabel} Pizza Box — Dimension Anatomy`}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Box base (front face) */}
          <rect x="60" y="60" width="140" height="100" fill="white" stroke="#1a2744" strokeWidth="2" rx="2"/>
          {/* Lid line */}
          <line x1="60" y1="80" x2="200" y2="80" stroke="#1a2744" strokeWidth="1.5" strokeDasharray="4 3"/>
          {/* Width arrow (bottom) */}
          <line x1="60" y1="176" x2="200" y2="176" stroke="#c41e3a" strokeWidth="1.5" markerEnd="url(#arrow)" markerStart="url(#arrowR)"/>
          {/* Height arrow (right) */}
          <line x1="218" y1="60" x2="218" y2="160" stroke="#c41e3a" strokeWidth="1.5" markerEnd="url(#arrow)" markerStart="url(#arrowR)"/>
          {/* Depth arrow (lid) */}
          <line x1="60" y1="48" x2="200" y2="48" stroke="#c41e3a" strokeWidth="1.5" strokeDasharray="4 2"/>
          {/* Width label */}
          <text x="130" y="192" textAnchor="middle" fill="#c41e3a" fontSize="11" fontWeight="600">Width (interior)</text>
          {/* Height label */}
          <text x="238" y="115" textAnchor="start" fill="#c41e3a" fontSize="11" fontWeight="600">Height</text>
          {/* Depth label */}
          <text x="130" y="40" textAnchor="middle" fill="#1a2744" fontSize="10" fill-opacity="0.7">Depth</text>
          {/* Size label in box */}
          <text x="130" y="128" textAnchor="middle" fill="#1a2744" fontSize="14" fontWeight="700">{sizeLabel}</text>
          <text x="130" y="147" textAnchor="middle" fill="#1a2744" fontSize="11">interior base</text>
          {/* Arrow defs */}
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill="#c41e3a"/>
            </marker>
            <marker id="arrowR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
              <path d="M0 0 L6 3 L0 6 Z" fill="#c41e3a"/>
            </marker>
          </defs>
        </svg>
      </div>
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginTop: '8px' }}>
        The inch designation refers to the interior base dimension. Exterior dimensions vary by board grade and manufacturer — confirm with your supplier.
      </p>
    </DiagramWrapper>
  )
}

// 5. B2B procurement flow — 5 steps
function ProcurementFlowDiagram() {
  const steps = [
    { num: '1', label: 'Define Specification', sub: 'Size, material, print' },
    { num: '2', label: 'Submit RFQ', sub: 'Volume & destination' },
    { num: '3', label: 'Receive Sample', sub: 'Verify before committing' },
    { num: '4', label: 'Place Container Order', sub: 'Confirm terms & freight' },
    { num: '5', label: 'Recurring Program', sub: 'Aligned reorder schedule' },
  ]
  return (
    <DiagramWrapper title="B2B Wholesale Procurement Process">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
        {steps.map((step, i) => (
          <div key={step.num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ textAlign: 'center', minWidth: '96px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-wpb-navy)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '15px', margin: '0 auto 6px' }}>
                {step.num}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-wpb-navy)' }}>{step.label}</div>
              <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{step.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M12 5l5 5-5 5" stroke="var(--color-wpb-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    </DiagramWrapper>
  )
}

// 6. Container quantity factors — hub and spoke
function ContainerQuantityDiagram() {
  const factors = ['Box Size', 'Board Grade & Flute', 'Case Configuration', 'Container Type', 'Load Plan']
  return (
    <DiagramWrapper title="Factors That Determine Container Quantity">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {factors.map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-wpb-red)', flexShrink: 0 }} />
              <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '6px', padding: '6px 12px', fontSize: '13px', color: 'var(--color-wpb-navy)', fontWeight: 600 }}>
                {f}
              </div>
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden="true">
                <path d="M2 6h20M16 2l4 4-4 4" stroke="var(--color-wpb-navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
              </svg>
            </div>
          ))}
        </div>
        <div style={{ background: 'var(--color-wpb-navy)', color: 'white', borderRadius: '10px', padding: '16px 20px', textAlign: 'center', minWidth: '120px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.3 }}>Total Units<br/>per Container</div>
          <div style={{ fontSize: '11px', opacity: 0.75, marginTop: '6px' }}>Confirmed at quote</div>
        </div>
      </div>
    </DiagramWrapper>
  )
}

// 7. Pricing cost drivers — horizontal bar infographic
function PricingDriversDiagram() {
  const drivers = [
    { label: 'Box Size', impact: 'Higher size = higher material cost per unit', width: 55 },
    { label: 'Board Grade & Flute', impact: 'Heavier grades cost more', width: 60 },
    { label: 'Print Specification', impact: 'Plain < 1-color < 2-color < 4-color', width: 80 },
    { label: 'Order Quantity', impact: 'Container > pallet = lower per-unit', width: 95 },
    { label: 'Container Utilization', impact: 'Full load vs partial load', width: 70 },
    { label: 'Freight Routing', impact: 'Destination port & inland distance', width: 65 },
    { label: 'Currency & Raw Materials', impact: 'Index at time of production', width: 50 },
  ]
  return (
    <DiagramWrapper title="7 Factors That Drive Wholesale Pizza Box Cost">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {drivers.map(({ label, impact, width }) => (
          <div key={label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-wpb-navy)' }}>{label}</span>
              <span style={{ fontSize: '11px', color: '#666' }}>{impact}</span>
            </div>
            <div style={{ height: '8px', background: '#e8e9e3', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${width}%`, background: 'var(--color-wpb-red)', borderRadius: '4px', opacity: 0.8 }} />
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '14px' }}>
        Bar width indicates relative cost sensitivity — not absolute values. Exact pricing requires a submitted RFQ.
      </p>
    </DiagramWrapper>
  )
}

// 8. Custom print workflow — 6 steps
function CustomPrintWorkflowDiagram() {
  const steps = [
    { label: 'Artwork Submission', icon: '🎨' },
    { label: 'Dieline Layout', icon: '📐' },
    { label: 'Digital Proof', icon: '🖥️' },
    { label: 'Approval', icon: '✓' },
    { label: 'Production', icon: '⚙️' },
    { label: 'Delivery', icon: '🚢' },
  ]
  return (
    <DiagramWrapper title="Custom Print Process: Artwork to Delivery">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', justifyContent: 'center' }}>
        {steps.map((step, i) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ textAlign: 'center', minWidth: '80px' }}>
              <div style={{ fontSize: '22px', marginBottom: '4px' }} role="presentation">{step.icon}</div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-wpb-navy)', lineHeight: 1.3 }}>{step.label}</div>
            </div>
            {i < steps.length - 1 && (
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M2 6h12M8 2l4 4-4 4" stroke="var(--color-wpb-navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginTop: '14px' }}>
        Total elapsed time from artwork approval to U.S. delivery is confirmed with your supplier at order.
      </p>
    </DiagramWrapper>
  )
}

// 9. Corrugated board cross-section anatomy
function MaterialCrossSectionDiagram() {
  return (
    <DiagramWrapper title="Corrugated Board Construction — Cross-Section View">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg width="320" height="130" viewBox="0 0 320 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Outer liner */}
          <rect x="20" y="15" width="280" height="18" fill="#e8e9e3" stroke="#1a2744" strokeWidth="1.5" rx="2"/>
          <text x="160" y="28" textAnchor="middle" fill="#1a2744" fontSize="11" fontWeight="600">Outer Liner (facing)</text>

          {/* Fluted medium — sinusoidal approximation using a path */}
          <path d="M20 33 Q30 47 40 33 Q50 19 60 33 Q70 47 80 33 Q90 19 100 33 Q110 47 120 33 Q130 19 140 33 Q150 47 160 33 Q170 19 180 33 Q190 47 200 33 Q210 19 220 33 Q230 47 240 33 Q250 19 260 33 Q270 47 280 33 Q290 19 300 33" stroke="#1a2744" strokeWidth="1.5" fill="none"/>
          <path d="M20 55 Q30 41 40 55 Q50 69 60 55 Q70 41 80 55 Q90 69 100 55 Q110 41 120 55 Q130 69 140 55 Q150 41 160 55 Q170 69 180 55 Q190 41 200 55 Q210 69 220 55 Q230 41 240 55 Q250 69 260 55 Q270 41 280 55 Q290 69 300 55" stroke="#1a2744" strokeWidth="1.5" fill="none"/>
          <text x="160" y="50" textAnchor="middle" fill="#1a2744" fontSize="11" fontWeight="600" fill-opacity="0.8">Fluted Medium (E-flute or B-flute)</text>

          {/* Inner liner */}
          <rect x="20" y="55" width="280" height="18" fill="#e8e9e3" stroke="#1a2744" strokeWidth="1.5" rx="2"/>
          <text x="160" y="68" textAnchor="middle" fill="#1a2744" fontSize="11" fontWeight="600">Inner Liner (food-contact side)</text>

          {/* Labels on right */}
          <line x1="305" y1="24" x2="315" y2="24" stroke="#c41e3a" strokeWidth="1"/>
          <line x1="305" y1="44" x2="315" y2="44" stroke="#c41e3a" strokeWidth="1"/>
          <line x1="305" y1="64" x2="315" y2="64" stroke="#c41e3a" strokeWidth="1"/>
          <line x1="315" y1="24" x2="315" y2="64" stroke="#c41e3a" strokeWidth="1"/>
          <text x="318" y="47" fill="#c41e3a" fontSize="10" fontWeight="600">Board</text>
          <text x="318" y="59" fill="#c41e3a" fontSize="10" fontWeight="600">Caliper</text>

          {/* Grade labels */}
          <text x="160" y="98" textAnchor="middle" fill="#1a2744" fontSize="11">E-flute: thinner, smoother surface — better for printing</text>
          <text x="160" y="114" textAnchor="middle" fill="#1a2744" fontSize="11">B-flute: thicker, higher stacking strength</text>
        </svg>
      </div>
    </DiagramWrapper>
  )
}

// 10. E-flute vs B-flute side-by-side comparison
function FluteComparisonDiagram() {
  return (
    <DiagramWrapper title="E-Flute vs B-Flute — Profile Comparison">
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* E-Flute */}
        <div style={{ flex: '1', minWidth: '220px', maxWidth: '300px' }}>
          <div style={{ background: 'var(--color-wpb-navy)', color: 'white', borderRadius: '6px 6px 0 0', padding: '8px 12px', textAlign: 'center', fontSize: '13px', fontWeight: 700 }}>
            E-Flute
          </div>
          <svg width="100%" height="80" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="0" y="5" width="240" height="10" fill="#e8e9e3" stroke="#1a2744" strokeWidth="1"/>
            <path d="M0 15 Q8 25 16 15 Q24 5 32 15 Q40 25 48 15 Q56 5 64 15 Q72 25 80 15 Q88 5 96 15 Q104 25 112 15 Q120 5 128 15 Q136 25 144 15 Q152 5 160 15 Q168 25 176 15 Q184 5 192 15 Q200 25 208 15 Q216 5 224 15 Q232 25 240 15" stroke="#1a2744" strokeWidth="1" fill="none"/>
            <path d="M0 35 Q8 25 16 35 Q24 45 32 35 Q40 25 48 35 Q56 45 64 35 Q72 25 80 35 Q88 45 96 35 Q104 25 112 35 Q120 45 128 35 Q136 25 144 35 Q152 45 160 35 Q168 25 176 35 Q184 45 192 35 Q200 25 208 35 Q216 45 224 35 Q232 25 240 35" stroke="#1a2744" strokeWidth="1" fill="none"/>
            <rect x="0" y="35" width="240" height="10" fill="#e8e9e3" stroke="#1a2744" strokeWidth="1"/>
          </svg>
          <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '0 0 6px 6px', padding: '10px 12px' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: '12px', color: '#444' }}>
              <li style={{ marginBottom: '4px' }}>✓ Thinner board profile</li>
              <li style={{ marginBottom: '4px' }}>✓ Smoother printing surface</li>
              <li style={{ marginBottom: '4px' }}>✓ Better container utilization</li>
              <li>Best for: custom printing programs</li>
            </ul>
          </div>
        </div>
        {/* B-Flute */}
        <div style={{ flex: '1', minWidth: '220px', maxWidth: '300px' }}>
          <div style={{ background: '#555', color: 'white', borderRadius: '6px 6px 0 0', padding: '8px 12px', textAlign: 'center', fontSize: '13px', fontWeight: 700 }}>
            B-Flute
          </div>
          <svg width="100%" height="80" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="0" y="5" width="240" height="10" fill="#e8e9e3" stroke="#1a2744" strokeWidth="1"/>
            <path d="M0 15 Q20 40 40 15 Q60 -10 80 15 Q100 40 120 15 Q140 -10 160 15 Q180 40 200 15 Q220 -10 240 15" stroke="#1a2744" strokeWidth="1.5" fill="none"/>
            <path d="M0 45 Q20 20 40 45 Q60 70 80 45 Q100 20 120 45 Q140 70 160 45 Q180 20 200 45 Q220 70 240 45" stroke="#1a2744" strokeWidth="1.5" fill="none"/>
            <rect x="0" y="45" width="240" height="10" fill="#e8e9e3" stroke="#1a2744" strokeWidth="1"/>
          </svg>
          <div style={{ background: 'white', border: '1px solid var(--color-wpb-gray-border)', borderRadius: '0 0 6px 6px', padding: '10px 12px' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: '12px', color: '#444' }}>
              <li style={{ marginBottom: '4px' }}>✓ Thicker board profile</li>
              <li style={{ marginBottom: '4px' }}>✓ Higher stacking strength</li>
              <li style={{ marginBottom: '4px' }}>✓ Better compression resistance</li>
              <li>Best for: heavy / deep-dish applications</li>
            </ul>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginTop: '14px' }}>
        Profile diagrams illustrate flute geometry conceptually. Exact flute pitch and board caliper vary by manufacturer and grade — confirm specifications with your supplier.
      </p>
    </DiagramWrapper>
  )
}

// 11. Pallet vs Container decision framework
function PalletVsContainerDiagram() {
  const rows = [
    { factor: 'Per-unit cost', pallet: 'Higher', container: 'Lower ✓' },
    { factor: 'Order commitment', pallet: 'Lower ✓', container: 'Full container' },
    { factor: 'Lead time', pallet: 'Shorter ✓', container: 'Longer (plan ahead)' },
    { factor: 'Flexibility', pallet: 'High ✓', container: 'Low' },
    { factor: 'Best for volume', pallet: 'Variable / lower', container: 'Consistent / high ✓' },
    { factor: 'Cash flow', pallet: 'Lower per order ✓', container: 'Higher per order' },
  ]
  return (
    <DiagramWrapper title="Pallet vs Container — Decision Framework">
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr>
              <th style={{ background: 'var(--color-wpb-gray)', color: 'var(--color-wpb-navy)', padding: '8px 12px', textAlign: 'left', border: '1px solid var(--color-wpb-gray-border)', width: '35%' }}>Factor</th>
              <th style={{ background: '#f5f6f0', color: '#555', padding: '8px 12px', textAlign: 'center', border: '1px solid var(--color-wpb-gray-border)', width: '32.5%' }}>Pallet Program</th>
              <th style={{ background: 'var(--color-wpb-navy)', color: 'white', padding: '8px 12px', textAlign: 'center', border: '1px solid var(--color-wpb-gray-border)', width: '32.5%' }}>Container Program</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.factor} style={{ background: i % 2 === 0 ? 'white' : '#fafaf8' }}>
                <td style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--color-wpb-navy)', border: '1px solid var(--color-wpb-gray-border)' }}>{row.factor}</td>
                <td style={{ padding: '8px 12px', textAlign: 'center', color: '#555', border: '1px solid var(--color-wpb-gray-border)' }}>{row.pallet}</td>
                <td style={{ padding: '8px 12px', textAlign: 'center', color: row.container.includes('✓') ? 'var(--color-wpb-navy)' : '#555', fontWeight: row.container.includes('✓') ? 600 : 400, border: '1px solid var(--color-wpb-gray-border)' }}>{row.container}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '12px' }}>
        ✓ indicates the stronger option for that factor. Your optimal structure depends on annual volume, cash flow and warehouse capacity.
      </p>
    </DiagramWrapper>
  )
}

// 12. Turkey → USA supply chain route
function TurkeyToUSADiagram() {
  const steps = [
    { label: 'Turkey', sub: 'Manufacturing', icon: '🏭' },
    { label: 'Turkish Port', sub: 'Container stuffing', icon: '⚓' },
    { label: 'Atlantic Ocean', sub: 'Ocean freight', icon: '🌊' },
    { label: 'U.S. East Coast Port', sub: 'NY/NJ · Savannah · Virginia', icon: '🏗️' },
    { label: 'Distribution Center', sub: 'Customs cleared', icon: '📦' },
    { label: 'Buyer', sub: 'U.S. delivery', icon: '🏢' },
  ]
  return (
    <DiagramWrapper title="Supply Chain Route: Turkey to U.S. Buyer">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', justifyContent: 'center' }}>
        {steps.map((step, i) => (
          <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ fontSize: '24px', marginBottom: '4px' }} role="presentation">{step.icon}</div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-wpb-navy)', lineHeight: 1.3 }}>{step.label}</div>
              <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{step.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M2 7h16M12 3l4 4-4 4" stroke="var(--color-wpb-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginTop: '14px' }}>
        Exact transit times per leg vary by carrier, season and routing. Confirm current lead times with your supplier before planning your first container.
      </p>
    </DiagramWrapper>
  )
}

// Main export — switch by guide slug
export function GuideVisual({ slug }) {
  switch (slug) {
    case 'pizza-box-sizes-guide':
      return <SizesComparisonDiagram />
    case '12-inch-pizza-box-dimensions':
      return <DimensionAnatomyDiagram sizeLabel='12"' />
    case '14-inch-pizza-box-dimensions':
      return <DimensionAnatomyDiagram sizeLabel='14"' />
    case '16-inch-pizza-box-dimensions':
      return <DimensionAnatomyDiagram sizeLabel='16"' />
    case 'how-to-buy-pizza-boxes-wholesale':
      return <ProcurementFlowDiagram />
    case 'pizza-box-container-quantity':
      return <ContainerQuantityDiagram />
    case 'wholesale-pizza-box-pricing':
      return <PricingDriversDiagram />
    case 'custom-pizza-box-printing-guide':
      return <CustomPrintWorkflowDiagram />
    case 'pizza-box-materials-guide':
      return <MaterialCrossSectionDiagram />
    case 'e-flute-vs-b-flute-pizza-boxes':
      return <FluteComparisonDiagram />
    case 'pallet-vs-container-pizza-boxes':
      return <PalletVsContainerDiagram />
    case 'import-pizza-boxes-from-turkey':
      return <TurkeyToUSADiagram />
    default:
      return null
  }
}
