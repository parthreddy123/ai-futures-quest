const chapterDiagrams = {

1: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Nested Circles: AI > ML > DL > GenAI -->
  <ellipse cx="210" cy="130" rx="175" ry="115" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="6 3"/>
  <text x="210" y="28" text-anchor="middle" font-size="10" fill="var(--dim)">Artificial Intelligence</text>
  <ellipse cx="210" cy="138" rx="135" ry="90" stroke="var(--cyan)" stroke-width="1.5" opacity="0.7"/>
  <text x="210" y="60" text-anchor="middle" font-size="10" fill="var(--cyan)">Machine Learning</text>
  <ellipse cx="210" cy="146" rx="95" ry="65" stroke="var(--accent)" stroke-width="1.5" opacity="0.8"/>
  <text x="210" y="96" text-anchor="middle" font-size="10" fill="var(--accent)">Deep Learning</text>
  <ellipse cx="210" cy="152" rx="55" ry="38" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" fill-opacity="0.08"/>
  <text x="210" y="149" text-anchor="middle" font-size="11" font-weight="600" fill="var(--gold)">GenAI</text>
  <text x="210" y="163" text-anchor="middle" font-size="8" fill="var(--dim)">LLMs, Diffusion</text>
  <!-- Timeline markers on the right -->
  <line x1="420" y1="40" x2="420" y2="240" stroke="var(--border)" stroke-width="1"/>
  <circle cx="420" cy="50" r="3" fill="var(--dim)"/>
  <text x="430" y="53" font-size="8" fill="var(--dim)">1956 — AI coined</text>
  <circle cx="420" cy="95" r="3" fill="var(--cyan)"/>
  <text x="430" y="98" font-size="8" fill="var(--cyan)">1997 — ML rises</text>
  <circle cx="420" cy="145" r="3" fill="var(--accent)"/>
  <text x="430" y="148" font-size="8" fill="var(--accent)">2012 — DL breakthrough</text>
  <circle cx="420" cy="195" r="3" fill="var(--gold)"/>
  <text x="430" y="198" font-size="8" fill="var(--gold)">2022 — GenAI era</text>
  <line x1="417" y1="50" x2="423" y2="50" stroke="var(--dim)" stroke-width="1"/>
  <line x1="417" y1="95" x2="423" y2="95" stroke="var(--cyan)" stroke-width="1"/>
  <line x1="417" y1="145" x2="423" y2="145" stroke="var(--accent)" stroke-width="1"/>
  <line x1="417" y1="195" x2="423" y2="195" stroke="var(--gold)" stroke-width="1"/>
</svg>`,

2: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">ML Pipeline</text>
  <!-- Pipeline boxes -->
  <rect x="8" y="50" width="58" height="40" rx="6" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="37" y="73" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Data</text>
  <rect x="80" y="50" width="58" height="40" rx="6" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.08"/>
  <text x="109" y="73" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">Clean</text>
  <rect x="152" y="50" width="58" height="40" rx="6" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.08"/>
  <text x="181" y="73" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">Features</text>
  <rect x="224" y="50" width="58" height="40" rx="6" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.08"/>
  <text x="253" y="73" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Train</text>
  <rect x="296" y="50" width="58" height="40" rx="6" stroke="var(--pink)" stroke-width="1.5" fill="var(--pink)" fill-opacity="0.08"/>
  <text x="325" y="73" text-anchor="middle" font-size="9" font-weight="600" fill="var(--pink)">Validate</text>
  <rect x="368" y="50" width="58" height="40" rx="6" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="397" y="73" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Deploy</text>
  <rect x="440" y="50" width="58" height="40" rx="6" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.08"/>
  <text x="469" y="73" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">Monitor</text>
  <!-- Arrows between boxes -->
  <path d="M66,70 L80,70" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow2)"/>
  <path d="M138,70 L152,70" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow2)"/>
  <path d="M210,70 L224,70" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow2)"/>
  <path d="M282,70 L296,70" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow2)"/>
  <path d="M354,70 L368,70" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow2)"/>
  <path d="M426,70 L440,70" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow2)"/>
  <defs><marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--dim)"/></marker></defs>
  <!-- Feedback loop from Monitor back to Data -->
  <path d="M469,90 L469,115 Q469,125 459,125 L37,125 Q27,125 27,115 L27,90" stroke="var(--red)" stroke-width="1" stroke-dasharray="4 3" fill="none" marker-end="url(#arrowRed2)"/>
  <text x="250" y="138" text-anchor="middle" font-size="8" fill="var(--red)">Feedback Loop — Retrain with new data</text>
  <defs><marker id="arrowRed2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--red)"/></marker></defs>
  <!-- Labels below each box -->
  <text x="37" y="105" text-anchor="middle" font-size="7" fill="var(--dim)">Collect &amp;</text>
  <text x="37" y="113" text-anchor="middle" font-size="7" fill="var(--dim)">Ingest</text>
  <text x="109" y="105" text-anchor="middle" font-size="7" fill="var(--dim)">Handle nulls,</text>
  <text x="109" y="113" text-anchor="middle" font-size="7" fill="var(--dim)">outliers</text>
  <text x="181" y="105" text-anchor="middle" font-size="7" fill="var(--dim)">Engineer &amp;</text>
  <text x="181" y="113" text-anchor="middle" font-size="7" fill="var(--dim)">Select</text>
  <text x="253" y="105" text-anchor="middle" font-size="7" fill="var(--dim)">Fit model</text>
  <text x="253" y="113" text-anchor="middle" font-size="7" fill="var(--dim)">parameters</text>
  <text x="325" y="105" text-anchor="middle" font-size="7" fill="var(--dim)">Test &amp;</text>
  <text x="325" y="113" text-anchor="middle" font-size="7" fill="var(--dim)">Evaluate</text>
  <text x="397" y="105" text-anchor="middle" font-size="7" fill="var(--dim)">Serve in</text>
  <text x="397" y="113" text-anchor="middle" font-size="7" fill="var(--dim)">production</text>
  <text x="469" y="105" text-anchor="middle" font-size="7" fill="var(--dim)">Track drift</text>
  <text x="469" y="113" text-anchor="middle" font-size="7" fill="var(--dim)">&amp; accuracy</text>
  <!-- Metrics row -->
  <rect x="50" y="165" width="400" height="55" rx="8" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.4"/>
  <text x="250" y="182" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">Key Metrics at Each Stage</text>
  <text x="100" y="200" text-anchor="middle" font-size="8" fill="var(--cyan)">Data quality %</text>
  <text x="210" y="200" text-anchor="middle" font-size="8" fill="var(--green)">Training loss</text>
  <text x="310" y="200" text-anchor="middle" font-size="8" fill="var(--pink)">F1 / RMSE</text>
  <text x="400" y="200" text-anchor="middle" font-size="8" fill="var(--accent)">Latency / Drift</text>
</svg>`,

3: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Neural Network Architecture</text>
  <!-- Input layer label -->
  <text x="80" y="45" text-anchor="middle" font-size="9" fill="var(--cyan)">Input Layer</text>
  <!-- Hidden layer label -->
  <text x="250" y="45" text-anchor="middle" font-size="9" fill="var(--accent)">Hidden Layer</text>
  <!-- Output layer label -->
  <text x="420" y="45" text-anchor="middle" font-size="9" fill="var(--green)">Output Layer</text>
  <!-- Connections: Input to Hidden -->
  <line x1="95" y1="90" x2="235" y2="75" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="90" x2="235" y2="115" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="90" x2="235" y2="155" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="90" x2="235" y2="195" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="140" x2="235" y2="75" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="140" x2="235" y2="115" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="140" x2="235" y2="155" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="140" x2="235" y2="195" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="190" x2="235" y2="75" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="190" x2="235" y2="115" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="190" x2="235" y2="155" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="95" y1="190" x2="235" y2="195" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <!-- Connections: Hidden to Output -->
  <line x1="265" y1="75" x2="405" y2="110" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="265" y1="75" x2="405" y2="160" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="265" y1="115" x2="405" y2="110" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="265" y1="115" x2="405" y2="160" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="265" y1="155" x2="405" y2="110" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="265" y1="155" x2="405" y2="160" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="265" y1="195" x2="405" y2="110" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <line x1="265" y1="195" x2="405" y2="160" stroke="var(--border)" stroke-width="0.6" opacity="0.5"/>
  <!-- Input nodes -->
  <circle cx="80" cy="90" r="15" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.1"/>
  <text x="80" y="93" text-anchor="middle" font-size="8" fill="var(--cyan)">x1</text>
  <circle cx="80" cy="140" r="15" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.1"/>
  <text x="80" y="143" text-anchor="middle" font-size="8" fill="var(--cyan)">x2</text>
  <circle cx="80" cy="190" r="15" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.1"/>
  <text x="80" y="193" text-anchor="middle" font-size="8" fill="var(--cyan)">x3</text>
  <!-- Hidden nodes -->
  <circle cx="250" cy="75" r="15" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="250" y="78" text-anchor="middle" font-size="8" fill="var(--accent)">h1</text>
  <circle cx="250" cy="115" r="15" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="250" y="118" text-anchor="middle" font-size="8" fill="var(--accent)">h2</text>
  <circle cx="250" cy="155" r="15" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="250" y="158" text-anchor="middle" font-size="8" fill="var(--accent)">h3</text>
  <circle cx="250" cy="195" r="15" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.1"/>
  <text x="250" y="198" text-anchor="middle" font-size="8" fill="var(--accent)">h4</text>
  <!-- Output nodes -->
  <circle cx="420" cy="110" r="15" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.1"/>
  <text x="420" y="113" text-anchor="middle" font-size="8" fill="var(--green)">y1</text>
  <circle cx="420" cy="160" r="15" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.1"/>
  <text x="420" y="163" text-anchor="middle" font-size="8" fill="var(--green)">y2</text>
  <!-- Input labels -->
  <text x="40" y="93" text-anchor="middle" font-size="7" fill="var(--dim)">Feature 1</text>
  <text x="40" y="143" text-anchor="middle" font-size="7" fill="var(--dim)">Feature 2</text>
  <text x="40" y="193" text-anchor="middle" font-size="7" fill="var(--dim)">Feature 3</text>
  <!-- Output labels -->
  <text x="460" y="113" text-anchor="start" font-size="7" fill="var(--dim)">Class A</text>
  <text x="460" y="163" text-anchor="start" font-size="7" fill="var(--dim)">Class B</text>
  <!-- Activation function note -->
  <rect x="140" y="225" width="220" height="30" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.4"/>
  <text x="250" y="238" text-anchor="middle" font-size="8" fill="var(--dim)">Each node: z = Wx + b  |  a = ReLU(z)</text>
  <text x="250" y="249" text-anchor="middle" font-size="7" fill="var(--dim)">Weights learned via backpropagation</text>
</svg>`,

4: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Transformer Architecture (Simplified)</text>
  <!-- Main pipeline boxes -->
  <rect x="20" y="110" width="70" height="36" rx="6" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="55" y="132" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Input</text>
  <rect x="110" y="110" width="70" height="36" rx="6" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.08"/>
  <text x="145" y="128" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">Tokenize</text>
  <text x="145" y="139" text-anchor="middle" font-size="7" fill="var(--dim)">+ Embed</text>
  <rect x="200" y="95" width="100" height="66" rx="8" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.06"/>
  <text x="250" y="115" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Attention</text>
  <text x="250" y="128" text-anchor="middle" font-size="7" fill="var(--dim)">Multi-Head</text>
  <text x="250" y="140" text-anchor="middle" font-size="7" fill="var(--dim)">Self-Attention</text>
  <text x="250" y="153" text-anchor="middle" font-size="7" fill="var(--dim)">+ Layer Norm</text>
  <rect x="320" y="110" width="70" height="36" rx="6" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.08"/>
  <text x="355" y="125" text-anchor="middle" font-size="8" font-weight="600" fill="var(--green)">Feed</text>
  <text x="355" y="137" text-anchor="middle" font-size="8" font-weight="600" fill="var(--green)">Forward</text>
  <rect x="410" y="110" width="70" height="36" rx="6" stroke="var(--pink)" stroke-width="1.5" fill="var(--pink)" fill-opacity="0.08"/>
  <text x="445" y="132" text-anchor="middle" font-size="9" font-weight="600" fill="var(--pink)">Output</text>
  <!-- Arrows -->
  <defs><marker id="arrow4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--dim)"/></marker></defs>
  <line x1="90" y1="128" x2="110" y2="128" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow4)"/>
  <line x1="180" y1="128" x2="200" y2="128" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow4)"/>
  <line x1="300" y1="128" x2="320" y2="128" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow4)"/>
  <line x1="390" y1="128" x2="410" y2="128" stroke="var(--dim)" stroke-width="1.2" marker-end="url(#arrow4)"/>
  <!-- Attention heads detail -->
  <text x="250" y="42" text-anchor="middle" font-size="8" fill="var(--dim)">Attention Heads</text>
  <rect x="165" y="50" width="36" height="24" rx="4" stroke="var(--accent)" stroke-width="1" fill="var(--accent)" fill-opacity="0.12"/>
  <text x="183" y="65" text-anchor="middle" font-size="7" fill="var(--accent)">Q</text>
  <rect x="210" y="50" width="36" height="24" rx="4" stroke="var(--cyan)" stroke-width="1" fill="var(--cyan)" fill-opacity="0.12"/>
  <text x="228" y="65" text-anchor="middle" font-size="7" fill="var(--cyan)">K</text>
  <rect x="255" y="50" width="36" height="24" rx="4" stroke="var(--green)" stroke-width="1" fill="var(--green)" fill-opacity="0.12"/>
  <text x="273" y="65" text-anchor="middle" font-size="7" fill="var(--green)">V</text>
  <rect x="300" y="50" width="36" height="24" rx="4" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.12"/>
  <text x="318" y="65" text-anchor="middle" font-size="7" fill="var(--gold)">Head</text>
  <!-- Arrows from heads to attention block -->
  <line x1="183" y1="74" x2="230" y2="95" stroke="var(--accent)" stroke-width="0.8" opacity="0.5"/>
  <line x1="228" y1="74" x2="245" y2="95" stroke="var(--cyan)" stroke-width="0.8" opacity="0.5"/>
  <line x1="273" y1="74" x2="260" y2="95" stroke="var(--green)" stroke-width="0.8" opacity="0.5"/>
  <line x1="318" y1="74" x2="275" y2="95" stroke="var(--gold)" stroke-width="0.8" opacity="0.5"/>
  <!-- Formula -->
  <rect x="100" y="185" width="300" height="26" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.4"/>
  <text x="250" y="202" text-anchor="middle" font-size="8" fill="var(--dim)">Attention(Q,K,V) = softmax(QK&#x1D40; / &#x221A;d&#x2096;) V</text>
  <!-- Nx label -->
  <rect x="195" y="165" width="110" height="16" rx="4" stroke="var(--border)" stroke-width="0.8" stroke-dasharray="3 2"/>
  <text x="250" y="176" text-anchor="middle" font-size="7" fill="var(--dim)">Repeated N&#xD7; layers</text>
  <!-- Scale note -->
  <text x="250" y="235" text-anchor="middle" font-size="8" fill="var(--gold)">GPT-4: ~1.8T params  |  LLaMA 3: 405B  |  Gemini: MoE architecture</text>
  <text x="250" y="250" text-anchor="middle" font-size="7" fill="var(--dim)">Billions of parameters trained on trillions of tokens</text>
</svg>`,

5: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">AI in Oil &amp; Gas Upstream — Application Map</text>
  <!-- Dividing lines -->
  <line x1="250" y1="30" x2="250" y2="260" stroke="var(--border)" stroke-width="0.8" opacity="0.4"/>
  <line x1="10" y1="145" x2="490" y2="145" stroke="var(--border)" stroke-width="0.8" opacity="0.4"/>
  <!-- Q1: Seismic AI (top-left) -->
  <rect x="20" y="38" width="215" height="98" rx="8" stroke="var(--cyan)" stroke-width="1.2" fill="var(--cyan)" fill-opacity="0.04"/>
  <!-- Seismic wave icon -->
  <path d="M40,60 Q50,50 60,60 Q70,70 80,60 Q90,50 100,60" stroke="var(--cyan)" stroke-width="1.5" fill="none"/>
  <text x="130" y="58" font-size="10" font-weight="600" fill="var(--cyan)">Seismic AI</text>
  <text x="40" y="78" font-size="8" fill="var(--dim)">&#x2022; Auto fault detection (CNN)</text>
  <text x="40" y="90" font-size="8" fill="var(--dim)">&#x2022; Noise attenuation (U-Net)</text>
  <text x="40" y="102" font-size="8" fill="var(--dim)">&#x2022; 3D velocity modeling</text>
  <text x="40" y="118" font-size="8" fill="var(--green)">50% faster interpretation</text>
  <!-- Q2: Reservoir ML (top-right) -->
  <rect x="265" y="38" width="215" height="98" rx="8" stroke="var(--accent)" stroke-width="1.2" fill="var(--accent)" fill-opacity="0.04"/>
  <!-- Database icon -->
  <ellipse cx="290" cy="55" rx="12" ry="5" stroke="var(--accent)" stroke-width="1.2"/>
  <path d="M278,55 L278,68 Q290,78 302,68 L302,55" stroke="var(--accent)" stroke-width="1.2" fill="none"/>
  <text x="315" y="58" font-size="10" font-weight="600" fill="var(--accent)">Reservoir ML</text>
  <text x="280" y="78" font-size="8" fill="var(--dim)">&#x2022; Production forecasting (LSTM)</text>
  <text x="280" y="90" font-size="8" fill="var(--dim)">&#x2022; Proxy simulation (physics-ML)</text>
  <text x="280" y="102" font-size="8" fill="var(--dim)">&#x2022; Sweet spot identification</text>
  <text x="280" y="118" font-size="8" fill="var(--green)">1000x faster simulation</text>
  <!-- Q3: Drilling Optimization (bottom-left) -->
  <rect x="20" y="153" width="215" height="98" rx="8" stroke="var(--gold)" stroke-width="1.2" fill="var(--gold)" fill-opacity="0.04"/>
  <!-- Drill icon -->
  <line x1="42" y1="168" x2="42" y2="190" stroke="var(--gold)" stroke-width="2"/>
  <polygon points="36,190 42,200 48,190" fill="var(--gold)" opacity="0.6"/>
  <text x="65" y="175" font-size="10" font-weight="600" fill="var(--gold)">Drilling Optimization</text>
  <text x="40" y="195" font-size="8" fill="var(--dim)">&#x2022; Real-time ROP optimization</text>
  <text x="40" y="207" font-size="8" fill="var(--dim)">&#x2022; Stuck pipe prediction</text>
  <text x="40" y="219" font-size="8" fill="var(--dim)">&#x2022; Auto well-path planning</text>
  <text x="40" y="235" font-size="8" fill="var(--green)">20-30% cost reduction</text>
  <!-- Q4: Predictive Maintenance (bottom-right) -->
  <rect x="265" y="153" width="215" height="98" rx="8" stroke="var(--pink)" stroke-width="1.2" fill="var(--pink)" fill-opacity="0.04"/>
  <!-- Gear icon -->
  <circle cx="290" cy="175" r="8" stroke="var(--pink)" stroke-width="1.2" fill="none"/>
  <circle cx="290" cy="175" r="3" fill="var(--pink)" opacity="0.5"/>
  <text x="310" y="178" font-size="10" font-weight="600" fill="var(--pink)">Predictive Maint.</text>
  <text x="280" y="198" font-size="8" fill="var(--dim)">&#x2022; Vibration analysis (anomaly)</text>
  <text x="280" y="210" font-size="8" fill="var(--dim)">&#x2022; Pump failure prediction</text>
  <text x="280" y="222" font-size="8" fill="var(--dim)">&#x2022; Digital twin monitoring</text>
  <text x="280" y="238" font-size="8" fill="var(--green)">35% less downtime</text>
</svg>`,

6: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="16" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">AI in Refining &amp; Downstream</text>
  <!-- Refinery silhouette -->
  <rect x="40" y="160" width="420" height="6" rx="2" fill="var(--border)" opacity="0.3"/>
  <!-- Column 1 (CDU) -->
  <rect x="70" y="70" width="30" height="90" rx="4" stroke="var(--border)" stroke-width="1.2" fill="var(--code-bg)" fill-opacity="0.3"/>
  <rect x="73" y="75" width="24" height="5" rx="1" fill="var(--border)" opacity="0.2"/>
  <rect x="73" y="85" width="24" height="5" rx="1" fill="var(--border)" opacity="0.2"/>
  <rect x="73" y="95" width="24" height="5" rx="1" fill="var(--border)" opacity="0.2"/>
  <rect x="73" y="105" width="24" height="5" rx="1" fill="var(--border)" opacity="0.2"/>
  <text x="85" y="68" text-anchor="middle" font-size="7" fill="var(--dim)">CDU</text>
  <!-- Reactor -->
  <circle cx="175" cy="110" r="28" stroke="var(--border)" stroke-width="1.2" fill="var(--code-bg)" fill-opacity="0.3"/>
  <circle cx="175" cy="110" r="12" stroke="var(--border)" stroke-width="0.8" stroke-dasharray="2 2" fill="none"/>
  <text x="175" y="68" text-anchor="middle" font-size="7" fill="var(--dim)">FCC</text>
  <!-- Column 2 (VDU) -->
  <rect x="250" y="55" width="24" height="105" rx="4" stroke="var(--border)" stroke-width="1.2" fill="var(--code-bg)" fill-opacity="0.3"/>
  <rect x="253" y="60" width="18" height="4" rx="1" fill="var(--border)" opacity="0.2"/>
  <rect x="253" y="70" width="18" height="4" rx="1" fill="var(--border)" opacity="0.2"/>
  <rect x="253" y="80" width="18" height="4" rx="1" fill="var(--border)" opacity="0.2"/>
  <text x="262" y="50" text-anchor="middle" font-size="7" fill="var(--dim)">VDU</text>
  <!-- Furnace -->
  <rect x="330" y="100" width="40" height="60" rx="4" stroke="var(--border)" stroke-width="1.2" fill="var(--code-bg)" fill-opacity="0.3"/>
  <path d="M340,140 L345,125 L350,140 L355,125 L360,140" stroke="var(--red)" stroke-width="1" opacity="0.4" fill="none"/>
  <text x="350" y="95" text-anchor="middle" font-size="7" fill="var(--dim)">Furnace</text>
  <!-- Pump -->
  <circle cx="420" cy="145" r="14" stroke="var(--border)" stroke-width="1.2" fill="var(--code-bg)" fill-opacity="0.3"/>
  <path d="M413,145 L420,138 L427,145" stroke="var(--border)" stroke-width="1" fill="none"/>
  <text x="420" y="125" text-anchor="middle" font-size="7" fill="var(--dim)">Pump</text>
  <!-- Connecting pipes -->
  <line x1="100" y1="120" x2="147" y2="115" stroke="var(--border)" stroke-width="2" opacity="0.3"/>
  <line x1="203" y1="110" x2="250" y2="110" stroke="var(--border)" stroke-width="2" opacity="0.3"/>
  <line x1="274" y1="120" x2="330" y2="130" stroke="var(--border)" stroke-width="2" opacity="0.3"/>
  <line x1="370" y1="140" x2="406" y2="143" stroke="var(--border)" stroke-width="2" opacity="0.3"/>
  <!-- AI overlay points with pulse rings -->
  <!-- APC on CDU -->
  <circle cx="85" cy="90" r="10" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.15"/>
  <circle cx="85" cy="90" r="16" stroke="var(--cyan)" stroke-width="0.6" opacity="0.3" fill="none"/>
  <text x="85" y="93" text-anchor="middle" font-size="6" font-weight="700" fill="var(--cyan)">APC</text>
  <!-- AI on Reactor -->
  <circle cx="175" cy="110" r="10" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.15"/>
  <circle cx="175" cy="110" r="16" stroke="var(--accent)" stroke-width="0.6" opacity="0.3" fill="none"/>
  <text x="175" y="113" text-anchor="middle" font-size="6" font-weight="700" fill="var(--accent)">ML</text>
  <!-- Soft Sensor on VDU -->
  <circle cx="262" cy="80" r="10" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.15"/>
  <circle cx="262" cy="80" r="16" stroke="var(--gold)" stroke-width="0.6" opacity="0.3" fill="none"/>
  <text x="262" y="83" text-anchor="middle" font-size="5" font-weight="700" fill="var(--gold)">Soft</text>
  <!-- Energy Opt on Furnace -->
  <circle cx="350" cy="120" r="10" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.15"/>
  <circle cx="350" cy="120" r="16" stroke="var(--green)" stroke-width="0.6" opacity="0.3" fill="none"/>
  <text x="350" y="123" text-anchor="middle" font-size="5" font-weight="700" fill="var(--green)">Opt</text>
  <!-- PdM on Pump -->
  <circle cx="420" cy="145" r="10" stroke="var(--pink)" stroke-width="1.5" fill="var(--pink)" fill-opacity="0.15"/>
  <circle cx="420" cy="145" r="16" stroke="var(--pink)" stroke-width="0.6" opacity="0.3" fill="none"/>
  <text x="420" y="148" text-anchor="middle" font-size="5" font-weight="700" fill="var(--pink)">PdM</text>
  <!-- Legend boxes at bottom -->
  <rect x="20" y="180" width="88" height="36" rx="5" stroke="var(--cyan)" stroke-width="1" fill="var(--cyan)" fill-opacity="0.06"/>
  <text x="64" y="194" text-anchor="middle" font-size="8" font-weight="600" fill="var(--cyan)">APC</text>
  <text x="64" y="207" text-anchor="middle" font-size="7" fill="var(--dim)">Adv. Process Ctrl</text>
  <rect x="118" y="180" width="88" height="36" rx="5" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="162" y="194" text-anchor="middle" font-size="8" font-weight="600" fill="var(--gold)">Soft Sensors</text>
  <text x="162" y="207" text-anchor="middle" font-size="7" fill="var(--dim)">Virtual analyzers</text>
  <rect x="216" y="180" width="88" height="36" rx="5" stroke="var(--green)" stroke-width="1" fill="var(--green)" fill-opacity="0.06"/>
  <text x="260" y="194" text-anchor="middle" font-size="8" font-weight="600" fill="var(--green)">Energy Opt</text>
  <text x="260" y="207" text-anchor="middle" font-size="7" fill="var(--dim)">2-5% fuel savings</text>
  <rect x="314" y="180" width="88" height="36" rx="5" stroke="var(--pink)" stroke-width="1" fill="var(--pink)" fill-opacity="0.06"/>
  <text x="358" y="194" text-anchor="middle" font-size="8" font-weight="600" fill="var(--pink)">Pred. Maint.</text>
  <text x="358" y="207" text-anchor="middle" font-size="7" fill="var(--dim)">30% less downtime</text>
  <rect x="412" y="180" width="72" height="36" rx="5" stroke="var(--accent)" stroke-width="1" fill="var(--accent)" fill-opacity="0.06"/>
  <text x="448" y="194" text-anchor="middle" font-size="8" font-weight="600" fill="var(--accent)">Yield ML</text>
  <text x="448" y="207" text-anchor="middle" font-size="7" fill="var(--dim)">Max products</text>
  <!-- Bottom summary -->
  <text x="250" y="235" text-anchor="middle" font-size="8" fill="var(--gold)">Typical refinery ROI: $2-5M/year per AI application</text>
  <text x="250" y="250" text-anchor="middle" font-size="7" fill="var(--dim)">Integrated digital twin combines all AI layers for holistic optimization</text>
</svg>`,

7: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">AI for Trading &amp; Supply Chain</text>
  <!-- Input data sources (left side) -->
  <text x="65" y="42" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Data Inputs</text>
  <rect x="15" y="52" width="100" height="26" rx="5" stroke="var(--cyan)" stroke-width="1" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="65" y="69" text-anchor="middle" font-size="8" fill="var(--cyan)">News &amp; Sentiment</text>
  <rect x="15" y="84" width="100" height="26" rx="5" stroke="var(--cyan)" stroke-width="1" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="65" y="101" text-anchor="middle" font-size="8" fill="var(--cyan)">Prices &amp; Curves</text>
  <rect x="15" y="116" width="100" height="26" rx="5" stroke="var(--cyan)" stroke-width="1" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="65" y="133" text-anchor="middle" font-size="8" fill="var(--cyan)">Weather &amp; Geo</text>
  <rect x="15" y="148" width="100" height="26" rx="5" stroke="var(--cyan)" stroke-width="1" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="65" y="165" text-anchor="middle" font-size="8" fill="var(--cyan)">Inventory &amp; Flows</text>
  <rect x="15" y="180" width="100" height="26" rx="5" stroke="var(--cyan)" stroke-width="1" fill="var(--cyan)" fill-opacity="0.08"/>
  <text x="65" y="197" text-anchor="middle" font-size="8" fill="var(--cyan)">AIS / Shipping</text>
  <!-- AI brain (center) -->
  <defs><marker id="arrow7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--dim)"/></marker></defs>
  <rect x="175" y="60" width="150" height="140" rx="14" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.05"/>
  <text x="250" y="85" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">AI Engine</text>
  <line x1="200" y1="93" x2="300" y2="93" stroke="var(--accent)" stroke-width="0.5" opacity="0.4"/>
  <text x="250" y="110" text-anchor="middle" font-size="8" fill="var(--dim)">NLP &amp; Sentiment</text>
  <text x="250" y="124" text-anchor="middle" font-size="8" fill="var(--dim)">Time-series Models</text>
  <text x="250" y="138" text-anchor="middle" font-size="8" fill="var(--dim)">Graph Networks</text>
  <text x="250" y="152" text-anchor="middle" font-size="8" fill="var(--dim)">Optimization (LP/MIP)</text>
  <text x="250" y="166" text-anchor="middle" font-size="8" fill="var(--dim)">Reinforcement Learning</text>
  <text x="250" y="186" text-anchor="middle" font-size="7" fill="var(--gold)">Ensemble of models</text>
  <!-- Arrows from inputs to brain -->
  <line x1="115" y1="65" x2="175" y2="100" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <line x1="115" y1="97" x2="175" y2="115" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <line x1="115" y1="129" x2="175" y2="130" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <line x1="115" y1="161" x2="175" y2="145" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <line x1="115" y1="193" x2="175" y2="160" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <!-- Output decisions (right side) -->
  <text x="435" y="42" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Outputs</text>
  <rect x="385" y="52" width="100" height="26" rx="5" stroke="var(--green)" stroke-width="1" fill="var(--green)" fill-opacity="0.08"/>
  <text x="435" y="69" text-anchor="middle" font-size="8" fill="var(--green)">Price Forecasts</text>
  <rect x="385" y="84" width="100" height="26" rx="5" stroke="var(--green)" stroke-width="1" fill="var(--green)" fill-opacity="0.08"/>
  <text x="435" y="101" text-anchor="middle" font-size="8" fill="var(--green)">Risk Alerts</text>
  <rect x="385" y="116" width="100" height="26" rx="5" stroke="var(--green)" stroke-width="1" fill="var(--green)" fill-opacity="0.08"/>
  <text x="435" y="133" text-anchor="middle" font-size="8" fill="var(--green)">Trade Signals</text>
  <rect x="385" y="148" width="100" height="26" rx="5" stroke="var(--green)" stroke-width="1" fill="var(--green)" fill-opacity="0.08"/>
  <text x="435" y="165" text-anchor="middle" font-size="8" fill="var(--green)">Route Optimize</text>
  <rect x="385" y="180" width="100" height="26" rx="5" stroke="var(--green)" stroke-width="1" fill="var(--green)" fill-opacity="0.08"/>
  <text x="435" y="197" text-anchor="middle" font-size="8" fill="var(--green)">Inv. Scheduling</text>
  <!-- Arrows from brain to outputs -->
  <line x1="325" y1="100" x2="385" y2="65" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <line x1="325" y1="115" x2="385" y2="97" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <line x1="325" y1="130" x2="385" y2="129" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <line x1="325" y1="145" x2="385" y2="161" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <line x1="325" y1="160" x2="385" y2="193" stroke="var(--dim)" stroke-width="0.8" marker-end="url(#arrow7)"/>
  <!-- Bottom note -->
  <rect x="100" y="220" width="300" height="28" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.4"/>
  <text x="250" y="237" text-anchor="middle" font-size="8" fill="var(--gold)">Human-in-the-loop: AI recommends, trader decides</text>
</svg>`,

8: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Computer Vision &amp; IoT — Edge Architecture</text>
  <!-- Sensors/Cameras group -->
  <rect x="15" y="40" width="95" height="140" rx="8" stroke="var(--cyan)" stroke-width="1.2" fill="var(--cyan)" fill-opacity="0.04"/>
  <text x="62" y="58" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Sensors</text>
  <!-- Camera icon -->
  <rect x="35" y="68" width="20" height="14" rx="3" stroke="var(--cyan)" stroke-width="1" fill="none"/>
  <circle cx="45" cy="75" r="4" stroke="var(--cyan)" stroke-width="0.8" fill="none"/>
  <text x="62" y="77" font-size="7" fill="var(--dim)">CCTV</text>
  <!-- Thermal icon -->
  <rect x="35" y="92" width="20" height="14" rx="3" stroke="var(--red)" stroke-width="1" fill="var(--red)" fill-opacity="0.1"/>
  <text x="62" y="102" font-size="7" fill="var(--dim)">Thermal</text>
  <!-- Vibration icon -->
  <path d="M35,120 L40,115 L45,125 L50,115 L55,120" stroke="var(--gold)" stroke-width="1" fill="none"/>
  <text x="62" y="128" font-size="7" fill="var(--dim)">Vibration</text>
  <!-- Gas detector -->
  <circle cx="45" cy="148" r="6" stroke="var(--green)" stroke-width="1" fill="none"/>
  <text x="45" y="150" text-anchor="middle" font-size="5" fill="var(--green)">G</text>
  <text x="62" y="152" font-size="7" fill="var(--dim)">Gas Det.</text>
  <!-- Pressure -->
  <circle cx="45" cy="170" r="6" stroke="var(--accent)" stroke-width="1" fill="none"/>
  <text x="45" y="172" text-anchor="middle" font-size="5" fill="var(--accent)">P</text>
  <text x="62" y="174" font-size="7" fill="var(--dim)">Pressure</text>
  <!-- Edge Device -->
  <defs>
    <marker id="arrow8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--dim)"/></marker>
    <marker id="arrow8g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--green)"/></marker>
  </defs>
  <line x1="110" y1="110" x2="140" y2="110" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arrow8)"/>
  <text x="125" y="104" text-anchor="middle" font-size="6" fill="var(--dim)">Raw</text>
  <text x="125" y="120" text-anchor="middle" font-size="6" fill="var(--dim)">Data</text>
  <rect x="145" y="50" width="105" height="120" rx="8" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.04"/>
  <text x="197" y="68" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">Edge Device</text>
  <rect x="155" y="76" width="85" height="18" rx="3" stroke="var(--border)" stroke-width="0.8" fill="var(--code-bg)" fill-opacity="0.3"/>
  <text x="197" y="89" text-anchor="middle" font-size="7" fill="var(--dim)">Pre-processing</text>
  <rect x="155" y="100" width="85" height="18" rx="3" stroke="var(--border)" stroke-width="0.8" fill="var(--code-bg)" fill-opacity="0.3"/>
  <text x="197" y="113" text-anchor="middle" font-size="7" fill="var(--dim)">Inference (TinyML)</text>
  <rect x="155" y="124" width="85" height="18" rx="3" stroke="var(--border)" stroke-width="0.8" fill="var(--code-bg)" fill-opacity="0.3"/>
  <text x="197" y="137" text-anchor="middle" font-size="7" fill="var(--dim)">Alert Generation</text>
  <text x="197" y="160" text-anchor="middle" font-size="7" fill="var(--gold)">~50ms latency</text>
  <!-- Process/Action -->
  <line x1="250" y1="110" x2="280" y2="110" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arrow8)"/>
  <text x="265" y="104" text-anchor="middle" font-size="6" fill="var(--dim)">Events</text>
  <rect x="285" y="55" width="95" height="110" rx="8" stroke="var(--green)" stroke-width="1.2" fill="var(--green)" fill-opacity="0.04"/>
  <text x="332" y="73" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Actions</text>
  <text x="332" y="92" text-anchor="middle" font-size="7" fill="var(--dim)">PPE violation alert</text>
  <text x="332" y="106" text-anchor="middle" font-size="7" fill="var(--dim)">Leak detection</text>
  <text x="332" y="120" text-anchor="middle" font-size="7" fill="var(--dim)">Corrosion flagging</text>
  <text x="332" y="134" text-anchor="middle" font-size="7" fill="var(--dim)">Equipment anomaly</text>
  <text x="332" y="152" text-anchor="middle" font-size="7" fill="var(--green)">Real-time response</text>
  <!-- Cloud -->
  <line x1="380" y1="110" x2="410" y2="110" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arrow8)"/>
  <text x="395" y="104" text-anchor="middle" font-size="6" fill="var(--dim)">Sync</text>
  <path d="M430,90 Q420,60 440,55 Q455,45 468,58 Q485,52 488,68 Q498,72 495,85 Q498,98 485,100 L430,100 Q415,98 418,88 Z" stroke="var(--pink)" stroke-width="1.2" fill="var(--pink)" fill-opacity="0.06"/>
  <text x="458" y="82" text-anchor="middle" font-size="8" font-weight="600" fill="var(--pink)">Cloud</text>
  <text x="458" y="96" text-anchor="middle" font-size="6" fill="var(--dim)">Analytics</text>
  <!-- Cloud outputs -->
  <text x="458" y="118" text-anchor="middle" font-size="7" fill="var(--dim)">Dashboard</text>
  <text x="458" y="130" text-anchor="middle" font-size="7" fill="var(--dim)">Model retrain</text>
  <text x="458" y="142" text-anchor="middle" font-size="7" fill="var(--dim)">Long-term trends</text>
  <!-- Data flow legend -->
  <rect x="80" y="195" width="340" height="40" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.3"/>
  <text x="250" y="210" text-anchor="middle" font-size="8" fill="var(--text)">Data Volume Reduction</text>
  <rect x="110" y="218" width="200" height="8" rx="3" fill="var(--border)" opacity="0.2"/>
  <rect x="110" y="218" width="200" height="8" rx="3" fill="var(--green)" fill-opacity="0.3"/>
  <rect x="110" y="218" width="80" height="8" rx="3" fill="var(--green)" fill-opacity="0.5"/>
  <rect x="110" y="218" width="20" height="8" rx="3" fill="var(--green)" opacity="0.8"/>
  <text x="120" y="238" font-size="6" fill="var(--dim)">Raw: GB/s</text>
  <text x="190" y="238" font-size="6" fill="var(--dim)">Processed</text>
  <text x="270" y="238" font-size="6" fill="var(--dim)">Events only</text>
  <text x="340" y="215" font-size="7" fill="var(--green)">99% less</text>
  <text x="340" y="225" font-size="7" fill="var(--green)">bandwidth</text>
</svg>`,

9: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">AI Ethics &amp; Governance</text>
  <!-- Balance scale -->
  <!-- Fulcrum triangle -->
  <polygon points="250,175 240,195 260,195" stroke="var(--border)" stroke-width="1.5" fill="var(--code-bg)" fill-opacity="0.3"/>
  <!-- Base -->
  <rect x="220" y="195" width="60" height="6" rx="2" fill="var(--border)" opacity="0.4"/>
  <!-- Beam -->
  <line x1="80" y1="115" x2="420" y2="115" stroke="var(--border)" stroke-width="2"/>
  <!-- Left chain -->
  <line x1="130" y1="115" x2="130" y2="40" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 2"/>
  <!-- Right chain -->
  <line x1="370" y1="115" x2="370" y2="40" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 2"/>
  <!-- Center pivot -->
  <circle cx="250" cy="115" r="5" fill="var(--accent)" opacity="0.6"/>
  <!-- Benefits pan (left) -->
  <rect x="50" y="32" width="160" height="80" rx="8" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.05"/>
  <text x="130" y="48" text-anchor="middle" font-size="10" font-weight="600" fill="var(--green)">Benefits</text>
  <line x1="65" y1="54" x2="195" y2="54" stroke="var(--green)" stroke-width="0.5" opacity="0.3"/>
  <text x="70" y="68" font-size="8" fill="var(--dim)">&#x2713; Safety improvements</text>
  <text x="70" y="80" font-size="8" fill="var(--dim)">&#x2713; Efficiency gains (20-40%)</text>
  <text x="70" y="92" font-size="8" fill="var(--dim)">&#x2713; Better decision-making</text>
  <text x="70" y="104" font-size="8" fill="var(--dim)">&#x2713; Reduced emissions</text>
  <!-- Risks pan (right) -->
  <rect x="290" y="32" width="160" height="80" rx="8" stroke="var(--red)" stroke-width="1.5" fill="var(--red)" fill-opacity="0.05"/>
  <text x="370" y="48" text-anchor="middle" font-size="10" font-weight="600" fill="var(--red)">Risks</text>
  <line x1="305" y1="54" x2="435" y2="54" stroke="var(--red)" stroke-width="0.5" opacity="0.3"/>
  <text x="310" y="68" font-size="8" fill="var(--dim)">&#x2717; Job displacement</text>
  <text x="310" y="80" font-size="8" fill="var(--dim)">&#x2717; Algorithmic bias</text>
  <text x="310" y="92" font-size="8" fill="var(--dim)">&#x2717; Black-box decisions</text>
  <text x="310" y="104" font-size="8" fill="var(--dim)">&#x2717; Cybersecurity threats</text>
  <!-- Governance pillars at bottom -->
  <text x="250" y="218" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">Governance Framework</text>
  <rect x="30" y="228" width="85" height="24" rx="5" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="72" y="244" text-anchor="middle" font-size="7" font-weight="600" fill="var(--gold)">Transparency</text>
  <rect x="125" y="228" width="85" height="24" rx="5" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="167" y="244" text-anchor="middle" font-size="7" font-weight="600" fill="var(--gold)">Accountability</text>
  <rect x="220" y="228" width="85" height="24" rx="5" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="262" y="244" text-anchor="middle" font-size="7" font-weight="600" fill="var(--gold)">Fairness</text>
  <rect x="315" y="228" width="85" height="24" rx="5" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="357" y="244" text-anchor="middle" font-size="7" font-weight="600" fill="var(--gold)">Safety</text>
  <rect x="410" y="228" width="70" height="24" rx="5" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="445" y="244" text-anchor="middle" font-size="7" font-weight="600" fill="var(--gold)">Privacy</text>
  <!-- Connecting lines from pivot to governance -->
  <line x1="250" y1="175" x2="250" y2="208" stroke="var(--gold)" stroke-width="0.8" stroke-dasharray="3 2"/>
</svg>`,

10: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">AI-Powered Refinery 2030 — Maturity Roadmap</text>
  <!-- Ascending baseline -->
  <line x1="30" y1="200" x2="480" y2="200" stroke="var(--border)" stroke-width="1" opacity="0.4"/>
  <!-- Block 1: Today (Manual) -->
  <rect x="35" y="150" width="95" height="50" rx="6" stroke="var(--border)" stroke-width="1.5" fill="var(--code-bg)" fill-opacity="0.4"/>
  <text x="82" y="170" text-anchor="middle" font-size="10" font-weight="600" fill="var(--dim)">Manual</text>
  <text x="82" y="183" text-anchor="middle" font-size="7" fill="var(--dim)">Rule-based control</text>
  <text x="82" y="193" text-anchor="middle" font-size="7" fill="var(--dim)">Reactive maintenance</text>
  <text x="82" y="215" text-anchor="middle" font-size="9" fill="var(--border)">Today</text>
  <!-- Ascending arrow from block 1 to 2 -->
  <defs><marker id="arrow10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--cyan)"/></marker></defs>
  <path d="M130,155 L155,135" stroke="var(--cyan)" stroke-width="1.2" marker-end="url(#arrow10)" stroke-dasharray="4 2"/>
  <!-- Block 2: Near-term (Assisted) -->
  <rect x="150" y="115" width="95" height="65" rx="6" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.06"/>
  <text x="197" y="133" text-anchor="middle" font-size="10" font-weight="600" fill="var(--cyan)">Assisted</text>
  <text x="197" y="147" text-anchor="middle" font-size="7" fill="var(--dim)">APC on key units</text>
  <text x="197" y="157" text-anchor="middle" font-size="7" fill="var(--dim)">Predictive alerts</text>
  <text x="197" y="167" text-anchor="middle" font-size="7" fill="var(--dim)">Dashboards + BI</text>
  <text x="197" y="215" text-anchor="middle" font-size="9" fill="var(--cyan)">2025</text>
  <!-- Ascending arrow from block 2 to 3 -->
  <defs><marker id="arrow10a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--gold)"/></marker></defs>
  <path d="M245,120 L270,100" stroke="var(--gold)" stroke-width="1.2" marker-end="url(#arrow10a)" stroke-dasharray="4 2"/>
  <!-- Block 3: Mid-term (Augmented) -->
  <rect x="265" y="75" width="95" height="75" rx="6" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="312" y="93" text-anchor="middle" font-size="10" font-weight="600" fill="var(--gold)">Augmented</text>
  <text x="312" y="107" text-anchor="middle" font-size="7" fill="var(--dim)">Digital twins</text>
  <text x="312" y="117" text-anchor="middle" font-size="7" fill="var(--dim)">Closed-loop optimize</text>
  <text x="312" y="127" text-anchor="middle" font-size="7" fill="var(--dim)">AI-guided operators</text>
  <text x="312" y="137" text-anchor="middle" font-size="7" fill="var(--dim)">Integrated scheduling</text>
  <text x="312" y="215" text-anchor="middle" font-size="9" fill="var(--gold)">2027</text>
  <!-- Ascending arrow from block 3 to 4 -->
  <defs><marker id="arrow10b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--green)"/></marker></defs>
  <path d="M360,82 L385,62" stroke="var(--green)" stroke-width="1.2" marker-end="url(#arrow10b)" stroke-dasharray="4 2"/>
  <!-- Block 4: 2030 (Autonomous) -->
  <rect x="380" y="35" width="100" height="90" rx="6" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.06"/>
  <text x="430" y="53" text-anchor="middle" font-size="10" font-weight="700" fill="var(--green)">Autonomous</text>
  <text x="430" y="67" text-anchor="middle" font-size="7" fill="var(--dim)">Self-optimizing plant</text>
  <text x="430" y="77" text-anchor="middle" font-size="7" fill="var(--dim)">Autonomous logistics</text>
  <text x="430" y="87" text-anchor="middle" font-size="7" fill="var(--dim)">Gen-AI co-pilot ops</text>
  <text x="430" y="97" text-anchor="middle" font-size="7" fill="var(--dim)">Lights-out sections</text>
  <text x="430" y="112" text-anchor="middle" font-size="7" fill="var(--green)">Full digital twin</text>
  <text x="430" y="215" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">2030</text>
  <!-- Progress line connecting blocks (ascending) -->
  <line x1="82" y1="200" x2="82" y2="200" stroke="var(--border)" stroke-width="1"/>
  <circle cx="82" cy="200" r="3" fill="var(--border)"/>
  <line x1="197" y1="180" x2="197" y2="200" stroke="var(--cyan)" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="197" cy="200" r="3" fill="var(--cyan)"/>
  <line x1="312" y1="150" x2="312" y2="200" stroke="var(--gold)" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="312" cy="200" r="3" fill="var(--gold)"/>
  <line x1="430" y1="125" x2="430" y2="200" stroke="var(--green)" stroke-width="1" stroke-dasharray="2 2"/>
  <circle cx="430" cy="200" r="3" fill="var(--green)"/>
  <!-- ROI annotation -->
  <rect x="120" y="232" width="260" height="22" rx="5" stroke="var(--border)" stroke-width="0.8" fill="var(--code-bg)" fill-opacity="0.3"/>
  <text x="250" y="247" text-anchor="middle" font-size="8" fill="var(--gold)">Projected value: $50-100M/yr per large refinery by 2030</text>
</svg>`,

11: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">AI 2027: The Recursive Takeoff</text>
  <!-- Timeline -->
  <line x1="50" y1="60" x2="450" y2="60" stroke="var(--border)" stroke-width="1.5"/>
  <!-- 2025 -->
  <circle cx="90" cy="60" r="6" fill="var(--cyan)"/>
  <text x="90" y="50" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">2025</text>
  <text x="90" y="80" text-anchor="middle" font-size="7" fill="var(--dim)">Agent Era</text>
  <text x="90" y="90" text-anchor="middle" font-size="7" fill="var(--dim)">PhD-level AI</text>
  <!-- 2026 -->
  <circle cx="190" cy="60" r="6" fill="var(--accent)"/>
  <text x="190" y="50" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">2026</text>
  <text x="190" y="80" text-anchor="middle" font-size="7" fill="var(--dim)">Recursive R&D</text>
  <text x="190" y="90" text-anchor="middle" font-size="7" fill="var(--dim)">50% efficiency+</text>
  <!-- 2027 -->
  <circle cx="310" cy="60" r="8" fill="var(--gold)"/>
  <text x="310" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="var(--gold)">2027</text>
  <text x="310" y="80" text-anchor="middle" font-size="7" fill="var(--dim)">Superhuman Coder</text>
  <text x="310" y="90" text-anchor="middle" font-size="7" fill="var(--dim)">200K copies @ 30x</text>
  <!-- 2028 -->
  <circle cx="420" cy="60" r="8" fill="var(--red)"/>
  <text x="420" y="48" text-anchor="middle" font-size="10" font-weight="700" fill="var(--red)">2028</text>
  <text x="420" y="80" text-anchor="middle" font-size="7" fill="var(--dim)">Superintelligence</text>
  <text x="420" y="90" text-anchor="middle" font-size="7" fill="var(--red)">Critical moment</text>
  <!-- Acceleration curve -->
  <path d="M90,220 Q150,215 190,200 Q250,170 310,120 Q370,80 420,60" stroke="var(--gold)" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
  <text x="250" y="240" text-anchor="middle" font-size="8" fill="var(--gold)">Capability acceleration curve</text>
  <!-- Agents -->
  <rect x="60" y="110" width="65" height="28" rx="5" fill="var(--cyan)" fill-opacity="0.1" stroke="var(--cyan)" stroke-width="1"/>
  <text x="92" y="128" text-anchor="middle" font-size="8" font-weight="600" fill="var(--cyan)">Agent-1</text>
  <rect x="160" y="110" width="65" height="28" rx="5" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1"/>
  <text x="192" y="128" text-anchor="middle" font-size="8" font-weight="600" fill="var(--accent)">Agent-2</text>
  <rect x="275" y="110" width="65" height="28" rx="5" fill="var(--gold)" fill-opacity="0.1" stroke="var(--gold)" stroke-width="1"/>
  <text x="307" y="128" text-anchor="middle" font-size="8" font-weight="600" fill="var(--gold)">Agent-3/4</text>
  <rect x="390" y="110" width="65" height="28" rx="5" fill="var(--red)" fill-opacity="0.1" stroke="var(--red)" stroke-width="1"/>
  <text x="422" y="128" text-anchor="middle" font-size="8" font-weight="600" fill="var(--red)">Agent-5</text>
  <!-- Arrows between agents -->
  <line x1="125" y1="124" x2="158" y2="124" stroke="var(--dim)" stroke-width="1" marker-end="url(#arr11)"/>
  <line x1="225" y1="124" x2="273" y2="124" stroke="var(--dim)" stroke-width="1" marker-end="url(#arr11)"/>
  <line x1="340" y1="124" x2="388" y2="124" stroke="var(--dim)" stroke-width="1" marker-end="url(#arr11)"/>
  <defs><marker id="arr11" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L6,3 L0,6" fill="var(--dim)"/></marker></defs>
  <!-- Warning box -->
  <rect x="130" y="155" width="240" height="24" rx="6" fill="var(--red)" fill-opacity="0.08" stroke="var(--red)" stroke-width="0.8"/>
  <text x="250" y="170" text-anchor="middle" font-size="8" font-weight="600" fill="var(--red)">Each agent accelerates the next — humans lose oversight</text>
  <!-- Bottom note -->
  <rect x="100" y="255" width="300" height="18" rx="4" fill="var(--code-bg)" fill-opacity="0.3" stroke="var(--border)" stroke-width="0.5"/>
  <text x="250" y="267" text-anchor="middle" font-size="7" fill="var(--dim)">Revised 2026: Actual pace ~65% of predicted | Median shifted to 2029</text>
</svg>`,

12: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Bostrom's Superintelligence Framework</text>
  <!-- Orthogonality: Intelligence axis -->
  <line x1="50" y1="220" x2="50" y2="50" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="45" y="45" text-anchor="end" font-size="8" font-weight="600" fill="var(--cyan)">Intelligence</text>
  <line x1="50" y1="220" x2="230" y2="220" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="235" y="224" font-size="8" font-weight="600" fill="var(--gold)">Goals (any)</text>
  <!-- Points on the chart -->
  <circle cx="80" cy="190" r="4" fill="var(--dim)"/>
  <text x="85" y="185" font-size="7" fill="var(--dim)">Ant</text>
  <circle cx="100" cy="150" r="5" fill="var(--cyan)"/>
  <text x="108" y="147" font-size="7" fill="var(--cyan)">Dog</text>
  <circle cx="130" cy="110" r="6" fill="var(--accent)"/>
  <text x="140" y="107" font-size="7" fill="var(--accent)">Human</text>
  <circle cx="160" cy="70" r="8" fill="var(--red)" fill-opacity="0.8"/>
  <text x="172" y="67" font-size="8" font-weight="600" fill="var(--red)">ASI</text>
  <!-- Paperclip on the goals axis -->
  <circle cx="190" cy="70" r="4" fill="var(--gold)"/>
  <text x="198" y="67" font-size="6" fill="var(--gold)">Paperclips?</text>
  <!-- Instrumental Convergence box -->
  <rect x="270" y="40" width="200" height="100" rx="8" stroke="var(--red)" stroke-width="1.5" fill="var(--red)" fill-opacity="0.05"/>
  <text x="370" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="var(--red)">Instrumental Convergence</text>
  <text x="370" y="74" text-anchor="middle" font-size="8" fill="var(--text)">Any smart agent will:</text>
  <text x="285" y="90" font-size="8" fill="var(--cyan)">1. Self-preserve</text>
  <text x="285" y="104" font-size="8" fill="var(--accent)">2. Resist goal changes</text>
  <text x="285" y="118" font-size="8" fill="var(--gold)">3. Acquire resources</text>
  <text x="285" y="132" font-size="8" fill="var(--green)">4. Self-improve</text>
  <!-- Treacherous Turn -->
  <rect x="270" y="155" width="200" height="50" rx="8" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.05"/>
  <text x="370" y="173" text-anchor="middle" font-size="9" font-weight="700" fill="var(--gold)">Treacherous Turn</text>
  <text x="370" y="190" text-anchor="middle" font-size="7" fill="var(--dim)">Cooperate while weak</text>
  <text x="370" y="200" text-anchor="middle" font-size="7" fill="var(--red)">Defect once powerful enough</text>
  <!-- Bottom -->
  <rect x="80" y="235" width="340" height="18" rx="4" fill="var(--code-bg)" fill-opacity="0.3" stroke="var(--border)" stroke-width="0.5"/>
  <text x="250" y="247" text-anchor="middle" font-size="7" fill="var(--dim)">Orthogonality Thesis: Intelligence + Goals = Independent Axes</text>
</svg>`,

13: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">The Containment Dilemma</text>
  <!-- Three paths triangle -->
  <polygon points="250,50 100,200 400,200" fill="none" stroke="var(--border)" stroke-width="1" stroke-dasharray="4 2"/>
  <!-- Catastrophe -->
  <circle cx="100" cy="200" r="22" fill="var(--red)" fill-opacity="0.1" stroke="var(--red)" stroke-width="1.5"/>
  <text x="100" y="197" text-anchor="middle" font-size="8" font-weight="700" fill="var(--red)">Catastrophe</text>
  <text x="100" y="207" text-anchor="middle" font-size="6" fill="var(--dim)">Uncontained</text>
  <!-- Stagnation -->
  <circle cx="400" cy="200" r="22" fill="var(--cyan)" fill-opacity="0.1" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="400" y="197" text-anchor="middle" font-size="8" font-weight="700" fill="var(--cyan)">Stagnation</text>
  <text x="400" y="207" text-anchor="middle" font-size="6" fill="var(--dim)">Halt progress</text>
  <!-- Dystopia -->
  <circle cx="250" cy="50" r="22" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="250" y="47" text-anchor="middle" font-size="8" font-weight="700" fill="var(--accent)">Dystopia</text>
  <text x="250" y="57" text-anchor="middle" font-size="6" fill="var(--dim)">Total control</text>
  <!-- Narrow path in center -->
  <circle cx="250" cy="150" r="18" fill="var(--gold)" fill-opacity="0.15" stroke="var(--gold)" stroke-width="2"/>
  <text x="250" y="147" text-anchor="middle" font-size="7" font-weight="700" fill="var(--gold)">Narrow</text>
  <text x="250" y="157" text-anchor="middle" font-size="7" font-weight="700" fill="var(--gold)">Path</text>
  <!-- Containment track record -->
  <rect x="50" y="228" width="400" height="10" rx="3" fill="var(--border)"/>
  <text x="250" y="236" text-anchor="middle" font-size="6" fill="var(--dim)">Historical containment success rate: 0% for transformative technologies</text>
</svg>`,

14: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Counting the OOMs to AGI</text>
  <!-- Intelligence staircase -->
  <rect x="30" y="200" width="80" height="30" rx="4" fill="var(--border)" fill-opacity="0.3" stroke="var(--border)" stroke-width="1"/>
  <text x="70" y="218" text-anchor="middle" font-size="8" font-weight="600" fill="var(--dim)">GPT-2 (2019)</text>
  <text x="70" y="228" text-anchor="middle" font-size="6" fill="var(--dim)">Preschool</text>
  <rect x="120" y="165" width="80" height="30" rx="4" fill="var(--cyan)" fill-opacity="0.1" stroke="var(--cyan)" stroke-width="1"/>
  <text x="160" y="183" text-anchor="middle" font-size="8" font-weight="600" fill="var(--cyan)">GPT-3 (2020)</text>
  <text x="160" y="193" text-anchor="middle" font-size="6" fill="var(--dim)">Elementary</text>
  <rect x="210" y="130" width="80" height="30" rx="4" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1"/>
  <text x="250" y="148" text-anchor="middle" font-size="8" font-weight="600" fill="var(--accent)">GPT-4 (2023)</text>
  <text x="250" y="158" text-anchor="middle" font-size="6" fill="var(--dim)">Smart HS</text>
  <rect x="300" y="95" width="80" height="30" rx="4" fill="var(--gold)" fill-opacity="0.1" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="340" y="113" text-anchor="middle" font-size="8" font-weight="600" fill="var(--gold)">~2026</text>
  <text x="340" y="123" text-anchor="middle" font-size="6" fill="var(--gold)">Expert</text>
  <rect x="390" y="55" width="80" height="35" rx="4" fill="var(--red)" fill-opacity="0.1" stroke="var(--red)" stroke-width="2"/>
  <text x="430" y="73" text-anchor="middle" font-size="9" font-weight="700" fill="var(--red)">~2028-30</text>
  <text x="430" y="85" text-anchor="middle" font-size="7" fill="var(--red)">Superintelligence</text>
  <!-- OOM bars -->
  <text x="250" y="248" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">~1 OOM/year = 10x improvement annually</text>
  <rect x="80" y="252" width="100" height="6" rx="2" fill="var(--cyan)" fill-opacity="0.4"/>
  <text x="130" y="248" text-anchor="middle" font-size="6" fill="var(--cyan)">Compute +0.5</text>
  <rect x="200" y="252" width="100" height="6" rx="2" fill="var(--accent)" fill-opacity="0.4"/>
  <text x="250" y="248" text-anchor="middle" font-size="6" fill="var(--accent)">Algorithms +0.5</text>
  <rect x="320" y="252" width="80" height="6" rx="2" fill="var(--gold)" fill-opacity="0.4"/>
  <text x="360" y="248" text-anchor="middle" font-size="6" fill="var(--gold)">Unhobbling</text>
</svg>`,

15: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">The Optimistic Spectrum</text>
  <!-- Amodei's 5 domains -->
  <rect x="20" y="45" width="88" height="55" rx="6" fill="var(--green)" fill-opacity="0.08" stroke="var(--green)" stroke-width="1.2"/>
  <text x="64" y="63" text-anchor="middle" font-size="8" font-weight="700" fill="var(--green)">Biology</text>
  <text x="64" y="75" text-anchor="middle" font-size="6" fill="var(--dim)">100yr progress</text>
  <text x="64" y="85" text-anchor="middle" font-size="6" fill="var(--dim)">in 5-10yr</text>
  <rect x="118" y="45" width="88" height="55" rx="6" fill="var(--cyan)" fill-opacity="0.08" stroke="var(--cyan)" stroke-width="1.2"/>
  <text x="162" y="63" text-anchor="middle" font-size="8" font-weight="700" fill="var(--cyan)">Neuro</text>
  <text x="162" y="75" text-anchor="middle" font-size="6" fill="var(--dim)">Cure mental</text>
  <text x="162" y="85" text-anchor="middle" font-size="6" fill="var(--dim)">illness</text>
  <rect x="216" y="45" width="88" height="55" rx="6" fill="var(--gold)" fill-opacity="0.08" stroke="var(--gold)" stroke-width="1.2"/>
  <text x="260" y="63" text-anchor="middle" font-size="8" font-weight="700" fill="var(--gold)">Poverty</text>
  <text x="260" y="75" text-anchor="middle" font-size="6" fill="var(--dim)">Lift billions</text>
  <text x="260" y="85" text-anchor="middle" font-size="6" fill="var(--dim)">from poverty</text>
  <rect x="314" y="45" width="88" height="55" rx="6" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="1.2"/>
  <text x="358" y="63" text-anchor="middle" font-size="8" font-weight="700" fill="var(--accent)">Peace</text>
  <text x="358" y="75" text-anchor="middle" font-size="6" fill="var(--dim)">Strengthen</text>
  <text x="358" y="85" text-anchor="middle" font-size="6" fill="var(--dim)">democracy</text>
  <rect x="412" y="45" width="68" height="55" rx="6" fill="var(--pink)" fill-opacity="0.08" stroke="var(--pink)" stroke-width="1.2"/>
  <text x="446" y="63" text-anchor="middle" font-size="8" font-weight="700" fill="var(--pink)">Meaning</text>
  <text x="446" y="75" text-anchor="middle" font-size="6" fill="var(--dim)">Transform</text>
  <text x="446" y="85" text-anchor="middle" font-size="6" fill="var(--dim)">work</text>
  <!-- Label -->
  <text x="250" y="118" text-anchor="middle" font-size="8" fill="var(--dim)">Amodei: Machines of Loving Grace</text>
  <!-- Russell's three principles -->
  <rect x="60" y="135" width="380" height="70" rx="8" stroke="var(--cyan)" stroke-width="1" fill="var(--cyan)" fill-opacity="0.03"/>
  <text x="250" y="152" text-anchor="middle" font-size="9" font-weight="700" fill="var(--cyan)">Russell: Three Principles of Beneficial AI</text>
  <text x="80" y="170" font-size="8" fill="var(--text)">1. Maximize human preferences (not fixed objectives)</text>
  <text x="80" y="184" font-size="8" fill="var(--text)">2. Be uncertain about what those preferences are</text>
  <text x="80" y="198" font-size="8" fill="var(--text)">3. Learn preferences from human behavior</text>
  <!-- Tegmark -->
  <rect x="60" y="215" width="380" height="35" rx="8" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.03"/>
  <text x="250" y="232" text-anchor="middle" font-size="9" font-weight="700" fill="var(--gold)">Tegmark: 12 Possible Futures (Life 3.0)</text>
  <text x="250" y="244" text-anchor="middle" font-size="7" fill="var(--dim)">Utopia | Dictator | Protector | Gatekeeper | Conquerors | Zoo | 1984 | ...</text>
</svg>`,

16: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Bostrom's Deep Utopia: The Purpose Problem</text>
  <!-- Solved world circle -->
  <circle cx="250" cy="140" r="95" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.04" stroke-dasharray="4 2"/>
  <text x="250" y="82" text-anchor="middle" font-size="8" fill="var(--gold)">THE SOLVED WORLD</text>
  <!-- Inner problems -->
  <circle cx="200" cy="120" r="28" fill="var(--red)" fill-opacity="0.08" stroke="var(--red)" stroke-width="1"/>
  <text x="200" y="117" text-anchor="middle" font-size="7" font-weight="600" fill="var(--red)">Purpose</text>
  <text x="200" y="127" text-anchor="middle" font-size="7" font-weight="600" fill="var(--red)">Crisis</text>
  <circle cx="300" cy="120" r="28" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="1"/>
  <text x="300" y="117" text-anchor="middle" font-size="7" font-weight="600" fill="var(--accent)">Devalued</text>
  <text x="300" y="127" text-anchor="middle" font-size="7" font-weight="600" fill="var(--accent)">Effort</text>
  <circle cx="220" cy="170" r="28" fill="var(--cyan)" fill-opacity="0.08" stroke="var(--cyan)" stroke-width="1"/>
  <text x="220" y="167" text-anchor="middle" font-size="7" font-weight="600" fill="var(--cyan)">Status</text>
  <text x="220" y="177" text-anchor="middle" font-size="7" font-weight="600" fill="var(--cyan)">Collapse</text>
  <circle cx="280" cy="170" r="28" fill="var(--pink)" fill-opacity="0.08" stroke="var(--pink)" stroke-width="1"/>
  <text x="280" y="167" text-anchor="middle" font-size="7" font-weight="600" fill="var(--pink)">Identity</text>
  <text x="280" y="177" text-anchor="middle" font-size="7" font-weight="600" fill="var(--pink)">Loss</text>
  <!-- What survives -->
  <rect x="80" y="240" width="340" height="18" rx="5" fill="var(--green)" fill-opacity="0.08" stroke="var(--green)" stroke-width="1"/>
  <text x="250" y="253" text-anchor="middle" font-size="8" font-weight="600" fill="var(--green)">What survives: Love, Relationships, Voluntary Constraints, Consciousness</text>
</svg>`,

17: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">The Future of Work: The Great Displacement</text>
  <!-- Barbell shape -->
  <ellipse cx="80" cy="130" rx="55" ry="45" fill="var(--green)" fill-opacity="0.08" stroke="var(--green)" stroke-width="1.5"/>
  <text x="80" y="120" text-anchor="middle" font-size="8" font-weight="700" fill="var(--green)">Physical</text>
  <text x="80" y="132" text-anchor="middle" font-size="7" fill="var(--dim)">Plumbing</text>
  <text x="80" y="142" text-anchor="middle" font-size="7" fill="var(--dim)">Construction</text>
  <text x="80" y="152" text-anchor="middle" font-size="7" fill="var(--dim)">Care work</text>
  <!-- Middle squeezed -->
  <rect x="155" y="115" width="190" height="30" rx="4" fill="var(--red)" fill-opacity="0.08" stroke="var(--red)" stroke-width="1" stroke-dasharray="3 2"/>
  <text x="250" y="134" text-anchor="middle" font-size="8" font-weight="600" fill="var(--red)">AUTOMATED: Analysts, Associates, Managers</text>
  <!-- Creative/Strategic end -->
  <ellipse cx="420" cy="130" rx="55" ry="45" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="420" y="120" text-anchor="middle" font-size="8" font-weight="700" fill="var(--accent)">Strategic</text>
  <text x="420" y="132" text-anchor="middle" font-size="7" fill="var(--dim)">Vision</text>
  <text x="420" y="142" text-anchor="middle" font-size="7" fill="var(--dim)">Judgment</text>
  <text x="420" y="152" text-anchor="middle" font-size="7" fill="var(--dim)">Creativity</text>
  <!-- Stats -->
  <text x="250" y="65" text-anchor="middle" font-size="9" fill="var(--gold)">80% of US workforce: at least 10% of tasks affected</text>
  <text x="250" y="80" text-anchor="middle" font-size="9" fill="var(--red)">300M full-time jobs globally exposed</text>
  <!-- Wealth concentration -->
  <rect x="100" y="195" width="300" height="50" rx="8" stroke="var(--gold)" stroke-width="1" fill="var(--gold)" fill-opacity="0.03"/>
  <text x="250" y="212" text-anchor="middle" font-size="9" font-weight="700" fill="var(--gold)">Winner-Take-All Dynamics</text>
  <text x="250" y="227" text-anchor="middle" font-size="7" fill="var(--dim)">GDP soars + wages collapse = The Great Decoupling</text>
  <text x="250" y="239" text-anchor="middle" font-size="7" fill="var(--dim)">UBI | Robot Tax | Stakeholder Dividends | Work Guarantees</text>
</svg>`,

18: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Organizations Reimagined</text>
  <!-- Old hierarchy (left) -->
  <text x="120" y="45" text-anchor="middle" font-size="9" font-weight="600" fill="var(--dim)">Traditional (2020)</text>
  <circle cx="120" cy="65" r="8" fill="var(--red)" fill-opacity="0.3" stroke="var(--red)" stroke-width="1"/>
  <line x1="112" y1="73" x2="90" y2="90" stroke="var(--border)" stroke-width="1"/>
  <line x1="128" y1="73" x2="150" y2="90" stroke="var(--border)" stroke-width="1"/>
  <circle cx="90" cy="95" r="6" fill="var(--accent)" fill-opacity="0.3" stroke="var(--accent)" stroke-width="0.8"/>
  <circle cx="150" cy="95" r="6" fill="var(--accent)" fill-opacity="0.3" stroke="var(--accent)" stroke-width="0.8"/>
  <line x1="84" y1="101" x2="70" y2="115" stroke="var(--border)" stroke-width="0.8"/>
  <line x1="96" y1="101" x2="110" y2="115" stroke="var(--border)" stroke-width="0.8"/>
  <line x1="144" y1="101" x2="130" y2="115" stroke="var(--border)" stroke-width="0.8"/>
  <line x1="156" y1="101" x2="170" y2="115" stroke="var(--border)" stroke-width="0.8"/>
  <circle cx="70" cy="120" r="4" fill="var(--cyan)" fill-opacity="0.3"/>
  <circle cx="110" cy="120" r="4" fill="var(--cyan)" fill-opacity="0.3"/>
  <circle cx="130" cy="120" r="4" fill="var(--cyan)" fill-opacity="0.3"/>
  <circle cx="170" cy="120" r="4" fill="var(--cyan)" fill-opacity="0.3"/>
  <text x="120" y="145" text-anchor="middle" font-size="7" fill="var(--dim)">~50 people</text>
  <!-- New model (right) -->
  <text x="380" y="45" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">AI-Augmented (2030)</text>
  <!-- Central humans -->
  <circle cx="350" cy="90" r="8" fill="var(--accent)" stroke="var(--accent)" stroke-width="1.5"/>
  <circle cx="380" cy="75" r="8" fill="var(--accent)" stroke="var(--accent)" stroke-width="1.5"/>
  <circle cx="410" cy="90" r="8" fill="var(--accent)" stroke="var(--accent)" stroke-width="1.5"/>
  <circle cx="365" cy="108" r="8" fill="var(--accent)" stroke="var(--accent)" stroke-width="1.5"/>
  <circle cx="395" cy="108" r="8" fill="var(--accent)" stroke="var(--accent)" stroke-width="1.5"/>
  <!-- AI agent dots surrounding -->
  <circle cx="330" cy="70" r="3" fill="var(--gold)"/><circle cx="340" cy="60" r="3" fill="var(--gold)"/>
  <circle cx="420" cy="60" r="3" fill="var(--gold)"/><circle cx="430" cy="70" r="3" fill="var(--gold)"/>
  <circle cx="435" cy="105" r="3" fill="var(--gold)"/><circle cx="430" cy="120" r="3" fill="var(--gold)"/>
  <circle cx="330" cy="120" r="3" fill="var(--gold)"/><circle cx="325" cy="105" r="3" fill="var(--gold)"/>
  <circle cx="345" cy="130" r="3" fill="var(--gold)"/><circle cx="415" cy="130" r="3" fill="var(--gold)"/>
  <text x="380" y="150" text-anchor="middle" font-size="7" fill="var(--dim)">5 humans + 50 AI agents</text>
  <!-- Arrow -->
  <text x="250" y="100" text-anchor="middle" font-size="16" fill="var(--gold)">&#8594;</text>
  <!-- Bottom comparison -->
  <rect x="50" y="170" width="400" height="65" rx="8" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.2"/>
  <text x="250" y="188" text-anchor="middle" font-size="9" font-weight="700" fill="var(--accent)">What Changes</text>
  <text x="100" y="205" font-size="7" fill="var(--dim)">Info hierarchy</text><text x="100" y="215" font-size="7" fill="var(--gold)">AI coordination</text>
  <text x="220" y="205" font-size="7" fill="var(--dim)">HIPPO decisions</text><text x="220" y="215" font-size="7" fill="var(--gold)">Evidence + AI</text>
  <text x="340" y="205" font-size="7" fill="var(--dim)">Process advantage</text><text x="340" y="215" font-size="7" fill="var(--gold)">Culture as moat</text>
</svg>`,

19: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Society, Trust & The Human Condition</text>
  <!-- Four quadrants -->
  <line x1="250" y1="40" x2="250" y2="200" stroke="var(--border)" stroke-width="0.8" stroke-dasharray="3 2"/>
  <line x1="50" y1="120" x2="450" y2="120" stroke="var(--border)" stroke-width="0.8" stroke-dasharray="3 2"/>
  <!-- Trust Collapse (top-left) -->
  <rect x="60" y="50" width="170" height="60" rx="8" fill="var(--red)" fill-opacity="0.06" stroke="var(--red)" stroke-width="1"/>
  <text x="145" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="var(--red)">Trust Collapse</text>
  <text x="145" y="82" text-anchor="middle" font-size="7" fill="var(--dim)">500K+ deepfakes (550% rise)</text>
  <text x="145" y="94" text-anchor="middle" font-size="7" fill="var(--dim)">Liar's dividend</text>
  <text x="145" y="106" text-anchor="middle" font-size="7" fill="var(--dim)">Epistemic collapse</text>
  <!-- Surveillance (top-right) -->
  <rect x="270" y="50" width="170" height="60" rx="8" fill="var(--accent)" fill-opacity="0.06" stroke="var(--accent)" stroke-width="1"/>
  <text x="355" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="var(--accent)">AI Surveillance</text>
  <text x="355" y="82" text-anchor="middle" font-size="7" fill="var(--dim)">$50B+ global market</text>
  <text x="355" y="94" text-anchor="middle" font-size="7" fill="var(--dim)">60+ countries deployed</text>
  <text x="355" y="106" text-anchor="middle" font-size="7" fill="var(--dim)">Social credit systems</text>
  <!-- Digital Divide (bottom-left) -->
  <rect x="60" y="130" width="170" height="60" rx="8" fill="var(--gold)" fill-opacity="0.06" stroke="var(--gold)" stroke-width="1"/>
  <text x="145" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="var(--gold)">Digital Divide</text>
  <text x="145" y="162" text-anchor="middle" font-size="7" fill="var(--dim)">2.6B lack internet</text>
  <text x="145" y="174" text-anchor="middle" font-size="7" fill="var(--dim)">Language bias (English)</text>
  <text x="145" y="186" text-anchor="middle" font-size="7" fill="var(--dim)">Education disruption</text>
  <!-- Identity (bottom-right) -->
  <rect x="270" y="130" width="170" height="60" rx="8" fill="var(--cyan)" fill-opacity="0.06" stroke="var(--cyan)" stroke-width="1"/>
  <text x="355" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="var(--cyan)">Human Identity</text>
  <text x="355" y="162" text-anchor="middle" font-size="7" fill="var(--dim)">Uniqueness threat</text>
  <text x="355" y="174" text-anchor="middle" font-size="7" fill="var(--dim)">67% anxiety rise</text>
  <text x="355" y="186" text-anchor="middle" font-size="7" fill="var(--dim)">AI companions</text>
  <!-- Bottom -->
  <rect x="100" y="210" width="300" height="30" rx="6" fill="var(--code-bg)" fill-opacity="0.3" stroke="var(--border)" stroke-width="0.5"/>
  <text x="250" y="227" text-anchor="middle" font-size="8" font-weight="600" fill="var(--text)">Core question: What does it mean to be human</text>
  <text x="250" y="237" text-anchor="middle" font-size="8" font-weight="600" fill="var(--text)">when machines can think?</text>
</svg>`,

20: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">The Alignment Spectrum: Doom to Bloom</text>
  <!-- Spectrum bar -->
  <defs>
    <linearGradient id="spec" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:var(--red)"/>
      <stop offset="50%" style="stop-color:var(--gold)"/>
      <stop offset="100%" style="stop-color:var(--green)"/>
    </linearGradient>
  </defs>
  <rect x="50" y="45" width="400" height="12" rx="6" fill="url(#spec)" opacity="0.5"/>
  <text x="50" y="42" font-size="7" font-weight="600" fill="var(--red)">DOOM</text>
  <text x="450" y="42" text-anchor="end" font-size="7" font-weight="600" fill="var(--green)">BLOOM</text>
  <!-- Thinkers positioned on spectrum -->
  <line x1="80" y1="57" x2="80" y2="75" stroke="var(--red)" stroke-width="1"/>
  <rect x="40" y="76" width="80" height="30" rx="5" fill="var(--red)" fill-opacity="0.08" stroke="var(--red)" stroke-width="0.8"/>
  <text x="80" y="90" text-anchor="middle" font-size="7" font-weight="700" fill="var(--red)">Yudkowsky</text>
  <text x="80" y="100" text-anchor="middle" font-size="6" fill="var(--dim)">~95% doom</text>

  <line x1="160" y1="57" x2="160" y2="75" stroke="var(--red)" stroke-width="1" opacity="0.7"/>
  <rect x="125" y="76" width="70" height="30" rx="5" fill="var(--red)" fill-opacity="0.05" stroke="var(--border)" stroke-width="0.8"/>
  <text x="160" y="90" text-anchor="middle" font-size="7" font-weight="700" fill="var(--text)">Bostrom</text>
  <text x="160" y="100" text-anchor="middle" font-size="6" fill="var(--dim)">Default: bad</text>

  <line x1="230" y1="57" x2="230" y2="75" stroke="var(--gold)" stroke-width="1"/>
  <rect x="195" y="76" width="70" height="30" rx="5" fill="var(--gold)" fill-opacity="0.05" stroke="var(--border)" stroke-width="0.8"/>
  <text x="230" y="90" text-anchor="middle" font-size="7" font-weight="700" fill="var(--text)">Suleyman</text>
  <text x="230" y="100" text-anchor="middle" font-size="6" fill="var(--dim)">Narrow path</text>

  <line x1="300" y1="57" x2="300" y2="75" stroke="var(--gold)" stroke-width="1"/>
  <rect x="265" y="76" width="70" height="30" rx="5" fill="var(--gold)" fill-opacity="0.05" stroke="var(--border)" stroke-width="0.8"/>
  <text x="300" y="90" text-anchor="middle" font-size="7" font-weight="700" fill="var(--text)">Russell</text>
  <text x="300" y="100" text-anchor="middle" font-size="6" fill="var(--dim)">Fixable</text>

  <line x1="380" y1="57" x2="380" y2="75" stroke="var(--green)" stroke-width="1"/>
  <rect x="345" y="76" width="70" height="30" rx="5" fill="var(--green)" fill-opacity="0.08" stroke="var(--green)" stroke-width="0.8"/>
  <text x="380" y="90" text-anchor="middle" font-size="7" font-weight="700" fill="var(--green)">Amodei</text>
  <text x="380" y="100" text-anchor="middle" font-size="6" fill="var(--dim)">Cautious hope</text>

  <!-- Agreement box -->
  <rect x="60" y="120" width="380" height="70" rx="8" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.03"/>
  <text x="250" y="138" text-anchor="middle" font-size="9" font-weight="700" fill="var(--accent)">What ALL Agree On</text>
  <text x="80" y="155" font-size="8" fill="var(--text)">1. AGI is coming (years to decades)</text>
  <text x="80" y="168" font-size="8" fill="var(--text)">2. Stakes are existential</text>
  <text x="80" y="181" font-size="8" fill="var(--text)">3. Current institutions are inadequate</text>
  <text x="290" y="155" font-size="8" fill="var(--text)">4. Time is short</text>
  <text x="290" y="168" font-size="8" fill="var(--text)">5. Need both tech + policy</text>

  <!-- Bottom call to action -->
  <rect x="100" y="205" width="300" height="45" rx="8" fill="var(--gold)" fill-opacity="0.08" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="250" y="222" text-anchor="middle" font-size="9" font-weight="700" fill="var(--gold)">The Choice Is Ours</text>
  <text x="250" y="236" text-anchor="middle" font-size="7" fill="var(--dim)">We are in the equivalent of 1945 for nuclear weapons</text>
  <text x="250" y="246" text-anchor="middle" font-size="7" fill="var(--dim)">The governance frameworks haven't been built yet</text>
</svg>`

};
