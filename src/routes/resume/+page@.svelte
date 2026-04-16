<script lang="ts">
	const contact = {
		location: 'Madera, CA',
		phone: '(559) 269-5830',
		email: 'matt@codecompletemedia.com',
		linkedin: 'https://www.linkedin.com/in/matthew-higley-57b481323/',
		personalSite: 'https://matthewhigley.com',
		companySite: 'https://codecompletemedia.com'
	};

	const competencies = [
		'Marketing Department Leadership & Team Management',
		'Print & Digital Collateral Production',
		'Brand Website & Landing Page Development',
		'Real Estate Marketing (MLS, Zillow, listing media)',
		'Email Marketing & Campaign Execution (MailChimp)',
		'Event Planning & Production (live and virtual)',
		'Digital Campaign Production & Budget Reconciliation',
		'Adobe Photoshop, Illustrator, Figma, Framer',
		'Google Analytics, SEO, Accessibility',
		'Vendor & Cross-Functional Coordination'
	];

	const bitwiseSubRoles = [
		{
			years: '2021–2023',
			title: 'Lead Software Engineer, Marketing Department Manager',
			bullets: [
				'Led in-house marketing team of three developers owning the Bitwise corporate website and brand sites for Shift3 Development and Geekwise Academy divisions.',
				'Ran all marketing creative, web, and campaign production in-house — no external agency retainer — across brand, recruiting, admissions, and client-facing channels.',
				'Co-coordinated <em>59 Days of Code</em> community technology event: 281 students, 111 volunteers, 628 live participants, 1,300+ viewers, 295 youth introduced to code and robotics. Personally recognized as <strong>59 Days of Code Runner-Up</strong>.',
				'Supported Geekwise Academy growth: 3,500+ students trained across first five years with ~80% graduate employment rate.'
			]
		},
		{
			years: '2020–2021',
			title: 'Marketing Development Engineer',
			bullets: [
				'Built and maintained the Bitwise corporate marketing site and Shift3 client landing pages; implemented campaign pages, lead forms, and analytics instrumentation.',
				'Produced virtual event assets and web presence for <em>No Place Like Home: Virtual Culture Fest</em> (May &amp; November 2020) — all-day free online festival featuring live music, DJs, and workshops with Fresno-based artists.',
				'Contributed to launch of <em>Take Care</em>, a COVID-19 relief platform delivering groceries to at-risk residents in Fresno, Madera, and Tulare counties.'
			]
		},
		{
			years: '2018–2019',
			title: 'Marketing Specialist → Marketing Coordinator',
			bullets: [
				'Executed day-to-day campaign production across digital ad creative, email, web, and social; coordinated with design and event teams on deliverables.'
			]
		},
		{
			years: '2013–2018',
			title: 'Technology Educator & Software Engineer',
			bullets: [
				'Taught front-end development to early-career students and community learners.',
				'Built internal and client-facing software in HTML, CSS, JavaScript, and WordPress.'
			]
		}
	];

	const tools = [
		{ label: 'Design & Creative', items: 'Adobe Photoshop, Adobe Illustrator, Figma' },
		{ label: 'Web & CMS', items: 'WordPress, Framer, HTML, CSS, JavaScript, jQuery, PHP, Drupal' },
		{ label: 'Marketing & Analytics', items: 'MailChimp, Google Analytics, SEO' },
		{ label: 'Productivity', items: 'Google Sheets, Google Docs, Excel, Slack' },
		{ label: 'Photo & Video', items: 'Production photography, videography, post-production' }
	];
</script>

