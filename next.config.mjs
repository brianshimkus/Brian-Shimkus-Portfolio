/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => [
		// Case study redirects (LinkedIn)
		{
			source: '/pod-case-study',
			destination: '/case-studies/pod-recovery-assistant?utm_source=linkedin&utm_medium=organic_social&utm_campaign=pod_recovery_build_in_public&utm_content=case_study_comment',
			permanent: false,
		},
		{
			source: '/employee-access-case-study',
			destination: '/case-studies/employee-access-lifecycle?utm_source=linkedin&utm_medium=organic_social&utm_campaign=employee_access_build_in_public&utm_content=case_study_comment',
			permanent: false,
		},
		{
			source: '/salesforce-case-study',
			destination: '/case-studies/salesforce-intelligence?utm_source=linkedin&utm_medium=organic_social&utm_campaign=salesforce_intelligence_social&utm_content=case_study_comment',
			permanent: false,
		},
		// GitHub repo redirects
		{
			source: '/pod-github',
			destination: 'https://github.com/brianshimkus/Freight-POD-Recovery?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=pod_recovery',
			permanent: false,
		},
		{
			source: '/employee-access-github',
			destination: 'https://github.com/brianshimkus/Employee-Access-Lifecycle-Assistant?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=employee_access',
			permanent: false,
		},
		{
			source: '/salesforce-github',
			destination: 'https://github.com/brianshimkus/Insolla-Salesforce-RAG?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=salesforce_intelligence',
			permanent: false,
		},
		// Live demo redirects
		{
			source: '/salesforce-demo',
			destination: 'https://rag.insolla.ai?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=salesforce_intelligence',
			permanent: false,
		},
		// Insolla tools redirects
		{
			source: '/workflow-analyzer',
			destination: 'https://www.insolla.ai/workflow-analyzer?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=insolla_tools',
			permanent: false,
		},
		{
			source: '/list-enricher',
			destination: 'https://www.insolla.ai/products/list-enricher?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=insolla_tools',
			permanent: false,
		},
		{
			source: '/sop-generator',
			destination: 'https://www.insolla.ai/products/sop-generator?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=insolla_tools',
			permanent: false,
		},
		{
			source: '/meeting-notes-analyzer',
			destination: 'https://www.insolla.ai/products/meeting-notes?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=insolla_tools',
			permanent: false,
		},
		{
			source: '/contract-analyzer',
			destination: 'https://www.insolla.ai/products/contract-analyzer?utm_source=brianshimkus&utm_medium=portfolio&utm_campaign=insolla_tools',
			permanent: false,
		},
		// Resume page (with OG preview) - no redirect needed, it's a real page now
		// Direct PDF downloads redirect with UTM params
		{
			source: '/resume-pdf',
			destination: '/Resume-BrianShimkus-SolutionsEngineer.pdf',
			permanent: false,
		},
		{
			source: '/resume-linkedin',
			destination: '/resume?utm_source=linkedin&utm_medium=organic_social&utm_campaign=resume_profile&utm_content=profile_link',
			permanent: false,
		},
		// Solutions Engineering positioning post redirects
		{
			source: '/solutions-engineering-resume',
			destination: '/resume?utm_source=linkedin&utm_medium=organic_social&utm_campaign=solutions_engineering_positioning&utm_content=resume_comment',
			permanent: false,
		},
		{
			source: '/solutions-engineering-portfolio',
			destination: '/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=solutions_engineering_positioning&utm_content=portfolio_comment',
			permanent: false,
		},
		// Build-in-public project post redirects
		{
			source: '/pod-recovery-resume',
			destination: '/resume?utm_source=linkedin&utm_medium=organic_social&utm_campaign=pod_recovery_build_in_public&utm_content=resume_comment',
			permanent: false,
		},
		{
			source: '/employee-access-resume',
			destination: '/resume?utm_source=linkedin&utm_medium=organic_social&utm_campaign=employee_access_build_in_public&utm_content=resume_comment',
			permanent: false,
		},
		{
			source: '/salesforce-resume',
			destination: '/resume?utm_source=linkedin&utm_medium=organic_social&utm_campaign=salesforce_intelligence_social&utm_content=resume_comment',
			permanent: false,
		},
		// Open to work / hiring outreach redirects
		{
			source: '/hiring-resume',
			destination: '/resume?utm_source=linkedin&utm_medium=organic_social&utm_campaign=open_to_work&utm_content=hiring_post',
			permanent: false,
		},
		{
			source: '/hiring-portfolio',
			destination: '/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=open_to_work&utm_content=hiring_post',
			permanent: false,
		},
		{
			source: '/hiring-demo',
			destination: 'https://rag.insolla.ai?utm_source=linkedin&utm_medium=organic_social&utm_campaign=open_to_work&utm_content=hiring_post',
			permanent: false,
		},
		// LinkedIn profile featured section
		{
			source: '/linkedin-featured',
			destination: '/resume?utm_source=linkedin&utm_medium=profile&utm_campaign=featured_resume&utm_content=profile_section',
			permanent: false,
		},
	],
};

export default nextConfig;
