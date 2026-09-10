export const metadata = {
	title: 'Brian Shimkus - Job Search Pipeline',
	description: 'Real-time job search tracking dashboard. Interviewing, applied, leads, and closed opportunities.',
	alternates: {
		canonical: '/job-hunt',
	},
}

export default function JobHuntPage() {
	return (
		<>
			<style>{`
				:root{color-scheme:light}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#faf9f5;color:#141413}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}
				:root{
					--bg:#faf9f5; --surface:#ffffff; --surface-2:#f2f0e8; --border:#e2ded1;
					--text:#141413; --text-dim:#5c584e; --text-faint:#8b8677;
					--accent:#0f6f63; --accent-ink:#e6f4f1;
					--pill-interview-bg:#e6f6ee; --pill-interview-fg:#157a4a; --pill-interview-bd:#c3e9d5;
					--pill-applied-bg:#e8effb; --pill-applied-fg:#2f5fc4; --pill-applied-bd:#c9d9f5;
					--pill-lead-bg:#f1eefb; --pill-lead-fg:#6a4fd1; --pill-lead-bd:#ddd4f7;
					--pill-rejected-bg:#faeded; --pill-rejected-fg:#a13d3d; --pill-rejected-bd:#f0d3d3;
					--pill-stale-bg:#f7f2e4; --pill-stale-fg:#8a6a1f; --pill-stale-bd:#ecdfbb;
					--stat-interview:#5aa77e; --stat-applied:#7391c9; --stat-lead:#9482cf; --stat-rejected:#c17c7c;
					--focus:#0f6f63;
					--shadow: 0 1px 2px rgba(20,20,19,.04), 0 6px 20px rgba(20,20,19,.05);
					--chip-bg:#f2f0e8; --chip-fg:#5c584e; --chip-on-bg:#141413; --chip-on-fg:#faf9f5;
				}
				@media (prefers-color-scheme: dark){
					:root:not([data-theme="light"]){
						--bg:#151412; --surface:#1c1b18; --surface-2:#232220; --border:#332f28;
						--text:#f2efe6; --text-dim:#b8b3a4; --text-faint:#847f6e;
						--accent:#4fd6c0; --accent-ink:#0f2521;
						--pill-interview-bg:#153826; --pill-interview-fg:#7fdcae; --pill-interview-bd:#1f5138;
						--pill-applied-bg:#1c2740; --pill-applied-fg:#9db6f0; --pill-applied-bd:#2c3c62;
						--pill-lead-bg:#241f38; --pill-lead-fg:#c3b3ff; --pill-lead-bd:#382f57;
						--pill-rejected-bg:#3a1f1f; --pill-rejected-fg:#f0a3a3; --pill-rejected-bd:#552a2a;
						--pill-stale-bg:#332a14; --pill-stale-fg:#e3bd6d; --pill-stale-bd:#4a3c1c;
						--stat-interview:#7fdcae; --stat-applied:#9db6f0; --stat-lead:#c3b3ff; --stat-rejected:#f0a3a3;
						--shadow: 0 1px 2px rgba(0,0,0,.3), 0 8px 24px rgba(0,0,0,.35);
						--chip-bg:#232220; --chip-fg:#b8b3a4; --chip-on-bg:#f2efe6; --chip-on-fg:#151412;
					}
				}
				:root[data-theme="dark"]{
					--bg:#151412; --surface:#1c1b18; --surface-2:#232220; --border:#332f28;
					--text:#f2efe6; --text-dim:#b8b3a4; --text-faint:#847f6e;
					--accent:#4fd6c0; --accent-ink:#0f2521;
					--pill-interview-bg:#153826; --pill-interview-fg:#7fdcae; --pill-interview-bd:#1f5138;
					--pill-applied-bg:#1c2740; --pill-applied-fg:#9db6f0; --pill-applied-bd:#2c3c62;
					--pill-lead-bg:#241f38; --pill-lead-fg:#c3b3ff; --pill-lead-bd:#382f57;
					--pill-rejected-bg:#3a1f1f; --pill-rejected-fg:#f0a3a3; --pill-rejected-bd:#552a2a;
					--pill-stale-bg:#332a14; --pill-stale-fg:#e3bd6d; --pill-stale-bd:#4a3c1c;
					--stat-interview:#7fdcae; --stat-applied:#9db6f0; --stat-lead:#c3b3ff; --stat-rejected:#f0a3a3;
					--shadow: 0 1px 2px rgba(0,0,0,.3), 0 8px 24px rgba(0,0,0,.35);
					--chip-bg:#232220; --chip-fg:#b8b3a4; --chip-on-bg:#f2efe6; --chip-on-fg:#151412;
				}

				*{box-sizing:border-box;}
				body{
					margin:0; background:var(--bg); color:var(--text);
					font-family:"Public Sans",-apple-system,BlinkMacSystemFont,sans-serif;
					font-size:15px; line-height:1.5;
				}
				h1,h2,h3{font-family:"Space Grotesk",-apple-system,sans-serif; text-wrap:balance; margin:0;}
				.mono{font-family:"IBM Plex Mono",ui-monospace,monospace; font-variant-numeric:tabular-nums;}
				a{color:var(--accent);}
				a:focus-visible, button:focus-visible, input:focus-visible{outline:2px solid var(--focus); outline-offset:2px;}

				.wrap{max-width:1180px; margin:0 auto; padding:36px 24px 80px;}

				header.top{display:flex; align-items:flex-start; justify-content:space-between; gap:20px; margin-bottom:24px; flex-wrap:wrap;}
				header.top .titleblock{display:flex; flex-direction:column; gap:6px;}
				header.top .eyebrow{font-family:"IBM Plex Mono",monospace; font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:var(--text-faint);}
				header.top h1{font-size:28px; font-weight:700;}
				header.top .sub{color:var(--text-dim); font-size:14px;}

				.theme-toggle{display:flex; border:1px solid var(--border); border-radius:8px; overflow:hidden; flex:none;}
				.theme-toggle button{
					font:inherit; font-size:12.5px; font-weight:600; border:none; cursor:pointer;
					padding:7px 12px; background:var(--surface); color:var(--text-dim);
				}
				.theme-toggle button + button{border-left:1px solid var(--border);}
				.theme-toggle button[aria-pressed="true"]{background:var(--text); color:var(--bg);}

				.bar{
					display:flex; align-items:center; gap:12px; flex-wrap:wrap;
					background:var(--surface); border:1px solid var(--border); border-radius:10px;
					padding:12px 16px; margin-bottom:14px; box-shadow:var(--shadow);
				}
				.sync-bar{justify-content:space-between;}
				.sync-status{display:flex; align-items:center; gap:8px; font-size:13.5px; color:var(--text-dim);}
				.sync-dot{width:8px; height:8px; border-radius:50%; background:var(--text-faint); flex:none;}
				.sync-dot.live{background:var(--accent); animation:pulse 1.6s ease-in-out infinite;}
				.sync-dot.ok{background:#2f9e6f;}
				.sync-dot.err{background:#c14343;}
				@media (prefers-reduced-motion: no-preference){
					@keyframes pulse{0%,100%{opacity:1;} 50%{opacity:.35;}}
				}
				.btn{
					font:inherit; font-size:13.5px; font-weight:600; cursor:pointer;
					border-radius:7px; padding:7px 13px; border:1px solid var(--border);
					background:var(--surface-2); color:var(--text);
				}
				.btn:hover{border-color:var(--text-faint);}
				.btn:disabled{opacity:.5; cursor:default;}
				.btn.primary{background:var(--accent); border-color:var(--accent); color:var(--accent-ink);}

				.save-banner{
					display:none; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;
					background:var(--accent-ink); border:1px solid var(--accent); border-radius:10px;
					padding:12px 16px; margin-bottom:14px; font-size:13.5px;
				}
				.save-banner.show{display:flex;}

				.filter-bar{gap:14px;}
				.search-field{
					display:flex; align-items:center; gap:8px; flex:1 1 220px; min-width:180px;
					background:var(--surface-2); border:1px solid var(--border); border-radius:8px; padding:6px 10px;
				}
				.search-field svg{flex:none; color:var(--text-faint);}
				.search-field input{
					border:none; background:transparent; color:var(--text); font:inherit; font-size:13.5px; width:100%; outline:none;
				}
				.chips{display:flex; gap:6px; flex-wrap:wrap;}
				.chip{
					font:inherit; font-size:12.5px; font-weight:600; cursor:pointer; border:1px solid var(--border);
					border-radius:999px; padding:6px 12px; background:var(--chip-bg); color:var(--chip-fg);
					display:flex; align-items:center; gap:6px;
				}
				.chip .dot{width:7px; height:7px; border-radius:50%;}
				.chip[aria-pressed="true"]{background:var(--chip-on-bg); color:var(--chip-on-fg); border-color:var(--chip-on-bg);}
				.date-range{display:flex; align-items:center; gap:6px; font-size:12.5px; color:var(--text-dim);}
				.date-range input{
					font:inherit; font-size:12.5px; color:var(--text); background:var(--surface-2);
					border:1px solid var(--border); border-radius:6px; padding:5px 7px;
				}
				.clear-filters{font-size:12.5px; color:var(--accent); background:none; border:none; cursor:pointer; font-weight:600; padding:4px;}

				.stats{display:grid; grid-template-columns:repeat(6,1fr); gap:12px; margin-bottom:20px;}
				.stat{
					background:var(--surface); border:1px solid var(--border); border-radius:10px;
					padding:16px; box-shadow:var(--shadow);
				}
				.stat .n{font-family:"Space Grotesk"; font-size:28px; font-weight:700; font-variant-numeric:tabular-nums;}
				.stat.interviewing .n{color:var(--stat-interview);}
				.stat.applied .n{color:var(--stat-applied);}
				.stat.leads .n{color:var(--stat-lead);}
				.stat.rejected .n{color:var(--stat-rejected);}
				.stat.ghosted .n{color:var(--pill-stale-fg);}
				.stat.total .n{color:var(--text);}
				.stat .label{font-size:12.5px; color:var(--text-dim); margin-top:2px;}
				@media (max-width:900px){ .stats{grid-template-columns:repeat(3,1fr);} }
				@media (max-width:640px){ .stats{grid-template-columns:repeat(2,1fr);} }

				.board{display:grid; grid-template-columns:1fr 1fr; gap:16px; align-items:start;}
				@media (max-width:820px){ .board{grid-template-columns:1fr;} }
				.board .span2{grid-column:1 / -1;}

				.panel{
					background:var(--surface); border:1px solid var(--border); border-radius:12px;
					box-shadow:var(--shadow); display:flex; flex-direction:column; overflow:hidden;
				}
				.panel-head{display:flex; align-items:baseline; gap:10px; padding:14px 16px 12px; border-bottom:1px solid var(--border);}
				.panel-head h2{font-size:15px; font-weight:700;}
				.panel-head .count{font-family:"IBM Plex Mono",monospace; font-size:12px; color:var(--text-faint); margin-left:auto;}
				.panel-body{padding:12px 16px 16px; overflow-y:auto;}
				.panel.interviewing .panel-body{max-height:260px;}
				.panel.applied .panel-body{max-height:380px;}
				.panel.leads .panel-body{max-height:380px;}
				.panel.closed .panel-body{max-height:420px;}

				.rows{display:flex; flex-direction:column; gap:10px;}
				.row{
					background:var(--surface-2); border:1px solid var(--border); border-radius:9px;
					padding:12px 14px; display:grid; grid-template-columns:1fr auto; gap:6px 14px; align-items:start;
				}
				.row .who{font-weight:600; font-size:14px;}
				.row .role{color:var(--text-dim); font-size:13px; margin-top:1px;}
				.row .note{color:var(--text-dim); font-size:12.5px; margin-top:4px; grid-column:1 / -1;}
				.row .meta{display:flex; flex-direction:column; align-items:flex-end; gap:6px;}
				.row .date{font-size:11.5px; color:var(--text-faint);}

				.pill{
					font-family:"IBM Plex Mono",monospace; font-size:11.5px; font-weight:500;
					padding:3px 9px; border-radius:20px; border:1px solid; white-space:nowrap;
				}
				.pill.interview{background:var(--pill-interview-bg); color:var(--pill-interview-fg); border-color:var(--pill-interview-bd);}
				.pill.applied{background:var(--pill-applied-bg); color:var(--pill-applied-fg); border-color:var(--pill-applied-bd);}
				.pill.lead{background:var(--pill-lead-bg); color:var(--pill-lead-fg); border-color:var(--pill-lead-bd);}
				.pill.rejected{background:var(--pill-rejected-bg); color:var(--pill-rejected-fg); border-color:var(--pill-rejected-bd);}
				.pill.stale{background:var(--pill-stale-bg); color:var(--pill-stale-fg); border-color:var(--pill-stale-bd);}

				.mark-unavail{
					font:inherit; font-size:11px; font-weight:600; cursor:pointer;
					border:1px solid var(--border); border-radius:6px; padding:3px 8px;
					background:var(--surface); color:var(--text-dim); white-space:nowrap;
				}
				.mark-unavail:hover{border-color:var(--pill-stale-fg); color:var(--pill-stale-fg);}
				.mark-unavail.confirming{background:var(--pill-rejected-bg); color:var(--pill-rejected-fg); border-color:var(--pill-rejected-bd);}
				.empty{color:var(--text-faint); font-size:13px; padding:8px 0;}
				.panel-hidden{display:none;}
				footer{margin-top:24px; font-size:12px; color:var(--text-faint); font-family:"IBM Plex Mono",monospace;}
			`}</style>

			<div className='wrap'>
				<header className='top'>
					<div className='titleblock'>
						<div className='eyebrow'>Brian Shimkus · Applied AI / FDE search</div>
						<h1>Job Search Pipeline</h1>
						<div className='sub'>Track applications, interviews, leads, and outcomes in real-time.</div>
					</div>
				</header>

				<div className='bar sync-bar'>
					<div className='sync-status'>
						<span className='sync-dot ok'></span>
						<span>Dashboard live</span>
					</div>
				</div>

				<div className='stats'>
					<div className='stat interviewing'>
						<div className='n mono'>2</div>
						<div className='label'>Interviewing</div>
					</div>
					<div className='stat applied'>
						<div className='n mono'>49</div>
						<div className='label'>Applied, awaiting reply</div>
					</div>
					<div className='stat leads'>
						<div className='n mono'>2</div>
						<div className='label'>Leads sent, not yet applied</div>
					</div>
					<div className='stat rejected'>
						<div className='n mono'>32</div>
						<div className='label'>Rejected or ghosted</div>
					</div>
				</div>

				<div className='board'>
					<div className='panel interviewing span2'>
						<div className='panel-head'>
							<h2>Interviewing</h2>
							<span className='count'>2</span>
						</div>
						<div className='panel-body'>
							<div className='rows'>
								<div className='row'>
									<div>
										<div className='who'>Endeavor AI</div>
										<div className='role'>Forward Deployed Engineer, Early Career</div>
									</div>
									<div className='meta'>
										<span className='pill interview'>Interview scheduled</span>
										<span className='date mono'>Sep 8, 2026</span>
									</div>
									<div className='note'>Google Meet interview scheduled.</div>
								</div>
								<div className='row'>
									<div>
										<div className='who'>Aikido Security</div>
										<div className='role'>Solutions Engineer (Pre-Sales), US</div>
									</div>
									<div className='meta'>
										<span className='pill interview'>Interview scheduled</span>
										<span className='date mono'>Sep 9, 2026</span>
									</div>
									<div className='note'>Rescheduled intro call with Laken Roberts, 2:00-2:30 PM CDT.</div>
								</div>
							</div>
						</div>
					</div>

					<div className='panel applied'>
						<div className='panel-head'>
							<h2>Applied, awaiting reply</h2>
							<span className='count'>49</span>
						</div>
						<div className='panel-body'>
							<div className='rows'>
								<div className='row'>
									<div>
										<div className='who'>NLB Tech</div>
										<div className='role'>Forward Deployed Engineer (FDE), GenAI</div>
									</div>
									<div className='meta'>
										<span className='pill applied'>Applied</span>
										<span className='date mono'>Sep 9, 2026</span>
									</div>
									<div className='note'>Replied to Aashi Rastogi expressing interest.</div>
								</div>
								<div className='row'>
									<div>
										<div className='who'>Palantir Technologies</div>
										<div className='role'>Forward Deployed AI Engineer</div>
									</div>
									<div className='meta'>
										<span className='pill applied'>Applied</span>
										<span className='date mono'>Sep 8, 2026</span>
									</div>
									<div className='note'>Confirmed applied via Lever.</div>
								</div>
								<div className='row'>
									<div>
										<div className='who'>Databricks</div>
										<div className='role'>AI Engineer - FDE (Forward Deployed Engineer)</div>
									</div>
									<div className='meta'>
										<span className='pill applied'>Applied</span>
										<span className='date mono'>Sep 8, 2026</span>
									</div>
									<div className='note'>Application confirmed received.</div>
								</div>
								<div className='row'>
									<div>
										<div className='who'>GitLab</div>
										<div className='role'>Forward Deployed Engineer, AI and Agentic SDLC</div>
									</div>
									<div className='meta'>
										<span className='pill applied'>Applied</span>
										<span className='date mono'>Sep 8, 2026</span>
									</div>
									<div className='note'>Application confirmed received.</div>
								</div>
								<div className='row'>
									<div>
										<div className='who'>And 45 more…</div>
										<div className='role'>Various Applied AI and FDE roles</div>
									</div>
									<div className='meta'>
										<span className='pill applied'>Applied</span>
									</div>
									<div className='note'>Tracking 49 total active applications across top companies and startups.</div>
								</div>
							</div>
						</div>
					</div>

					<div className='panel leads'>
						<div className='panel-head'>
							<h2>Leads sent, not yet applied</h2>
							<span className='count'>2</span>
						</div>
						<div className='panel-body'>
							<div className='rows'>
								<div className='row'>
									<div>
										<div className='who'>OpenRouter</div>
										<div className='role'>Forward Deployed Engineer</div>
									</div>
									<div className='meta'>
										<span className='pill lead'>Lead sent</span>
										<span className='date mono'>Sep 9, 2026</span>
									</div>
									<div className='note'>Post-sales technical onboarding role, fully remote US.</div>
								</div>
								<div className='row'>
									<div>
										<div className='who'>LangChain</div>
										<div className='role'>Solutions Engineer (Chicago)</div>
									</div>
									<div className='meta'>
										<span className='pill lead'>Lead sent</span>
										<span className='date mono'>Sep 9, 2026</span>
									</div>
									<div className='note'>Chicago-tagged, fully remote, direct LangChain/LangGraph tooling match.</div>
								</div>
							</div>
						</div>
					</div>

					<div className='panel closed span2'>
						<div className='panel-head'>
							<h2>Closed out (Rejected or Ghosted)</h2>
							<span className='count'>46</span>
						</div>
						<div className='panel-body'>
							<div className='rows'>
								<div className='row'>
									<div>
										<div className='who'>Braze</div>
										<div className='role'>Senior Lead Systems Engineer, AI & Automation</div>
									</div>
									<div className='meta'>
										<span className='pill rejected'>Rejected</span>
										<span className='date mono'>Sep 9, 2026</span>
									</div>
									<div className='note'>Braze sent a rejection after confirming receipt Sep 1.</div>
								</div>
								<div className='row'>
									<div>
										<div className='who'>Federato</div>
										<div className='role'>Senior Forward Deployed Engineer</div>
									</div>
									<div className='meta'>
										<span className='pill rejected'>Rejected</span>
										<span className='date mono'>Sep 9, 2026</span>
									</div>
									<div className='note'>Rejection received the next morning after confirmation.</div>
								</div>
								<div className='row'>
									<div>
										<div className='who'>And 44 more…</div>
										<div className='role'>Various roles</div>
									</div>
									<div className='meta'>
										<span className='pill rejected'>Rejected</span>
										<span className='pill stale'>Ghosted</span>
									</div>
									<div className='note'>Tracking 46 total closed opportunities from rejections and ghosted leads.</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<footer>Live job search tracking dashboard for Applied AI and Forward Deployed Engineer roles.</footer>
			</div>
		</>
	)
}
