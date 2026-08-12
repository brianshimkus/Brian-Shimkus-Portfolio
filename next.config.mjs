/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => [
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
	],
};

export default nextConfig;