<svelte:head>
	<title>Matthew Higley — Resume</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="page">
	<div class="resume-header">
		<h1 class="name">Matthew Higley</h1>
		<div class="title-line">Marketing Leader · Creative Producer · Web &amp; Brand</div>
		<div class="contact">
			{contact.location}
			<span class="sep">|</span>
			{contact.phone}
			<span class="sep">|</span>
			<a href="mailto:{contact.email}">{contact.email}</a>
			<span class="sep">|</span>
			<a href={contact.linkedin}>LinkedIn</a>
			<span class="sep">|</span>
			<a href={contact.personalSite}>matthewhigley.com</a>
			<span class="sep">|</span>
			<a href={contact.companySite}>codecompletemedia.com</a>
		</div>
	</div>

	<section>
		<h2>Professional Summary</h2>
		<p class="summary">
			Hands-on marketing and tech development leader with over a decade of in-house marketing management experience.
			Expertise in combining marketing needs with technical solutions, whether building a custom campaign landing page or troubleshooting an email template. Background in software engineering and technology education informs a practical, problem-solving approach to marketing challenges and a collaborative, communicative approach to cross-functional coordination and team leadership.
		</p>
	</section>

	<section>
		<h2>Core Competencies</h2>
		<ul class="competencies">
			{#each competencies as competency}
				<li>{competency}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Professional Experience</h2>

		<div class="role">
			<div class="role-head">
				<div>
					<span class="role-title">Technology Educator &amp; UI/UX Software Engineer</span> —
					<span class="role-company">Quiq Labs</span>
				</div>
				<div class="role-dates">2023 – Present</div>
			</div>
			<div class="role-meta">Fresno, CA</div>
			<ul>
				<li>
					Teach marketing fundamentals to sophomore, junior, and senior students: Framer websites,
					MailChimp email marketing, Guerrilla Marketing, Google Analytics, and Figma design.
				</li>
				<li>
					Mentor 3–5 concurrent student teams delivering Business Model Canvas, email marketing, and
					websites for 21 local business clients.
				</li>
				<li>
					Accessibility advisor on client-facing deliverables; manage client communication and
					project expectations.
				</li>
			</ul>
		</div>

		<div class="role">
			<div class="role-head">
				<div>
					<span class="role-title">10-Year Tenure, Six-Role Progression</span> —
					<span class="role-company">Bitwise Industries</span>
				</div>
				<div class="role-dates">2013 – 2023</div>
			</div>
			<div class="role-meta">Fresno, CA</div>
			<div class="progression">
				Technology Educator → Software Engineer → Marketing Specialist → Marketing Coordinator →
				Marketing Development Engineer → Marketing Department Manager
			</div>

			<div class="bitwise-timeline">
				{#each bitwiseSubRoles as sub}
					<div class="sub-role">
						<div class="sub-role-title">
							<span class="years">{sub.years}</span>{sub.title}
						</div>
						<ul>
							{#each sub.bullets as bullet}
								<li>{@html bullet}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div class="role">
			<div class="role-head">
				<div>
					<span class="role-title">Marketing Videography</span> —
					<span class="role-company">Meza Films</span>
				</div>
				<div class="role-dates">2011 – 2013</div>
			</div>
			<div class="role-meta">Fresno, CA</div>
			<ul>
				<li>
					Shot and edited wedding videography and commercial B-roll; contributed to creative
					conception; managed direct client communication on shoots and deliverables.
				</li>
			</ul>
		</div>

		<div class="role">
			<div class="role-head">
				<div>
					<span class="role-title">Software Engineer &amp; Marketing Intern</span> —
					<span class="role-company">Paprika Studios</span>
				</div>
				<div class="role-dates">2011 – 2012</div>
			</div>
			<div class="role-meta">Fresno, CA</div>
			<ul>
				<li>
					Built Drupal/PHP/HTML/CSS/jQuery sites for an agriculture- and food-focused commercial
					photo/video studio.
				</li>
				<li>Assisted on production shoots: audio support, editing assistance, on-set help.</li>
			</ul>
		</div>

		<div class="role">
			<div class="role-head">
				<div>
					<span class="role-title">Software Developer</span> —
					<span class="role-company">Hundred10 Design</span>
				</div>
				<div class="role-dates">2008 – 2011</div>
			</div>
			<div class="role-meta">Fresno, CA — promoted from Jr. Software Developer</div>
			<ul>
				<li>
					Front-end and back-end web development (HTML, CSS, jQuery, PHP) at an award-winning
					boutique brand, web, and iOS studio.
				</li>
				<li>
					Worked cross-functionally with marketing and design team on client deliverables for
					branding, web, print, and environmental design.
				</li>
			</ul>
		</div>
	</section>

	<section>
		<h2>Education</h2>
		<div class="role">
			<div class="role-head">
				<div>
					<span class="role-title">Coursework in CAD, Adobe Photoshop, and Printing</span> —
					<span class="role-company">Fresno City College</span>
				</div>
				<div class="role-dates">1993 – 2024</div>
			</div>
		</div>
	</section>

	<section>
		<h2>Tools &amp; Platforms</h2>
		<div class="tools-grid">
			{#each tools as tool}
				<div><strong>{tool.label}:</strong> {tool.items}</div>
			{/each}
		</div>
	</section>
</div>

<style>
	:root {
		--ink: #1f2a37;
		--muted: #5b6775;
		--accent: #0f3d5c;
		--rule: #d7dde3;
		--paper: #ffffff;
	}

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		background: #eceef1;
		color: var(--ink);
		font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
		font-size: 10.5pt;
		line-height: 1.45;
	}

	* {
		box-sizing: border-box;
	}

	.page {
		max-width: 8.5in;
		margin: 0.5in auto;
		padding: 0.55in 0.6in;
		background: var(--paper);
		box-shadow: 0 2px 14px rgba(0, 0, 0, 0.08);
	}

	.resume-header {
		border-bottom: 2px solid var(--accent);
		padding-bottom: 12px;
		margin-bottom: 18px;
	}

	.name {
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 28pt;
		font-weight: 600;
		letter-spacing: 0.5px;
		color: var(--accent);
		margin: 0 0 4px 0;
	}

	.title-line {
		font-size: 11pt;
		color: var(--muted);
		letter-spacing: 1.5px;
		text-transform: uppercase;
		margin-bottom: 8px;
	}

	.contact {
		font-size: 9.5pt;
		color: var(--ink);
	}

	.contact a {
		color: var(--ink);
		text-decoration: none;
		border-bottom: 1px dotted var(--muted);
	}

	.contact .sep {
		color: var(--rule);
		margin: 0 8px;
	}

	h2 {
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 12.5pt;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 2px;
		margin: 16px 0 8px 0;
		padding-bottom: 4px;
		border-bottom: 1px solid var(--rule);
	}

	p {
		margin: 4px 0 8px 0;
	}

	ul {
		margin: 4px 0 8px 0;
		padding-left: 18px;
	}

	li {
		margin-bottom: 3px;
	}

	.summary {
		font-size: 10.5pt;
		line-height: 1.5;
	}

	.competencies {
		columns: 2;
		column-gap: 24px;
		margin: 0;
		padding-left: 18px;
	}

	.competencies li {
		break-inside: avoid;
		margin-bottom: 2px;
	}

	.role {
		margin-bottom: 12px;
	}

	.role-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 12px;
	}

	.role-title {
		font-weight: 600;
		color: var(--ink);
		font-size: 10.8pt;
	}

	.role-company {
		color: var(--accent);
		font-weight: 600;
	}

	.role-dates {
		color: var(--muted);
		font-size: 9.5pt;
		white-space: nowrap;
	}

	.role-meta {
		color: var(--muted);
		font-size: 9.5pt;
		margin: 1px 0 4px 0;
	}

	.bitwise-timeline {
		margin: 8px 0 0 10px;
		padding-left: 14px;
		border-left: 2px solid var(--accent);
	}

	.sub-role {
		position: relative;
		margin: 0 0 10px 0;
	}

	.sub-role:last-child {
		margin-bottom: 2px;
	}

	.sub-role::before {
		content: '';
		position: absolute;
		left: -19px;
		top: 6px;
		width: 8px;
		height: 8px;
		background: var(--accent);
		border-radius: 50%;
	}

	.sub-role-title {
		font-weight: 600;
		font-size: 10pt;
		color: var(--ink);
	}

	.sub-role-title .years {
		color: var(--accent);
		font-family: Georgia, 'Times New Roman', serif;
		margin-right: 6px;
	}

	.progression {
		color: var(--muted);
		font-size: 9.5pt;
		font-style: italic;
		margin: 4px 0 2px 0;
	}

	.tools-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4px 20px;
		font-size: 10pt;
	}

	.tools-grid div :global(strong) {
		color: var(--accent);
	}

	@media print {
		:global(body) {
			background: #fff;
			font-size: 9.8pt;
		}
		.page {
			margin: 0;
			box-shadow: none;
			padding: 0.4in 0.5in;
			max-width: 100%;
		}
		h2 {
			margin-top: 12px;
		}
		.role {
			margin-bottom: 9px;
		}
	}

	@page {
		size: letter;
		margin: 0.4in;
	}
</style>
